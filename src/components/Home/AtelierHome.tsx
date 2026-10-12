"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { getCuratedPlans } from "@/lib/curated-plans-provider";

interface AtelierHomeProps {
  onSelectPlan: (plan: TravelPlan) => void;
  onRemixPlan: (config: Partial<WizardConfig>) => void;
}

type CollectionCategory = "all" | "zen" | "coastal" | "culinary";

export const AtelierHome: React.FC<AtelierHomeProps> = ({
  onSelectPlan,
  onRemixPlan,
}) => {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CollectionCategory>("all");

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
      "curated_hongkong_4d",
    ],
    culinary: [
      "curated_yanji_6d",
      "curated_chengdu_4d",
      "curated_shanghai_3d",
      "curated_singapore_4d",
    ],
  };

  const filteredPlans = plans.filter((p) =>
    categoryMap[activeCategory].includes(p.id)
  );

  // Featured Spotlight Plan (Kyoto or first plan)
  const spotlightPlan =
    plans.find((p) => p.id === "curated_kyoto_4d") || plans[0];

  const handleSpotlightSelect = () => {
    if (spotlightPlan) {
      onSelectPlan(spotlightPlan);
    }
  };

  const handleSpotlightRemix = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (spotlightPlan) {
      onRemixPlan({
        destinations: spotlightPlan.meta.destinations.join(" + "),
        durationDays: spotlightPlan.meta.durationDays,
        mobility: "low",
        companions:
          spotlightPlan.meta.travelerProfile.includes("长辈友好") ||
          spotlightPlan.meta.travelerProfile.includes("Senior Friendly")
            ? ["elders"]
            : [],
      });
    }
  };

  const categories = [
    {
      id: "all" as const,
      labelEn: "All Journeys",
      labelZh: "全部路线",
      count: plans.length,
    },
    {
      id: "zen" as const,
      labelEn: "Zen & Heritage",
      labelZh: "禅意文博",
      count: categoryMap.zen.length,
    },
    {
      id: "coastal" as const,
      labelEn: "Coastal Calm",
      labelZh: "海滨慢调",
      count: categoryMap.coastal.length,
    },
    {
      id: "culinary" as const,
      labelEn: "Gastronomy & Border",
      labelZh: "风味与边陲",
      count: categoryMap.culinary.length,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ------------------------------------------------------------- */}
      {/* 1. CURATOR'S SPOTLIGHT (Widescreen Hero Feature)               */}
      {/* ------------------------------------------------------------- */}
      {spotlightPlan && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 font-sans">
                {locale === "en" ? "Curator's Spotlight · Season's Pick" : "策展特选 · 季节焦点"}
              </span>
            </div>
            <span className="text-xs text-zinc-400 font-serif italic">
              {locale === "en" ? "Autumn / Winter Curation" : "秋冬精选辑"}
            </span>
          </div>

          <div
            onClick={handleSpotlightSelect}
            className="group relative rounded-3xl overflow-hidden bg-zinc-950 text-white cursor-pointer shadow-xl transition-all duration-700 hover:shadow-2xl border border-stone-800/80"
          >
            {/* Cinematic Background Image with Gradient Mask */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <img
                src={spotlightPlan.meta.coverImage || "/images/spot_kyoto_zen.jpg"}
                alt={spotlightPlan.meta.tripTitle}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent hidden md:block" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-end">
              <div className="max-w-2xl space-y-3 sm:space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C5A880] text-zinc-950 text-xs font-bold tracking-wide">
                    {spotlightPlan.meta.durationDays} {locale === "en" ? "Days Expedition" : "天专属行程"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    {locale === "en" ? "Gentle Pace (<5k steps)" : "轻度步调 (<5000步)"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    {locale === "en" ? "Barrier-Free Verified" : "无障碍动线实勘"}
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
                    onClick={handleSpotlightSelect}
                    className="px-6 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold hover:bg-[#FAF9F6] transition flex items-center gap-2 shadow-md group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{locale === "en" ? "Explore Journey" : "查阅完整路线"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-950" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSpotlightRemix}
                    className="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs font-semibold transition flex items-center gap-1.5 border border-white/20"
                  >
                    <GitFork className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{locale === "en" ? "Customize This" : "基于此定制"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. THE THREE TENETS OF 7KA (Quiet Luxury Atelier Standards)    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-y border-stone-200/80 py-12 sm:py-16">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5A880]">
              {locale === "en" ? "Atelier Standards" : "工坊实操标准"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mt-1">
              {locale === "en" ? "The Three Tenets of Slow Travel" : "慢调旅行的三项铁律"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Tenet 1 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                01
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Footprints className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Zero-Backtrack Logistics" : "动线零折返与午休"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "Daily routes are strictly limited to 2–3 meaningful highlights with a mandatory 2-hour midday rest break, eliminating rush and backtracking."
                  : "每日仅安排 2 至 3 处核心亮点，强制预留 2 小时午间休整，严谨测算单向动线，杜绝折返跑与体力透支。"}
              </p>
            </div>

            {/* Tenet 2 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                02
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Doorstep Drop-offs" : "实勘落客门廊与平缓道"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "Every stop features designated vehicle drop-off platforms, flat ramps, and elevator priority routing to spare elders and children steep climbs."
                  : "每个点位均精确指定专车落客门廊或平缓步道入口，核查电梯与无障碍设施，让长辈与推车从容抵达。"}
              </p>
            </div>

            {/* Tenet 3 */}
            <div className="space-y-3">
              <div className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880]">
                03
              </div>
              <h4 className="text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Utensils className="w-4 h-4 text-zinc-500" />
                {locale === "en" ? "Digestible Gastronomy" : "温和养胃的地道珍馐"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                {locale === "en"
                  ? "Locally renowned culinary icons rigorously selected for mild, stomach-friendly flavors, soft textures, and Google 4.5★+ reviews."
                  : "严选温和低刺激、清淡清鲜的老字号与口碑黑珍珠/米其林餐厅，适口易嚼，兼顾家庭各代成员的口味。"}
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
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5A880]">
              {locale === "en" ? "The Atelier Archive" : "工坊精选档案"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mt-1">
              {locale === "en" ? "Curated Collections" : "慢行灵感合集"}
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

                <div className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">
                  <span>{locale === "en" ? "Explore" : "查看"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
