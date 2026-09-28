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
} from "lucide-react";
import { ActivityStop, DayItinerary, TravelPlan } from "@/types/itinerary";
import { DailyMap } from "./DailyMap";
import { compressPlan } from "@/lib/storage";
import { generateOfflineHtml } from "@/lib/export-html";

interface ItineraryDashboardProps {
  plan: TravelPlan;
  onBack: () => void;
  onPlanUpdated?: (updatedPlan: TravelPlan) => void;
}

const PRESET_TWEAK_CHIPS = [
  "长辈脚力减负 · 减少台阶与爬坡",
  "换清淡中餐 · 避免辛辣油腻",
  "下午增加特色咖啡馆漫步",
  "增加特色早市 / 夜市打卡",
];

export const ItineraryDashboard: React.FC<ItineraryDashboardProps> = ({
  plan,
  onBack,
  onPlanUpdated,
}) => {
  const [localPlan, setLocalPlan] = useState<TravelPlan>(plan);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(plan.meta.isPublic || false);

  // AI Tweak State (Tier 1)
  const [isTweaking, setIsTweaking] = useState(false);
  const [tweakInput, setTweakInput] = useState("");
  const [tweakLoadingText, setTweakLoadingText] = useState("AI 正在根据您的要求重新编排动线与落客点...");

  useEffect(() => {
    setLocalPlan(plan);
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
      showToast("已复制分享链接！任何人打开即看。");
    } catch (err) {
      showToast("复制链接失败");
    }
  };

  const handleDownloadOfflineHtml = () => {
    try {
      const htmlContent = generateOfflineHtml(localPlan);
      const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${localPlan.meta.tripTitle.replace(/\s+/g, "_")}_离线攻略.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("已下载离线网页！无网无信号均可打开。");
    } catch (err) {
      showToast("导出离线网页失败");
    }
  };

  const handlePublishToGallery = async () => {
    if (isPublished) {
      showToast("该路线已在探索广场中！");
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
        showToast("已发布至「探索广场」！");
      }
    } catch (err) {
      showToast("发布失败，请重试");
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
    setTweakLoadingText("AI 正在根据您的要求重新编排动线与落客点...");

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
        throw new Error(data.error || "微调失败，请稍后重试");
      }

      setLocalPlan(data.plan);
      onPlanUpdated?.(data.plan);
      setTweakInput("");
      showToast("已成功为您微调行程！");
    } catch (err: any) {
      showToast(err.message || "微调失败，请重试");
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
    showToast("已删除该点位，地图路径已更新");
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
    showToast("已调整点位游览顺序");
  };

  const handleSwapActivity = (actName: string) => {
    executeAITweak(
      `请将第 ${currentDay.dayNumber} 天的景点「${actName}」替换为同区域其他适合的特色景点或漫步点位，确保落客和动线顺畅。`
    );
  };

  const handleSwapDining = (mealType: string, currentRestaurant: string) => {
    executeAITweak(
      `请将第 ${currentDay.dayNumber} 天的${mealType}（目前是「${currentRestaurant}」）替换为同商圈其他口碑好、适口性佳的特色餐厅。`
    );
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
          返回画廊
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
            <span>{isPublished ? "已公开" : "公开到广场"}</span>
          </button>

          <button
            type="button"
            onClick={handleShareLink}
            className="px-3 py-1.5 rounded-full bg-white hover:bg-stone-100 text-zinc-700 text-xs font-semibold transition flex items-center gap-1 border border-stone-200"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>分享</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadOfflineHtml}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>离线保存</span>
          </button>
        </div>
      </div>

      {/* Hero Title & Badges */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xs mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold">
            {localPlan.meta.durationDays} 天行程
          </span>
          <span className="px-2.5 py-1 rounded-full bg-stone-100 text-zinc-700 text-xs font-semibold">
            {localPlan.meta.budgetTier === "budget"
              ? "经济"
              : localPlan.meta.budgetTier === "comfort"
              ? "品质"
              : "奢享"}
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
      {/* Tier 1: AI Concierge Copilot Tweak Capsule                     */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-4 sm:p-5 shadow-xs mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-zinc-900 text-[#C5A880] flex items-center justify-center text-xs font-serif font-black">
              7
            </div>
            <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
              AI 行程管家微调
            </span>
          </div>
          <span className="text-[11px] text-zinc-400">
            定向增量微调，自动保留既定坐标与落客点
          </span>
        </div>

        {/* Preset Quick Tweak Chips */}
        <div className="flex flex-wrap gap-1.5">
          {PRESET_TWEAK_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              disabled={isTweaking}
              onClick={() => executeAITweak(chip)}
              className="text-xs px-2.5 py-1 rounded-full bg-stone-50 hover:bg-stone-100 text-zinc-700 border border-stone-200 transition disabled:opacity-50 select-none active:scale-[0.98]"
            >
              + {chip}
            </button>
          ))}
        </div>

        {/* Custom Prompt Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            executeAITweak(tweakInput);
          }}
          className="flex items-center gap-2 pt-1"
        >
          <input
            type="text"
            value={tweakInput}
            onChange={(e) => setTweakInput(e.target.value)}
            disabled={isTweaking}
            placeholder="输入个性化调整要求（如：第二天下午想去海边漫步、把晚餐换成参鸡汤...）"
            className="flex-1 px-3.5 py-2 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
          <button
            type="submit"
            disabled={isTweaking || !tweakInput.trim()}
            className="px-4 py-2 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition disabled:opacity-40 shrink-0 shadow-xs flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>{isTweaking ? "编排中..." : "微调"}</span>
          </button>
        </form>

        {/* Loading State Banner */}
        {isTweaking && (
          <div className="p-2.5 rounded-2xl bg-stone-100 text-center text-xs font-semibold text-zinc-700 flex items-center justify-center gap-2 animate-pulse border border-stone-200/80">
            <div className="w-3.5 h-3.5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
            <span>{tweakLoadingText}</span>
          </div>
        )}
      </div>

      {/* Reservation Checklist Banner */}
      {localPlan.reservationChecklist &&
        localPlan.reservationChecklist.length > 0 && (
          <div className="bg-white rounded-3xl border border-stone-200/90 p-5 mb-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-[#C5A880]" />
              <span className="font-bold text-xs text-zinc-900 uppercase tracking-wide">
                提前预约放票提醒
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
                    提前{res.daysInAdvance}天
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
              主题: {currentDay.theme}
            </span>
          </div>

          {/* Midday rest callout */}
          {currentDay.hotelRestBlock && currentDay.hotelRestBlock.enabled && (
            <div className="mb-4 p-3 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-2.5 text-xs text-zinc-800">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <div>
                <strong>
                  午间酒店休整 ({currentDay.hotelRestBlock.recommendedTime})
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
                      ? "打车"
                      : item.mode === "charter"
                      ? "包车"
                      : "步行"}{" "}
                    {item.estimatedMinutes}分钟 ({item.distanceKm}km)
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
                      title="AI 换一个同区域景点"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    {idx > 0 && (
                      <button
                        type="button"
                        onClick={() => handleMoveActivity(idx, "up")}
                        className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-stone-100 transition"
                        title="上移顺序"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {idx < currentDay.timeline.length - 1 && (
                      <button
                        type="button"
                        onClick={() => handleMoveActivity(idx, "down")}
                        className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-stone-100 transition"
                        title="下移顺序"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteActivity(idx)}
                      className="p-1.5 rounded-full text-zinc-400 hover:text-red-600 hover:bg-red-50 transition"
                      title="删除该点位"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-zinc-400 mb-2">
                  游玩约 {act.durationMinutes} 分钟
                </div>

                {/* Drop-off landmark badge */}
                <div className="my-2.5 px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200/90 text-xs text-zinc-800 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <div>
                    <strong>落客导航目标:</strong> {act.dropOffPoint}
                  </div>
                </div>

                {/* Reservation badge */}
                {act.reservationRequired && (
                  <div className="my-2 px-3 py-1 rounded-xl bg-stone-100 text-zinc-800 text-xs font-medium border border-stone-200 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>需预约: {act.reservationChannel}</span>
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
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                      <Camera className="w-3 h-3 text-[#C5A880]" />
                      <span>最佳打卡机位</span>
                    </div>
                  </div>
                )}

                {/* Photo tip guidance */}
                {act.photoTip && (
                  <div className="my-2 px-3 py-2 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs flex items-start gap-2">
                    <Camera className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-zinc-900">取景打卡指引: </span>
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
              </div>
            );
          })}
        </div>

        {/* Dining Recommendations (with Tier 2 In-Place Actions) */}
        <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-xs">
          <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#C5A880]" />
            当日地道美食推荐
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentDay.meals?.lunch && (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 relative group">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-zinc-900">
                    午餐 · {currentDay.meals.lunch.restaurantName}
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
                          "午餐",
                          currentDay.meals.lunch.restaurantName
                        )
                      }
                      className="text-[10px] text-zinc-400 hover:text-zinc-900 flex items-center gap-0.5 hover:underline transition disabled:opacity-40"
                      title="AI 换一家同商圈餐厅"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      换一家
                    </button>
                  </div>
                </div>
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
                  适口建议: {currentDay.meals.lunch.elderKidSuitability}
                </div>
              </div>
            )}

            {currentDay.meals?.dinner && (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 relative group">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-zinc-900">
                    晚餐 · {currentDay.meals.dinner.restaurantName}
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
                          "晚餐",
                          currentDay.meals.dinner.restaurantName
                        )
                      }
                      className="text-[10px] text-zinc-400 hover:text-zinc-900 flex items-center gap-0.5 hover:underline transition disabled:opacity-40"
                      title="AI 换一家同商圈餐厅"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      换一家
                    </button>
                  </div>
                </div>
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
                  适口建议: {currentDay.meals.dinner.elderKidSuitability}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Daily Tips */}
        {currentDay.dailyTips && currentDay.dailyTips.length > 0 && (
          <div className="bg-stone-50 rounded-3xl p-5 border border-stone-200/80">
            <div className="text-xs font-bold text-zinc-900 mb-2">当日贴士</div>
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
    </div>
  );
};
