"use client";
import React, { useState, useEffect, useCallback } from "react";
import { I18nContext, Locale } from "./I18nContext";

function interpolate(str: string, vars?: Record<string, string | number>) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k]?.toString() ?? "");
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Locale) || "en";
    }
    return "en";
  });
  const [messages, setMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    import(`../locales/${locale}.json`).then((mod) => setMessages(mod.default || mod));
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const keys = key.split(".");
      let value: any = messages;
      for (const k of keys) {
        value = value?.[k];
        if (value == null) return key;
      }
      if (typeof value === "string") return interpolate(value, vars);
      return key;
    },
    [messages]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
