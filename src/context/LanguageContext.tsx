"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, TranslationDictionary, translations } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: keyof TranslationDictionary) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("tp_locale") as Locale | null;
    if (saved === "zh" || saved === "en") {
      setLocaleState(saved);
    } else {
      // Default to English for EU & US travelers visiting APAC, switch to zh if browser is Chinese
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("zh")) {
        setLocaleState("zh");
      } else {
        setLocaleState("en");
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("tp_locale", newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : "zh");
  };

  const t = (key: keyof TranslationDictionary): string => {
    const dict = translations[locale] || translations.en;
    const val = dict[key] ?? translations.en[key];
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.join(", ");
    return String(key);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
