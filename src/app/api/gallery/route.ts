import { NextRequest, NextResponse } from "next/server";
import { CURATED_PLANS } from "@/data/curated-plans";
import { getSupabase } from "@/lib/supabase";
import { compressPlan } from "@/lib/storage";
import { GalleryItem, TravelPlan } from "@/types/itinerary";

// In-memory cache for dynamic community trips in current runtime session
const inMemoryCommunityTrips: GalleryItem[] = [];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase().trim() || "";
    const tag = searchParams.get("tag")?.trim() || "";

    // 1. Convert curated plans into gallery items
    const curatedGalleryItems: GalleryItem[] = CURATED_PLANS.map((p) => ({
      id: p.id,
      title: p.meta.tripTitle,
      destination: p.meta.destinations.join(" + "),
      durationDays: p.meta.durationDays,
      tags: p.meta.travelerProfile,
      highlights: p.overview.highlights.slice(0, 3),
      viewsCount: p.meta.viewsCount || 500,
      likesCount: p.meta.likesCount || 30,
      createdAt: p.meta.generatedAt,
      isCurated: true,
      coverImage: p.meta.coverImage,
      rawPlan: p,
    }));

    // 2. Try fetching from Supabase if configured
    let dbGalleryItems: GalleryItem[] = [];
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("community_trips")
          .select("id, title, destination, duration_days, tags, highlights, views_count, likes_count, created_at, compressed_plan")
          .order("created_at", { ascending: false })
          .limit(30);

        if (!error && data) {
          dbGalleryItems = data.map((row: any) => ({
            id: row.id,
            title: row.title,
            destination: row.destination,
            durationDays: row.duration_days,
            tags: row.tags || [],
            highlights: row.highlights || [],
            viewsCount: row.views_count || 1,
            likesCount: row.likes_count || 0,
            createdAt: row.created_at,
            compressedPlan: row.compressed_plan,
            isCurated: false,
          }));
        }
      } catch (err) {
        // Supabase table may not exist yet, fallback to in-memory
        console.warn("Supabase community_trips query skipped:", err);
      }
    }

    // Merge: Curated first, then DB items, then in-memory
    const allItems = [...curatedGalleryItems, ...dbGalleryItems, ...inMemoryCommunityTrips];

    // Filter by search & tag
    const filtered = allItems.filter((item) => {
      const matchSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.destination.toLowerCase().includes(search) ||
        item.tags.some((t) => t.toLowerCase().includes(search));

      const matchTag = !tag || tag === "全部" || item.tags.includes(tag);
      return matchSearch && matchTag;
    });

    return NextResponse.json({
      success: true,
      items: filtered,
    });
  } catch (error: any) {
    console.error("Gallery GET error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const plan: TravelPlan = body.plan;

    if (!plan || !plan.id) {
      return NextResponse.json({ error: "Invalid plan payload" }, { status: 400 });
    }

    const compressed = compressPlan(plan);
    const galleryItem: GalleryItem = {
      id: plan.id,
      title: plan.meta.tripTitle,
      destination: plan.meta.destinations.join(" + "),
      durationDays: plan.meta.durationDays,
      tags: plan.meta.travelerProfile,
      highlights: plan.overview.highlights.slice(0, 3),
      viewsCount: 1,
      likesCount: 0,
      createdAt: new Date().toISOString(),
      compressedPlan: compressed,
      rawPlan: plan,
      isCurated: false,
    };

    // Attempt Supabase insert
    const supabase = getSupabase();
    let savedToSupabase = false;
    if (supabase) {
      try {
        const { error } = await supabase.from("community_trips").upsert({
          id: plan.id,
          title: plan.meta.tripTitle,
          destination: plan.meta.destinations.join(" + "),
          duration_days: plan.meta.durationDays,
          tags: plan.meta.travelerProfile,
          highlights: plan.overview.highlights.slice(0, 3),
          compressed_plan: compressed,
          views_count: 1,
          likes_count: 0,
          created_at: new Date().toISOString(),
        });
        if (!error) savedToSupabase = true;
      } catch (err) {
        console.warn("Supabase insert error (using in-memory fallback):", err);
      }
    }

    // Always keep in in-memory list for immediate local feedback
    inMemoryCommunityTrips.unshift(galleryItem);

    return NextResponse.json({
      success: true,
      savedToSupabase,
      item: galleryItem,
    });
  } catch (error: any) {
    console.error("Gallery POST error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to publish plan" },
      { status: 500 }
    );
  }
}
