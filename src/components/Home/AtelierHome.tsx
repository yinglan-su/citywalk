"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  GitFork,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  ShieldCheck,
  Utensils,
  Footprints,
  Languages,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { getCuratedPlans } from "@/lib/curated-plans-provider";
import { getDestinationSlugByPlanId } from "@/lib/destination-slugs";

interface AtelierHomeProps {
  onSelectPlan: (plan: TravelPlan) => void;
  onRemixPlan: (config: Partial<WizardConfig>) => void;
}

type CollectionCategory = "all" | "zen" | "coastal" | "culinary";

const SPOTLIGHT_PLAN_IDS = [
  "curated_beijing_4d",
  "curated_shanghai_3d",
  "curated_tokyo_4d",
  "curated_singapore_4d",
  "curated_kyoto_4d",
  "curated_hongkong_3d",
];

export const AtelierHome: React.FC<AtelierHomeProps> = ({
  onSelectPlan,
  onRemixPlan,
}) => {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CollectionCategory>("all");
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const plans = getCuratedPlans(locale);

  // Categorize itineraries
  const categoryMap: Record<CollectionCategory, string[]> = {
    all: plans.map((p) => p.id),
    zen: [
      "curated_kyoto_4d",
      "curated_beijing_4d",
      "curated_xian_4d",
      "curated_tokyo_4d",
      "curated_taipei_4d",
    ],
    coastal: [
      "curated_qingdao_3d",
      "curated_xiamen_3d",
      "curated_hongkong_3d",
    ],
    culinary: [
      "curated_yanji_hunchun_6d",
      "curated_chengdu_4d",
      "curated_shanghai_3d",
      "curated_singapore_4d",
    ],
  };

  const filteredPlans = plans.filter((p) =>
    categoryMap[activeCategory].includes(p.id)
  );

  // Rotating Spotlight Curated Plans
  const spotlightPlans = SPOTLIGHT_PLAN_IDS.map((id) =>
    plans.find((p) => p.id === id)
  ).filter((p): p is TravelPlan => Boolean(p));

  const activeSpotlightList =
    spotlightPlans.length > 0 ? spotlightPlans : plans.slice(0, 5);

  // Auto-rotate spotlight every 6 seconds, pause on user hover
  useEffect(() => {
    if (isPaused || activeSpotlightList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSpotlightIndex((prev) => (prev + 1) % activeSpotlightList.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, activeSpotlightList.length]);

  const spotlightPlan =
    activeSpotlightList[currentSpotlightIndex] || activeSpotlightList[0];

  const handleSpotlightSelect = (plan: TravelPlan) => {
    onSelectPlan(plan);
  };

  const handleSpotlightRemix = (e: React.MouseEvent, plan: TravelPlan) => {
    e.stopPropagation();
    onRemixPlan({
      destinations: plan.meta.destinations.join(" + "),
      durationDays: plan.meta.durationDays,
      mobility: "low",
      companions:
        plan.meta.travelerProfile.includes("长辈友好") ||
        plan.meta.travelerProfile.includes("Senior Friendly")
          ? ["elders"]
          : [],
    });
  };

  const categories = [
    {
      id: "all" as const,
      labelEn: "All",
      labelZh: "全部",
      count: plans.length,
    },
    {
      id: "zen" as const,
      labelEn: "Zen & Heritage",
      labelZh: "禅意古韵",
      count: categoryMap.zen.length,
    },
    {
      id: "coastal" as const,
      labelEn: "Coastal Breeze",
      labelZh: "海风慢调",
      count: categoryMap.coastal.length,
    },
    {
      id: "culinary" as const,
      labelEn: "Local Flavors",
      labelZh: "特色风味",
      count: categoryMap.culinary.length,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ------------------------------------------------------------- */}
      {/* 1. CURATOR'S SPOTLIGHT (Widescreen Rotating Hero Feature)      */}
      {/* ------------------------------------------------------------- */}
      {spotlightPlan && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="text-xs font-semibold text-zinc-700 tracking-wide font-sans">
                {locale === "en" ? "Curator's Spotlight" : "精选推荐"}
              </span>
              <span className="text-stone-300 text-xs">·</span>
              <span className="text-[11px] text-zinc-400 font-mono">
                {String(currentSpotlightIndex + 1).padStart(2, "0")} / {String(activeSpotlightList.length).padStart(2, "0")}
              </span>
            </div>

            {/* Destination Quick-Switch Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {activeSpotlightList.map((plan, idx) => {
                const isCurrent = idx === currentSpotlightIndex;
                const cityName = plan.meta.destinations[0] || "";
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setCurrentSpotlightIndex(idx)}
                    className={`px-3 py-1 rounded-full text-xs transition cursor-pointer select-none flex items-center gap-1.5 ${
                      isCurrent
                        ? "bg-zinc-900 text-white font-semibold shadow-xs"
                        : "bg-white/80 hover:bg-white text-zinc-500 hover:text-zinc-800 border border-stone-200/60"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCurrent ? "bg-[#C5A880]" : "bg-stone-300"
                      }`}
                    />
                    <span>{cityName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => handleSpotlightSelect(spotlightPlan)}
            className="group relative rounded-3xl overflow-hidden bg-zinc-950 text-white cursor-pointer shadow-xl transition-all duration-700 hover:shadow-2xl border border-stone-800/80"
          >
            {/* Cinematic Background Images with Silky Crossfade */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              {activeSpotlightList.map((plan, idx) => (
                <div
                  key={plan.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSpotlightIndex
                      ? "opacity-80 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    src={plan.meta.coverImage || "/images/spot_kyoto_zen.jpg"}
                    alt={plan.meta.tripTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent hidden md:block pointer-events-none" />
            </div>

            {/* Prev & Next Floating Buttons */}
            {activeSpotlightList.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous Spotlight"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSpotlightIndex(
                      (prev) =>
                        (prev - 1 + activeSpotlightList.length) %
                        activeSpotlightList.length
                    );
                  }}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition border border-white/20 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-lg active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next Spotlight"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSpotlightIndex(
                      (prev) => (prev + 1) % activeSpotlightList.length
                    );
                  }}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition border border-white/20 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-lg active:scale-95"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-end pointer-events-none">
              <div className="max-w-2xl space-y-3 sm:space-y-4 pointer-events-auto">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C5A880] text-zinc-950 text-xs font-bold tracking-wide">
                    {spotlightPlan.meta.durationDays} {locale === "en" ? "Days" : "天"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    {locale === "en" ? "Gentle Pace" : "轻松步调"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    {locale === "en" ? "Step-Free Paths" : "平缓少台阶"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight group-hover:text-[#F3E5D0] transition-colors">
                  {spotlightPlan.meta.tripTitle}
                </h2>

                {/* Curator's Note */}
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {spotlightPlan.overview.highlights[0] ||
                    spotlightPlan.overview.logisticsSummary}
                </p>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleSpotlightSelect(spotlightPlan)}
                    className="px-6 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold hover:bg-[#FAF9F6] transition flex items-center gap-2 shadow-md group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>{locale === "en" ? "View Itinerary" : "查看路线"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-950" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSpotlightRemix(e, spotlightPlan)}
                    className="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs font-semibold transition flex items-center gap-1.5 border border-white/20 cursor-pointer"
                  >
                    <GitFork className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{locale === "en" ? "Customize" : "以此定制"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Progress Indicator Bar */}
            <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
              {activeSpotlightList.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentSpotlightIndex
                      ? "w-8 bg-[#C5A880]"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. THE THREE TENETS (Comfort & Thoughtful Design)              */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-y border-stone-200/80 py-12 sm:py-16">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
              {locale === "en" ? "Designed for Comfort & Ease" : "专为舒适漫步而设计"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Tenet 1 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                01
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Footprints className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Smooth Pacing & Rest" : "顺畅节奏与午间休整"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "Daily plans are kept to 2–3 highlights with plenty of midday rest, moving naturally without backtracking."
                  : "每日仅规划 2 至 3 处核心亮点，预留充足午休时间。路线顺畅前行，不走回头路。"}
              </p>
            </div>

            {/* Tenet 2 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                02
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Gentle Paths & Close Drop-offs" : "平缓步道与就近落客"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "We prioritize elevator access, gentle slopes, and direct drop-off spots so travelers can arrive with ease."
                  : "优先平缓坡道与直达电梯，标明专车与出租车落客点，让长辈与推车轻松进出。"}
              </p>
            </div>

            {/* Tenet 3 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                03
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Utensils className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Mild & Authentic Local Dining" : "清淡地道的美食甄选"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "Handpicked local favorites known for fresh, mild flavors and high ratings, welcoming for all generations."
                  : "精选清淡少油、口味温和的老字号与口碑餐厅，全家各年龄段都能舒心享用。"}
              </p>
            </div>

            {/* Tenet 4 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                04
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Languages className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Zero Language Barrier" : "异国零语言障碍"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "Adapts to your local language level with native-script taxi driver flashcards, point-to-order dish names, and foreign visitor booking guides."
                  : "根据您的当地语言水平智能适配，自动生成双语出租车司机闪卡、指点即点地道菜名与异国预约指南。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. CURATED THEMATIC COLLECTIONS                                */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header & Thematic Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
              {locale === "en" ? "Curated Destinations" : "精选目的地"}
            </h3>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-stone-100/80 border border-stone-200/80 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all select-none ${
                  activeCategory === cat.id
                    ? "bg-zinc-900 text-white font-bold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 font-medium hover:bg-stone-200/60"
                }`}
              >
                {locale === "en" ? cat.labelEn : cat.labelZh}{" "}
                <span className="text-[10px] opacity-60 ml-0.5">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => onSelectPlan(plan)}
              className="group cursor-pointer select-none flex flex-col justify-between bg-white rounded-3xl border border-stone-200/80 hover:border-stone-400 hover:shadow-lg transition-all duration-500 p-4"
            >
              <div>
                {/* 16:10 Photo Card with Subtle Overlay */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 mb-4 shadow-xs">
                  <img
                    src={plan.meta.coverImage || "/images/spot_kyoto_zen.jpg"}
                    alt={plan.meta.tripTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Glass Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                      {plan.meta.durationDays} {locale === "en" ? "Days" : "天"}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 border border-[#C5A880]/40 backdrop-blur-md text-[#C5A880] text-[10px] font-bold">
                      {locale === "en" ? "Curated" : "精选"}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h4 className="font-serif font-bold text-base sm:text-lg text-zinc-900 group-hover:text-black transition leading-snug line-clamp-1 px-1">
                  {plan.meta.tripTitle}
                </h4>

                {/* 1-Line Highlight */}
                {plan.overview.highlights && plan.overview.highlights[0] && (
                  <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 px-1 font-light leading-relaxed">
                    {plan.overview.highlights[0]}
                  </p>
                )}

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 px-1">
                  {plan.meta.travelerProfile.slice(0, 3).map((tagStr) => (
                    <span
                      key={tagStr}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-zinc-600"
                    >
                      #{tagStr}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 mt-4 border-t border-stone-100 flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemixPlan({
                      destinations: plan.meta.destinations.join(" + "),
                      durationDays: plan.meta.durationDays,
                      mobility: "low",
                      companions:
                        plan.meta.travelerProfile.includes("长辈友好") ||
                        plan.meta.travelerProfile.includes("Senior Friendly")
                          ? ["elders"]
                          : [],
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-zinc-900 py-1 transition"
                >
                  <GitFork className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{locale === "en" ? "Remix" : "复刻"}</span>
                </button>

                {(() => {
                  const destSlug = getDestinationSlugByPlanId(plan.id);
                  return destSlug ? (
                    <Link
                      href={`/destinations/${destSlug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onSelectPlan(plan);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 group-hover:translate-x-1 transition-transform"
                    >
                      <span>{locale === "en" ? "Explore" : "查看"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">
                      <span>{locale === "en" ? "Explore" : "查看"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
