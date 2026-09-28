"use client";

import React, { useState, useEffect } from "react";
import { Bookmark, Clock, Trash2, ChevronRight, Sparkles } from "lucide-react";
import { TravelPlan, WizardConfig } from "@/types/itinerary";
import { getLocalPlans, deleteLocalPlan } from "@/lib/storage";

interface SavedPlansViewProps {
  onSelectPlan: (plan: TravelPlan) => void;
  onGoToWizard: () => void;
}

export const SavedPlansView: React.FC<SavedPlansViewProps> = ({
  onSelectPlan,
  onGoToWizard,
}) => {
  const [plans, setPlans] = useState<TravelPlan[]>([]);

  useEffect(() => {
    setPlans(getLocalPlans());
  }, []);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm("确定要删除这条保存的行程吗？")) {
      deleteLocalPlan(id);
      setPlans(getLocalPlans());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-zinc-700 text-xs font-semibold mb-3 border border-stone-200">
          <Bookmark className="w-3.5 h-3.5 text-[#C5A880]" />
          本地行程档案
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
          我的行程档案
        </h1>
        <p className="mt-2 text-sm text-zinc-500 max-w-xl mx-auto">
          您在本机生成或查看过的所有路线均已自动保存在本地，无需登录，随时查阅。
        </p>
      </div>

      {plans.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-200 p-8">
          <Bookmark className="w-10 h-10 text-stone-300 mx-auto mb-2" />
          <div className="text-sm font-semibold text-zinc-700">暂无保存的行程</div>
          <p className="text-xs text-zinc-400 mt-1 mb-4">
            开启您的下一趟专属之旅。
          </p>
          <button
            type="button"
            onClick={onGoToWizard}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition shadow-xs"
          >
            开始定制
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {plans.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectPlan(p)}
              className="bg-white rounded-3xl border border-stone-200/90 hover:border-stone-400 hover:shadow-md p-4 sm:p-5 transition cursor-pointer flex items-center justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-zinc-900 text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A880]" />
                    {p.meta.durationDays} 天行程
                  </span>
                  <span className="text-xs text-zinc-400">
                    生成于: {new Date(p.meta.generatedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-bold text-base text-zinc-900 group-hover:text-black transition">
                  {p.meta.tripTitle}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.meta.travelerProfile.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-stone-100 text-zinc-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={(e) => handleDelete(e, p.id)}
                  className="p-2 rounded-full text-zinc-400 hover:text-red-600 hover:bg-red-50 transition"
                  title="删除"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="text-xs font-bold text-zinc-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  打开
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
