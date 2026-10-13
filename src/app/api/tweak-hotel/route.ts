import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";
import { getNextApiKey, FALLBACK_MODELS } from "@/lib/gemini";
import { HotelOption } from "@/types/itinerary";

export const maxDuration = 30;

const hotelOptionsSchema = {
  type: Type.OBJECT,
  properties: {
    hotelOptions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          name: { type: Type.STRING },
          starOrStyle: {
            type: Type.STRING,
            description: "Star rating or aesthetic style e.g. 五星奢华 · 地标双子塔海景 or Boutique Heritage Villa",
          },
          priceRange: {
            type: Type.STRING,
            description: "Price per night e.g. ¥900 - ¥1,500 / 晚 or $140 - $220 / night",
          },
          locationDetail: {
            type: Type.STRING,
            description: "Precise district and neighborhood context for drop-off and walking convenience",
          },
          highlights: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "2-3 concise bullet points highlighting key amenities, views, or accessibility",
          },
          isSelected: { type: Type.BOOLEAN },
        },
        required: ["id", "name", "starOrStyle", "priceRange", "locationDetail", "highlights"],
      },
    },
  },
  required: ["hotelOptions"],
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      destinations = [],
      budgetTier = "comfort",
      travelerProfile = [],
      instruction = "",
      currentHotels = [],
      locale = "zh",
    } = body;

    const destString = Array.isArray(destinations) && destinations.length > 0
      ? destinations.join(", ")
      : "目的地";

    const isEn = locale === "en";

    const systemPrompt = `You are a high-end luxury travel concierge specializing in curated accommodations.
Rules:
1. Provide exactly 3 or 4 REAL, highly-regarded hotels in or near ${destString}.
2. Strictly satisfy the user's customized criteria: "${instruction || "recommend top boutique/comfort stays"}".
3. Avoid repeating these hotels: ${currentHotels.join(", ") || "none"}.
4. Target budget level: ${budgetTier}. Traveler profile: ${travelerProfile.join(", ") || "independent"}.
5. Ensure concise, elegant descriptions adhering to calm luxury standards.
6. Language: Output in ${isEn ? "English" : "Simplified Chinese"}.
7. Set the first hotel's isSelected property to true, and false for others.`;

    const userPrompt = `Please recommend 3-4 top hotels in ${destString} tailored to the request: ${instruction || "Provide 3-4 premium curated hotels with convenient access and great comfort."}`;

    let lastError: unknown = null;
    let rawText = "";

    for (const model of FALLBACK_MODELS) {
      try {
        const apiKey = getNextApiKey();
        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
          model,
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          config: {
            systemInstruction: systemPrompt,
            responseMimeType: "application/json",
            responseJsonSchema: hotelOptionsSchema,
          },
        });

        rawText = response.text ?? "";
        if (rawText) {
          lastError = null;
          break;
        }
      } catch (err) {
        console.warn(`Hotel tweak model ${model} failed, trying next:`, err);
        lastError = err;
        continue;
      }
    }

    if (lastError && !rawText) {
      throw lastError;
    }

    const data = JSON.parse(rawText);
    const hotelOptions: HotelOption[] = (data.hotelOptions || []).map((h: any, idx: number) => ({
      id: h.id || `rec_hotel_${Date.now()}_${idx}`,
      name: h.name,
      starOrStyle: h.starOrStyle,
      priceRange: h.priceRange,
      locationDetail: h.locationDetail,
      highlights: Array.isArray(h.highlights) ? h.highlights : [],
      isSelected: idx === 0,
    }));

    return NextResponse.json({
      success: true,
      hotelOptions,
    });
  } catch (error: any) {
    console.error("Hotel tweak error:", error);
    return NextResponse.json(
      {
        error: error.message || "推荐酒店时遇到问题，请重试",
      },
      { status: 500 }
    );
  }
}
