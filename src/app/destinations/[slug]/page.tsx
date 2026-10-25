import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DESTINATION_DIRECTORY,
  getDestinationMetaBySlug,
  getDestinationPlanBySlug,
} from "@/lib/destination-slugs";
import { DestinationClientView } from "@/components/Destination/DestinationClientView";
import { ActivityStop } from "@/types/itinerary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESTINATION_DIRECTORY.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = getDestinationMetaBySlug(slug);
  if (!meta) {
    return {
      title: "Destination Not Found | 7ka",
    };
  }

  const entryEn = getDestinationPlanBySlug(slug, "en");
  const coverImage = entryEn?.plan.meta.coverImage || "/images/spot_badaguan.jpg";
  const canonicalUrl = `https://7ka.fit/destinations/${meta.slug}`;

  return {
    title: meta.seoTitleEn,
    description: meta.seoDescriptionEn,
    keywords: [
      ...meta.keywords,
      `${meta.cityEn} travel itinerary`,
      `${meta.cityEn} slow travel`,
      `${meta.cityEn} accessible travel guide`,
      `${meta.cityZh}慢行攻略`,
      `${meta.cityZh}无障碍定制`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${meta.seoTitleEn} | 7ka`,
      description: meta.seoDescriptionEn,
      url: canonicalUrl,
      siteName: "7ka",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: meta.seoTitleEn,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.seoTitleEn} | 7ka`,
      description: meta.seoDescriptionEn,
      images: [coverImage],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const entryEn = getDestinationPlanBySlug(slug, "en");
  const entryZh = getDestinationPlanBySlug(slug, "zh");

  if (!entryEn || !entryZh) {
    notFound();
  }

  const { meta, plan: planEn } = entryEn;
  const { plan: planZh } = entryZh;

  // Build rich TouristTrip + BreadcrumbList JSON-LD for Google & AI answer engines (GEO)
  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: meta.seoTitleEn,
    alternateName: meta.seoTitleZh,
    description: meta.seoDescriptionEn,
    url: `https://7ka.fit/destinations/${meta.slug}`,
    image: `https://7ka.fit${planEn.meta.coverImage || "/images/spot_badaguan.jpg"}`,
    touristType: [
      "International Visitors",
      "EU & US Travelers to APAC",
      "Senior Travelers",
      "Multigenerational Families",
      "Slow Travelers",
    ],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: planEn.days.length,
      itemListElement: planEn.days.map((day) => {
        const activityDescriptions = day.timeline
          .filter((t): t is ActivityStop => t.type === "activity")
          .map(
            (t) =>
              `${t.name} (Drop-off: ${t.dropOffPoint}; Accessibility: ${t.elderKidNotes || "Step-free"})`
          );
        if (day.meals?.lunch) {
          activityDescriptions.push(
            `Lunch: ${day.meals.lunch.restaurantName} (${day.meals.lunch.cuisineStyle})`
          );
        }
        if (day.meals?.dinner) {
          activityDescriptions.push(
            `Dinner: ${day.meals.dinner.restaurantName} (${day.meals.dinner.cuisineStyle})`
          );
        }
        return {
          "@type": "ListItem",
          position: day.dayNumber,
          item: {
            "@type": "TouristAttraction",
            name: `Day ${day.dayNumber}: ${day.theme}`,
            description: activityDescriptions.join(" | "),
          },
        };
      }),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "7ka Bespoke Slow Travel",
        item: "https://7ka.fit",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${meta.cityEn} Slow Travel Itinerary`,
        item: `https://7ka.fit/destinations/${meta.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Interactive Client Dashboard */}
      <DestinationClientView
        initialPlanEn={planEn}
        initialPlanZh={planZh}
        planId={meta.planId}
      />

      {/* Server-Rendered SEO & GEO Semantic Knowledge Digest + Internal Destination Links */}
      <aside
        aria-label={`${meta.cityEn} Travel Guide Summary & Curated APAC Directory`}
        className="bg-white border-t border-stone-200/80 py-12 px-4 sm:px-6 text-zinc-600"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-zinc-900">
              {meta.seoTitleEn} · {meta.cityZh}
            </h2>
            <p className="text-xs leading-relaxed text-zinc-500">
              {meta.seoDescriptionEn} {planEn.overview.logisticsSummary}
            </p>
          </div>

          {/* Day-by-Day Semantic Index for Search & AI Crawlers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {planEn.days.map((day) => {
              const stops = day.timeline.filter(
                (t): t is ActivityStop => t.type === "activity"
              );
              return (
                <div
                  key={day.dayNumber}
                  className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/70 space-y-2"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#9E825A]">
                    Day {day.dayNumber}
                  </div>
                  <h3 className="text-xs font-bold text-zinc-900 leading-snug">
                    {day.theme}
                  </h3>
                  <ul className="text-[11px] text-zinc-500 space-y-1">
                    {stops.slice(0, 3).map((stop, idx) => (
                      <li key={idx} className="truncate">
                        • {stop.name} ({stop.dropOffPoint})
                      </li>
                    ))}
                    {day.meals?.dinner && (
                      <li className="truncate">
                        • Dining: {day.meals.dinner.restaurantName}
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Crawl-Friendly Directory of All 12 APAC Gateways */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Explore More APAC Slow Travel Gateways:
            </span>
            <nav className="flex flex-wrap gap-2">
              {DESTINATION_DIRECTORY.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className={`text-xs px-3 py-1 rounded-full border transition ${
                    dest.slug === meta.slug
                      ? "bg-zinc-900 text-white border-zinc-900 font-semibold"
                      : "bg-stone-50 hover:bg-stone-100 text-zinc-600 border-stone-200"
                  }`}
                >
                  {dest.cityEn}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
