"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Share2,
  Download,
  Globe,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Car,
  Utensils,
  ArrowUp,
  ArrowDown,
  Trash2,
  RefreshCw,
  Sparkles,
  Camera,
  Eye,
  Star,
  ExternalLink,
  Compass,
  X,
} from "lucide-react";
import { ActivityStop, DayItinerary, TravelPlan } from "@/types/itinerary";
import { DailyMap } from "./DailyMap";
import { compressPlan, saveLocalPlan } from "@/lib/storage";
import { generateOfflineHtml } from "@/lib/export-html";
import { useLanguage } from "@/context/LanguageContext";
import { localizeCuratedPlan } from "@/lib/curated-plans-provider";

interface ItineraryDashboardProps {
  plan: TravelPlan;
  onBack: () => void;
  onPlanUpdated?: (updatedPlan: TravelPlan) => void;
}

const PRESET_TWEAK_CHIPS_ZH = [
  "长辈脚力减负 · 减少台阶与爬坡",
  "换清淡中餐 · 避免辛辣油腻",
  "下午增加特色咖啡馆漫步",
  "增加特色早市 / 夜市打卡",
];

const PRESET_TWEAK_CHIPS_EN = [
  "Reduce walking & avoid steep stairs",
  "Swap to mild non-spicy meal",
  "Add afternoon specialty cafe / tea break",
  "Add morning / night market visit",
];

export const ItineraryDashboard: React.FC<ItineraryDashboardProps> = ({
  plan,
  onBack,
  onPlanUpdated,
}) => {
  const { locale, t } = useLanguage();
  const presetChips = locale === "en" ? PRESET_TWEAK_CHIPS_EN : PRESET_TWEAK_CHIPS_ZH;
  const [localPlan, setLocalPlan] = useState<TravelPlan>(() =>
    localizeCuratedPlan(plan, locale)
  );
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(plan.meta.isPublic || false);
  const [viewsCount, setViewsCount] = useState<number | null>(null);

  // AI Tweak State (Tier 1)
  const [isTweakOpen, setIsTweakOpen] = useState(false);
  const [isTweaking, setIsTweaking] = useState(false);
  const [tweakInput, setTweakInput] = useState("");
  const [tweakLoadingText, setTweakLoadingText] = useState(
    locale === "en"
      ? "AI is rearranging the route and drop-off points..."
      : "AI 正在根据您的要求重新编排动线与落客点..."
  );

  useEffect(() => {
    const localized = localizeCuratedPlan(plan, locale);
    setLocalPlan(localized);

    // Track visit telemetry to Supabase
    if (plan?.id) {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: plan.id }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (typeof data.viewCount === "number") {
            setViewsCount(data.viewCount);
          }
        })
        .catch(() => {});
    }
  }, [plan]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShareLink = () => {
    try {
      const compressed = compressPlan(localPlan);
      const shareUrl = `${window.location.origin}/#plan=${compressed}`;
      navigator.clipboard.writeText(shareUrl);
      showToast(t("linkCopied"));
    } catch (err) {
      showToast(t("copyFailed"));
    }
  };

  const handleDownloadOfflineHtml = () => {
    try {
      const htmlContent = generateOfflineHtml(localPlan, locale);
      const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const suffix = locale === "en" ? "_offline_guide.html" : "_离线攻略.html";
      a.download = `${localPlan.meta.tripTitle.replace(/\s+/g, "_")}${suffix}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(t("offlineDownloaded"));
    } catch (err) {
      showToast(t("exportFailed"));
    }
  };

  const handlePublishToGallery = async () => {
    if (isPublished) {
      showToast(t("alreadyPublic"));
      return;
    }

    setIsPublishing(true);
    try {
      const resp = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: localPlan }),
      });
      const data = await resp.json();
      if (data.success) {
        setIsPublished(true);
        showToast(t("publishedSuccess"));
      }
    } catch (err) {
      showToast(t("publishFailed"));
    } finally {
      setIsPublishing(false);
    }
  };

  // -------------------------------------------------------------
  // Tier 1: AI Concierge Copilot Tweak
  // -------------------------------------------------------------
  const executeAITweak = async (instruction: string) => {
    if (!instruction.trim()) return;
    setIsTweaking(true);
    setTweakLoadingText(
      locale === "en"
        ? "AI is rearranging the route and drop-off points..."
        : "AI 正在根据您的要求重新编排动线与落客点..."
    );

    try {
      const resp = await fetch("/api/tweak-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: localPlan,
          instruction: instruction.trim(),
        }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || t("tweakFailed"));
      }

      setLocalPlan(data.plan);
      onPlanUpdated?.(data.plan);
      setTweakInput("");
      showToast(t("tweakSuccess"));
    } catch (err: any) {
      showToast(err.message || t("tweakFailed"));
    } finally {
      setIsTweaking(false);
    }
  };

  // -------------------------------------------------------------
  // Tier 2: In-Place Card Actions
  // -------------------------------------------------------------
  const handleDeleteActivity = (itemIdx: number) => {
    const newDays = [...localPlan.days];
    const currentTimeline = [...newDays[activeDayIndex].timeline];
    const filtered = currentTimeline.filter((_, idx) => idx !== itemIdx);

    newDays[activeDayIndex] = {
      ...newDays[activeDayIndex],
      timeline: filtered,
    };

    const updated: TravelPlan = {
      ...localPlan,
      days: newDays,
    };

    setLocalPlan(updated);
    onPlanUpdated?.(updated);
    showToast(t("spotDeleted"));
  };

  const handleMoveActivity = (itemIdx: number, direction: "up" | "down") => {
    const newDays = [...localPlan.days];
    const currentTimeline = [...newDays[activeDayIndex].timeline];
    const targetIdx = direction === "up" ? itemIdx - 1 : itemIdx + 1;
    if (targetIdx < 0 || targetIdx >= currentTimeline.length) return;

    const temp = currentTimeline[itemIdx];
    currentTimeline[itemIdx] = currentTimeline[targetIdx];
    currentTimeline[targetIdx] = temp;

    newDays[activeDayIndex] = {
      ...newDays[activeDayIndex],
      timeline: currentTimeline,
    };

    const updated: TravelPlan = {
      ...localPlan,
      days: newDays,
    };

    setLocalPlan(updated);
    onPlanUpdated?.(updated);
    showToast(t("orderUpdated"));
  };

  const handleSwapActivity = (actName: string) => {
    const prompt =
      locale === "en"
        ? `Please replace the spot "${actName}" on Day ${currentDay.dayNumber} with another suitable specialty attraction or relaxing walking spot in the same neighborhood, ensuring convenient drop-offs and seamless logistics.`
        : `请将第 ${currentDay.dayNumber} 天的景点「${actName}」替换为同区域其他适合的特色景点或漫步点位，确保落客和动线顺畅。`;
    executeAITweak(prompt);
  };

  const handleSwapDining = (mealType: string, currentRestaurant: string) => {
    const prompt =
      locale === "en"
        ? `Please replace Day ${currentDay.dayNumber}'s ${mealType} (currently "${currentRestaurant}") with another well-regarded dining spot in the same area offering great flavors and comfort.`
        : `请将第 ${currentDay.dayNumber} 天的${mealType}（目前是「${currentRestaurant}」）替换为同商圈其他口碑好、适口性佳的特色餐厅。`;
    executeAITweak(prompt);
  };

  const handleSelectActivityAlternative = (actIdx: number, altIdx: number) => {
    const updatedPlan = JSON.parse(JSON.stringify(localPlan));
    const day = updatedPlan.days[activeDayIndex];
    const currentAct = day.timeline[actIdx];
    if (!currentAct || currentAct.type !== "activity" || !currentAct.alternatives) return;
    const selectedAlt = currentAct.alternatives[altIdx];

    const oldAsAlt = {
      name: currentAct.name,
      description: currentAct.description,
      photoTip: currentAct.photoTip,
      image: currentAct.image,
      dropOffPoint: currentAct.dropOffPoint,
      durationMinutes: currentAct.durationMinutes,
      timeSlot: currentAct.timeSlot,
    };
    const newAlternatives = [...currentAct.alternatives];
    newAlternatives[altIdx] = oldAsAlt;

    currentAct.name = selectedAlt.name;
    currentAct.description = selectedAlt.description;
    currentAct.photoTip = selectedAlt.photoTip;
    currentAct.image = selectedAlt.image;
    if (selectedAlt.dropOffPoint) currentAct.dropOffPoint = selectedAlt.dropOffPoint;
    if (selectedAlt.durationMinutes) currentAct.durationMinutes = selectedAlt.durationMinutes;
    if (selectedAlt.timeSlot) currentAct.timeSlot = selectedAlt.timeSlot;
    currentAct.alternatives = newAlternatives;

    setLocalPlan(updatedPlan);
    onPlanUpdated?.(updatedPlan);
    saveLocalPlan(updatedPlan);
    showToast(`${t("spotSwapped")}: ${selectedAlt.name.split("（")[0]}`);
  };

  const handleSelectDiningAlternative = (mealType: "lunch" | "dinner", altIdx: number) => {
    const updatedPlan = JSON.parse(JSON.stringify(localPlan));
    const day = updatedPlan.days[activeDayIndex];
    const currentMeal = day.meals?.[mealType];
    if (!currentMeal || !currentMeal.alternatives) return;
    const selectedAlt = currentMeal.alternatives[altIdx];

    const oldAsAlt = {
      restaurantName: currentMeal.restaurantName,
      cuisineStyle: currentMeal.cuisineStyle,
      recommendedDishes: currentMeal.recommendedDishes,
      elderKidSuitability: currentMeal.elderKidSuitability,
      perPersonBudget: currentMeal.perPersonBudget,
      addressOrDropOff: currentMeal.addressOrDropOff,
      image: currentMeal.image,
      photoTip: currentMeal.photoTip,
    };
    const newAlternatives = [...currentMeal.alternatives];
    newAlternatives[altIdx] = oldAsAlt;

    day.meals[mealType] = {
      mealType: currentMeal.mealType,
      restaurantName: selectedAlt.restaurantName,
      cuisineStyle: selectedAlt.cuisineStyle,
      recommendedDishes: selectedAlt.recommendedDishes,
      elderKidSuitability: selectedAlt.elderKidSuitability || currentMeal.elderKidSuitability,
      perPersonBudget: selectedAlt.perPersonBudget,
      addressOrDropOff: selectedAlt.addressOrDropOff || currentMeal.addressOrDropOff,
      image: selectedAlt.image,
      photoTip: selectedAlt.photoTip,
      alternatives: newAlternatives,
    };

    setLocalPlan(updatedPlan);
    onPlanUpdated?.(updatedPlan);
    saveLocalPlan(updatedPlan);
    showToast(`${t("restaurantSwapped")} ${selectedAlt.restaurantName}`);
  };

  const currentDay: DayItinerary =
    localPlan.days[activeDayIndex] || localPlan.days[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Floating Action Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-zinc-700 text-xs font-semibold hover:bg-stone-50 transition shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {locale === "en" ? "Back to Gallery" : "返回画廊"}
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePublishToGallery}
            disabled={isPublishing}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1 shadow-xs ${
              isPublished
                ? "bg-stone-100 text-zinc-800 border border-stone-300"
                : "bg-white text-zinc-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{isPublished ? t("published") : t("publishToSquare")}</span>
          </button>

          <button
            type="button"
            onClick={handleShareLink}
            className="px-3 py-1.5 rounded-full bg-white hover:bg-stone-100 text-zinc-700 text-xs font-semibold transition flex items-center gap-1 border border-stone-200"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{t("shareTrip")}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadOfflineHtml}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t("exportDoc")}</span>
          </button>
        </div>
      </div>

      {/* Hero Title & Badges */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xs mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold">
            {localPlan.meta.durationDays} {locale === "en" ? "Days Trip" : "天行程"}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-stone-100 text-zinc-700 text-xs font-semibold">
            {localPlan.meta.budgetTier === "budget"
              ? t("budgetLow")
              : localPlan.meta.budgetTier === "comfort"
              ? t("budgetMid")
              : t("budgetHigh")}
          </span>
          {localPlan.meta.travelerProfile.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-stone-100 text-zinc-600 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
          {localPlan.meta.tripTitle}
        </h1>

        {/* Highlights List - 1-Line Minimal Bullets */}
        {localPlan.overview.highlights && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-stone-100 text-xs text-zinc-600">
            {localPlan.overview.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#C5A880] font-bold">•</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Tier 1: AI Concierge Copilot Bar (Opens Floating Chat)        */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-stone-50/90 rounded-2xl border border-stone-200/80 px-4 py-3 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-zinc-900 text-[#C5A880] flex items-center justify-center text-xs font-serif font-black shrink-0">
            7
          </div>
          <div className="text-xs">
            <span className="font-bold text-zinc-900">
              {locale === "en" ? "AI Itinerary Concierge" : "AI 行程管家"}
            </span>
            <span className="text-zinc-400 mx-1.5">·</span>
            <span className="text-zinc-500">
              {locale === "en"
                ? "Need to tweak spots, pacing or meals? Click to open copilot."
                : "偏好调整、避开台阶、餐饮替换？点击开启右下角管家微调"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {presetChips.slice(0, 2).map((chip) => (
            <button
              key={chip}
              type="button"
              disabled={isTweaking}
              onClick={() => {
                setIsTweakOpen(true);
                executeAITweak(chip);
              }}
              className="hidden md:inline-flex text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-stone-100 text-zinc-700 border border-stone-200 transition disabled:opacity-50 select-none active:scale-[0.98]"
            >
              + {chip.split("·")[0].trim()}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsTweakOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{locale === "en" ? "Open Copilot" : "打开管家微调"}</span>
          </button>
        </div>
      </div>

      {/* Reservation Checklist Banner */}
      {localPlan.reservationChecklist &&
        localPlan.reservationChecklist.length > 0 && (
          <div className="bg-white rounded-3xl border border-stone-200/90 p-5 mb-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-[#C5A880]" />
              <span className="font-bold text-xs text-zinc-900 uppercase tracking-wide">
                {t("checklistTitle")}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {localPlan.reservationChecklist.map((res, i) => (
                <div
                  key={i}
                  className="bg-stone-50/80 p-3 rounded-2xl border border-stone-200 flex items-start justify-between gap-2"
                >
                  <div>
                    <div className="font-bold text-xs text-zinc-900">
                      {res.spotName}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      {res.platform} · {res.ticketPrice}
                    </div>
                    <div className="text-[11px] text-zinc-700 font-medium mt-1">
                      {res.bookingTip}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-900 text-white shrink-0">
                    {locale === "en" ? `${res.daysInAdvance} days ahead` : `提前${res.daysInAdvance}天`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* Sticky Day Pills Navigation */}
      <div className="sticky top-16 z-40 bg-[#FAF9F6]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
        {localPlan.days.map((day, idx) => (
          <button
            key={day.dayNumber}
            type="button"
            onClick={() => setActiveDayIndex(idx)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition select-none ${
              activeDayIndex === idx
                ? "bg-zinc-900 text-white shadow-xs"
                : "bg-white text-zinc-600 hover:text-zinc-900 border border-stone-200"
            }`}
          >
            Day {day.dayNumber}
          </button>
        ))}
      </div>

      {/* Day Content */}
      <div className="mt-4 space-y-4">
        {/* Day Card Header & Map */}
        <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <div>
              <span className="text-[11px] font-bold text-[#C5A880] tracking-wider">
                DAY {currentDay.dayNumber}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900">
                {currentDay.dateOrLabel}
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-medium self-start sm:self-auto">
              {locale === "en" ? "Theme: " : "主题: "}{currentDay.theme}
            </span>
          </div>

          {/* Midday rest callout */}
          {currentDay.hotelRestBlock && currentDay.hotelRestBlock.enabled && (
            <div className="mb-4 p-3 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-2.5 text-xs text-zinc-800">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <div>
                <strong>
                  {t("middayRest")} ({currentDay.hotelRestBlock.recommendedTime})
                </strong>
                : {currentDay.hotelRestBlock.reason}
              </div>
            </div>
          )}

          {/* Daily Interactive Leaflet Map */}
          <DailyMap day={currentDay} />
        </div>

        {/* Timeline Activities (with Tier 2 In-Place Actions) */}
        <div className="space-y-3">
          {currentDay.timeline.map((item, idx) => {
            if (item.type === "transit") {
              return (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-2xl bg-stone-100/70 text-xs text-zinc-600 flex items-center gap-2"
                >
                  <Car className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span className="font-bold text-zinc-800">
                    {item.fromStop} ➔ {item.toStop}
                  </span>
                  <span className="text-zinc-900 font-semibold">
                    {item.mode === "taxi"
                      ? t("transitTaxi")
                      : item.mode === "charter"
                      ? t("transitCharter")
                      : t("transitWalk")}{" "}
                    {item.estimatedMinutes} {t("mins")} ({item.distanceKm}km)
                  </span>
                  <span className="hidden sm:inline text-zinc-400">
                    · {item.navigationDetail}
                  </span>
                </div>
              );
            }

            const act = item as ActivityStop;
            return (
              <div
                key={act.id || idx}
                className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs hover:border-stone-300 transition group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-zinc-900">
                      {act.name}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-zinc-700">
                      {act.timeSlot}
                    </span>
                  </div>

                  {/* Tier 2: Quick In-Place Action Buttons (Move, Swap, Delete) */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={isTweaking}
                      onClick={() => handleSwapActivity(act.name)}
                      className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-stone-100 transition disabled:opacity-40"
                      title={t("swapSpotAI")}
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    {idx > 0 && (
                      <button
                        type="button"
                        onClick={() => handleMoveActivity(idx, "up")}
                        className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-stone-100 transition"
                        title={t("moveUp")}
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {idx < currentDay.timeline.length - 1 && (
                      <button
                        type="button"
                        onClick={() => handleMoveActivity(idx, "down")}
                        className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-stone-100 transition"
                        title={t("moveDown")}
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteActivity(idx)}
                      className="p-1.5 rounded-full text-zinc-400 hover:text-red-600 hover:bg-red-50 transition"
                      title={t("deleteSpot")}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-zinc-400 mb-2">
                  {t("durationMins")} {act.durationMinutes} {t("mins")}
                </div>

                {/* Drop-off landmark badge & Google Maps Navigation */}
                <div className="my-2.5 px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200/90 text-xs text-zinc-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <div className="truncate">
                      <strong>{t("dropOffNavTarget")}:</strong> {act.dropOffPoint}
                    </div>
                  </div>
                  {act.coordinates && act.coordinates.length === 2 && (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${act.coordinates[0]},${act.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-blue-600 hover:text-blue-800 text-[11px] font-semibold flex items-center gap-1 hover:underline ml-2"
                      title={t("openInGoogleMaps")}
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Reservation badge */}
                {act.reservationRequired && (
                  <div className="my-2 px-3 py-1 rounded-xl bg-stone-100 text-zinc-800 text-xs font-medium border border-stone-200 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{t("reservationRequired")}: {act.reservationChannel}</span>
                  </div>
                )}

                <p className="text-xs text-zinc-600 leading-relaxed mb-2.5">
                  {act.description}
                </p>

                {/* Photo Spot Card if image is available */}
                {act.image && (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-3 bg-stone-100 border border-stone-200/80 group">
                    <img
                      src={act.image}
                      alt={act.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                      <Camera className="w-3 h-3 text-[#C5A880]" />
                      <span>{t("photoSpotAdvice")}</span>
                    </div>
                  </div>
                )}

                {/* Photo tip guidance */}
                {act.photoTip && (
                  <div className="my-2 px-3 py-2 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs flex items-start gap-2">
                    <Camera className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-zinc-900">{t("photoTipLabel")}</span>
                      {act.photoTip}
                    </div>
                  </div>
                )}

                {/* Elder/Kid notes */}
                {act.elderKidNotes && (
                  <div className="flex flex-wrap gap-2 text-xs mt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-zinc-700 text-[11px]">
                      {act.elderKidNotes}
                    </span>
                  </div>
                )}

                {/* Alternative Activities Switcher if available */}
                {act.alternatives && act.alternatives.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-stone-200/70 flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-zinc-500 font-semibold flex items-center gap-1 shrink-0">
                      <RefreshCw className="w-3 h-3 text-[#C5A880]" />
                      {t("altSpotsLabel")}
                    </span>
                    {act.alternatives.map((alt, altI) => (
                      <button
                        key={altI}
                        type="button"
                        onClick={() => handleSelectActivityAlternative(idx, altI)}
                        className="px-2.5 py-1 rounded-full bg-stone-100 hover:bg-[#C5A880]/15 hover:text-zinc-900 border border-stone-200 text-zinc-700 font-medium transition cursor-pointer flex items-center gap-1"
                        title={alt.description}
                      >
                        <span>⇄ {alt.name.split("（")[0]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dining Recommendations (with Tier 2 In-Place Actions) */}
        <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-xs">
          <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#C5A880]" />
            {t("diningSectionTitle")}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentDay.meals?.lunch && (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 relative group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-zinc-900">
                      {t("lunch")} · {currentDay.meals.lunch.restaurantName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-zinc-500">
                        {currentDay.meals.lunch.perPersonBudget}
                      </span>
                      <button
                        type="button"
                        disabled={isTweaking}
                        onClick={() =>
                          currentDay.meals?.lunch &&
                          handleSwapDining(
                            locale === "en" ? "Lunch" : "午餐",
                            currentDay.meals.lunch.restaurantName
                          )
                        }
                        className="text-[10px] text-zinc-400 hover:text-zinc-900 flex items-center gap-0.5 hover:underline transition disabled:opacity-40"
                        title={locale === "en" ? "Swap with similar restaurant" : "AI 换一家同商圈餐厅"}
                      >
                        <RefreshCw className="w-2.5 h-2.5" />
                        {t("swapRestaurant")}
                      </button>
                    </div>
                  </div>

                  {/* Meal Photo if available */}
                  {currentDay.meals.lunch.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden my-2.5 bg-stone-100 border border-stone-200/80 group">
                      <img
                        src={currentDay.meals.lunch.image}
                        alt={currentDay.meals.lunch.restaurantName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1 shadow-xs">
                        <Utensils className="w-2.5 h-2.5 text-[#C5A880]" />
                        <span>{t("authenticFlavor")}</span>
                      </div>
                    </div>
                  )}

                  {currentDay.meals.lunch.photoTip && (
                    <div className="my-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] flex items-start gap-1.5">
                      <Camera className="w-3 h-3 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-zinc-900">{t("signatureHighlights")}: </span>
                        {currentDay.meals.lunch.photoTip}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 my-2">
                    {currentDay.meals.lunch.recommendedDishes.map((dish, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full bg-white text-zinc-700 border border-stone-200 text-[10px] font-medium"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {t("dietarySuitability")}: {currentDay.meals.lunch.elderKidSuitability}
                  </div>

                  {/* Google Reviews & Dianping Links */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                    <a
                      href={
                        currentDay.meals.lunch.googleMapsUrl ||
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          currentDay.meals.lunch.restaurantName +
                            " " +
                            (currentDay.meals.lunch.addressOrDropOff ||
                              localPlan.meta.destinations.join(" "))
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50/90 hover:bg-blue-100 text-blue-700 border border-blue-200/70 text-[10px] font-semibold transition"
                      title={t("viewGoogleReviewsTip")}
                    >
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" />
                      <span>{t("googleReviews")}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-blue-500" />
                    </a>

                    <a
                      href={
                        currentDay.meals.lunch.dianpingUrl ||
                        `https://m.dianping.com/search?keyword=${encodeURIComponent(
                          currentDay.meals.lunch.restaurantName
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50/80 hover:bg-amber-100 text-amber-800 border border-amber-200/70 text-[10px] font-medium transition"
                      title={locale === "en" ? "View on Dianping" : "在 大众点评 查看"}
                    >
                      <span>{t("dianpingReviews")}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-amber-600" />
                    </a>
                  </div>
                </div>

                {/* Alternatives for lunch */}
                {currentDay.meals.lunch.alternatives && currentDay.meals.lunch.alternatives.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-stone-200/70 flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className="text-zinc-500 font-medium shrink-0">{t("altFlavorsLabel")}</span>
                    {currentDay.meals.lunch.alternatives.map((alt, altI) => (
                      <button
                        key={altI}
                        type="button"
                        onClick={() => handleSelectDiningAlternative("lunch", altI)}
                        className="px-2 py-0.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-zinc-700 font-medium transition cursor-pointer"
                      >
                        ⇄ {alt.restaurantName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentDay.meals?.dinner && (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 relative group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-zinc-900">
                      {t("dinner")} · {currentDay.meals.dinner.restaurantName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-zinc-500">
                        {currentDay.meals.dinner.perPersonBudget}
                      </span>
                      <button
                        type="button"
                        disabled={isTweaking}
                        onClick={() =>
                          currentDay.meals?.dinner &&
                          handleSwapDining(
                            locale === "en" ? "Dinner" : "晚餐",
                            currentDay.meals.dinner.restaurantName
                          )
                        }
                        className="text-[10px] text-zinc-400 hover:text-zinc-900 flex items-center gap-0.5 hover:underline transition disabled:opacity-40"
                        title={locale === "en" ? "Swap with similar restaurant" : "AI 换一家同商圈餐厅"}
                      >
                        <RefreshCw className="w-2.5 h-2.5" />
                        {t("swapRestaurant")}
                      </button>
                    </div>
                  </div>

                  {/* Dinner Photo if available */}
                  {currentDay.meals.dinner.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden my-2.5 bg-stone-100 border border-stone-200/80 group">
                      <img
                        src={currentDay.meals.dinner.image}
                        alt={currentDay.meals.dinner.restaurantName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1 shadow-xs">
                        <Utensils className="w-2.5 h-2.5 text-[#C5A880]" />
                        <span>{t("authenticFlavor")}</span>
                      </div>
                    </div>
                  )}

                  {currentDay.meals.dinner.photoTip && (
                    <div className="my-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] flex items-start gap-1.5">
                      <Camera className="w-3 h-3 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-zinc-900">{t("signatureHighlights")}: </span>
                        {currentDay.meals.dinner.photoTip}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 my-2">
                    {currentDay.meals.dinner.recommendedDishes.map((dish, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full bg-white text-zinc-700 border border-stone-200 text-[10px] font-medium"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {t("dietarySuitability")}: {currentDay.meals.dinner.elderKidSuitability}
                  </div>

                  {/* Google Reviews & Dianping Links */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                    <a
                      href={
                        currentDay.meals.dinner.googleMapsUrl ||
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          currentDay.meals.dinner.restaurantName +
                            " " +
                            (currentDay.meals.dinner.addressOrDropOff ||
                              localPlan.meta.destinations.join(" "))
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50/90 hover:bg-blue-100 text-blue-700 border border-blue-200/70 text-[10px] font-semibold transition"
                      title={t("viewGoogleReviewsTip")}
                    >
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" />
                      <span>{t("googleReviews")}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-blue-500" />
                    </a>

                    <a
                      href={
                        currentDay.meals.dinner.dianpingUrl ||
                        `https://m.dianping.com/search?keyword=${encodeURIComponent(
                          currentDay.meals.dinner.restaurantName
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50/80 hover:bg-amber-100 text-amber-800 border border-amber-200/70 text-[10px] font-medium transition"
                      title={locale === "en" ? "View on Dianping" : "在 大众点评 查看"}
                    >
                      <span>{t("dianpingReviews")}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-amber-600" />
                    </a>
                  </div>
                </div>

                {/* Alternatives for dinner */}
                {currentDay.meals.dinner.alternatives && currentDay.meals.dinner.alternatives.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className="text-zinc-500 font-medium shrink-0">{t("altFlavorsLabel")}</span>
                    {currentDay.meals.dinner.alternatives.map((alt, altI) => (
                      <button
                        key={altI}
                        type="button"
                        onClick={() => handleSelectDiningAlternative("dinner", altI)}
                        className="px-2 py-0.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-zinc-700 font-medium transition cursor-pointer"
                      >
                        ⇄ {alt.restaurantName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Daily Tips */}
        {currentDay.dailyTips && currentDay.dailyTips.length > 0 && (
          <div className="bg-stone-50 rounded-3xl p-5 border border-stone-200/80">
            <div className="text-xs font-bold text-zinc-900 mb-2">{t("dailyTips")}</div>
            <ul className="space-y-1 text-xs text-zinc-600">
              {currentDay.dailyTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#C5A880] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Floating AI Concierge Copilot Trigger (Bottom Right)          */}
      {/* ------------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => setIsTweakOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-950 text-white shadow-2xl hover:bg-zinc-800 transition-all duration-300 active:scale-95 border border-stone-800/80 group cursor-pointer ${
          isTweakOpen ? "hidden" : "flex"
        }`}
        title={t("openCopilot")}
      >
        <div className="relative flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-[#C5A880] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
        <span className="text-xs font-bold tracking-wide">
          {locale === "en" ? "AI Copilot Tweak" : "AI 行程管家微调"}
        </span>
        {isTweaking && (
          <span className="w-3.5 h-3.5 border-2 border-white/60 border-t-transparent rounded-full animate-spin ml-1" />
        )}
      </button>

      {/* ------------------------------------------------------------- */}
      {/* Floating AI Concierge Copilot Chat Drawer (Bottom Right)      */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`fixed bottom-5 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-stone-200/90 flex flex-col overflow-hidden transition-all duration-200 ${
          isTweakOpen ? "flex" : "hidden"
        }`}
      >
        {/* Header */}
        <div className="bg-zinc-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-[#C5A880]/40 flex items-center justify-center text-xs font-serif font-black text-[#C5A880]">
              7
            </div>
            <div>
              <div className="text-xs font-bold flex items-center gap-1.5">
                <span>{locale === "en" ? "AI Concierge Copilot" : "AI 行程管家微调"}</span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <div className="text-[10px] text-zinc-400">
                {locale === "en" ? "Real-time route & stop optimization" : "定向增量微调 · 自动保留坐标与落客点"}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsTweakOpen(false)}
            className="w-7 h-7 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            title={t("close")}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 space-y-3.5 overflow-y-auto max-h-[55vh] text-xs">
          {/* Welcome Bubble */}
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
            </div>
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl rounded-tl-xs p-3 text-zinc-700 leading-relaxed">
              {locale === "en"
                ? "Hello! I am your 7ka travel copilot. Need to avoid steep stairs, swap dinner to a mild soup, add a tea break, or adjust pacing? Tap a preset below or message me!"
                : "您好！我是您的 7ka 专属行程管家。想避开台阶爬坡、换成温热清淡滋补晚餐、增加午后茶歇，或是替换某个景点？点击下方快捷指令或输入具体要求，我将自动重新规划动线。"}
            </div>
          </div>

          {/* Preset Quick Chips */}
          <div>
            <div className="text-[11px] font-semibold text-zinc-400 mb-1.5">
              {locale === "en" ? "Quick Presets" : "快捷微调指令"}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {presetChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  disabled={isTweaking}
                  onClick={() => executeAITweak(chip)}
                  className="text-[11px] px-2.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-zinc-800 border border-stone-200 transition disabled:opacity-50 select-none active:scale-[0.98] text-left cursor-pointer"
                >
                  + {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State Banner */}
          {isTweaking && (
            <div className="p-3 rounded-2xl bg-amber-50/90 border border-amber-200/70 text-xs font-medium text-amber-900 flex items-center gap-2.5 animate-pulse">
              <div className="w-3.5 h-3.5 border-2 border-amber-800 border-t-transparent rounded-full animate-spin shrink-0" />
              <span>{tweakLoadingText}</span>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            executeAITweak(tweakInput);
          }}
          className="p-3 border-t border-stone-100 bg-stone-50/80 flex items-center gap-2"
        >
          <input
            type="text"
            value={tweakInput}
            onChange={(e) => setTweakInput(e.target.value)}
            disabled={isTweaking}
            placeholder={
              locale === "en"
                ? "e.g. Change Day 2 dinner to non-spicy soup..."
                : "输入调整要求（如：第二天下午想去海边漫步、把晚餐换成参鸡汤...）"
            }
            className="flex-1 px-3.5 py-2 rounded-2xl bg-white border border-stone-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
          <button
            type="submit"
            disabled={isTweaking || !tweakInput.trim()}
            className="px-3.5 py-2 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition disabled:opacity-40 shrink-0 shadow-xs flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>
              {isTweaking
                ? locale === "en"
                  ? "Tuning..."
                  : "编排中..."
                : locale === "en"
                ? "Tweak"
                : "微调"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
