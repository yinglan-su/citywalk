"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { TripWizard } from "@/components/Wizard/TripWizard";
import { GalleryView } from "@/components/Gallery/GalleryView";
import { SavedPlansView } from "@/components/Saved/SavedPlansView";
import { ItineraryDashboard } from "@/components/Itinerary/ItineraryDashboard";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { decompressPlan, getLocalPlans, saveLocalPlan } from "@/lib/storage";

const HERO_BACKGROUNDS = [
  { url: "/images/spot_badaguan.jpg", title: "青岛 · 八大关红瓦绿树" },
  { url: "/images/spot_yj_danmu.jpg", title: "延吉 · 延边大学双语霓虹" },
  { url: "/images/spot_zhanqiao.jpg", title: "青岛 · 栈桥海天一色" },
  { url: "/images/spot_yj_rice.jpg", title: "海兰江 · 稻田风光与民俗村" },
  { url: "/images/spot_taiqing.jpg", title: "崂山 · 太清山海相依" },
];

export default function Home() {
  const [viewMode, setViewMode] = useState<"home" | "saved" | "itinerary">("home");
  const [currentPlan, setCurrentPlan] = useState<TravelPlan | null>(null);
  const [remixConfig, setRemixConfig] = useState<Partial<WizardConfig> | undefined>(undefined);
  const [savedCount, setSavedCount] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const updateSavedCount = () => {
    setSavedCount(getLocalPlans().length);
  };

  useEffect(() => {
    // Pick a scenic photo once per session/page load; remains stable until refresh
    const randomIndex = Math.floor(Math.random() * HERO_BACKGROUNDS.length);
    setBgIndex(randomIndex);
  }, []);

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
            <div className="space-y-12 sm:space-y-16">
              {/* Hero Section: Four Seasons Atmospheric Travel Scenery Backdrop (Session-Stable) */}
              <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6">
                {/* Background Images Layer */}
                <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
                  {HERO_BACKGROUNDS.map((bg, idx) => (
                    <div
                      key={bg.url}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === bgIndex ? "opacity-85" : "opacity-0"
                      }`}
                    >
                      <img
                        src={bg.url}
                        alt={bg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {/* Four Seasons Luxury Soft Ambient Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#FAF9F6]/40 to-[#FAF9F6]" />
                </div>

                {/* Content Container (Above Background) */}
                <div className="relative z-10 max-w-3xl mx-auto">
                  <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight drop-shadow-xs">
                      探索你的下一段旅程
                    </h1>
                    {/* Location Caption Badge */}
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-stone-200/90 text-[11px] text-zinc-700 font-semibold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                      <span>{HERO_BACKGROUNDS[bgIndex]?.title}</span>
                    </div>
                  </div>

                  <TripWizard
                    onPlanGenerated={handlePlanGenerated}
                    initialConfig={remixConfig}
                  />
                </div>
              </section>

              {/* Showcase Section: Curated Gallery Grid Directly Below */}
              <section className="border-t border-stone-200/80 pt-8 sm:pt-10 pb-16">
                <GalleryView
                  onSelectPlan={handleSelectPlan}
                  onRemixPlan={handleRemixPlan}
                />
              </section>
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
      <footer className="border-t border-stone-200/80 bg-white py-6 mt-16 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="font-semibold text-zinc-700">
            7ka · 私人实操级旅行规划
          </div>
          <div className="text-zinc-400">
            Powered by Google Gemini 3.8 Flash & Next.js
          </div>
        </div>
      </footer>
    </div>
  );
}
