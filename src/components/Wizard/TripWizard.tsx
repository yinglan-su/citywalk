"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  MapPin,
  Calendar,
  Sliders,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  X,
  Search,
  Globe,
  Check,
  Languages,
} from "lucide-react";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { useLanguage } from "@/context/LanguageContext";
import {
  WORLD_CITIES,
  searchWorldCities,
  getCityDisplayName,
  getCityPrimaryName,
  isRecognizedCity,
} from "@/data/world-cities";

interface TripWizardProps {
  onPlanGenerated: (plan: TravelPlan) => void;
  initialConfig?: Partial<WizardConfig>;
}

const SLIDER_PRESETS = [1, 3, 5, 7, 14, 30];


export const TripWizard: React.FC<TripWizardProps> = ({
  onPlanGenerated,
  initialConfig,
}) => {
  const { locale, t } = useLanguage();

  const recommendedCities =
    locale === "en"
      ? ["Kyoto", "Tokyo", "Paris", "Qingdao", "Yanji", "Seoul", "London"]
      : ["延吉", "珲春", "长白山", "青岛", "威海", "成都", "西安", "京都"];

  const tripFocusOptions = [
    { value: "foodie", label: t("focusFoodie") },
    { value: "culture", label: t("focusCulture") },
    { value: "nature", label: t("focusNature") },
  ];

  const companionPills = [
    { value: "elders", label: t("compElders") },
    { value: "kids", label: t("compKids") },
    { value: "couple", label: t("compCouple") },
    { value: "solo", label: t("compSolo") },
    { value: "pets", label: t("compPets") },
    { value: "wheelchair", label: t("compWheelchair") },
  ];

  const mobilityPills = [
    { value: "low" as const, label: t("mobilityLow") },
    { value: "moderate" as const, label: t("mobilityMod") },
    { value: "high" as const, label: t("mobilityHigh") },
  ];

  const budgetPills = [
    { value: "budget" as const, label: t("budgetLow") },
    { value: "comfort" as const, label: t("budgetMid") },
    { value: "luxury" as const, label: t("budgetHigh") },
  ];

  const transportPills = [
    { value: "taxi" as const, label: t("transportTaxi") },
    { value: "public_transit" as const, label: t("transportPublic") },
    { value: "driving" as const, label: t("transportDrive") },
  ];

  const generatingSteps =
    locale === "en"
      ? [
          "Optimizing smooth routes and daily pacing...",
          "Checking opening hours and visit recommendations...",
          "Curating mild, authentic local dining with high ratings...",
          "Organizing map coordinates and convenient drop-off spots...",
        ]
      : [
          "正在规划顺畅舒缓的每日路线...",
          "正在核对场馆开放时间与参访建议...",
          "正在甄选清淡适口的地道口碑美食...",
          "正在整理地图坐标与便捷落客点...",
        ];

  // Collapsed by default per user request
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Multi-select destinations array (starts empty without hardcoded defaults)
  const [selectedCities, setSelectedCities] = useState<string[]>(() => {
    if (initialConfig?.destinations) {
      return initialConfig.destinations
        .split(/[+,/、\s]+/)
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return [];
  });
  const [cityInput, setCityInput] = useState<string>("");
  const [isCitySuggestionsOpen, setIsCitySuggestionsOpen] = useState(false);
  const cityInputContainerRef = useRef<HTMLDivElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  // Live matching from world cities database (shows popular gateways when input is empty)
  const matchingCities = useMemo(() => {
    if (!cityInput.trim()) {
      const popularIds = [
        "cn_beijing",
        "cn_shanghai",
        "cn_xian",
        "cn_chengdu",
        "cn_qingdao",
        "cn_yanji",
        "jp_kyoto",
        "jp_tokyo",
        "cn_hongkong",
        "sg_singapore",
      ];
      return popularIds
        .map((id) => WORLD_CITIES.find((c) => c.id === id))
        .filter((c): c is (typeof WORLD_CITIES)[number] => Boolean(c));
    }
    return searchWorldCities(cityInput, (locale as "zh" | "en") || "zh", 8);
  }, [cityInput, locale]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cityInputContainerRef.current &&
        !cityInputContainerRef.current.contains(e.target as Node)
      ) {
        setIsCitySuggestionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  // Default to empty array - do NOT pre-select elders unless explicitly passed
  const [companions, setCompanions] = useState<string[]>(
    initialConfig?.companions || []
  );
  const [travelStyle, setTravelStyle] = useState<"classic" | "trending" | "niche">(
    (initialConfig?.travelStyle as any) || "classic"
  );
  const [budgetTier, setBudgetTier] = useState<"budget" | "comfort" | "luxury">(
    initialConfig?.budgetTier || "comfort"
  );
  const [transportMode, setTransportMode] = useState<
    "taxi" | "charter_taxi" | "public_transit" | "driving"
  >((initialConfig?.transportMode as any) || "taxi");
  const [customNotes, setCustomNotes] = useState<string>(
    initialConfig?.customNotes || ""
  );
  const [isForeignDestination, setIsForeignDestination] = useState<boolean>(
    initialConfig?.isForeignDestination ?? false
  );
  const [hasManuallySetForeign, setHasManuallySetForeign] = useState<boolean>(
    initialConfig?.isForeignDestination !== undefined
  );
  const [localLanguageLevel, setLocalLanguageLevel] = useState<
    "none" | "basic" | "fluent"
  >(initialConfig?.localLanguageLevel || "none");

  const [isLoading, setIsLoading] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Auto-detect whether selected cities are foreign unless user manually toggled
  useEffect(() => {
    if (hasManuallySetForeign || selectedCities.length === 0) return;
    const englishSpeakingCountries = [
      "United States",
      "United Kingdom",
      "Australia",
      "New Zealand",
      "Canada",
    ];
    let detectedForeign = false;
    for (const c of selectedCities) {
      const lower = c.toLowerCase();
      const matched = WORLD_CITIES.find(
        (w) =>
          w.nameZh === c ||
          w.nameEn.toLowerCase() === lower ||
          w.pinyin === lower
      );
      if (matched) {
        if (locale === "zh" && matched.region !== "china") {
          detectedForeign = true;
          break;
        }
        if (
          locale === "en" &&
          !englishSpeakingCountries.includes(matched.countryEn)
        ) {
          detectedForeign = true;
          break;
        }
      }
    }
    setIsForeignDestination(detectedForeign);
  }, [selectedCities, locale, hasManuallySetForeign]);

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
    if (initialConfig?.travelStyle) setTravelStyle(initialConfig.travelStyle);
    if (initialConfig?.interests && initialConfig.interests.length > 0) {
      setTripFocus(initialConfig.interests);
    }
    if (initialConfig?.isForeignDestination !== undefined) {
      setIsForeignDestination(initialConfig.isForeignDestination);
      setHasManuallySetForeign(true);
    }
    if (initialConfig?.localLanguageLevel) {
      setLocalLanguageLevel(initialConfig.localLanguageLevel);
    }
  }, [initialConfig]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setInterval(() => {
        setPhaseIdx((i) => (i + 1) % generatingSteps.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isLoading, generatingSteps.length]);

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

  const handleAddCityInput = (cityName?: string) => {
    const trimmed = (cityName || cityInput).trim();
    if (!trimmed) return;
    if (!selectedCities.includes(trimmed)) {
      setSelectedCities((prev) => [...prev, trimmed]);
    }
    setCityInput("");
    setIsCitySuggestionsOpen(false);
  };

  const handleCityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (matchingCities.length > 0) {
        const topMatch = getCityPrimaryName(
          matchingCities[0],
          (locale as "zh" | "en") || "zh"
        );
        handleAddCityInput(topMatch);
      } else {
        handleAddCityInput();
      }
    } else if (e.key === "Escape") {
      setIsCitySuggestionsOpen(false);
    }
  };

  // Compute date schedule details
  const getCalendarSummary = () => {
    if (!startDate) {
      return locale === "en" ? `${durationDays} Days Itinerary` : `${durationDays} 天行程`;
    }
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + (durationDays - 1));

    if (locale === "en") {
      const weekdaysEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const startStr = `${monthsEn[start.getMonth()]} ${start.getDate()} (${weekdaysEn[start.getDay()]})`;
      const endStr = `${monthsEn[end.getMonth()]} ${end.getDate()} (${weekdaysEn[end.getDay()]})`;
      const nights = durationDays > 1 ? ` · ${durationDays - 1} Nights` : "";
      return `${startStr} - ${endStr} · Total ${durationDays} Days${nights}`;
    }

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
      setErrorMsg(t("destinationRequired"));
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
      travelStyle,
      startDate: dateMode === "calendar" ? startDate : undefined,
      customNotes: customNotes.trim(),
      locale,
      isForeignDestination,
      localLanguageLevel: isForeignDestination ? localLanguageLevel : undefined,
    };

    try {
      const resp = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || t("failedToGenerate"));
      }

      onPlanGenerated(data.plan);
    } catch (err: any) {
      setErrorMsg(err.message || t("timeoutError"));
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
          onClick={() => {
            setIsExpanded(true);
            setIsCitySuggestionsOpen(true);
            setTimeout(() => cityInputRef.current?.focus(), 60);
          }}
          className="bg-white rounded-3xl sm:rounded-full border border-stone-200/90 shadow-sm hover:shadow-md transition-all p-2.5 sm:p-2 pl-4 sm:pl-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 cursor-pointer group"
        >
          {/* Left: Destination Search Indicator */}
          <div className="flex items-center gap-3 py-1">
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-zinc-700 shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                {t("destLabel")}
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
                  <span className="text-zinc-500 font-medium group-hover:text-zinc-900 transition-colors underline decoration-stone-300 underline-offset-4">
                    {locale === "en"
                      ? "Select destination..."
                      : "选择目的地..."}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick city chips & Expand CTA */}
          <div className="flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100">
            <div className="hidden md:flex items-center gap-1.5">
              {recommendedCities.slice(0, 4).map((city) => (
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
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
                setIsCitySuggestionsOpen(true);
                setTimeout(() => cityInputRef.current?.focus(), 60);
              }}
              className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <span>{locale === "en" ? "Customize" : "定制"}</span>
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
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
              {t("wizardTitle")}
            </h2>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-stone-100 transition flex items-center gap-1"
            >
              <span>{locale === "en" ? "Collapse" : "收起"}</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 1. Multi-Select Destination Hub */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                {t("destLabel")}
              </span>
            </div>

            {/* Selected Chips & Add Input */}
            <div
              onClick={() => {
                cityInputRef.current?.focus();
                setIsCitySuggestionsOpen(true);
              }}
              className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/90 hover:border-stone-400 focus-within:border-zinc-900 focus-within:bg-white transition-colors flex flex-wrap gap-2 items-center min-h-[48px] cursor-text"
            >
              {selectedCities.map((city) => (
                <span
                  key={city}
                  onClick={(e) => e.stopPropagation()}
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

              <div
                ref={cityInputContainerRef}
                className="relative flex items-center gap-1 flex-1 min-w-[220px]"
              >
                <input
                  ref={cityInputRef}
                  type="text"
                  value={cityInput}
                  onChange={(e) => {
                    setCityInput(e.target.value);
                    setIsCitySuggestionsOpen(true);
                  }}
                  onFocus={() => {
                    setIsCitySuggestionsOpen(true);
                  }}
                  onClick={() => {
                    setIsCitySuggestionsOpen(true);
                  }}
                  onKeyDown={handleCityKeyDown}
                  placeholder={
                    selectedCities.length === 0
                      ? locale === "en"
                        ? "Click to pick or type any world city (e.g. Beijing, Kyoto, Paris)..."
                        : "点击选择或输入全球任意城市（如：北京、京都、巴黎）..."
                      : t("addCityPlaceholder")
                  }
                  className="w-full text-xs font-medium py-1 px-2.5 bg-transparent text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                />
                {cityInput.trim() && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddCityInput();
                    }}
                    className="px-2.5 py-1 rounded-full bg-zinc-800 text-white text-[11px] font-bold shrink-0 hover:bg-zinc-900 cursor-pointer"
                  >
                    {t("addCityBtn")}
                  </button>
                )}

                {/* World City Autocomplete Suggestions */}
                {isCitySuggestionsOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full left-0 mt-2 w-80 sm:w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-xl border border-stone-200 z-50 overflow-hidden py-1.5 animate-fadeIn"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider border-b border-stone-100 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-[#C5A880]" />
                        <span>
                          {!cityInput.trim()
                            ? locale === "en"
                              ? "Popular Destinations · Type any city"
                              : "热门目的地 · 支持直接输入全球任意城市"
                            : locale === "en"
                            ? "World Cities Database"
                            : "全球权威城市库验证"}
                        </span>
                      </span>
                      <span className="text-[9px] text-zinc-400">
                        {!cityInput.trim()
                          ? locale === "en"
                            ? "Click to select"
                            : "点击直接选择"
                          : matchingCities.length > 0
                          ? locale === "en"
                            ? `${matchingCities.length} found`
                            : `匹配到 ${matchingCities.length} 个城市`
                          : locale === "en"
                          ? "Custom entry"
                          : "自定义名称"}
                      </span>
                    </div>

                    {matchingCities.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto">
                        {matchingCities.map((city) => {
                          const primaryName = getCityPrimaryName(
                            city,
                            (locale as "zh" | "en") || "zh"
                          );
                          const isAlreadySelected = selectedCities.includes(primaryName);
                          return (
                            <button
                              key={city.id}
                              type="button"
                              onClick={() => handleAddCityInput(primaryName)}
                              className="w-full px-3 py-2 text-left hover:bg-stone-50 transition flex items-center justify-between gap-2 text-xs group cursor-pointer border-b border-stone-50 last:border-b-0"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <MapPin className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 shrink-0" />
                                <span className="font-semibold text-zinc-900">
                                   {locale === "en" ? city.nameEn : city.nameZh}
                                </span>
                                <span className="text-[11px] text-zinc-400 truncate">
                                  {locale === "en" ? city.nameZh : city.nameEn}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-zinc-600 font-medium">
                                  {locale === "en" ? city.countryEn : city.countryZh}
                                </span>
                                {isAlreadySelected && (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-3 text-xs">
                        <div className="flex items-start gap-2 text-zinc-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200/80 mb-2">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#C5A880]" />
                          <div className="text-[11px] leading-relaxed">
                            {locale === "en"
                              ? `"${cityInput.trim()}" is not in the top world cities directory, but can still be planned.`
                              : `「${cityInput.trim()}」未收录在全球主要旅游城市库中，仍可为您规划，请确认拼写准确。`}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleAddCityInput()}
                          className="w-full py-1.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition text-center cursor-pointer shadow-xs"
                        >
                          {locale === "en"
                            ? `Add "${cityInput.trim()}" as custom destination`
                            : `确认添加「${cityInput.trim()}」为目的地`}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Recommended Quick Toggle Chips */}
            <div className="flex flex-wrap gap-1.5 mt-2.5 items-center">
              <span className="text-[11px] font-medium text-zinc-400 mr-1">
                {t("recommendedDestinations")}:
              </span>
              {recommendedCities.map((c) => {
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

            {/* 1.5 Foreign Destination Toggle & Conditional Local Language Level */}
            <div className="mt-4 pt-3.5 border-t border-stone-100 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#9E825A]" />
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    {locale === "en"
                      ? "Is this a foreign destination for you?"
                      : "是否为异国 / 外语目的地？"}
                  </span>
                </div>

                <div className="flex items-center p-0.5 rounded-xl bg-stone-100 text-xs font-semibold border border-stone-200/70 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setIsForeignDestination(false);
                      setHasManuallySetForeign(true);
                    }}
                    className={`px-3 py-1 rounded-lg transition select-none cursor-pointer ${
                      !isForeignDestination
                        ? "bg-white text-zinc-900 shadow-xs font-bold"
                        : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    {locale === "en" ? "Domestic" : "国内 / 母语区"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsForeignDestination(true);
                      setHasManuallySetForeign(true);
                    }}
                    className={`px-3 py-1 rounded-lg transition select-none cursor-pointer flex items-center gap-1.5 ${
                      isForeignDestination
                        ? "bg-zinc-900 text-white shadow-xs font-bold"
                        : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    <Languages className="w-3 h-3 text-[#C5A880]" />
                    <span>
                      {locale === "en" ? "Foreign Destination" : "异国 / 外语出行"}
                    </span>
                  </button>
                </div>
              </div>

              {isForeignDestination && (
                <div className="p-3.5 rounded-2xl bg-stone-50/90 border border-stone-200/80 space-y-2.5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5 text-[#9E825A]" />
                      <span>
                        {locale === "en"
                          ? "Local Language Level"
                          : "当地语言熟悉程度"}
                      </span>
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      {locale === "en"
                        ? "Adapts bilingual driver cards, menus & booking tips"
                        : "自动匹配双语指路卡、点餐对照与外宾预约提示"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        value: "none" as const,
                        labelEn: "Zero / Survival",
                        labelZh: "完全不会",
                        descEn: "Bilingual taxi cards & point-to-order menus",
                        descZh: "附双语打车指路卡与指图点餐对照",
                      },
                      {
                        value: "basic" as const,
                        labelEn: "Basic Phrases",
                        labelZh: "简单日常",
                        descEn: "Key local names & foreign booking tips",
                        descZh: "掌握基础问路，附关键地名与外宾提示",
                      },
                      {
                        value: "fluent" as const,
                        labelEn: "Fluent / Native",
                        labelZh: "流利无碍",
                        descEn: "No barrier · unlock local apps & deep gems",
                        descZh: "无语言障碍 · 深入本地预约平台与秘境",
                      },
                    ].map((lvl) => {
                      const selected = localLanguageLevel === lvl.value;
                      return (
                        <button
                          key={lvl.value}
                          type="button"
                          onClick={() => setLocalLanguageLevel(lvl.value)}
                          className={`p-2.5 rounded-xl text-left border transition-all select-none cursor-pointer flex flex-col justify-between ${
                            selected
                              ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                              : "bg-white hover:bg-stone-100 text-zinc-700 border-stone-200/90"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-0.5">
                            <span className="text-xs font-bold">
                              {locale === "en" ? lvl.labelEn : lvl.labelZh}
                            </span>
                            {selected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                            )}
                          </div>
                          <span
                            className={`text-[10px] leading-tight ${
                              selected ? "text-stone-300" : "text-zinc-400"
                            }`}
                          >
                            {locale === "en" ? lvl.descEn : lvl.descZh}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. Date & Duration Dual Mode (Calendar vs 1-30 Days Slider) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                {t("datesAndDuration")}
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
                  <span>{t("calendarTab")}</span>
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
                  <span>{t("sliderTab")}</span>
                </button>
              </div>
            </div>

            {/* Mode 1: Calendar Date Picker */}
            {dateMode === "calendar" ? (
              <div className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 w-full">
                    <label className="block text-[11px] font-medium text-zinc-500 mb-1">
                      {t("departureDate")}
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
                      {t("durationSliderLabel")}
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
                        {durationDays}{t("daysUnit")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Schedule Summary */}
                <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-stone-200/60">
                  <span className="font-semibold text-zinc-700">
                    {getCalendarSummary()}
                  </span>
                </div>

              </div>
            ) : (
              /* Mode 2: 1-30 Day Range Slider */
              <div className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-medium">
                    {t("slideAdjust")}
                  </span>
                  <span className="text-sm font-extrabold text-zinc-900 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">
                    {durationDays} {t("daysUnit")}{" "}
                    {durationDays > 1 ? `${durationDays - 1} ${t("nightsUnit")}` : t("roundTrip")}
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

              </div>
            )}
          </div>

          {/* 3. Trip Focus (Multi-select: Foodie, Culture, Nature) */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              {t("focusLabel")}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {tripFocusOptions.map((f) => {
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

          {/* 3.5 Travel Style (Classic Highlights, Trending & Photogenic, Hidden Gems) */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>{locale === "en" ? "Travel Style" : "旅行风格"}</span>
              <span className="text-[10px] text-zinc-400 font-normal">
                {locale === "en" ? "Curates vibe & spot selection" : "决定选点倾向与打卡调性"}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                {
                  value: "classic" as const,
                  labelZh: "经典必游",
                  labelEn: "Classic Highlights",
                  descZh: "地标名胜与城市精髓",
                  descEn: "Iconic landmarks & culture",
                },
                {
                  value: "trending" as const,
                  labelZh: "热门打卡",
                  labelEn: "Trending & Photogenic",
                  descZh: "出片胜地与美学设计",
                  descEn: "Social hits & photo spots",
                },
                {
                  value: "niche" as const,
                  labelZh: "小众秘境",
                  labelEn: "Hidden Gems",
                  descZh: "清幽古韵与避开人潮",
                  descEn: "Quiet & off the beaten path",
                },
              ].map((style) => {
                const selected = travelStyle === style.value;
                return (
                  <button
                    key={style.value}
                    type="button"
                    onClick={() => setTravelStyle(style.value)}
                    className={`p-3 rounded-2xl text-left border transition-all select-none cursor-pointer flex flex-col justify-between ${
                      selected
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200/80"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-bold">
                        {locale === "en" ? style.labelEn : style.labelZh}
                      </span>
                      {selected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E825A]" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] leading-tight ${
                        selected ? "text-stone-300" : "text-zinc-400"
                      }`}
                    >
                      {locale === "en" ? style.descEn : style.descZh}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Who is Traveling? */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              {t("companionsLabel")}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {companionPills.map((p) => {
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
              {t("mobilityLabel")}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {mobilityPills.map((m) => (
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
                {t("budgetLabel")}
              </div>
              <div className="flex gap-1.5">
                {budgetPills.map((b) => (
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
                {t("transportLabel")}
              </div>
              <div className="flex gap-1.5">
                {transportPills.map((tPill) => (
                  <button
                    key={tPill.value}
                    type="button"
                    onClick={() => setTransportMode(tPill.value)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition select-none ${
                      transportMode === tPill.value
                        ? "bg-zinc-900 text-white border-zinc-900"
                        : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200"
                    }`}
                  >
                    {tPill.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Custom Wishlist */}
          <div>
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              {t("specialRequestsLabel")}
            </div>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder={t("specialRequestsPlaceholder")}
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
                  {generatingSteps[phaseIdx]}
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 active:scale-[0.99] text-white font-extrabold text-sm transition-all shadow-md tracking-wider flex items-center justify-center"
              >
                {t("generateBtn")}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
