"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Compass, Sparkles, ArrowRight, Lock, KeyRound, Loader2 } from "lucide-react";

function UnlockContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const [passcode, setPasscode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = async (codeToSubmit?: string) => {
    const code = (codeToSubmit ?? passcode).trim();
    if (!code) {
      setErrorMsg("请输入访问口令");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: code }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Smooth transition and redirect
        router.push(returnUrl);
        router.refresh();
      } else {
        setErrorMsg(data.error || "口令不正确，请重新输入");
        triggerShake();
        setPasscode("");
      }
    } catch {
      setErrorMsg("网络或服务器异常，请稍后重试");
      triggerShake();
    } finally {
      setIsLoading(false);
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleKeypadPress = (digit: string) => {
    if (isLoading) return;
    if (passcode.length < 10) {
      const nextCode = passcode + digit;
      setPasscode(nextCode);
      if (nextCode.length === 5) {
        // Auto-submit when 5 digits are entered
        handleSubmit(nextCode);
      }
    }
  };

  const handleBackspace = () => {
    if (isLoading) return;
    setPasscode((prev) => prev.slice(0, -1));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F8F9FA] via-[#F2F4F7] to-[#E9ECEF] flex items-center justify-center p-4">
      <div
        className={`w-full max-w-sm bg-white/95 backdrop-blur-xl border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-zinc-900/5 transition-transform duration-300 ${
          isShaking ? "animate-shake ring-2 ring-red-400" : ""
        }`}
      >
        {/* Header Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-950 flex items-center justify-center shadow-lg shadow-zinc-900/20 text-white mb-4 relative">
            <Compass className="w-8 h-8 text-amber-300 animate-spin-slow" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center shadow-xs">
              <Lock className="w-3.5 h-3.5 text-zinc-950 stroke-[2.5]" />
            </div>
          </div>

          <h1 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-1.5 justify-center">
            TravelPlan AI
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
              PRO
            </span>
          </h1>
          <p className="text-xs text-zinc-500 mt-1 max-w-[240px]">
            站点已启用访问安全保护，请输入 5 位专属访问口令进入
          </p>
        </div>

        {/* PIN Indicators */}
        <div className="my-6 flex justify-center items-center gap-3">
          {[0, 1, 2, 3, 4].map((idx) => {
            const isFilled = passcode.length > idx;
            return (
              <div
                key={idx}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                  isFilled
                    ? "bg-zinc-900 scale-110 shadow-xs ring-2 ring-zinc-900/20"
                    : "bg-zinc-200 border border-zinc-300/80"
                }`}
              />
            );
          })}
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-4 text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-100 rounded-full animate-fadeIn">
              {errorMsg}
            </span>
          </div>
        )}

        {/* Hidden / Desktop input support */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
              <KeyRound className="w-4 h-4" />
            </div>
            <input
              type="password"
              inputMode="numeric"
              maxLength={10}
              value={passcode}
              autoFocus
              onChange={(e) => setPasscode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入访问口令 (如 55555)"
              className="w-full pl-9 pr-10 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-center font-mono text-sm tracking-wider focus:outline-hidden focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 placeholder:font-sans placeholder:tracking-normal"
            />
            {passcode.length > 0 && (
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={isLoading}
                className="absolute inset-y-0 right-1.5 my-auto h-7 px-2.5 rounded-lg bg-zinc-900 text-white text-xs font-medium flex items-center gap-1 hover:bg-zinc-800 disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Keypad Grid for Mobile / Touch Devices */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-zinc-100">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleKeypadPress(num.toString())}
              disabled={isLoading}
              className="h-12 rounded-xl bg-zinc-50/80 hover:bg-zinc-100 active:bg-zinc-200 active:scale-95 text-lg font-semibold text-zinc-800 transition-all flex items-center justify-center select-none disabled:opacity-50"
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPasscode("")}
            disabled={isLoading || passcode.length === 0}
            className="h-12 rounded-xl text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-all flex items-center justify-center select-none disabled:opacity-30"
          >
            清空
          </button>
          <button
            type="button"
            onClick={() => handleKeypadPress("0")}
            disabled={isLoading}
            className="h-12 rounded-xl bg-zinc-50/80 hover:bg-zinc-100 active:bg-zinc-200 active:scale-95 text-lg font-semibold text-zinc-800 transition-all flex items-center justify-center select-none disabled:opacity-50"
          >
            0
          </button>
          <button
            type="button"
            onClick={handleBackspace}
            disabled={isLoading || passcode.length === 0}
            className="h-12 rounded-xl text-xs font-medium text-zinc-600 hover:bg-zinc-100 active:bg-zinc-200 transition-all flex items-center justify-center select-none disabled:opacity-30"
          >
            删除
          </button>
        </div>

        {/* Footer Security Badges */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-center gap-4 text-[11px] text-zinc-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Edge 端安全鉴权
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            口令默认：55555
          </span>
        </div>
      </div>
    </div>
  );
}

export default function UnlockPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-zinc-400 animate-spin" />
        </div>
      }
    >
      <UnlockContent />
    </Suspense>
  );
}
