import { NextRequest, NextResponse } from "next/server";
import { generateTravelPlan } from "@/lib/gemini";
import { WizardConfig } from "@/types/itinerary";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const config: WizardConfig = body.config;

    if (!config || !config.destinations) {
      return NextResponse.json(
        { error: "缺少目的地等必要参数" },
        { status: 400 }
      );
    }

    // Call Gemini with rotation and fallback
    const plan = await generateTravelPlan(config);

    return NextResponse.json({
      success: true,
      plan,
    });
  } catch (error: any) {
    console.error("Travel plan generation error:", error);
    return NextResponse.json(
      {
        error: error.message || "生成行程时遇到问题，请重试",
      },
      { status: 500 }
    );
  }
}
