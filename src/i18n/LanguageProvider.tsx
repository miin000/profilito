"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import en from "@/i18n/en";
import vi from "@/i18n/vi";

export type Language = "en" | "vi";
type Dictionary = typeof en | typeof vi;
type ContextValue = { language: Language; setLanguage: (value: Language) => void; t: Dictionary };
const LanguageContext = createContext<ContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("profilito-language");
    const detected: Language = navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
    const next: Language = saved === "vi" || saved === "en" ? saved : detected;
    setLanguage(next);
    document.documentElement.lang = next;
  }, []);
  useEffect(() => {
    const title = language === "vi"
      ? "Phạm Quang Minh — Lập trình viên Backend"
      : "Phạm Quang Minh — Backend Developer";
    const description = language === "vi"
      ? "Portfolio của Phạm Quang Minh, Backend Developer (Intern), tập trung vào NestJS, TypeScript, PostgreSQL và phân tích nghiệp vụ."
      : "Portfolio of Phạm Quang Minh, Backend Developer (Intern) focused on NestJS, TypeScript, PostgreSQL, and business analysis.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [language]);
  const updateLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem("profilito-language", next);
    document.documentElement.lang = next;
  };
  const value = useMemo(() => ({ language, setLanguage: updateLanguage, t: language === "vi" ? vi : en }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useT must be used inside LanguageProvider");
  return context;
}
