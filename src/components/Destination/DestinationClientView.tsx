"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { ItineraryDashboard } from "@/components/Itinerary/ItineraryDashboard";
import { TravelPlan } from "@/types/itinerary";
import { getLocalPlans, saveLocalPlan } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";
import { getCuratedPlanById } from "@/lib/curated-plans-provider";

interface DestinationClientViewProps {
  initialPlanEn: TravelPlan;
  initialPlanZh: TravelPlan;
  planId: string;
}

export const DestinationClientView: React.FC<DestinationClientViewProps> = ({
  initialPlanEn,
  initialPlanZh,
  planId,
}) => {
  const router = useRouter();
  const { locale } = useLanguage();
  const [currentPlan, setCurrentPlan] = useState<TravelPlan>(
    locale === "zh" ? initialPlanZh : initialPlanEn
  );
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    setSavedCount(getLocalPlans().length);
  }, []);

  useEffect(() => {
    const localized = getCuratedPlanById(planId, locale);
    if (localized) {
      setCurrentPlan(localized);
    }
  }, [locale, planId]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col justify-between">
      <div>
        <Navbar
          onGoToHome={() => router.push("/")}
          onGoToSaved={() => router.push("/?view=saved")}
          onScrollToGenerator={() => router.push("/#generator-capsule")}
          savedCount={savedCount}
        />

        <main>
          <ItineraryDashboard
            plan={currentPlan}
            onBack={() => router.push("/")}
            onPlanUpdated={(updatedPlan) => {
              setCurrentPlan(updatedPlan);
              saveLocalPlan(updatedPlan);
              setSavedCount(getLocalPlans().length);
            }}
          />
        </main>
      </div>
    </div>
  );
};
