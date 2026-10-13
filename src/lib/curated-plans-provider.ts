import { CURATED_PLANS as CURATED_PLANS_ZH } from "@/data/curated-plans";
import { CURATED_PLANS_EN } from "@/data/curated-plans-en";
import { Locale } from "./i18n";
import { TravelPlan } from "@/types/itinerary";
import { getDefaultHotelsForPlan } from "@/data/default-hotels";

export function getCuratedPlans(locale: Locale): TravelPlan[] {
  const plans = locale === "en" ? CURATED_PLANS_EN : CURATED_PLANS_ZH;
  return plans.map((p) => {
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
      return matched;
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
