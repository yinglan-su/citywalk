"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { TripWizard } from "@/components/Wizard/TripWizard";
import { AtelierHome } from "@/components/Home/AtelierHome";
import { ItineraryDashboard } from "@/components/Itinerary/ItineraryDashboard";
import { SavedPlansView } from "@/components/Saved/SavedPlansView";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { getLocalPlans, saveLocalPlan } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";

export default function DemoPage() {
  const { locale, t } = useLanguage();
  const [viewMode, setViewMode] = useState<"home" | "saved" | "itinerary">("home");
  const [currentPlan, setCurrentPlan] = useState<TravelPlan | null>(null);
  const [remixConfig, setRemixConfig] = useState<Partial<WizardConfig> | undefined>(undefined);
  const [savedCount, setSavedCount] = useState(0);

  React.useEffect(() => {
    setSavedCount(getLocalPlans().length);
  }, []);

  const handlePlanGenerated = (plan: TravelPlan) => {
    setCurrentPlan(plan);
    saveLocalPlan(plan);
    setSavedCount(getLocalPlans().length);
    setViewMode("itinerary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectPlan = (plan: TravelPlan) => {
    setCurrentPlan(plan);
    saveLocalPlan(plan);
    setSavedCount(getLocalPlans().length);
    setViewMode("itinerary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemixPlan = (config: Partial<WizardConfig>) => {
    setRemixConfig(config);
    setViewMode("home");
    const el = document.getElementById("generator-capsule");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col justify-between">
      <div>
        <Navbar
          onGoToHome={() => {
            setViewMode("home");
            setRemixConfig(undefined);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onGoToSaved={() => {
            setViewMode("saved");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          savedCount={savedCount}
        />

        <main>
          {viewMode === "home" && (
            <div className="space-y-12 sm:space-y-16">
              {/* Elevated Editorial Hero Section */}
              <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6">
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
                  {/* Editorial Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 tracking-tight leading-[1.15]">
                    {locale === "en" ? (
                      <>
                        Travel in Stillness.<br />
                        <span className="italic font-normal text-zinc-700">Walk with Ease.</span>
                      </>
                    ) : (
                      <>
                        慢调有时 · <span className="font-normal text-zinc-700">步履安然</span>
                      </>
                    )}
                  </h1>

                  <p className="text-xs sm:text-sm text-zinc-500 max-w-lg mx-auto font-light leading-relaxed">
                    {locale === "en"
                      ? "Thoughtful pacing and accessible paths, designed for traveling with ease."
                      : "更平缓的步调，更顺畅的路线。让全家旅程舒缓从容。"}
                  </p>

                  {/* Generator Console */}
                  <div id="generator-capsule" className="pt-4">
                    <TripWizard
                      onPlanGenerated={handlePlanGenerated}
                      initialConfig={remixConfig}
                    />
                  </div>
                </div>
              </section>

              {/* Atelier Showcase */}
              <AtelierHome
                onSelectPlan={handleSelectPlan}
                onRemixPlan={handleRemixPlan}
              />
            </div>
          )}

          {viewMode === "saved" && (
            <SavedPlansView
              onSelectPlan={handleSelectPlan}
              onGoToWizard={() => {
                setViewMode("home");
              }}
            />
          )}

          {viewMode === "itinerary" && currentPlan && (
            <ItineraryDashboard
              plan={currentPlan}
              onBack={() => {
                setViewMode("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onPlanUpdated={(updatedPlan) => {
                setCurrentPlan(updatedPlan);
                saveLocalPlan(updatedPlan);
                setSavedCount(getLocalPlans().length);
              }}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-10 mt-20 text-xs text-zinc-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif text-sm font-bold text-zinc-800">
            7ka<span className="text-[#C5A880]">.</span> Atelier
          </div>
          <div className="text-zinc-500">
            {locale === "en"
              ? "Bespoke Slow Travel & Generational Ease"
              : "慢调旅行 · 专属定制 · 世代同行"}
          </div>
          <div className="text-zinc-400">
            © 7ka
          </div>
        </div>
      </footer>
    </div>
  );
}
