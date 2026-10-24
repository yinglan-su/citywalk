"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { TripWizard } from "@/components/Wizard/TripWizard";
import { AtelierHome } from "@/components/Home/AtelierHome";
import { SavedPlansView } from "@/components/Saved/SavedPlansView";
import { ItineraryDashboard } from "@/components/Itinerary/ItineraryDashboard";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { decompressPlan, getLocalPlans, saveLocalPlan } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { locale, t } = useLanguage();
  const [viewMode, setViewMode] = useState<"home" | "saved" | "itinerary">("home");
  const [currentPlan, setCurrentPlan] = useState<TravelPlan | null>(null);
  const [remixConfig, setRemixConfig] = useState<Partial<WizardConfig> | undefined>(undefined);
  const [savedCount, setSavedCount] = useState(0);

  const updateSavedCount = () => {
    setSavedCount(getLocalPlans().length);
  };

  useEffect(() => {
    updateSavedCount();

    // Check URL Hash for shared compressed plan (Zero-database instant link sharing!)
    if (typeof window !== "undefined" && window.location.hash.includes("#plan=")) {
      const match = window.location.hash.match(/#plan=([^&]+)/);
      if (match && match[1]) {
        const decompressed = decompressPlan(match[1]);
        if (decompressed) {
          setCurrentPlan(decompressed);
          setViewMode("itinerary");
          saveLocalPlan(decompressed);
          updateSavedCount();
        }
      }
    }
  }, []);

  const handlePlanGenerated = (plan: TravelPlan) => {
    setCurrentPlan(plan);
    saveLocalPlan(plan);
    updateSavedCount();
    setViewMode("itinerary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectPlan = (plan: TravelPlan) => {
    setCurrentPlan(plan);
    saveLocalPlan(plan);
    updateSavedCount();
    setViewMode("itinerary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemixPlan = (config: Partial<WizardConfig>) => {
    setRemixConfig(config);
    setViewMode("home");
    // Smooth scroll to top generator capsule
    const el = document.getElementById("generator-capsule");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToGenerator = () => {
    if (viewMode !== "home") setViewMode("home");
    setTimeout(() => {
      const el = document.getElementById("generator-capsule");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
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
          onScrollToGenerator={handleScrollToGenerator}
          savedCount={savedCount}
        />

        <main>
          {viewMode === "home" && (
            <div className="space-y-4 sm:space-y-6">
              {/* Elevated Editorial Hero Section */}
              <section className="relative overflow-hidden pt-8 pb-2 sm:pt-12 sm:pb-3 px-4 sm:px-6">
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3">
                  {/* Editorial Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-tight leading-[1.18]">
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


                  {/* Generator Console */}
                  <div id="generator-capsule" className="pt-2">
                    <TripWizard
                      onPlanGenerated={handlePlanGenerated}
                      initialConfig={remixConfig}
                    />
                  </div>
                </div>
              </section>

              {/* Atelier Showcase (Rotating Curator's Spotlight & Thematic Collections) */}
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
                handleScrollToGenerator();
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
                updateSavedCount();
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
              ? "Bespoke Slow Travel"
              : "慢调有时 · 步履安然"}
          </div>
          <div className="text-zinc-400">
            © 7ka
          </div>
        </div>
      </footer>
    </div>
  );
}
