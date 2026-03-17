"use client";
import React, { useState, useEffect, useCallback } from "react";
import { I18nContext, Locale } from "../contexts/I18nContext";
import enMessages from "../locales/en.json";

function interpolate(str: string, vars?: Record<string, string | number>) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k]?.toString() ?? "");
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [messages, setMessages] = useState<Record<string, unknown>>(enMessages as Record<string, unknown>);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale | null;
    if (storedLocale === "en" || storedLocale === "pt") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    import(`../locales/${locale}.json`).then((mod) => setMessages(mod.default || mod));
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = useCallback(
    <T = string,>(key: string, vars?: Record<string, string | number>): T => {
      const keys = key.split(".");
      let value: unknown = messages;
      for (const k of keys) {
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key as T;
        }
        if (value == null) return key as T;
      }
      if (typeof value === "string") return interpolate(value, vars) as T;
      return value as T;
    },
    [messages]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
