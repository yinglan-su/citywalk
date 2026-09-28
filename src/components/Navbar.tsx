"use client";

import React from "react";
import { Bookmark } from "lucide-react";

interface NavbarProps {
  onGoToSaved: () => void;
  onGoToHome: () => void;
  onScrollToGenerator?: () => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onGoToSaved,
  onGoToHome,
  savedCount,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo - 7ka Bespoke Luxury Monogram */}
        <div
          onClick={onGoToHome}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform border border-zinc-800">
            <span className="font-serif font-black text-sm text-[#C5A880] tracking-tighter">
              7
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight text-zinc-900">
              7ka<span className="text-[#C5A880]">.</span>
            </span>
            <span className="text-[9px] tracking-widest text-zinc-400 font-medium uppercase mt-0.5">
              JOURNEYS
            </span>
          </div>
        </div>

        {/* Right Actions: Only 我的行程 (定制路线 deleted per user request) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onGoToSaved}
            className="px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-zinc-800 text-xs font-semibold transition flex items-center gap-1.5 select-none border border-stone-200/80"
          >
            <Bookmark className="w-3.5 h-3.5 text-zinc-500" />
            <span>我的行程</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
