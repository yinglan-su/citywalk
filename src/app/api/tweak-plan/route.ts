import { NextRequest, NextResponse } from "next/server";
import { tweakTravelPlan } from "@/lib/gemini";
import { TravelPlan } from "@/types/itinerary";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, instruction } = body as {
      plan?: TravelPlan;
      instruction?: string;
    };

    if (!plan || !plan.days || !instruction || !instruction.trim()) {
      return NextResponse.json(
        { success: false, error: "缺少原行程数据或修改指令" },
        { status: 400 }
      );
    }

    const updatedPlan = await tweakTravelPlan(plan, instruction.trim());

    return NextResponse.json({
      success: true,
      plan: updatedPlan,
    });
  } catch (err: any) {
    console.error("Failed to tweak travel plan:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "行程微调失败，请稍后重试",
      },
      { status: 500 }
    );
  }
}
