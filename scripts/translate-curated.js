const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");

const env = fs.readFileSync(".env.local", "utf8");
const keys = env
  .split("\n")
  .find((l) => l.startsWith("GEMINI_API_KEYS="))
  .split("=")[1]
  .split(",")
  .map((k) => k.trim().replace(/['"]/g, ""))
  .filter(Boolean);

console.log(`Loaded ${keys.length} Gemini API keys.`);

const plans = JSON.parse(fs.readFileSync("scratch_curated.json", "utf8"));
console.log(`Loaded ${plans.length} curated plans to translate.`);

let outPath = "scratch_curated_en.json";
let results = {};
if (fs.existsSync(outPath)) {
  try {
    results = JSON.parse(fs.readFileSync(outPath, "utf8"));
    console.log(`Loaded ${Object.keys(results).length} already translated plans from cache.`);
  } catch (e) {}
}

async function translatePlan(plan, keyIdx) {
  const apiKey = keys[keyIdx % keys.length];
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `You are a professional luxury slow-travel writer and bilingual travel designer. Translate this entire travel plan JSON from Chinese into natural, elegant, fluent English.

CRITICAL RULES:
1. Preserve all JSON structure, field names/keys, IDs, numbers, booleans, URLs, and coordinates [lat, lng] arrays EXACTLY unchanged.
2. Translate all user-facing Chinese text into English:
   - meta.tripTitle: Natural English title
   - meta.destinations: Array of English city names (e.g. ["Kyoto"], ["Beijing"])
   - meta.travelerProfile: Array of English tags (e.g. ["Senior Friendly", "Private Charter", "Authentic Cuisine"])
   - overview.highlights: Array of English highlight strings
   - overview.logisticsSummary: Fluent English logistics guide
   - overview.weatherAndPacking: Array of English packing advice
   - days[].dateOrLabel: (e.g. "Day 1 · Arrival & Hampton Rest & Grandma Yuan Boiled Pork")
   - days[].theme: Clear English day theme
   - days[].hotelRestBlock.reason: English reason
   - timeline[].name: Attraction/activity name in natural English
   - timeline[].dropOffPoint: English drop-off instructions
   - timeline[].openingHours: English hours
   - timeline[].description: Natural English description
   - timeline[].photoAdvice: English photography tips
   - timeline[].reservationChannel: English channel name & booking tip
   - timeline[].transitToNext.instructions: English transit instructions
   - timeline[].alternativeSpots[].name & reason: English
   - meals.lunch & meals.dinner:
     - restaurantName: Romanized / English name with short English descriptor
     - cuisineStyle: English cuisine style
     - recommendedDishes: Array of English dish names
     - elderKidSuitability: English dietary & seating advice
     - perPersonBudget: English budget string
     - addressOrDropOff: English address & drop-off
     - alternatives[].restaurantName, cuisineStyle, reason: English
   - days[].dailyTips: Array of English tips
   - reservationChecklist[].spotName, platform, bookingTip: English
   - emergencyContacts[].role, note: English

3. Return STRICTLY valid JSON. Output NO markdown fences (\`\`\`json), NO markdown commentary.

JSON to translate:
` + JSON.stringify(plan);

  console.log(`Starting translation for ${plan.id} (${plan.meta.tripTitle})...`);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const text = response.text.trim();
      const parsed = JSON.parse(text);
      if (parsed && parsed.meta && parsed.days && parsed.days.length > 0) {
        console.log(`✓ Successfully translated ${plan.id}: ${parsed.meta.tripTitle}`);
        return parsed;
      }
      throw new Error("Invalid parsed structure");
    } catch (err) {
      console.warn(`[Attempt ${attempt}/3] ${plan.id} failed with key ${keyIdx}: ${err.message}`);
      keyIdx = (keyIdx + 1) % keys.length;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }

  throw new Error(`Failed to translate ${plan.id} after 3 attempts`);
}

async function run() {
  const queue = [...plans];
  const translatedList = [];

  // Concurrency of 2 to be safe with rate limits
  const concurrency = 2;
  let activeIndex = 0;

  async function worker(workerId) {
    while (activeIndex < queue.length) {
      const idx = activeIndex++;
      const plan = queue[idx];

      if (results[plan.id]) {
        console.log(`Skipping already translated: ${plan.id}`);
        translatedList.push(results[plan.id]);
        continue;
      }

      try {
        const translated = await translatePlan(plan, idx + workerId);
        results[plan.id] = translated;
        translatedList.push(translated);
        fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf8");
      } catch (e) {
        console.error(`Failed ${plan.id}:`, e.message);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, (_, i) => worker(i));
  await Promise.all(workers);

  // Order according to original plans
  const finalOrdered = plans.map((p) => results[p.id] || p);

  // Generate src/data/curated-plans-en.ts
  const tsContent = `// AUTO-GENERATED ENGLISH CURATED PLANS
import { TravelPlan } from "@/types/itinerary";

export const CURATED_PLANS_EN: TravelPlan[] = ${JSON.stringify(finalOrdered, null, 2)};
`;

  fs.writeFileSync("src/data/curated-plans-en.ts", tsContent, "utf8");
  console.log(`Finished! Generated src/data/curated-plans-en.ts with ${finalOrdered.length} plans.`);
}

run().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
