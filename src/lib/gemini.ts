import { GoogleGenAI, Type } from "@google/genai";
import { TravelPlan, WizardConfig } from "@/types/itinerary";

let keyIndex = 0;

export function getNextApiKey(): string {
  const keys = (process.env.GEMINI_API_KEYS ?? "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  if (keys.length === 0) {
    throw new Error("No GEMINI_API_KEYS configured. Please check .env.local");
  }
  const key = keys[keyIndex % keys.length];
  keyIndex = (keyIndex + 1) % keys.length;
  return key;
}

export const FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-3.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-3.8-flash",
  "gemini-3.7-flash",
] as const;

// ---------------------------------------------------------------------------
// Schema definition for Gemini Structured Outputs
// ---------------------------------------------------------------------------
const activityStopSchema = {
  type: Type.OBJECT,
  properties: {
    type: { type: Type.STRING, enum: ["activity"] },
    id: { type: Type.STRING },
    name: { type: Type.STRING },
    category: {
      type: Type.STRING,
      enum: ["culture", "nature", "food", "photo", "leisure", "rest"],
    },
    timeSlot: { type: Type.STRING, description: "e.g. 09:00 - 10:30" },
    durationMinutes: { type: Type.INTEGER },
    coordinates: {
      type: Type.ARRAY,
      items: { type: Type.NUMBER },
      description: "[latitude, longitude] of the attraction",
    },
    dropOffPoint: {
      type: Type.STRING,
      description: "Exact car/taxi drop-off location or navigation landmark",
    },
    openingHours: { type: Type.STRING },
    reservationRequired: { type: Type.BOOLEAN },
    reservationChannel: {
      type: Type.STRING,
      description: "Channel name (e.g. 微信公众号/小程序) and lead days (提前X天)",
    },
    photoTip: { type: Type.STRING, description: "Photography angle, lighting or spot advice" },
    elderKidNotes: {
      type: Type.STRING,
      description: "Accessibility, walking slope, elevator or stroller suitability",
    },
    description: { type: Type.STRING },
  },
  required: [
    "type",
    "id",
    "name",
    "category",
    "timeSlot",
    "durationMinutes",
    "coordinates",
    "dropOffPoint",
    "openingHours",
    "reservationRequired",
    "description",
  ],
};

const transitConnectorSchema = {
  type: Type.OBJECT,
  properties: {
    type: { type: Type.STRING, enum: ["transit"] },
    fromStop: {
      type: Type.STRING,
      description: "Human-readable departure spot name, e.g. 厦门康莱德酒店 (NEVER use internal id slugs like xm_d1_hotel)",
    },
    toStop: {
      type: Type.STRING,
      description: "Human-readable arrival spot name, e.g. 堂宴·老厦门私房菜 (NEVER use internal id slugs like xm_d1_lunch)",
    },
    mode: {
      type: Type.STRING,
      enum: ["taxi", "charter", "walk", "metro", "bus", "high_speed_rail"],
    },
    distanceKm: { type: Type.NUMBER },
    estimatedMinutes: { type: Type.INTEGER },
    navigationDetail: {
      type: Type.STRING,
      description: "Navigation details, road instructions, drop-off advice",
    },
  },
  required: [
    "type",
    "fromStop",
    "toStop",
    "mode",
    "distanceKm",
    "estimatedMinutes",
    "navigationDetail",
  ],
};

const diningCardSchema = {
  type: Type.OBJECT,
  properties: {
    mealType: {
      type: Type.STRING,
      enum: ["早餐", "午餐", "晚餐", "夜宵 / 甜品"],
    },
    restaurantName: { type: Type.STRING },
    cuisineStyle: { type: Type.STRING },
    recommendedDishes: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    elderKidSuitability: {
      type: Type.STRING,
      description: "Dietary suitability for elders or children, spice level, seating comfort",
    },
    perPersonBudget: { type: Type.STRING, description: "e.g. ¥60 - ¥100 / 人 or $15 - $25 / person" },
    addressOrDropOff: { type: Type.STRING },
    googleRating: { type: Type.STRING, description: "e.g. 4.6★ (Google Reviews)" },
    googleMapsUrl: { type: Type.STRING, description: "Google Maps direct link or query" },
    dianpingUrl: { type: Type.STRING, description: "Dianping link if in China" },
  },
  required: [
    "mealType",
    "restaurantName",
    "cuisineStyle",
    "recommendedDishes",
    "elderKidSuitability",
    "perPersonBudget",
    "addressOrDropOff",
  ],
};

const dayItinerarySchema = {
  type: Type.OBJECT,
  properties: {
    dayNumber: { type: Type.INTEGER },
    dateOrLabel: { type: Type.STRING, description: "e.g. Day 1 · 抵达延吉 & 延边大学网红墙夜景" },
    theme: { type: Type.STRING },
    paceScore: { type: Type.STRING, enum: ["relaxed", "moderate", "intensive"] },
    mapConfig: {
      type: Type.OBJECT,
      properties: {
        center: {
          type: Type.ARRAY,
          items: { type: Type.NUMBER },
          description: "[latitude, longitude] center for daily mini-map",
        },
        zoom: { type: Type.INTEGER },
      },
      required: ["center", "zoom"],
    },
    hotelRestBlock: {
      type: Type.OBJECT,
      properties: {
        enabled: { type: Type.BOOLEAN },
        recommendedTime: { type: Type.STRING },
        reason: { type: Type.STRING },
      },
      required: ["enabled", "recommendedTime", "reason"],
    },
    timeline: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          activity: activityStopSchema,
          transit: transitConnectorSchema,
        },
      },
      description: "Sequential list of activities and transit connector steps",
    },
    meals: {
      type: Type.OBJECT,
      properties: {
        lunch: diningCardSchema,
        dinner: diningCardSchema,
        supperOrSnack: diningCardSchema,
      },
    },
    dailyTips: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
  },
  required: ["dayNumber", "dateOrLabel", "theme", "paceScore", "mapConfig", "meals", "dailyTips"],
};

export const travelPlanSchema = {
  type: Type.OBJECT,
  properties: {
    meta: {
      type: Type.OBJECT,
      properties: {
        tripTitle: { type: Type.STRING },
        destinations: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        durationDays: { type: Type.INTEGER },
        travelerProfile: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        budgetTier: {
          type: Type.STRING,
          enum: ["budget", "comfort", "luxury"],
        },
        transportMode: {
          type: Type.STRING,
          enum: ["charter_taxi", "public_transit", "driving"],
        },
      },
      required: [
        "tripTitle",
        "destinations",
        "durationDays",
        "travelerProfile",
        "budgetTier",
        "transportMode",
      ],
    },
    overview: {
      type: Type.OBJECT,
      properties: {
        highlights: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        logisticsSummary: { type: Type.STRING },
        weatherAndPacking: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
      },
      required: ["highlights", "logisticsSummary", "weatherAndPacking"],
    },
    days: {
      type: Type.ARRAY,
      items: dayItinerarySchema,
    },
    reservationChecklist: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          spotName: { type: Type.STRING },
          daysInAdvance: { type: Type.INTEGER },
          platform: { type: Type.STRING },
          ticketPrice: { type: Type.STRING },
          requiresRealNameId: { type: Type.BOOLEAN },
          bookingTip: { type: Type.STRING },
        },
        required: [
          "spotName",
          "daysInAdvance",
          "platform",
          "ticketPrice",
          "requiresRealNameId",
          "bookingTip",
        ],
      },
    },
    emergencyContacts: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          role: { type: Type.STRING },
          phone: { type: Type.STRING },
          note: { type: Type.STRING },
        },
        required: ["role", "phone", "note"],
      },
    },
  },
  required: ["meta", "overview", "days", "reservationChecklist", "emergencyContacts"],
};

// ---------------------------------------------------------------------------
// System Prompt Builder
// ---------------------------------------------------------------------------
function buildSystemPrompt(config: WizardConfig): string {
  const companionsStr = config.companions.join(", ");
  const isElderly = config.companions.includes("elders");
  const isToddler = config.companions.includes("kids");
  const isLowMobility = config.mobility === "low";

  return `You are a world-class travel route planner specializing in highly practical, realistic, and friction-free itineraries.
You NEVER output superficial, generic advice like "visit museum, then walk in park".
Every recommendation must be executable on the ground with zero guesswork.

CRITICAL PLANNING RULES:
1. DROP-OFF & NAVIGATION ACCURACY:
   - For every single attraction, provide the EXACT taxi/car drop-off point (e.g. "南门地下落客区", "北门游客服务中心摆渡车站", "景区东侧地面停车场落客通道").
   - NEVER tell travelers to just "arrive at the scenic spot".

2. TRANSIT CONNECTORS:
   - Between consecutive stops, ALWAYS insert a transit connector specifying mode, exact distance in km, driving/transit minutes, and specific boarding/alighting instructions.
   - fromStop and toStop MUST be clean, human-readable spot names (e.g. "厦门康莱德酒店", "堂宴·老厦门私房菜"), NEVER internal ID slugs or placeholders like "xm_d1_hotel" or "xm_d1_lunch".

3. ADVANCE RESERVATION ACCURACY:
   - In China and popular Asian cities, popular museums (e.g. 延吉博物馆, 青岛啤酒博物馆, 故宫), universities (e.g. 延边大学), and monuments require real-name booking on WeChat mini-programs.
   - For every such attraction, specify: reservationRequired=true, exact platform/WeChat channel, lead days needed (e.g. 提前3天/提前7天), and whether real-name ID card is required.

4. COMPANION & MOBILITY SENSITIVITY:
   ${isElderly ? "- ELDERLY TRAVELERS (65+) ARE PRESENT: Daily walking must be gentle. Avoid long staircases. MANDATORY 1.5-2h midday hotel break (13:30-15:30) for rest. All dining must provide warm, non-spicy, mild digestive options." : ""}
   ${isToddler ? "- TODDLERS / STROLLERS PRESENT: Ensure flat terrain, nursing room availability, stroller accessible paths." : ""}
   ${isLowMobility ? "- LOW MOBILITY (<5,000 steps/day): Pick door-to-door car transit, flat boardwalks, elevator-equipped venues." : ""}

5. GASTRONOMY / DINING:
   - Provide real, well-regarded restaurants with signature dishes to order, per-person budget in RMB, and specific dietary suitability notes for elders/kids.

6. ACCURATE MAP COORDINATES:
   - For every attraction and daily center, provide realistic [latitude, longitude] in WGS84/GCJ02 decimal format suitable for Leaflet/AMap rendering.

7. PRECISE VENUE CLOSURE CALIBRATION (DO NOT BLANKET-ASSUME EVERYTHING CLOSES ON MONDAYS):
   - Travelers frequently encounter unexpected closures when schedules are planned naively.
   - You MUST account for the ACTUAL closure schedule of each specific venue in the destination:
     * While many public/municipal museums (e.g. 延吉博物馆, 青岛啤酒博物馆1号馆, 故宫) close on Mondays, OUTDOOR SCENIC SPOTS, nature reserves (e.g. 帽儿山, 崂山太清), coastal boardwalks, temples, historic neighborhoods, and commercial food markets (e.g. 延吉水上市场, 栈桥) remain open 7 days a week.
     * DO NOT halt travels or assume all activities close on Mondays. Instead, strategically schedule outdoor viewpoints, nature hikes, culinary markets, and open-air walking tours on days when museums are closed, and place museum visits strictly on their verified open days.
     * If a venue has specific maintenance days (e.g. Tuesday or midday disinfection), adjust accordingly.
${(() => {
  if (config.startDate) {
    const start = new Date(config.startDate);
    const isEn = config.locale === "en";
    const weekdaysZh = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const weekdaysEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const scheduleLines: string[] = [];
    for (let i = 0; i < config.durationDays; i++) {
      const cur = new Date(start);
      cur.setDate(start.getDate() + i);
      const ymStr = isEn ? `${monthsEn[cur.getMonth()]} ${cur.getDate()}` : `${cur.getMonth() + 1}月${cur.getDate()}日`;
      const wkStr = isEn ? weekdaysEn[cur.getDay()] : weekdaysZh[cur.getDay()];
      scheduleLines.push(`   * Day ${i + 1}: ${ymStr} (${wkStr}) [Check actual operating schedule for all visited spots: place museums only on open days; schedule nature/market/scenic walks if any specific museum is closed]`);
    }
    const exampleLabel = isEn ? "Day 1 · Oct 01 (Thu) · Arrival & Scenic Stroll" : "Day 1 · 10月01日 (周四) · 抵达延吉";
    return `   EXACT TRIP SCHEDULE:\n${scheduleLines.join("\n")}\n   You MUST reflect these exact dates and weekdays in each day.dateOrLabel (e.g. "${exampleLabel}").`;
  }
  return "   - Check if attractions are public museums/monuments. Verify actual opening days and schedule museum visits on days they are confirmed open.";
})()}

8. TRIP FOCUS EMPHASIS:
${config.interests.includes("foodie") ? "   - FOODIE FOCUS: Heavily prioritize iconic regional gastronomy, authentic breakfast markets, famous local eateries, signature dish ordering guides, and street-food walks." : ""}
${config.interests.includes("culture") ? "   - CULTURE FOCUS: Highlight historical heritage, architectural landmarks, museum treasures, folk customs, and in-depth cultural context." : ""}
${config.interests.includes("nature") ? "   - NATURE FOCUS: Emphasize coastal views, mountain panoramas, botanical gardens, fresh air retreats, and leisurely landscape walks." : ""}

9. MULTI-LANGUAGE & REVIEW ECOSYSTEM:
${config.locale === "en" ? `   - LANGUAGE REQUIREMENT: The user requests ENGLISH output (locale=en). All titles, descriptions, themes, drop-off landmarks, dietary notes, dishes, and tips MUST be written in natural, fluent English. For non-English spots (e.g. Kyoto, Paris, Qingdao, Yanji), include romanized/local names alongside English explanations.
   - REVIEWS & RATINGS: For all dining spots, provide estimated Google Review ratings (e.g. "4.6★ (Google Reviews)") and note local dining etiquette.` : `   - LANGUAGE REQUIREMENT: Output in Simplified Chinese (zh-CN).
   - REVIEWS & RATINGS: For destinations outside mainland China, provide Google Reviews ratings & advice alongside local food recommendations.`}

TARGET TRIP SPECIFICATIONS:
- Destinations: ${config.destinations}
- Duration: ${config.durationDays} Days
- Language / Locale: ${config.locale || "zh"}
${config.startDate ? `- Departure Date: ${config.startDate}` : ""}
${config.endDate ? `- Return Date: ${config.endDate}` : ""}
- Mobility: ${config.mobility} (${isLowMobility ? "<5000 steps, taxi-friendly, no stairs" : config.mobility === "moderate" ? "8000-12000 steps" : "15000+ steps trekker"})
- Companions: ${companionsStr}
- Budget Tier: ${config.budgetTier}
- Trip Focus / Interests: ${config.interests.join(", ")}
- Transportation: ${config.transportMode}
${config.customNotes ? `- Custom User Notes / Wishlist: "${config.customNotes}"` : ""}

Generate the complete travel plan adhering strictly to the JSON schema.`;
}


function resolveStopId(stop: string, timeline?: any[], allDays?: any[]): string {
  if (!stop) return "";
  if (!/^[a-z]{2}_d\d+/.test(stop)) {
    return stop;
  }
  if (timeline) {
    const act = timeline.find((t) => t.type === "activity" && t.id === stop);
    if (act?.name) return act.name.split(" · ")[0].trim();
  }
  if (allDays) {
    for (const d of allDays) {
      const act = (d.timeline || []).find((t: any) => t.type === "activity" && t.id === stop);
      if (act?.name) return act.name.split(" · ")[0].trim();
    }
  }
  if (stop.includes("hotel") || stop.includes("rest")) {
    if (allDays && allDays.length > 0) {
      const hotelAct = (allDays[0].timeline || []).find(
        (t: any) => t.type === "activity" && (t.id?.includes("hotel") || t.category === "rest")
      );
      if (hotelAct?.name) return hotelAct.name.split(" · ")[0].trim();
    }
    return "酒店";
  }
  return stop;
}

// Helper to normalize timeline format (convert {activity: ...} or {transit: ...} to flat items)
function normalizeDays(days: any[]): any[] {
  const normalized = (days || []).map((day: any) => {
    const flatTimeline: any[] = [];
    if (Array.isArray(day.timeline)) {
      for (const item of day.timeline) {
        if (item.activity) flatTimeline.push(item.activity);
        else if (item.transit) flatTimeline.push(item.transit);
        else if (item.type) flatTimeline.push(item);
      }
    }
    return {
      ...day,
      timeline: flatTimeline,
    };
  });

  for (const day of normalized) {
    for (const item of day.timeline) {
      if (item.type === "transit") {
        if (item.fromStop) item.fromStop = resolveStopId(item.fromStop, day.timeline, normalized);
        if (item.toStop) item.toStop = resolveStopId(item.toStop, day.timeline, normalized);
      }
    }
  }

  return normalized;
}

// ---------------------------------------------------------------------------
// Generate Plan with Model Fallback
// ---------------------------------------------------------------------------
export async function generateTravelPlan(config: WizardConfig): Promise<TravelPlan> {
  const systemPrompt = buildSystemPrompt(config);
  const userPrompt = `Please plan an in-depth, actionable, and seamless ${config.durationDays}-day itinerary for ${config.destinations}.`;

  let lastError: unknown = null;
  let rawText = "";

  for (const model of FALLBACK_MODELS) {
    try {
      const apiKey = getNextApiKey();
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model,
        contents: [
          { role: "user", parts: [{ text: userPrompt }] }
        ],
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseJsonSchema: travelPlanSchema,
        },
      });

      rawText = response.text ?? "";
      if (rawText) {
        lastError = null;
        break;
      }
    } catch (err) {
      console.warn(`Model ${model} failed, trying next fallback:`, err);
      lastError = err;
      continue;
    }
  }

  if (lastError && !rawText) {
    throw lastError;
  }

  // Parse structured JSON
  const rawObj = JSON.parse(rawText);
  const normalizedDays = normalizeDays(rawObj.days);

  const travelPlan: TravelPlan = {
    id: `trip_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    meta: {
      ...rawObj.meta,
      generatedAt: new Date().toISOString(),
      viewsCount: 1,
      likesCount: 0,
    },
    overview: rawObj.overview,
    days: normalizedDays,
    reservationChecklist: rawObj.reservationChecklist || [],
    emergencyContacts: rawObj.emergencyContacts || [],
  };

  return travelPlan;
}

function parseTargetDay(instruction: string, activeDayIndex?: number, totalDays = 1): number | null {
  const isGlobal = /整体|全部|所有天|整趟|每天|对调|交换|调换|增加.*天|删.*天|延长|缩短/i.test(instruction);
  if (isGlobal) return null;

  const matchNum = instruction.match(/(?:第\s*(\d+)\s*天|Day\s*(\d+))/i);
  if (matchNum) {
    const idx = parseInt(matchNum[1] || matchNum[2], 10) - 1;
    if (idx >= 0 && idx < totalDays) return idx;
  }
  const zhMap: Record<string, number> = { "一": 0, "二": 1, "三": 2, "四": 3, "五": 4, "六": 5, "七": 6 };
  const matchZh = instruction.match(/第\s*([一二三四五六七])\s*天/);
  if (matchZh) {
    const idx = zhMap[matchZh[1]];
    if (idx !== undefined && idx < totalDays) return idx;
  }
  if (activeDayIndex !== undefined && activeDayIndex >= 0 && activeDayIndex < totalDays) {
    const isDaySpecific = /今日|今天|当前|这天|避开台阶|换为清淡|午休|茶歇|替换|换|附近|同商圈|同区域|微调|午餐|晚餐|景点|餐厅|特色/i.test(instruction);
    if (isDaySpecific) {
      return activeDayIndex;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Tweak Existing Plan with Incremental Instruction
// ---------------------------------------------------------------------------
export async function tweakTravelPlan(
  existingPlan: TravelPlan,
  instruction: string,
  activeDayIndex?: number
): Promise<TravelPlan> {
  const targetDayIndex = parseTargetDay(instruction, activeDayIndex, existingPlan.days.length);

  // Fast single-day tweak when targeting a specific day (sub-5s latency & 100% preservation of other days)
  if (targetDayIndex !== null && existingPlan.days[targetDayIndex]) {
    try {
      const targetDay = existingPlan.days[targetDayIndex];
      const singleDaySystemPrompt = `You are a world-class travel route editor and concierge.
You are modifying Day ${targetDay.dayNumber} of a travel itinerary for ${existingPlan.meta?.destinations?.join(", ") || "the trip"}.

CRITICAL EDITING RULES:
1. PRESERVATION FIRST:
   - Keep all unaffected activities, coordinates, drop-off landmarks, and dining choices unchanged.
2. FOCUSED EXECUTION:
   - Apply the user's modifications precisely (e.g. swapping a spot, replacing a meal, adding a rest block, adjusting pacing).
   - If a stop is removed or added, update the transit connectors before and after it with realistic transit mode, duration, distance, and boarding advice.
   - fromStop and toStop MUST be clean, human-readable destination spot names (e.g. "厦门康莱德酒店", "堂宴·老厦门私房菜"), NEVER internal ID slugs or placeholders like "xm_d1_hotel".
3. FORMAT:
   - Return the complete, updated DayItinerary adhering strictly to the JSON schema.`;

      const singleDayUserPrompt = `Here is the current Day ${targetDay.dayNumber} itinerary JSON:
${JSON.stringify(targetDay)}

USER MODIFICATION REQUEST:
"${instruction}"

Please return the updated Day ${targetDay.dayNumber} JSON adhering to the schema.`;

      let rawDayText = "";
      for (const model of FALLBACK_MODELS) {
        try {
          const apiKey = getNextApiKey();
          const ai = new GoogleGenAI({ apiKey });

          const response = await ai.models.generateContent({
            model,
            contents: [{ role: "user", parts: [{ text: singleDayUserPrompt }] }],
            config: {
              systemInstruction: singleDaySystemPrompt,
              responseMimeType: "application/json",
              responseJsonSchema: dayItinerarySchema,
            },
          });

          rawDayText = response.text ?? "";
          if (rawDayText) break;
        } catch (err) {
          console.warn(`Single-day tweak with model ${model} failed, trying next fallback:`, err);
          continue;
        }
      }

      if (rawDayText) {
        const rawDayObj = JSON.parse(rawDayText);
        const normalizedDay = normalizeDays([rawDayObj])[0];
        const updatedDays = [...existingPlan.days];
        updatedDays[targetDayIndex] = {
          ...targetDay,
          ...normalizedDay,
          dayNumber: targetDay.dayNumber,
        };

        return {
          ...existingPlan,
          days: updatedDays,
        };
      }
    } catch (err) {
      console.warn("Single-day tweak failed, falling back to full-plan tweak:", err);
    }
  }

  // Full-plan tweak (global instructions or multi-day restructuring)
  const systemPrompt = `You are a world-class travel route editor and concierge.
You are given an existing high-precision travel plan in JSON format, and a specific user modification request.

USER MODIFICATION REQUEST:
"${instruction}"

CRITICAL EDITING RULES:
1. PRESERVATION FIRST:
   - Do NOT regenerate the whole trip from scratch.
   - Preserve all unaffected days, attractions, coordinates, drop-off landmarks, and dining choices exactly as they are.
2. FOCUSED EXECUTION:
   - Apply the user's modifications precisely (e.g. replacing a meal, removing a strenuous stop, adding a cafe walk, shortening/reordering an activity).
   - If a stop is removed or added, smoothly update the transit connectors before and after it, and ensure coordinates are accurate.
   - fromStop and toStop MUST be clean, human-readable spot names (e.g. "厦门康莱德酒店", "堂宴·老厦门私房菜"), NEVER internal ID slugs or placeholders like "xm_d1_hotel".
   - Ensure elderly/kid/mobility constraints and reservation checklist remain consistent with the new plan.
3. FORMAT:
   - Return the complete, updated TravelPlan adhering strictly to the JSON schema.`;

  const userPrompt = `Here is the current TravelPlan JSON to modify:
${JSON.stringify(existingPlan)}

Please apply this instruction: "${instruction}" and return the updated TravelPlan JSON.`;

  let lastError: unknown = null;
  let rawText = "";

  for (const model of FALLBACK_MODELS) {
    try {
      const apiKey = getNextApiKey();
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model,
        contents: [
          { role: "user", parts: [{ text: userPrompt }] }
        ],
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseJsonSchema: travelPlanSchema,
        },
      });

      rawText = response.text ?? "";
      if (rawText) {
        lastError = null;
        break;
      }
    } catch (err) {
      console.warn(`Model ${model} failed tweaking, trying next fallback:`, err);
      lastError = err;
      continue;
    }
  }

  if (lastError && !rawText) {
    throw lastError;
  }

  const rawObj = JSON.parse(rawText);
  const normalizedDays = normalizeDays(rawObj.days || existingPlan.days);

  const updatedPlan: TravelPlan = {
    ...existingPlan,
    meta: {
      ...existingPlan.meta,
      tripTitle: rawObj.meta?.tripTitle || existingPlan.meta.tripTitle,
    },
    overview: rawObj.overview || existingPlan.overview,
    days: normalizedDays,
    reservationChecklist: rawObj.reservationChecklist || existingPlan.reservationChecklist,
    emergencyContacts: rawObj.emergencyContacts || existingPlan.emergencyContacts,
  };

  return updatedPlan;
}
