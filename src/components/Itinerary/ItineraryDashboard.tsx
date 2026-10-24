"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Check,
  Building2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  ActivityStop,
  DayItinerary,
  TransitConnector,
  TravelPlan,
  DiningAlternative,
  DiningCard,
} from "@/types/itinerary";
import { DailyMap } from "./DailyMap";
import { compressPlan, saveLocalPlan } from "@/lib/storage";
import { generateOfflineHtml } from "@/lib/export-html";
import { useLanguage } from "@/context/LanguageContext";
import { localizeCuratedPlan } from "@/lib/curated-plans-provider";
import { getDefaultHotelsForPlan } from "@/data/default-hotels";
import { getDefaultDiningAlternatives } from "@/data/default-dining";
import { resolveActivityImage, resolveDiningImage } from "@/lib/image-resolver";

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

const resolveStopDisplay = (
  stop: string,
  timeline?: (ActivityStop | TransitConnector)[],
  allDays?: DayItinerary[]
): string => {
  if (!stop) return "";
  if (!/^[a-z]{2}_d\d+/.test(stop)) {
    return stop;
  }
  if (timeline) {
    const act = timeline.find(
      (t) => t.type === "activity" && (t as ActivityStop).id === stop
    ) as ActivityStop | undefined;
    if (act?.name) return act.name.split(" · ")[0].trim();
  }
  if (allDays) {
    for (const d of allDays) {
      const act = d.timeline.find(
        (t) => t.type === "activity" && (t as ActivityStop).id === stop
      ) as ActivityStop | undefined;
      if (act?.name) return act.name.split(" · ")[0].trim();
    }
  }
  if (stop.includes("hotel") || stop.includes("rest")) {
    if (allDays && allDays.length > 0) {
      const hotelAct = allDays[0].timeline.find(
        (t) =>
          t.type === "activity" &&
          ((t as ActivityStop).id?.includes("hotel") ||
            (t as ActivityStop).category === "rest")
      ) as ActivityStop | undefined;
      if (hotelAct?.name) return hotelAct.name.split(" · ")[0].trim();
    }
    return "酒店";
  }
  return stop;
};

const getDinerOptionsForMeal = (
  meal: DiningCard | undefined,
  destinations: string[],
  locale: "zh" | "en"
): DiningAlternative[] => {
  if (!meal) return [];
  if (meal.allDiners && meal.allDiners.length > 0) {
    return meal.allDiners;
  }
  const baseDiner: DiningAlternative = {
    restaurantName: meal.restaurantName,
    cuisineStyle: meal.cuisineStyle,
    recommendedDishes: meal.recommendedDishes,
    elderKidSuitability: meal.elderKidSuitability,
    perPersonBudget: meal.perPersonBudget,
    addressOrDropOff: meal.addressOrDropOff,
    image: meal.image,
    photoTip: meal.photoTip,
    googleRating: meal.googleRating,
    googleMapsUrl: meal.googleMapsUrl,
    dianpingUrl: meal.dianpingUrl,
  };

  const existingAlts =
    meal.alternatives && meal.alternatives.length > 0
      ? meal.alternatives
      : getDefaultDiningAlternatives(destinations, meal.restaurantName, locale);

  return [baseDiner, ...existingAlts];
};

interface ActivityTweakChip {
  labelZh: string;
  labelEn: string;
  promptZh: string;
  promptEn: string;
}

const getActivityTweakChips = (
  act: ActivityStop,
  actIdx: number,
  totalActs: number,
  dayNumber: number,
  locale: string
): ActivityTweakChip[] => {
  const name = act.name || "";
  const desc = act.description || "";
  const combined = `${name} ${desc}`.toLowerCase();

  // 1. Morning / First stop
  if (actIdx === 0) {
    return [
      {
        labelZh: "推迟出发 / 睡到自然醒 (10:00 出发)",
        labelEn: "Later 10am Start",
        promptZh: `请将第 ${dayNumber} 天上午出发时间调整为 10:00 左右（睡到自然醒节奏），替换或微调「${name}」，确保上午节奏更加悠闲从容。`,
        promptEn: `Please adjust Day ${dayNumber} morning start to around 10:00 AM (slow, relaxed morning pace), replacing or fine-tuning "${name}" with smooth logistics.`,
      },
      {
        labelZh: "换晨光清幽漫步 / 避开人潮",
        labelEn: "Quiet Morning Stroll",
        promptZh: `请将第 ${dayNumber} 天首个景点「${name}」替换为同区域清晨人少幽静、空气清新的慢调公园或历史街巷漫步点。`,
        promptEn: `Please replace the first stop "${name}" on Day ${dayNumber} with a quiet, scenic morning stroll or garden in the same area to beat the crowds.`,
      },
      {
        labelZh: "换特色早茶 / 晨光咖啡",
        labelEn: "Morning Tea & Cafe",
        promptZh: `请将第 ${dayNumber} 天上午的「${name}」替换为同区域环境清雅的知名慢调早茶点或特色晨光咖啡馆。`,
        promptEn: `Please replace Day ${dayNumber} morning stop "${name}" with a charming local morning tea house or specialty cafe nearby.`,
      },
      {
        labelZh: "换标志性经典地标 / 必去首站",
        labelEn: "Iconic Landmark Stop",
        promptZh: `请将第 ${dayNumber} 天首个景点「${name}」替换为同区域最具代表性的核心标志性城市文化地标。`,
        promptEn: `Please replace the morning stop "${name}" on Day ${dayNumber} with an iconic city cultural landmark in the neighborhood.`,
      },
    ];
  }

  // 2. Evening / Sunset / Final stop
  if (actIdx === totalActs - 1 && totalActs > 1) {
    return [
      {
        labelZh: "换绝佳日落晚霞观赏点",
        labelEn: "Sunset Golden Hour",
        promptZh: `请将第 ${dayNumber} 天最后一个景点「${name}」替换为同区域极具视觉美感的日落晚霞最佳观赏点或高空观景台。`,
        promptEn: `Please replace the final stop "${name}" on Day ${dayNumber} with a spectacular sunset viewing vantage point or rooftop in the same area.`,
      },
      {
        labelZh: "提早回酒店休憩 / 泡汤放松",
        labelEn: "Early Return to Hotel",
        promptZh: `第 ${dayNumber} 天傍晚希望提早返回酒店放松休憩或泡汤解乏，请精简「${name}」并安排更轻松的酒店周边散步或提早结束行程。`,
        promptEn: `For Day ${dayNumber} evening, we'd like to return to the hotel early to rest. Please streamline "${name}" with a gentler early-return pace.`,
      },
      {
        labelZh: "换璀璨夜景漫步 / 滨水岸线",
        labelEn: "Waterfront Nightwalk",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域夜景灯光秀、滨水岸线步道或城市繁华夜色漫步区。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with an illuminated waterfront promenade or captivating nightscape walk nearby.`,
      },
      {
        labelZh: "换热闹市井烟火气夜市",
        labelEn: "Vibrant Night Market",
        promptZh: `请将第 ${dayNumber} 天晚间的「${name}」替换为同区域安全、干净且富有当地市井烟火气的夜游街区或文创夜市。`,
        promptEn: `Please replace Day ${dayNumber} evening stop "${name}" with a lively, clean, authentic local night market or evening creative alley.`,
      },
    ];
  }

  // 3. Middle stops - Contextual based on category keywords
  const isNature = /公园|湖|山|森林|徒步|海滩|沙滩|植物园|绿道|湿地|岛|park|lake|mountain|beach|forest|island|garden/.test(combined);
  const isMuseumArt = /博物馆|美术馆|展|遗址|寺|宫|殿|历史|艺术|故居|文博|纪念馆|剧院|museum|temple|gallery|palace|history|heritage|shrine/.test(combined);
  const isShoppingMarket = /街|市集|商圈|广场|步行街|古镇|巷|里|坊|市|street|market|square|town|mall|lane|alley/.test(combined);

  if (isNature) {
    return [
      {
        labelZh: "换平坦无台阶步道 / 观光电瓶车",
        labelEn: "Flat Boardwalk & Cart",
        promptZh: `请将第 ${dayNumber} 天的景点「${name}」替换为平坦无台阶、适合轮椅/推车或有便捷观光电瓶车的自然景观，大幅降低体力消耗。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a flat, step-free nature walk or spot with electric sightseeing carts.`,
      },
      {
        labelZh: "换湖畔/林下茶歇发呆",
        labelEn: "Lakeside / Forest Tea",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域景致优美、可坐下来喝茶或咖啡发呆的悠闲景观休憩点。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a tranquil scenic spot to sit down, enjoy tea/coffee, and unwind.`,
      },
      {
        labelZh: "换室内自然温室 / 避晒防雨",
        labelEn: "Indoor Conservatory",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域高品质室内植物温室、生态体验馆或自然艺术展，避开烈日或雨水。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with an indoor botanical conservatory or weather-proof nature pavilion.`,
      },
      {
        labelZh: "换全景摄影打卡机位",
        labelEn: "Panoramic Viewpoint",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域俯瞰城市或山海全景的标志性摄影观景点。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with an elevated panoramic vantage point for stunning photography.`,
      },
    ];
  }

  if (isMuseumArt) {
    return [
      {
        labelZh: "换非遗手作 / 沉浸式文化工坊",
        labelEn: "Artisan Craft Workshop",
        promptZh: `请将第 ${dayNumber} 天的景点「${name}」替换为同区域更具互动性的非遗手作体验工坊（如陶艺、扎染、点茶、刺绣或香道体验）。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with an interactive hands-on cultural craft workshop nearby.`,
      },
      {
        labelZh: "换清幽私家园林 / 小众文保院落",
        labelEn: "Quiet Garden / Courtyard",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域人少清幽的私家古典园林、名人故居或静谧文保院落。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a tranquil private classical garden or historic courtyard with fewer crowds.`,
      },
      {
        labelZh: "换轻量化低体力文创艺术街区",
        labelEn: "Gentle Arts District",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域平缓好走、聚集独立书店与精品咖啡的文艺创意空间，减少站立疲劳。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a relaxing, flat creative art district with cozy bookstores and cafes.`,
      },
      {
        labelZh: "换现代建筑美学 / 出片视觉地标",
        labelEn: "Architectural Landmark",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域大师设计现代建筑、光影美学艺术馆或极简出片视觉地标。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a visually striking modern architectural landmark or light-and-shadow art center.`,
      },
    ];
  }

  if (isShoppingMarket) {
    return [
      {
        labelZh: "换雅致独立书店 / 慢调买手店",
        labelEn: "Quiet Bookshop & Boutiques",
        promptZh: `请将第 ${dayNumber} 天的景点「${name}」替换为同区域安静清幽的高格调独立书店、艺术复合空间或精选设计师买手店。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a serene, curated indie bookstore or stylish lifestyle concept store.`,
      },
      {
        labelZh: "换老底子地道名吃集中地",
        labelEn: "Authentic Food Alley",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域原汁原味、深受本地老饕喜爱的老底子市井特色名吃街区。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with an authentic, beloved local heritage food street or snack alley.`,
      },
      {
        labelZh: "换茶馆评弹/民谣演出休憩",
        labelEn: "Tea & Live Acoustic Rest",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为可以坐下舒适品茗、听一曲评弹或轻柔民谣的慢调茶楼茶舍。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with a heritage tea house featuring gentle live folk acoustic or storytelling.`,
      },
      {
        labelZh: "换同区域平缓低商业感文保街区",
        labelEn: "Low-Commercial Heritage Alley",
        promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域商铺更有质感、无喧闹商业叫卖的原生态历史文保街区。`,
        promptEn: `Please replace "${name}" on Day ${dayNumber} with an authentic, unhurried historic lane with artisanal character.`,
      },
    ];
  }

  // Default afternoon / middle stop
  return [
    {
      labelZh: "换午后悠闲茶歇 / 精品咖啡馆",
      labelEn: "Afternoon Tea & Cafe Break",
      promptZh: `请将第 ${dayNumber} 天的景点「${name}」替换为同区域环境优雅舒适的午后茶歇或精品咖啡馆，安排 1 小时充裕休憩。`,
      promptEn: `Please replace "${name}" on Day ${dayNumber} with an elegant, comfortable afternoon tea spot or specialty cafe for a refreshing break.`,
    },
    {
      labelZh: "换室内避雨避晒文化空间",
      labelEn: "Indoor Weather-Friendly Space",
      promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域优质的室内艺术展馆、文博空间或舒适商场，避开天气影响。`,
      promptEn: `Please replace "${name}" on Day ${dayNumber} with a weather-protected indoor cultural space, gallery, or lifestyle pavilion.`,
    },
    {
      labelZh: "换同商圈平缓无台阶漫步道",
      labelEn: "Flat Barrier-Free Walk",
      promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同商圈无台阶坡道、步行平缓轻松的公园绿道或景观步道。`,
      promptEn: `Please replace "${name}" on Day ${dayNumber} with an easy, flat scenic walkway without steep stairs or long walking distances.`,
    },
    {
      labelZh: "换高颜值出片城市地标",
      labelEn: "Photogenic City Landmark",
      promptZh: `请将第 ${dayNumber} 天的「${name}」替换为同区域极具视觉吸引力、拍照出片且落客便利的城市景观打卡点。`,
      promptEn: `Please replace "${name}" on Day ${dayNumber} with a visually stunning, photo-friendly city landmark with easy drop-off access.`,
    },
  ];
};

export const ItineraryDashboard: React.FC<ItineraryDashboardProps> = ({
  plan,
  onBack,
  onPlanUpdated,
}) => {
  const { locale, t } = useLanguage();
  const presetChips = locale === "en" ? PRESET_TWEAK_CHIPS_EN : PRESET_TWEAK_CHIPS_ZH;
  const [localPlan, setLocalPlan] = useState<TravelPlan>(() => {
    const localized = localizeCuratedPlan(plan, locale);
    if (!localized.hotelOptions || localized.hotelOptions.length === 0) {
      localized.hotelOptions = getDefaultHotelsForPlan(localized, locale);
    }
    return localized;
  });
  const lastEmittedPlanRef = useRef<TravelPlan | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(plan.meta.isPublic || false);
  const [viewsCount, setViewsCount] = useState<number | null>(null);

  // AI Tweak State (Tier 1: Global / Floating Copilot)
  const [isTweakOpen, setIsTweakOpen] = useState(false);
  const [isTweaking, setIsTweaking] = useState(false);
  const [tweakingCardId, setTweakingCardId] = useState<string | null>(null);
  const [tweakingChipPrompt, setTweakingChipPrompt] = useState<string | null>(null);
  const [tweakInput, setTweakInput] = useState("");
  const [tweakLoadingText, setTweakLoadingText] = useState(
    locale === "en"
      ? "Rearranging the route and drop-off points..."
      : "正在根据您的要求重新编排动线与落客点..."
  );

  // Hotel Selection & AI Recommendation State
  const [isHotelTweakOpen, setIsHotelTweakOpen] = useState(false);
  const [isHotelTweaking, setIsHotelTweaking] = useState(false);
  const [hotelTweakInput, setHotelTweakInput] = useState("");

  // Card-Level Activity & Dining Micro-Tweak State
  const [activeActivityTweakId, setActiveActivityTweakId] = useState<string | null>(null);
  const [activityTweakInput, setActivityTweakInput] = useState("");
  const [activeDiningTweakMeal, setActiveDiningTweakMeal] = useState<"lunch" | "dinner" | null>(null);
  const [diningTweakInput, setDiningTweakInput] = useState("");

  useEffect(() => {
    // If the plan prop change was triggered by our own in-place update, don't re-localize
    if (lastEmittedPlanRef.current && lastEmittedPlanRef.current === plan) {
      return;
    }

    const localized = localizeCuratedPlan(plan, locale);
    if (!localized.hotelOptions || localized.hotelOptions.length === 0) {
      localized.hotelOptions = getDefaultHotelsForPlan(localized, locale);
    }
    // Preserve hotel selection from localPlan if available
    if (localPlan?.hotelOptions && localized.hotelOptions) {
      const selectedId = localPlan.hotelOptions.find((h) => h.isSelected)?.id;
      if (selectedId) {
        localized.hotelOptions = localized.hotelOptions.map((h) => ({
          ...h,
          isSelected: h.id === selectedId,
        }));
      }
    }
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
  }, [plan, locale]);

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
  const executeAITweak = async (instruction: string, targetCardId?: string) => {
    if (!instruction.trim()) return;
    setIsTweaking(true);
    if (targetCardId) {
      setTweakingCardId(targetCardId);
    }
    setTweakingChipPrompt(instruction.trim());
    setTweakLoadingText(
      locale === "en"
        ? "Rearranging the route and drop-off points..."
        : "正在根据您的要求重新编排动线与落客点..."
    );

    try {
      const resp = await fetch("/api/tweak-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: localPlan,
          instruction: instruction.trim(),
          activeDayIndex,
        }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || t("tweakFailed"));
      }

      lastEmittedPlanRef.current = data.plan;
      setLocalPlan(data.plan);
      onPlanUpdated?.(data.plan);
      saveLocalPlan(data.plan);
      setTweakInput("");
      setActiveActivityTweakId(null);
      setActivityTweakInput("");
      setActiveDiningTweakMeal(null);
      setDiningTweakInput("");
      showToast(t("tweakSuccess"));
    } catch (err: any) {
      showToast(err.message || t("tweakFailed"));
    } finally {
      setIsTweaking(false);
      setTweakingCardId(null);
      setTweakingChipPrompt(null);
    }
  };

  // -------------------------------------------------------------
  // Hotel Selection & AI Recommendation Handlers
  // -------------------------------------------------------------
  const handleSelectHotel = (hotelId: string) => {
    if (!localPlan.hotelOptions) return;
    const updatedHotels = localPlan.hotelOptions.map((h) => ({
      ...h,
      isSelected: h.id === hotelId,
    }));
    const selectedHotel = updatedHotels.find((h) => h.id === hotelId);

    // Synchronize Day 1 starting hotel activity/drop-off if present
    const updatedDays = [...localPlan.days];
    if (selectedHotel && updatedDays[0]?.timeline?.length > 0) {
      const firstDayTimeline = [...updatedDays[0].timeline];
      for (let i = 0; i < firstDayTimeline.length; i++) {
        const item = firstDayTimeline[i];
        if (
          item.type === "activity" &&
          (item.id?.includes("hotel") ||
            item.name?.includes("酒店") ||
            item.name?.includes("Hotel") ||
            item.name?.includes("入住"))
        ) {
          firstDayTimeline[i] = {
            ...item,
            name:
              locale === "en"
                ? `${selectedHotel.name} · Check-in & Rest`
                : `${selectedHotel.name} · 入住休憩`,
            dropOffPoint: selectedHotel.locationDetail || item.dropOffPoint,
          };
          break;
        }
      }
      updatedDays[0] = {
        ...updatedDays[0],
        timeline: firstDayTimeline,
      };
    }

    const updatedPlan: TravelPlan = {
      ...localPlan,
      days: updatedDays,
      hotelOptions: updatedHotels,
    };

    lastEmittedPlanRef.current = updatedPlan;
    setLocalPlan(updatedPlan);
    onPlanUpdated?.(updatedPlan);
    saveLocalPlan(updatedPlan);
    showToast(
      locale === "en"
        ? `Selected hotel: ${selectedHotel?.name}`
        : `已选用酒店：${selectedHotel?.name}`
    );
  };

  const executeHotelTweak = async (customInstruction: string) => {
    if (!customInstruction.trim()) return;
    setIsHotelTweaking(true);
    try {
      const resp = await fetch("/api/tweak-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destinations: localPlan.meta.destinations,
          budgetTier: localPlan.meta.budgetTier,
          travelerProfile: localPlan.meta.travelerProfile,
          instruction: customInstruction.trim(),
          currentHotels: (localPlan.hotelOptions || []).map((h) => h.name),
          locale,
        }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.success || !data.hotelOptions) {
        throw new Error(data.error || (locale === "en" ? "Failed to recommend hotels" : "推荐酒店失败，请重试"));
      }

      const updatedPlan: TravelPlan = {
        ...localPlan,
        hotelOptions: data.hotelOptions,
      };

      lastEmittedPlanRef.current = updatedPlan;
      setLocalPlan(updatedPlan);
      onPlanUpdated?.(updatedPlan);
      saveLocalPlan(updatedPlan);
      setHotelTweakInput("");
      setIsHotelTweakOpen(false);
      showToast(
        locale === "en"
          ? "Curated fresh hotel options recommended!"
          : "已根据您的要求推荐 3-4 家全新精选酒店"
      );
    } catch (err: any) {
      showToast(err.message || (locale === "en" ? "Failed to recommend hotels" : "酒店推荐失败，请重试"));
    } finally {
      setIsHotelTweaking(false);
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

    lastEmittedPlanRef.current = updated;
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

    lastEmittedPlanRef.current = updated;
    setLocalPlan(updated);
    onPlanUpdated?.(updated);
    showToast(t("orderUpdated"));
  };

  const handleSwapActivity = (actName: string, cardId?: string) => {
    const prompt =
      locale === "en"
        ? `Please replace the spot "${actName}" on Day ${currentDay.dayNumber} with another suitable specialty attraction or relaxing walking spot in the same neighborhood, ensuring convenient drop-offs and seamless logistics.`
        : `请将第 ${currentDay.dayNumber} 天的景点「${actName}」替换为同区域其他适合的特色景点或漫步点位，确保落客和动线顺畅。`;
    executeAITweak(prompt, cardId);
  };

  const handleSwapDining = (mealType: string, currentRestaurant: string) => {
    const prompt =
      locale === "en"
        ? `Please replace Day ${currentDay.dayNumber}'s ${mealType} (currently "${currentRestaurant}") with another well-regarded dining spot in the same area offering great flavors and comfort.`
        : `请将第 ${currentDay.dayNumber} 天的${mealType}（目前是「${currentRestaurant}」）替换为同商圈其他口碑好、适口性佳的特色餐厅。`;
    executeAITweak(prompt, mealType);
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

    lastEmittedPlanRef.current = updatedPlan;
    setLocalPlan(updatedPlan);
    onPlanUpdated?.(updatedPlan);
    saveLocalPlan(updatedPlan);
    showToast(`${t("spotSwapped")}: ${selectedAlt.name.split("（")[0]}`);
  };

  const handleSelectDiner = (
    mealType: "lunch" | "dinner",
    targetIndex: number,
    availableDiners: DiningAlternative[]
  ) => {
    if (!availableDiners || targetIndex < 0 || targetIndex >= availableDiners.length) return;
    const selectedDiner = availableDiners[targetIndex];

    const updatedPlan = JSON.parse(JSON.stringify(localPlan));
    const day = updatedPlan.days[activeDayIndex];
    const currentMeal = day.meals?.[mealType];
    if (!currentMeal) return;

    day.meals[mealType] = {
      mealType: currentMeal.mealType,
      restaurantName: selectedDiner.restaurantName,
      cuisineStyle: selectedDiner.cuisineStyle,
      recommendedDishes: selectedDiner.recommendedDishes,
      elderKidSuitability: selectedDiner.elderKidSuitability || currentMeal.elderKidSuitability,
      perPersonBudget: selectedDiner.perPersonBudget,
      addressOrDropOff: selectedDiner.addressOrDropOff || currentMeal.addressOrDropOff,
      image: selectedDiner.image,
      photoTip: selectedDiner.photoTip,
      googleRating: selectedDiner.googleRating,
      googleMapsUrl: selectedDiner.googleMapsUrl,
      dianpingUrl: selectedDiner.dianpingUrl,
      selectedDinerIndex: targetIndex,
      allDiners: availableDiners,
      alternatives: availableDiners.filter((_, idx) => idx !== targetIndex),
    };

    lastEmittedPlanRef.current = updatedPlan;
    setLocalPlan(updatedPlan);
    onPlanUpdated?.(updatedPlan);
    saveLocalPlan(updatedPlan);
    showToast(
      locale === "en"
        ? `Selected: ${selectedDiner.restaurantName.split("（")[0].split("(")[0].trim()}`
        : `已选用：${selectedDiner.restaurantName.split("（")[0].split("(")[0].trim()}`
    );
  };

  const handleSelectDiningAlternative = (mealType: "lunch" | "dinner", altIdx: number) => {
    const currentMeal = localPlan.days[activeDayIndex]?.meals?.[mealType];
    if (!currentMeal) return;
    const options = getDinerOptionsForMeal(currentMeal, localPlan.meta.destinations, locale);
    // altIdx + 1 because index 0 is current primary diner
    handleSelectDiner(mealType, altIdx + 1, options);
  };

  const currentDay: DayItinerary =
    localPlan.days[activeDayIndex] || localPlan.days[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-full shadow-xl flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Floating Action Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-stone-200/80 text-zinc-600 hover:text-zinc-900 text-xs font-medium transition shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {locale === "en" ? "Back to Gallery" : "返回画廊"}
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePublishToGallery}
            disabled={isPublishing}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition flex items-center gap-1.5 shadow-xs ${
              isPublished
                ? "bg-stone-100 text-zinc-700 border border-stone-200"
                : "bg-white/90 hover:bg-white text-zinc-600 hover:text-zinc-900 border border-stone-200/80"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-[#9E825A]" />
            <span>{isPublished ? t("published") : t("publishToSquare")}</span>
          </button>

          <button
            type="button"
            onClick={handleShareLink}
            className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-zinc-600 hover:text-zinc-900 text-xs font-medium transition flex items-center gap-1.5 border border-stone-200/80 shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5 text-[#9E825A]" />
            <span>{t("shareTrip")}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadOfflineHtml}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t("exportDoc")}</span>
          </button>
        </div>
      </div>

      {/* Hero Title & Editorial Overview */}
      <div className="bg-white rounded-3xl border border-stone-200/70 p-6 sm:p-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)] mb-6">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 font-medium mb-3">
          <span className="text-zinc-900 font-semibold">
            {localPlan.meta.durationDays} {locale === "en" ? "Days Trip" : "天行程"}
          </span>
          <span className="text-stone-300">·</span>
          <span>
            {localPlan.meta.budgetTier === "budget"
              ? t("budgetLow")
              : localPlan.meta.budgetTier === "comfort"
              ? t("budgetMid")
              : t("budgetHigh")}
          </span>
          {localPlan.meta.travelerProfile.map((tag) => (
            <React.Fragment key={tag}>
              <span className="text-stone-300">·</span>
              <span>{tag}</span>
            </React.Fragment>
          ))}
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug tracking-tight">
          {localPlan.meta.tripTitle}
        </h1>

        {/* Highlights List - Clean Editorial Bullets */}
        {localPlan.overview.highlights && localPlan.overview.highlights.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 pt-4 border-t border-stone-100 text-xs text-zinc-600">
            {localPlan.overview.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#9E825A] font-bold leading-relaxed">•</span>
                <span className="leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Curated Hotels / 精选酒店推荐 (3-4 Options + In-Place Micro-Tweak) */}
      {localPlan.hotelOptions && localPlan.hotelOptions.length > 0 && (
        <div className="bg-white rounded-3xl border border-stone-200/70 p-5 sm:p-6 mb-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#9E825A]" />
              <span className="font-semibold text-xs text-zinc-900 tracking-wider uppercase">
                {locale === "en" ? "Curated Accommodations" : "精选酒店推荐"}
              </span>
            </div>

            <button
              type="button"
              disabled={isHotelTweaking}
              onClick={() => setIsHotelTweakOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 hover:bg-stone-100 text-zinc-700 text-xs font-medium transition border border-stone-200/60 self-start sm:self-auto cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9E825A]" />
              <span>
                {isHotelTweakOpen
                  ? locale === "en"
                    ? "Collapse"
                    : "收起"
                  : locale === "en"
                  ? "Explore More Stays"
                  : "推荐其他酒店"}
              </span>
              {isHotelTweakOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              )}
            </button>
          </div>

          {/* Hotel Tweak Expandable Panel */}
          {isHotelTweakOpen && (
            <div className="mb-4 p-4 rounded-2xl bg-stone-50/70 border border-stone-200/70 space-y-3">
              <div className="text-[11px] font-medium text-zinc-500">
                {locale === "en"
                  ? "Specify your stay preferences:"
                  : "输入具体住宿偏好或期望："}
              </div>

              {/* Preset Chips */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { zh: "高空视野 / 窗景极佳", en: "Ocean / Scenic View" },
                  { zh: "靠近商圈 / 交通枢纽", en: "Near Metro & Downtown" },
                  { zh: "亲子设施 / 家庭套房", en: "Family Suite & Kids Friendly" },
                  { zh: "园林静谧 / 温泉私汤", en: "Garden Estate & Hot Spring" },
                  { zh: "预算更亲民 / 高性价比", en: "Budget Friendly & High Value" },
                ].map((chip) => (
                  <button
                    key={chip.zh}
                    type="button"
                    disabled={isHotelTweaking}
                    onClick={() =>
                      executeHotelTweak(locale === "en" ? chip.en : chip.zh)
                    }
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-stone-100 text-zinc-700 border border-stone-200/70 font-medium transition cursor-pointer"
                  >
                    + {locale === "en" ? chip.en : chip.zh}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeHotelTweak(hotelTweakInput);
                }}
                className="flex items-center gap-2 pt-1"
              >
                <input
                  type="text"
                  value={hotelTweakInput}
                  onChange={(e) => setHotelTweakInput(e.target.value)}
                  disabled={isHotelTweaking}
                  placeholder={
                    locale === "en"
                      ? "e.g. Near beach, heated pool, quiet soundproofing, under $150..."
                      : "输入具体要求（如：预算800内、带儿童恒温泳池、日式庭院风格、近地铁口...）"
                  }
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-stone-200/80 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
                <button
                  type="submit"
                  disabled={isHotelTweaking || !hotelTweakInput.trim()}
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition disabled:opacity-40 shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  {isHotelTweaking ? (
                    <span className="w-3.5 h-3.5 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-[#9E825A]" />
                  )}
                  <span>
                    {isHotelTweaking
                      ? locale === "en"
                        ? "Searching..."
                        : "推荐中..."
                      : locale === "en"
                      ? "Recommend"
                      : "推荐新酒店"}
                  </span>
                </button>
              </form>
            </div>
          )}

          {/* 3-4 Hotel Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {localPlan.hotelOptions.map((hotel) => {
              const isSelected = Boolean(hotel.isSelected);
              return (
                <div
                  key={hotel.id}
                  onClick={() => handleSelectHotel(hotel.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectHotel(hotel.id);
                    }
                  }}
                  className={`relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left group select-none ${
                    isSelected
                      ? "bg-stone-50/80 border-zinc-900 ring-1 ring-zinc-900 shadow-xs"
                      : "bg-white border-stone-200/70 hover:border-stone-400 hover:shadow-xs"
                  }`}
                >
                  <div>
                    {/* Top Status & Price */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? "bg-zinc-900 text-white shadow-xs"
                            : "border border-stone-300 group-hover:border-zinc-400 bg-white"
                        }`}
                        title={isSelected ? (locale === "en" ? "Selected stay" : "当前选用酒店") : undefined}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold text-zinc-900 whitespace-nowrap">
                        {hotel.priceRange}
                      </span>
                    </div>

                    {/* Hotel Name */}
                    <h3 className="font-semibold text-xs sm:text-sm text-zinc-900 leading-snug line-clamp-2 mb-1">
                      {hotel.name}
                    </h3>

                    {/* Star or Style */}
                    <div className="text-[11px] text-[#9E825A] font-medium mb-1.5">
                      {hotel.starOrStyle}
                    </div>

                    {/* Location with MapPin */}
                    <div className="flex items-start gap-1 text-[11px] text-zinc-500 mb-2.5">
                      <MapPin className="w-3 h-3 text-[#9E825A] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-tight">{hotel.locationDetail}</span>
                    </div>
                  </div>

                  {/* Highlights Inline Bullets - No Clutter */}
                  {hotel.highlights && hotel.highlights.length > 0 && (
                    <div className="text-[10px] text-zinc-500 pt-2 border-t border-stone-100 mt-auto line-clamp-1">
                      {hotel.highlights.join(" · ")}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reservation Checklist Banner */}
      {localPlan.reservationChecklist && localPlan.reservationChecklist.length > 0 && (
        <div className="bg-white rounded-3xl border border-stone-200/70 p-5 mb-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-3.5">
            <Clock className="w-4 h-4 text-[#9E825A]" />
            <span className="font-semibold text-xs text-zinc-900 tracking-wider uppercase">
              {t("checklistTitle")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {localPlan.reservationChecklist.map((res, i) => (
              <div
                key={i}
                className="bg-stone-50/60 p-3.5 rounded-2xl border border-stone-200/60 flex items-start justify-between gap-3"
              >
                <div>
                  <div className="font-semibold text-xs text-zinc-900">
                    {res.spotName}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {res.platform} · {res.ticketPrice}
                  </div>
                  <div className="text-[11px] text-zinc-700 mt-1 leading-relaxed">
                    {res.bookingTip}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-stone-200/70 text-zinc-700 shrink-0">
                  {locale === "en" ? `${res.daysInAdvance} days ahead` : `提前 ${res.daysInAdvance} 天`}
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
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition select-none ${
              activeDayIndex === idx
                ? "bg-zinc-900 text-white shadow-xs"
                : "bg-white text-zinc-600 hover:text-zinc-900 border border-stone-200/70"
            }`}
          >
            Day {day.dayNumber}
          </button>
        ))}
      </div>

      {/* Day Content */}
      <div className="mt-4 space-y-4">
        {/* Day Card Header & Map */}
        <div className="bg-white rounded-3xl border border-stone-200/70 p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <div>
              <span className="text-[10px] font-semibold text-[#9E825A] tracking-widest uppercase">
                DAY {currentDay.dayNumber}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                {currentDay.dateOrLabel}
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-medium self-start sm:self-auto">
              {currentDay.theme}
            </span>
          </div>

          {/* Midday rest callout */}
          {currentDay.hotelRestBlock && currentDay.hotelRestBlock.enabled && (
            <div className="mb-4 px-3.5 py-2.5 rounded-2xl bg-stone-50/70 border border-stone-200/60 flex items-center gap-2.5 text-xs text-zinc-700">
              <Clock className="w-3.5 h-3.5 text-[#9E825A] shrink-0" />
              <div>
                <strong className="font-semibold text-zinc-900">
                  {t("middayRest")} ({currentDay.hotelRestBlock.recommendedTime})
                </strong>
                : {currentDay.hotelRestBlock.reason}
              </div>
            </div>
          )}

          {/* Daily Interactive Leaflet Map */}
          <DailyMap day={currentDay} />
        </div>

        {/* Timeline Activities (with In-Place Actions) */}
        <div className="space-y-3">
          {(() => {
            const activityList = currentDay.timeline.filter(
              (it): it is ActivityStop => it.type === "activity"
            );

            return currentDay.timeline.map((item, idx) => {
              if (item.type === "transit") {
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 py-1 px-4 text-xs text-zinc-500"
                  >
                    <Car className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="font-medium text-zinc-700">
                      {resolveStopDisplay(item.fromStop, currentDay.timeline, localPlan.days)} ➔{" "}
                      {resolveStopDisplay(item.toStop, currentDay.timeline, localPlan.days)}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span>
                      {item.mode === "taxi"
                        ? t("transitTaxi")
                        : item.mode === "charter"
                        ? t("transitCharter")
                        : t("transitWalk")}{" "}
                      {item.estimatedMinutes} {t("mins")} ({item.distanceKm}km)
                    </span>
                    {item.navigationDetail && (
                      <span className="hidden sm:inline text-zinc-400">
                        · {item.navigationDetail}
                      </span>
                    )}
                  </div>
                );
              }

              const act = item as ActivityStop;
              const cardId = act.id || `act_${idx}`;
              const isThisCardTweaking = isTweaking && tweakingCardId === cardId;
              const actOrderIdx = activityList.findIndex(
                (a) => (a.id && a.id === act.id) || a.name === act.name
              );
              const tweakChips = getActivityTweakChips(
                act,
                actOrderIdx >= 0 ? actOrderIdx : idx,
                activityList.length,
                currentDay.dayNumber,
                locale
              );

              return (
                <div
                  key={act.id || idx}
                  className={`relative rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isThisCardTweaking
                      ? "animate-luxury-glow ring-2 ring-[#9E825A]/70 border-[#9E825A]/60 p-5 sm:p-6"
                      : "bg-white border-stone-200/70 p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)] hover:border-stone-300 group"
                  }`}
                >
                  {/* Magical Top Shimmer Beam when tweaking this card */}
                  {isThisCardTweaking && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#9E825A] to-transparent animate-shimmer-beam rounded-t-3xl overflow-hidden pointer-events-none" />
                  )}

                  {/* Magical Active Status Banner */}
                  {isThisCardTweaking && (
                    <div className="mb-3.5 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FAF6EE] to-[#F5EFE4] border border-[#9E825A]/40 flex items-center gap-2.5 text-xs text-[#7D6644] font-medium shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#9E825A] animate-spin shrink-0" />
                      <span className="leading-snug">
                        {locale === "en"
                          ? "Curating a tailored alternative with seamless logistics & drop-offs..."
                          : "正在为您量身甄选更优方案，重新优化落客动线..."}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-bold text-base text-zinc-900 tracking-tight">
                        {act.name}
                      </h3>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-zinc-600">
                        {act.timeSlot}
                      </span>
                    </div>

                    {/* Tier 2: Quick In-Place Action Buttons (Move, Tweak, Delete) */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        disabled={isTweaking}
                        onClick={() => {
                          setActiveActivityTweakId(
                            activeActivityTweakId === cardId ? null : cardId
                          );
                        }}
                        className={`p-1.5 rounded-full transition disabled:opacity-40 cursor-pointer ${
                          activeActivityTweakId === cardId
                            ? "bg-zinc-900 text-white shadow-xs"
                            : "text-zinc-400 hover:text-zinc-800 hover:bg-stone-100"
                        }`}
                        title={locale === "en" ? "Fine-tune this spot" : "微调此景点"}
                      >
                        <RefreshCw
                          className={`w-3.5 h-3.5 ${
                            isThisCardTweaking ? "animate-spin text-[#9E825A]" : ""
                          }`}
                        />
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

                  {/* In-Place Activity Micro-Tweak Drawer */}
                  {activeActivityTweakId === cardId && (
                    <div className="my-3 p-3.5 rounded-2xl bg-stone-50/80 border border-stone-200/80 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                          <Sparkles className="w-3.5 h-3.5 text-[#9E825A]" />
                          <span>
                            {locale === "en" ? "Fine-tune this Stop" : "微调此景点"}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveActivityTweakId(null)}
                          className="text-zinc-400 hover:text-zinc-700 cursor-pointer p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Differentiated Quick Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {tweakChips.map((chip) => {
                          const chipPrompt =
                            locale === "en" ? chip.promptEn : chip.promptZh;
                          const isThisChipTweaking =
                            isThisCardTweaking && tweakingChipPrompt === chipPrompt;
                          return (
                            <button
                              key={chip.labelZh}
                              type="button"
                              disabled={isTweaking}
                              onClick={() => executeAITweak(chipPrompt, cardId)}
                              className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition cursor-pointer flex items-center gap-1.5 ${
                                isThisChipTweaking
                                  ? "bg-[#9E825A] text-white shadow-xs"
                                  : "bg-white hover:bg-stone-100 text-zinc-700 border border-stone-200/70"
                              }`}
                            >
                              {isThisChipTweaking ? (
                                <Sparkles className="w-3 h-3 text-white animate-spin" />
                              ) : (
                                <span className="text-stone-400">+</span>
                              )}
                              <span>{locale === "en" ? chip.labelEn : chip.labelZh}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Custom Input */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (!activityTweakInput.trim()) return;
                          const prompt =
                            locale === "en"
                              ? `Please replace the spot "${act.name}" on Day ${currentDay.dayNumber} with a new spot matching: ${activityTweakInput.trim()}. Ensure smooth drop-offs.`
                              : `请将第 ${currentDay.dayNumber} 天的景点「${act.name}」替换为符合要求的新景点或活动：${activityTweakInput.trim()}。确保同区域落客动线顺畅。`;
                          executeAITweak(prompt, cardId);
                        }}
                        className="flex items-center gap-1.5 pt-0.5"
                      >
                        <input
                          type="text"
                          value={activityTweakInput}
                          onChange={(e) => setActivityTweakInput(e.target.value)}
                          disabled={isTweaking}
                          placeholder={
                            locale === "en"
                              ? "Or enter custom request (e.g. sunset view, quiet bookstore)..."
                              : "或输入具体要求（如：想看落日、手作体验、避开人潮台阶...）"
                          }
                          className="flex-1 px-3 py-1.5 rounded-xl bg-white border border-stone-200/80 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                        />
                        <button
                          type="submit"
                          disabled={isTweaking || !activityTweakInput.trim()}
                          className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition disabled:opacity-40 shrink-0 cursor-pointer flex items-center gap-1"
                        >
                          {isThisCardTweaking ? (
                            <span className="w-3 h-3 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                          ) : null}
                          <span>{locale === "en" ? "Tweak" : "微调"}</span>
                        </button>
                      </form>
                    </div>
                  )}

                {/* Duration & Drop-off Point / Navigation Row */}
                <div className="flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3 text-xs text-zinc-500 my-2.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-[#9E825A] shrink-0" />
                    <span className="font-medium text-zinc-700">{t("dropOffNavTarget")}:</span>
                    <span className="truncate text-zinc-600">{act.dropOffPoint}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-zinc-400">
                      {t("durationMins")} {act.durationMinutes} {t("mins")}
                    </span>
                    {act.coordinates && act.coordinates.length === 2 && (
                      <>
                        <span className="text-stone-300">·</span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${act.coordinates[0]},${act.coordinates[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 transition hover:underline text-[11px]"
                          title={t("openInGoogleMaps")}
                        >
                          <span>Google Maps</span>
                          <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Reservation Notice */}
                {act.reservationRequired && (
                  <div className="my-2 text-xs text-zinc-700 flex items-center gap-1.5 font-medium">
                    <span className="text-[#9E825A] font-bold">•</span>
                    <span>{t("reservationRequired")}: {act.reservationChannel}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                  {act.description}
                </p>

                {/* Photo Spot Card */}
                {(() => {
                  const actImage = act.image || resolveActivityImage(act, localPlan.meta?.destinations?.join(" + "));
                  if (!actImage) return null;
                  return (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-3 bg-stone-100 border border-stone-200/60 group">
                      <img
                        src={actImage}
                        alt={act.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.src = "/images/spot_kyoto_zen.jpg";
                        }}
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                        <Camera className="w-3 h-3 text-[#9E825A]" />
                        <span>{t("photoSpotAdvice")}</span>
                      </div>
                    </div>
                  );
                })()}

                {/* Photo tip guidance: Serene Editorial Caption */}
                {act.photoTip && (
                  <div className="my-2 flex items-start gap-1.5 text-xs text-zinc-500 italic">
                    <Camera className="w-3.5 h-3.5 text-[#9E825A] shrink-0 mt-0.5 not-italic" />
                    <div>
                      <span className="not-italic font-medium text-zinc-700">{t("photoTipLabel")} </span>
                      <span>{act.photoTip}</span>
                    </div>
                  </div>
                )}

                {/* Elder/Kid notes: Clean Inline Caption */}
                {act.elderKidNotes && (
                  <div className="text-[11px] text-zinc-500 mt-2 flex items-center gap-1.5">
                    <span className="text-zinc-400">舒适出行提示：</span>
                    <span>{act.elderKidNotes}</span>
                  </div>
                )}

                {/* Alternative Activities Switcher if available */}
                {act.alternatives && act.alternatives.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-zinc-400 font-medium shrink-0">
                      {t("altSpotsLabel")}
                    </span>
                    {act.alternatives.map((alt, altI) => (
                      <button
                        key={altI}
                        type="button"
                        onClick={() => handleSelectActivityAlternative(idx, altI)}
                        className="px-2.5 py-0.5 rounded-full bg-stone-50 hover:bg-stone-100 border border-stone-200/60 text-zinc-600 hover:text-zinc-900 font-medium transition cursor-pointer flex items-center gap-1"
                        title={alt.description}
                      >
                        <span>⇄ {alt.name.split("（")[0]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          });
        })()}
      </div>

        {/* Dining Recommendations */}
        <div className="bg-white rounded-3xl border border-stone-200/70 p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
          <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 mb-3.5">
            <Utensils className="w-3.5 h-3.5 text-[#9E825A]" />
            {t("diningSectionTitle")}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* LUNCH CARD */}
            {currentDay.meals?.lunch && (() => {
              const lunchOptions = getDinerOptionsForMeal(currentDay.meals.lunch, localPlan.meta.destinations, locale);
              const activeLunchIndex = typeof currentDay.meals.lunch.selectedDinerIndex === "number"
                ? currentDay.meals.lunch.selectedDinerIndex
                : 0;
              const isLunchTweaking = isTweaking && tweakingCardId === "lunch";

              return (
                <div className={`p-4 sm:p-5 rounded-2xl relative flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                  isLunchTweaking
                    ? "animate-luxury-glow ring-2 ring-[#9E825A]/70 border border-[#9E825A]/60"
                    : "bg-[#FCFBF8] border border-stone-200/60"
                }`}>
                  {/* Magical Top Shimmer Beam when tweaking lunch */}
                  {isLunchTweaking && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#9E825A] to-transparent animate-shimmer-beam rounded-t-2xl overflow-hidden pointer-events-none" />
                  )}

                  {/* Magical Active Status Banner */}
                  {isLunchTweaking && (
                    <div className="mb-3 px-3 py-2 rounded-xl bg-gradient-to-r from-[#FAF6EE] to-[#F5EFE4] border border-[#9E825A]/40 flex items-center gap-2 text-[11px] text-[#7D6644] font-medium shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#9E825A] animate-spin shrink-0" />
                      <span className="leading-snug">
                        {locale === "en"
                          ? "Finding top-rated dining alternative in the area..."
                          : "正在为您甄选同商圈更优口碑餐厅与特色招牌..."}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#9E825A] block">
                          {t("lunch")}
                        </span>
                        <h4 className="font-bold text-sm text-zinc-900">
                          {currentDay.meals.lunch.restaurantName}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-zinc-500 font-medium">
                          {currentDay.meals.lunch.perPersonBudget}
                        </span>
                        <button
                          type="button"
                          disabled={isTweaking}
                          onClick={() =>
                            setActiveDiningTweakMeal(
                              activeDiningTweakMeal === "lunch" ? null : "lunch"
                            )
                          }
                          className={`text-[11px] flex items-center gap-1 px-2.5 py-0.5 rounded-full transition disabled:opacity-40 cursor-pointer ${
                            activeDiningTweakMeal === "lunch"
                              ? "bg-zinc-900 text-white shadow-xs"
                              : "text-zinc-500 hover:text-zinc-900 bg-white border border-stone-200/60"
                          }`}
                          title={locale === "en" ? "Fine-tune Lunch" : "微调午餐推荐"}
                        >
                          <RefreshCw className={`w-2.5 h-2.5 ${isLunchTweaking ? "animate-spin text-[#9E825A]" : ""}`} />
                          <span>{locale === "en" ? "Swap" : "换一家"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Diner Option Tabs */}
                    {lunchOptions.length > 1 && (
                      <div className="flex items-center gap-1 p-1 bg-stone-100/80 rounded-xl mb-3 overflow-x-auto no-scrollbar">
                        {lunchOptions.map((opt, optIdx) => {
                          const isSelected = optIdx === activeLunchIndex;
                          const cleanName = opt.restaurantName.split("（")[0].split("(")[0].trim();
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectDiner("lunch", optIdx, lunchOptions)}
                              className={`px-3 py-1 rounded-lg text-xs transition cursor-pointer select-none shrink-0 flex items-center gap-1.5 ${
                                isSelected
                                  ? "bg-white text-zinc-900 font-semibold shadow-xs"
                                  : "text-zinc-500 hover:text-zinc-800 font-medium hover:bg-white/50"
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#9E825A]" : "bg-stone-300"}`} />
                              <span className="truncate max-w-[130px] sm:max-w-none">{cleanName}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* In-Place Lunch Micro-Tweak Drawer */}
                    {activeDiningTweakMeal === "lunch" && (
                      <div className="my-2.5 p-3 rounded-xl bg-white border border-stone-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                            <Sparkles className="w-3 h-3 text-[#9E825A]" />
                            <span>{locale === "en" ? "Fine-tune Lunch" : "微调午餐"}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveDiningTweakMeal(null)}
                            className="text-zinc-400 hover:text-zinc-700 cursor-pointer p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Quick Chips */}
                        <div className="flex flex-wrap gap-1">
                          {[
                            {
                              labelZh: "换同商圈其他特色",
                              labelEn: "Nearby Specialty",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的午餐（目前是「${currentDay.meals.lunch.restaurantName}」）替换为同商圈其他口碑好、适口性佳的特色餐厅。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s lunch (${currentDay.meals.lunch.restaurantName}) with another highly-rated specialty restaurant in the same area.`,
                            },
                            {
                              labelZh: "换温热清淡滋补",
                              labelEn: "Mild & Comforting",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的午餐替换为温热、少油少盐、易消化的清淡炖汤或特色养生菜。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s lunch with a mild, comforting, digestive-friendly dining option.`,
                            },
                            {
                              labelZh: "换必吃非遗老字号",
                              labelEn: "Heritage Brand",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的午餐替换为当地知名百年非遗老字号或地道传统名菜馆。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s lunch with an authentic local heritage culinary institution.`,
                            },
                            {
                              labelZh: "换精致轻食/素食",
                              labelEn: "Light / Vegetarian",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的午餐替换为同商圈高品质轻食或精致素食餐厅。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s lunch with a high quality light or vegetarian restaurant.`,
                            },
                          ].map((chip) => {
                            const chipPrompt = locale === "en" ? chip.promptEn : chip.promptZh;
                            const isThisChipTweaking = isLunchTweaking && tweakingChipPrompt === chipPrompt;
                            return (
                              <button
                                key={chip.labelZh}
                                type="button"
                                disabled={isTweaking}
                                onClick={() =>
                                  executeAITweak(
                                    chipPrompt,
                                    "lunch"
                                  )
                                }
                                className={`text-[10px] px-2 py-0.5 rounded-full border transition cursor-pointer flex items-center gap-1 ${
                                  isThisChipTweaking
                                    ? "bg-[#9E825A] text-white border-[#9E825A]"
                                    : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200/70"
                                }`}
                              >
                                {isThisChipTweaking ? (
                                  <Sparkles className="w-2.5 h-2.5 text-white animate-spin" />
                                ) : (
                                  <span>+</span>
                                )}
                                <span>{locale === "en" ? chip.labelEn : chip.labelZh}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Custom Input */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!diningTweakInput.trim()) return;
                            const prompt =
                              locale === "en"
                                ? `Please replace Day ${currentDay.dayNumber}'s lunch with a restaurant matching: ${diningTweakInput.trim()}. Keep it in the same neighborhood.`
                                : `请将第 ${currentDay.dayNumber} 天的午餐替换为符合要求的新餐厅：${diningTweakInput.trim()}。保持同区域动线顺畅。`;
                            executeAITweak(prompt, "lunch");
                          }}
                          className="flex items-center gap-1.5 pt-0.5"
                        >
                          <input
                            type="text"
                            value={diningTweakInput}
                            onChange={(e) => setDiningTweakInput(e.target.value)}
                            disabled={isTweaking}
                            placeholder={
                              locale === "en"
                                ? "e.g. Seafood banquet, quiet private room..."
                                : "输入餐厅要求（如：想吃海鲜大排档、要有包厢、免排队...）"
                            }
                            className="flex-1 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                          />
                          <button
                            type="submit"
                            disabled={isTweaking || !diningTweakInput.trim()}
                            className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition disabled:opacity-40 shrink-0 cursor-pointer flex items-center gap-1"
                          >
                            {isLunchTweaking ? (
                              <span className="w-2.5 h-2.5 border border-white/60 border-t-transparent rounded-full animate-spin" />
                            ) : null}
                            <span>{locale === "en" ? "Tweak" : "微调"}</span>
                          </button>
                        </form>
                      </div>
                    )}

                    {/* Meal Photo */}
                    {(() => {
                      const mealImage = currentDay.meals.lunch.image || resolveDiningImage(currentDay.meals.lunch, localPlan.meta?.destinations?.join(" + "));
                      if (!mealImage) return null;
                      return (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden my-2.5 bg-stone-100 border border-stone-200/60 group">
                          <img
                            src={mealImage}
                            alt={currentDay.meals.lunch.restaurantName}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                            onError={(e) => {
                              e.currentTarget.src = "/images/spot_yj_samgyetang.jpg";
                            }}
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1 shadow-xs">
                            <Utensils className="w-2.5 h-2.5 text-[#9E825A]" />
                            <span>{t("authenticFlavor")}</span>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Signature Highlights / Photo Tip */}
                    {currentDay.meals.lunch.photoTip && (
                      <div className="my-1.5 text-[11px] text-zinc-500 italic flex items-start gap-1">
                        <span className="not-italic font-medium text-zinc-700">{t("signatureHighlights")}: </span>
                        <span>{currentDay.meals.lunch.photoTip}</span>
                      </div>
                    )}

                    {/* Recommended Dishes: Clean Editorial Typography */}
                    <div className="my-2 text-xs text-zinc-700 leading-relaxed">
                      <span className="text-zinc-400 font-medium">招牌推荐：</span>
                      <span className="font-medium text-zinc-800">
                        {currentDay.meals.lunch.recommendedDishes.join(" · ")}
                      </span>
                    </div>

                    <div className="text-[11px] text-zinc-500 mb-2">
                      {t("dietarySuitability")}: {currentDay.meals.lunch.elderKidSuitability}
                    </div>

                    {/* Google Reviews & Dianping Links: Monochromatic & Refined */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200/50">
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
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 transition"
                        title={t("viewGoogleReviewsTip")}
                      >
                        <Star className="w-3 h-3 text-[#9E825A]" />
                        <span>{t("googleReviews")}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                      </a>

                      <span className="text-stone-300">·</span>

                      <a
                        href={
                          currentDay.meals.lunch.dianpingUrl ||
                          `https://m.dianping.com/search?keyword=${encodeURIComponent(
                            currentDay.meals.lunch.restaurantName
                          )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 transition"
                        title={locale === "en" ? "View on Dianping" : "在 大众点评 查看"}
                      >
                        <span>{t("dianpingReviews")}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* DINNER CARD */}
            {currentDay.meals?.dinner && (() => {
              const dinnerOptions = getDinerOptionsForMeal(currentDay.meals.dinner, localPlan.meta.destinations, locale);
              const activeDinnerIndex = typeof currentDay.meals.dinner.selectedDinerIndex === "number"
                ? currentDay.meals.dinner.selectedDinerIndex
                : 0;
              const isDinnerTweaking = isTweaking && tweakingCardId === "dinner";

              return (
                <div className={`p-4 sm:p-5 rounded-2xl relative flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                  isDinnerTweaking
                    ? "animate-luxury-glow ring-2 ring-[#9E825A]/70 border border-[#9E825A]/60"
                    : "bg-[#FCFBF8] border border-stone-200/60"
                }`}>
                  {/* Magical Top Shimmer Beam when tweaking dinner */}
                  {isDinnerTweaking && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#9E825A] to-transparent animate-shimmer-beam rounded-t-2xl overflow-hidden pointer-events-none" />
                  )}

                  {/* Magical Active Status Banner */}
                  {isDinnerTweaking && (
                    <div className="mb-3 px-3 py-2 rounded-xl bg-gradient-to-r from-[#FAF6EE] to-[#F5EFE4] border border-[#9E825A]/40 flex items-center gap-2 text-[11px] text-[#7D6644] font-medium shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#9E825A] animate-spin shrink-0" />
                      <span className="leading-snug">
                        {locale === "en"
                          ? "Finding top-rated dining alternative in the area..."
                          : "正在为您甄选同商圈更优口碑餐厅与特色招牌..."}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#9E825A] block">
                          {t("dinner")}
                        </span>
                        <h4 className="font-bold text-sm text-zinc-900">
                          {currentDay.meals.dinner.restaurantName}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-zinc-500 font-medium">
                          {currentDay.meals.dinner.perPersonBudget}
                        </span>
                        <button
                          type="button"
                          disabled={isTweaking}
                          onClick={() =>
                            setActiveDiningTweakMeal(
                              activeDiningTweakMeal === "dinner" ? null : "dinner"
                            )
                          }
                          className={`text-[11px] flex items-center gap-1 px-2.5 py-0.5 rounded-full transition disabled:opacity-40 cursor-pointer ${
                            activeDiningTweakMeal === "dinner"
                              ? "bg-zinc-900 text-white shadow-xs"
                              : "text-zinc-500 hover:text-zinc-900 bg-white border border-stone-200/60"
                          }`}
                          title={locale === "en" ? "Fine-tune Dinner" : "微调晚餐推荐"}
                        >
                          <RefreshCw className={`w-2.5 h-2.5 ${isDinnerTweaking ? "animate-spin text-[#9E825A]" : ""}`} />
                          <span>{locale === "en" ? "Swap" : "换一家"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Diner Option Tabs */}
                    {dinnerOptions.length > 1 && (
                      <div className="flex items-center gap-1 p-1 bg-stone-100/80 rounded-xl mb-3 overflow-x-auto no-scrollbar">
                        {dinnerOptions.map((opt, optIdx) => {
                          const isSelected = optIdx === activeDinnerIndex;
                          const cleanName = opt.restaurantName.split("（")[0].split("(")[0].trim();
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectDiner("dinner", optIdx, dinnerOptions)}
                              className={`px-3 py-1 rounded-lg text-xs transition cursor-pointer select-none shrink-0 flex items-center gap-1.5 ${
                                isSelected
                                  ? "bg-white text-zinc-900 font-semibold shadow-xs"
                                  : "text-zinc-500 hover:text-zinc-800 font-medium hover:bg-white/50"
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#9E825A]" : "bg-stone-300"}`} />
                              <span className="truncate max-w-[130px] sm:max-w-none">{cleanName}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* In-Place Dinner Micro-Tweak Drawer */}
                    {activeDiningTweakMeal === "dinner" && (
                      <div className="my-2.5 p-3 rounded-xl bg-white border border-stone-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                            <Sparkles className="w-3 h-3 text-[#9E825A]" />
                            <span>{locale === "en" ? "Fine-tune Dinner" : "微调晚餐"}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveDiningTweakMeal(null)}
                            className="text-zinc-400 hover:text-zinc-700 cursor-pointer p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Quick Chips */}
                        <div className="flex flex-wrap gap-1">
                          {[
                            {
                              labelZh: "换同商圈其他特色",
                              labelEn: "Nearby Specialty",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的晚餐（目前是「${currentDay.meals.dinner.restaurantName}」）替换为同商圈其他口碑好、适口性佳的特色餐厅。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s dinner (${currentDay.meals.dinner.restaurantName}) with another highly-rated specialty restaurant in the same area.`,
                            },
                            {
                              labelZh: "换温热清淡滋补",
                              labelEn: "Mild & Comforting",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的晚餐替换为温热、少油少盐、易消化的清淡炖汤或特色养生菜。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s dinner with a mild, comforting, digestive-friendly dining option.`,
                            },
                            {
                              labelZh: "换必吃非遗老字号",
                              labelEn: "Heritage Brand",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的晚餐替换为当地知名百年非遗老字号或地道传统名菜馆。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s dinner with an authentic local heritage culinary institution.`,
                            },
                            {
                              labelZh: "换景观天台/浪漫夜景",
                              labelEn: "Rooftop / Nightscape",
                              promptZh: `请将第 ${currentDay.dayNumber} 天的晚餐替换为同商圈拥有绝佳城市或海景夜景的景观餐厅。`,
                              promptEn: `Please replace Day ${currentDay.dayNumber}'s dinner with a scenic rooftop or waterfront nightscape restaurant.`,
                            },
                          ].map((chip) => {
                            const chipPrompt = locale === "en" ? chip.promptEn : chip.promptZh;
                            const isThisChipTweaking = isDinnerTweaking && tweakingChipPrompt === chipPrompt;
                            return (
                              <button
                                key={chip.labelZh}
                                type="button"
                                disabled={isTweaking}
                                onClick={() =>
                                  executeAITweak(
                                    chipPrompt,
                                    "dinner"
                                  )
                                }
                                className={`text-[10px] px-2 py-0.5 rounded-full border transition cursor-pointer flex items-center gap-1 ${
                                  isThisChipTweaking
                                    ? "bg-[#9E825A] text-white border-[#9E825A]"
                                    : "bg-stone-50 hover:bg-stone-100 text-zinc-700 border-stone-200/70"
                                }`}
                              >
                                {isThisChipTweaking ? (
                                  <Sparkles className="w-2.5 h-2.5 text-white animate-spin" />
                                ) : (
                                  <span>+</span>
                                )}
                                <span>{locale === "en" ? chip.labelEn : chip.labelZh}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Custom Input */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!diningTweakInput.trim()) return;
                            const prompt =
                              locale === "en"
                                ? `Please replace Day ${currentDay.dayNumber}'s dinner with a restaurant matching: ${diningTweakInput.trim()}. Keep it in the same neighborhood.`
                                : `请将第 ${currentDay.dayNumber} 天的晚餐替换为符合要求的新餐厅：${diningTweakInput.trim()}。保持同区域动线顺畅。`;
                            executeAITweak(prompt, "dinner");
                          }}
                          className="flex items-center gap-1.5 pt-0.5"
                        >
                          <input
                            type="text"
                            value={diningTweakInput}
                            onChange={(e) => setDiningTweakInput(e.target.value)}
                            disabled={isTweaking}
                            placeholder={
                              locale === "en"
                                ? "e.g. Quiet private room, authentic local barbecue..."
                                : "输入餐厅要求（如：安静包厢、特色小吃排档、清淡少油...）"
                            }
                            className="flex-1 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                          />
                          <button
                            type="submit"
                            disabled={isTweaking || !diningTweakInput.trim()}
                            className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition disabled:opacity-40 shrink-0 cursor-pointer flex items-center gap-1"
                          >
                            {isDinnerTweaking ? (
                              <span className="w-2.5 h-2.5 border border-white/60 border-t-transparent rounded-full animate-spin" />
                            ) : null}
                            <span>{locale === "en" ? "Tweak" : "微调"}</span>
                          </button>
                        </form>
                      </div>
                    )}

                    {/* Dinner Photo */}
                    {(() => {
                      const mealImage = currentDay.meals.dinner.image || resolveDiningImage(currentDay.meals.dinner, localPlan.meta?.destinations?.join(" + "));
                      if (!mealImage) return null;
                      return (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden my-2.5 bg-stone-100 border border-stone-200/60 group">
                          <img
                            src={mealImage}
                            alt={currentDay.meals.dinner.restaurantName}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                            onError={(e) => {
                              e.currentTarget.src = "/images/spot_yj_bbq.jpg";
                            }}
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1 shadow-xs">
                            <Utensils className="w-2.5 h-2.5 text-[#9E825A]" />
                            <span>{t("authenticFlavor")}</span>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Signature Highlights / Photo Tip */}
                    {currentDay.meals.dinner.photoTip && (
                      <div className="my-1.5 text-[11px] text-zinc-500 italic flex items-start gap-1">
                        <span className="not-italic font-medium text-zinc-700">{t("signatureHighlights")}: </span>
                        <span>{currentDay.meals.dinner.photoTip}</span>
                      </div>
                    )}

                    {/* Recommended Dishes: Clean Editorial Typography */}
                    <div className="my-2 text-xs text-zinc-700 leading-relaxed">
                      <span className="text-zinc-400 font-medium">招牌推荐：</span>
                      <span className="font-medium text-zinc-800">
                        {currentDay.meals.dinner.recommendedDishes.join(" · ")}
                      </span>
                    </div>

                    <div className="text-[11px] text-zinc-500 mb-2">
                      {t("dietarySuitability")}: {currentDay.meals.dinner.elderKidSuitability}
                    </div>

                    {/* Google Reviews & Dianping Links: Monochromatic & Refined */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200/50">
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
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 transition"
                        title={t("viewGoogleReviewsTip")}
                      >
                        <Star className="w-3 h-3 text-[#9E825A]" />
                        <span>{t("googleReviews")}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                      </a>

                      <span className="text-stone-300">·</span>

                      <a
                        href={
                          currentDay.meals.dinner.dianpingUrl ||
                          `https://m.dianping.com/search?keyword=${encodeURIComponent(
                            currentDay.meals.dinner.restaurantName
                          )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 transition"
                        title={locale === "en" ? "View on Dianping" : "在 大众点评 查看"}
                      >
                        <span>{t("dianpingReviews")}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Daily Tips */}
        {currentDay.dailyTips && currentDay.dailyTips.length > 0 && (
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/70 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
            <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2.5">
              {t("dailyTips")}
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-600 leading-relaxed">
              {currentDay.dailyTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#9E825A] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Floating Concierge Copilot Trigger (Bottom Right)             */}
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
          <Sparkles className="w-4 h-4 text-[#9E825A] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
        <span className="text-xs font-semibold tracking-wide">
          {locale === "en" ? "Concierge Copilot" : "行程管家微调"}
        </span>
        {isTweaking && (
          <span className="w-3.5 h-3.5 border-2 border-white/60 border-t-transparent rounded-full animate-spin ml-1" />
        )}
      </button>

      {/* ------------------------------------------------------------- */}
      {/* Floating Concierge Copilot Chat Drawer (Bottom Right)         */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`fixed bottom-5 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-stone-200/90 flex flex-col overflow-hidden transition-all duration-200 ${
          isTweakOpen ? "flex" : "hidden"
        }`}
      >
        {/* Header */}
        <div className="bg-zinc-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-[#9E825A]/40 flex items-center justify-center text-xs font-serif font-black text-[#9E825A]">
              7
            </div>
            <div>
              <div className="text-xs font-bold flex items-center gap-1.5">
                <span>{locale === "en" ? "Concierge Copilot" : "行程管家微调"}</span>
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
              <Sparkles className="w-3 h-3 text-[#9E825A]" />
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
            <div className="p-3 rounded-2xl bg-stone-100 border border-stone-200 text-xs font-medium text-zinc-800 flex items-center gap-2.5 animate-pulse">
              <div className="w-3.5 h-3.5 border-2 border-zinc-800 border-t-transparent rounded-full animate-spin shrink-0" />
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
            className="px-3.5 py-2 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition disabled:opacity-40 shrink-0 shadow-xs flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9E825A]" />
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
