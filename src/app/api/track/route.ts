import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = (body.slug || "travelplan-saas").trim();

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: true, tracked: false, reason: "Supabase not configured" });
    }

    // Call existing increment_guide_view RPC in Supabase
    const { error: rpcErr } = await supabase.rpc("increment_guide_view", {
      guide_slug: slug,
    });

    if (rpcErr) {
      console.warn("Telemetry RPC warning:", rpcErr.message);
    }

    // Fetch updated view count
    const { data: row } = await supabase
      .from("guide_view_counts")
      .select("view_count")
      .eq("slug", slug)
      .maybeSingle();

    return NextResponse.json({
      success: true,
      tracked: true,
      slug,
      viewCount: row?.view_count ?? null,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug") || "travelplan-saas";

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ viewCount: null });
    }

    const { data: row } = await supabase
      .from("guide_view_counts")
      .select("view_count")
      .eq("slug", slug)
      .maybeSingle();

    return NextResponse.json({
      success: true,
      slug,
      viewCount: row?.view_count ?? 0,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
