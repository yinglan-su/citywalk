import { CURATED_PLANS as CURATED_PLANS_ZH } from "@/data/curated-plans";
import { CURATED_PLANS_EN } from "@/data/curated-plans-en";
import { Locale } from "./i18n";
import { TravelPlan } from "@/types/itinerary";
import { getDefaultHotelsForPlan } from "@/data/default-hotels";

const APAC_PRIORITY_ORDER = [
  "curated_beijing_4d",
  "curated_shanghai_3d",
  "curated_tokyo_4d",
  "curated_kyoto_4d",
  "curated_singapore_4d",
  "curated_hongkong_3d",
  "curated_xian_4d",
  "curated_chengdu_4d",
  "curated_taipei_4d",
  "curated_qingdao_3d",
  "curated_xiamen_3d",
  "curated_yanji_hunchun_6d",
];

export function getCuratedPlans(locale: Locale): TravelPlan[] {
  const rawPlans = locale === "en" ? CURATED_PLANS_EN : CURATED_PLANS_ZH;
  const sortedPlans = [...rawPlans].sort((a, b) => {
    const idxA = APAC_PRIORITY_ORDER.indexOf(a.id);
    const idxB = APAC_PRIORITY_ORDER.indexOf(b.id);
    return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
  });
  return sortedPlans.map((p) => {
    if (!p.hotelOptions || p.hotelOptions.length === 0) {
      return {
        ...p,
        hotelOptions: getDefaultHotelsForPlan(p, locale),
      };
    }
    return p;
  });
}

export function getCuratedPlanById(id: string, locale: Locale): TravelPlan | undefined {
  const plans = getCuratedPlans(locale);
  return plans.find((p) => p.id === id);
}

export function localizeCuratedPlan(plan: TravelPlan, locale: Locale): TravelPlan {
  if (plan.id && (plan.id.startsWith("curated_") || plan.id.startsWith("curated-"))) {
    const matched = getCuratedPlanById(plan.id, locale);
    if (matched) {
      // If the incoming plan already has customized or selected hotel options, preserve them!
      const userSelectedHotelId = plan.hotelOptions?.find((h) => h.isSelected)?.id;
      const hotelOptions =
        plan.hotelOptions && plan.hotelOptions.length > 0
          ? plan.hotelOptions.map((h) => ({
              ...h,
              isSelected: userSelectedHotelId ? h.id === userSelectedHotelId : h.isSelected,
            }))
          : matched.hotelOptions || getDefaultHotelsForPlan(matched, locale);

      return {
        ...matched,
        ...plan,
        hotelOptions,
      };
    }
  }
  if (!plan.hotelOptions || plan.hotelOptions.length === 0) {
    return {
      ...plan,
      hotelOptions: getDefaultHotelsForPlan(plan, locale),
    };
  }
  return plan;
}
