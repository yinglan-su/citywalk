"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Clock,
  Heart,
  ChevronRight,
  GitFork,
  Compass,
  X,
} from "lucide-react";
import { GalleryItem, TravelPlan, WizardConfig } from "@/types/itinerary";
import { decompressPlan } from "@/lib/storage";

interface GalleryViewProps {
  onSelectPlan: (plan: TravelPlan) => void;
  onRemixPlan: (config: Partial<WizardConfig>) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onSelectPlan,
  onRemixPlan,
}) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchGallery = async (s = "") => {
    setIsLoading(true);
    try {
      const q = new URLSearchParams();
      if (s) q.set("search", s);

      const res = await fetch(`/api/gallery?${q.toString()}`);
      const data = await res.json();
      if (data.success) {
        setItems(data.items || []);
      }
    } catch (err) {
      console.error("Failed to load gallery:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery(search);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGallery(search);
  };

  const handleCardClick = (item: GalleryItem) => {
    if (item.rawPlan) {
      onSelectPlan(item.rawPlan);
      return;
    }

    if (item.compressedPlan) {
      const decompressed = decompressPlan(item.compressedPlan);
      if (decompressed) {
        onSelectPlan(decompressed);
        return;
      }
    }

    alert("无法加载此行程详情");
  };

  const handleRemixClick = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    onRemixPlan({
      destinations: item.destination,
      durationDays: item.durationDays,
      companions: item.tags.includes("长辈友好") ? ["elders"] : [],
      mobility: "low",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header: Title + Search Bar side-by-side */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight shrink-0">
          精选实操路线
        </h2>

        {/* Search Bar next to Title */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full sm:w-80 flex items-center"
        >
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value === "") {
                fetchGallery("");
              }
            }}
            placeholder="搜索城市或路线 (如 延吉、青岛)..."
            className="w-full pl-9 pr-8 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-xs transition"
          />
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                fetchGallery("");
              }}
              className="absolute right-3 text-zinc-400 hover:text-zinc-700 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>
      </div>

      {/* Gallery Cards Grid - Four Seasons Luxury Style */}
      {isLoading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-3 border-zinc-900 border-t-transparent mb-3" />
          <div className="text-xs font-medium text-zinc-400">探索路线精选中...</div>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-200 p-8">
          <Compass className="w-10 h-10 text-stone-300 mx-auto mb-2" />
          <div className="text-sm font-bold text-zinc-800">暂无匹配路线</div>
          <p className="text-xs text-zinc-400 mt-1">试试搜索其他城市，或在上方开启专属定制。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group cursor-pointer select-none flex flex-col justify-between bg-white rounded-3xl border border-stone-200/80 hover:border-stone-300 hover:shadow-md transition-all p-3.5"
            >
              <div>
                {/* 16:9 Image Cover with Badges */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 mb-3.5 shadow-xs">
                  {item.coverImage ? (
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-zinc-900 via-stone-900 to-zinc-800 flex items-center justify-center p-6 text-white text-center">
                      <div>
                        <MapPin className="w-8 h-8 mx-auto mb-2 opacity-80 text-[#C5A880]" />
                        <div className="font-bold text-base">{item.destination}</div>
                      </div>
                    </div>
                  )}

                  {/* Top Floating Glass Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                      {item.durationDays} 天行程
                    </span>
                    {item.isCurated && (
                      <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 border border-[#C5A880]/40 backdrop-blur-md text-[#C5A880] text-[10px] font-bold">
                        官方精选
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-md text-zinc-700 flex items-center justify-center shadow-xs">
                      <Heart className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Title & Location */}
                <h3 className="font-bold text-base text-zinc-900 group-hover:text-black transition leading-snug line-clamp-1 px-1">
                  {item.title}
                </h3>

                {/* 1-Line Highlight */}
                {item.highlights && item.highlights[0] && (
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1 px-1">
                    {item.highlights[0]}
                  </p>
                )}

                {/* Compact Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mt-2.5 px-1">
                  {item.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-stone-100 text-zinc-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={(e) => handleRemixClick(e, item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 hover:text-zinc-900 py-1 transition"
                >
                  <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                  基于此定制
                </button>

                <div className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 group-hover:translate-x-0.5 transition-transform">
                  查看攻略
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
