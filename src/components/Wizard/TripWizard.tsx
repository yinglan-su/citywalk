"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Sliders,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  X,
  Search,
} from "lucide-react";
import { TravelPlan, WizardConfig } from "@/types/itinerary";

interface TripWizardProps {
  onPlanGenerated: (plan: TravelPlan) => void;
  initialConfig?: Partial<WizardConfig>;
}

const RECOMMENDED_CITIES = [
  "延吉",
  "珲春",
  "长白山",
  "青岛",
  "威海",
  "成都",
  "西安",
  "京都",
];

const TRIP_FOCUS_OPTIONS = [
  { value: "foodie", label: "美食探店 (地道风味 · 必吃口碑)" },
  { value: "culture", label: "人文历史 (古建文博 · 深度叙事)" },
  { value: "nature", label: "自然山水 (滨海风光 · 户外疗愈)" },
];

const COMPANION_PILLS = [
  { value: "elders", label: "长辈同行 (65+)" },
  { value: "kids", label: "携儿童 / 推车" },
  { value: "couple", label: "情侣 / 朋友" },
  { value: "solo", label: "独行探索" },
  { value: "pets", label: "携带宠物" },
  { value: "wheelchair", label: "无障碍出行" },
];

const MOBILITY_PILLS = [
  { value: "low" as const, label: "轻松 (<5000步 · 电梯优先)" },
  { value: "moderate" as const, label: "适中 (8000-12000步)" },
  { value: "high" as const, label: "暴走 (15000+步)" },
];

const BUDGET_PILLS = [
  { value: "budget" as const, label: "经济实惠" },
  { value: "comfort" as const, label: "品质舒适" },
  { value: "luxury" as const, label: "高阶奢享" },
];

const TRANSPORT_PILLS = [
  { value: "charter_taxi" as const, label: "打车 / 包车优先" },
  { value: "public_transit" as const, label: "地铁 / 公交" },
  { value: "driving" as const, label: "自驾租车" },
];

const SLIDER_PRESETS = [1, 3, 5, 7, 14, 30];

const GENERATING_STEPS = [
  "正在规划最优动线，消除折返跑...",
  "正在核实场馆周一闭馆规则与实名预约...",
  "正在筛选长辈清淡菜系与地道口碑美食...",
  "正在编排点位地图与落客门廊...",
];

export const TripWizard: React.FC<TripWizardProps> = ({
  onPlanGenerated,
  initialConfig,
}) => {
  // Collapsed by default per user request
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Multi-select destinations array
  const [selectedCities, setSelectedCities] = useState<string[]>(["延吉", "珲春"]);
  const [cityInput, setCityInput] = useState<string>("");

  // Multi-select Trip Focus: foodie, culture, nature
  const [tripFocus, setTripFocus] = useState<string[]>(
    initialConfig?.interests || ["foodie", "culture"]
  );

  // Date Mode: "calendar" (Specific dates) or "slider" (1-30 days range)
  const [dateMode, setDateMode] = useState<"calendar" | "slider">("calendar");

  const defaultStartDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().slice(0, 10);
  };

  const [startDate, setStartDate] = useState<string>(
    initialConfig?.startDate || defaultStartDate()
  );
  const [durationDays, setDurationDays] = useState<number>(
    initialConfig?.durationDays || 4
  );

  const [mobility, setMobility] = useState<"low" | "moderate" | "high">(
    initialConfig?.mobility || "low"
  );
  const [companions, setCompanions] = useState<string[]>(
    initialConfig?.companions || ["elders"]
  );
  const [budgetTier, setBudgetTier] = useState<"budget" | "comfort" | "luxury">(
    initialConfig?.budgetTier || "comfort"
  );
  const [transportMode, setTransportMode] = useState<
    "charter_taxi" | "public_transit" | "driving"
  >(initialConfig?.transportMode || "charter_taxi");
  const [customNotes, setCustomNotes] = useState(
    initialConfig?.customNotes ||
      "必须吃东方水产帝王蟹；第一天抵达不排紧凑，让长辈充分休整；不吃辣。"
  );

  const [isLoading, setIsLoading] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Parse destinations from initialConfig
  useEffect(() => {
    if (initialConfig?.destinations) {
      const parsed = initialConfig.destinations
        .split(/[+,/、\s]+/)
        .map((s) => s.trim())
        .filter(Boolean);
      if (parsed.length > 0) {
        setSelectedCities(parsed);
      }
      setIsExpanded(true); // Automatically expand when remixing
    }
    if (initialConfig?.durationDays) setDurationDays(initialConfig.durationDays);
    if (initialConfig?.mobility) setMobility(initialConfig.mobility);
    if (initialConfig?.companions) setCompanions(initialConfig.companions);
    if (initialConfig?.interests && initialConfig.interests.length > 0) {
      setTripFocus(initialConfig.interests);
    }
  }, [initialConfig]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setInterval(() => {
        setPhaseIdx((i) => (i + 1) % GENERATING_STEPS.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isLoading]);

  // Destination manipulation
  const toggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const removeCity = (city: string) => {
    setSelectedCities((prev) => prev.filter((c) => c !== city));
  };

  const toggleTripFocus = (val: string) => {
    setTripFocus((prev) =>
      prev.includes(val)
        ? prev.length > 1
          ? prev.filter((i) => i !== val)
          : prev
        : [...prev, val]
    );
  };

  const handleAddCityInput = () => {
    const trimmed = cityInput.trim();
    if (!trimmed) return;
    if (!selectedCities.includes(trimmed)) {
      setSelectedCities((prev) => [...prev, trimmed]);
    }
    setCityInput("");
  };

  const handleCityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCityInput();
    }
  };

  // Compute date schedule details
  const getCalendarSummary = () => {
    if (!startDate) return `${durationDays} 天行程`;
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + (durationDays - 1));

    const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const startStr = `${start.getMonth() + 1}月${start.getDate()}日 (${weekdays[start.getDay()]})`;
    const endStr = `${end.getMonth() + 1}月${end.getDate()}日 (${weekdays[end.getDay()]})`;

    const nights = durationDays > 1 ? ` · ${durationDays - 1}晚` : "";
    return `${startStr} 至 ${endStr} · 共 ${durationDays}天${nights}`;
  };

  const toggleCompanion = (val: string) => {
    setCompanions((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleGenerate = async () => {
    const finalDestinations = [...selectedCities];
    if (cityInput.trim() && !finalDestinations.includes(cityInput.trim())) {
      finalDestinations.push(cityInput.trim());
    }

    if (finalDestinations.length === 0) {
      setErrorMsg("请至少选择或输入一个目的地");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setPhaseIdx(0);

    const config: WizardConfig = {
      destinations: finalDestinations.join(" + "),
      durationDays,
      mobility,
      companions,
      budgetTier,
      interests: tripFocus,
      transportMode,
      startDate: dateMode === "calendar" ? startDate : undefined,
      customNotes: customNotes.trim(),
    };

    try {
      const resp = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || "生成失败，请稍后重试");
      }

      onPlanGenerated(data.plan);
    } catch (err: any) {
      setErrorMsg(err.message || "请求超时或网络异常，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="generator-capsule" className="w-full">
      {/* ------------------------------------------------------------- */}
      {/* 1. Collapsed State: Four Seasons Sleek Minimalist Luxury Bar   */}
      {/* ------------------------------------------------------------- */}
      {!isExpanded ? (
        <div
          onClick={() => setIsExpanded(true)}
          className="bg-white rounded-3xl sm:rounded-full border border-stone-200/90 shadow-sm hover:shadow-md transition-all p-2.5 sm:p-2 pl-4 sm:pl-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 cursor-pointer group"
        >
          {/* Left: Destination Search Indicator */}
          <div className="flex items-center gap-3 py-1">
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-zinc-700 shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                目的地
              </div>
              <div className="text-sm font-bold text-zinc-900 flex items-center gap-1.5 flex-wrap">
                {selectedCities.length > 0 ? (
                  selectedCities.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded-md bg-stone-100 text-zinc-800 text-xs font-semibold"
                    >
                      {c}
                    </span>
                  ))
                ) : (
                  <span className="text-zinc-400 font-normal">
                    选择目的地，开启专属定制...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick city chips & Expand CTA */}
          <div className="flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100">
            <div className="hidden md:flex items-center gap-1.5">
              {RECOMMENDED_CITIES.slice(0, 4).map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCity(city);
                    setIsExpanded(true);
                  }}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition ${
                    selectedCities.includes(city)
                      ? "bg-zinc-900 text-white font-semibold"
                      : "bg-stone-50 hover:bg-stone-100 text-zinc-600 border border-stone-200"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <span>开始定制</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>
      ) : (
        /* ------------------------------------------------------------- */
        /* 2. Expanded State: Full Luxury Configurator                   */
        /* ------------------------------------------------------------- */
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-7 transition-all animate-fadeIn">
          {/* Header with Title and Collapse Button */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                行程专属配置
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                支持多目的地规划、周一避让与实操级动线编排
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-stone-100 transition flex items-center gap-1"
            >
              <span>收起</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 1. Multi-Select Destination Hub */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                目的地 (可多选组合)
              </span>
              <span className="text-[11px] text-zinc-400">
                已选 {selectedCities.length} 个城市/区域
              </span>
            </div>

            {/* Selected Chips & Add Input */}
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/90 flex flex-wrap gap-2 items-center min-h-[48px]">
              {selectedCities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-semibold shadow-xs"
                >
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>{city}</span>
                  <button
                    type="button"
                    onClick={() => removeCity(city)}
                    className="text-stone-300 hover:text-white p-0.5 rounded-full hover:bg-zinc-800 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              <div className="flex items-center gap-1 flex-1 min-w-[200px]">
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  onKeyDown={handleCityKeyDown}
                  placeholder="输入城市或景区，按回车添加..."
                  className="w-full text-xs font-medium py-1 px-2.5 bg-transparent text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                />
                {cityInput.trim() && (
                  <button
                    type="button"
                    onClick={handleAddCityInput}
                    className="px-2.5 py-1 rounded-full bg-zinc-800 text-white text-[11px] font-bold shrink-0 hover:bg-zinc-900"
                  >
                    添加
                  </button>
                )}
              </div>
            </div>

            {/* Recommended Quick Toggle Chips */}
            <div className="flex flex-wrap gap-1.5 mt-2.5 items-center">
              <span className="text-[11px] font-medium text-zinc-400 mr-1">
                快捷推荐:
              </span>
              {RECOMMENDED_CITIES.map((c) => {
                const isSelected = selectedCities.includes(c);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCity(c)}
                    className={`text-xs px-2.5 py-1 rounded-full transition border ${
                      isSelected
                        ? "bg-zinc-900 text-white border-zinc-900 font-semibold"
                        : "bg-white hover:bg-stone-100 text-zinc-700 border-stone-200"
                    }`}
                  >
                    {isSelected ? `✓ ${c}` : `+ ${c}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Date & Duration Dual Mode (Calendar vs 1-30 Days Slider) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                出行日期与天数
              </span>

              {/* Mode Switcher */}
              <div className="flex items-center p-0.5 rounded-xl bg-stone-100 text-[11px] font-semibold border border-stone-200/60">
                <button
                  type="button"
                  onClick={() => setDateMode("calendar")}
                  className={`px-2.5 py-1 rounded-lg transition select-none flex items-center gap-1 ${
                    dateMode === "calendar"
                      ? "bg-white text-zinc-900 shadow-xs font-bold"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  <Calendar className="w-3 h-3 text-[#C5A880]" />
                  <span>日历排期 (规避闭馆)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDateMode("slider")}
                  className={`px-2.5 py-1 rounded-lg transition select-none flex items-center gap-1 ${
                    dateMode === "slider"
                      ? "bg-white text-zinc-900 shadow-xs font-bold"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  <Sliders className="w-3 h-3 text-[#C5A880]" />
                  <span>1-30天滑块</span>
                </button>
              </div>
            </div>

            {/* Mode 1: Calendar Date Picker */}
            {dateMode === "calendar" ? (
              <div className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 w-full">
                    <label className="block text-[11px] font-medium text-zinc-500 mb-1">
                      出发日期
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white text-xs font-bold text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                  </div>

                  <div className="w-full sm:w-44">
                    <label className="block text-[11px] font-medium text-zinc-500 mb-1">
                      行程天数 (1-30天)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={durationDays}
                        onChange={(e) =>
                          setDurationDays(parseInt(e.target.value) || 1)
                        }
                        className="w-full accent-zinc-900 cursor-pointer"
                      />
                      <span className="font-extrabold text-xs text-zinc-900 shrink-0 w-8">
                        {durationDays}天
                      </span>
                    </div>
                  </div>
                </div>

                {/* Schedule Summary & Smart Closure Avoidance badge */}
                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] pt-1.5 border-t border-stone-200/60">
                  <span className="font-bold text-zinc-800">
                    {getCalendarSummary()}
                  </span>
                  <span className="text-zinc-700 font-medium bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                    已开启场馆实际开放日智能校准 (规避闭馆)
                  </span>
                </div>
              </div>
            ) : (
              /* Mode 2: 1-30 Day Range Slider */
              <div className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-medium">
                    滑动调整天数:
                  </span>
                  <span className="text-sm font-extrabold text-zinc-900 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">
                    {durationDays} 天{" "}
                    {durationDays > 1 ? `${durationDays - 1} 晚` : "往返"}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={durationDays}
                  onChange={(e) =>
                    setDurationDays(parseInt(e.target.value) || 1)
                  }
                  className="w-full accent-zinc-900 cursor-pointer"
                />

                {/* Snap presets */}
                <div className="flex items-center justify-between gap-1 text-[11px]">
                  {SLIDER_PRESETS.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setDurationDays(day)}
                      className={`px-2 py-0.5 rounded-md transition ${
                        durationDays === day
                          ? "bg-zinc-900 text-white font-bold"
                          : "bg-white text-zinc-600 border border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {day}天
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Trip Focus (Multi-select: Foodie, Culture, Nature) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                行程重点偏好 (可多选)
              </span>
              <span className="text-[11px] text-zinc-400">
                已选 {tripFocus.length} 项
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {TRIP_FOCUS_OPTIONS.map((f) => {
                const selected = tripFocus.includes(f.value);
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => toggleTripFocus(f.value)}
                    className={`py-2 px-3 rounded-2xl text-xs font-bold text-center border transition-all select-none active:scale-[0.98] ${
                      selected
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200"
                    }`}
                  >
                    {selected ? `✓ ${f.label}` : f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Who is Traveling? */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              同行偏好 (多选)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COMPANION_PILLS.map((p) => {
                const selected = companions.includes(p.value);
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => toggleCompanion(p.value)}
                    className={`py-2 px-3 rounded-2xl text-xs font-bold text-center border transition-all select-none active:scale-[0.98] ${
                      selected
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Mobility / Pace */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              体能与节奏
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {MOBILITY_PILLS.map((m) => (
                <button
                  key={m.value}
                  type="button"
                  onClick={() => setMobility(m.value)}
                  className={`py-2 px-3 rounded-2xl text-xs font-bold text-center border transition-all select-none active:scale-[0.98] ${
                    mobility === m.value
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                      : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* 5. Budget & Transport */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                预算级别
              </div>
              <div className="flex gap-1.5">
                {BUDGET_PILLS.map((b) => (
                  <button
                    key={b.value}
                    type="button"
                    onClick={() => setBudgetTier(b.value)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition select-none ${
                      budgetTier === b.value
                        ? "bg-zinc-900 text-white border-zinc-900"
                        : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                首选出行
              </div>
              <div className="flex gap-1.5">
                {TRANSPORT_PILLS.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setTransportMode(t.value)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition select-none ${
                      transportMode === t.value
                        ? "bg-zinc-900 text-white border-zinc-900"
                        : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Custom Wishlist */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              特殊要求与心愿 (选填)
            </div>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="例如：必吃东方水产帝王蟹；第一天下午才到；长辈不能吃辣..."
              className="w-full px-3.5 py-2.5 rounded-2xl border border-stone-200 text-xs font-medium text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-stone-50/50"
            />
          </div>

          {/* Error Alert */}
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-2 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Primary CTA Button: strictly "生成" */}
          <div>
            {isLoading ? (
              <div className="p-4 rounded-2xl bg-zinc-900 text-white text-center space-y-2">
                <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                <div className="text-xs font-semibold text-stone-300">
                  {GENERATING_STEPS[phaseIdx]}
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 active:scale-[0.99] text-white font-extrabold text-sm transition-all shadow-md tracking-wider flex items-center justify-center"
              >
                生成
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
