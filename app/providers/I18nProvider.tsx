"use client";
import React, { useState, useEffect, useCallback } from "react";
import { I18nContext, Locale } from "../contexts/I18nContext";

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
  // messages pode ser um objeto aninhado de strings
  type Messages = { [key: string]: string | Messages };
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    import(`../locales/${locale}.json`).then((mod) => setMessages(mod.default || mod));
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const keys = key.split(".");
      let value: unknown = messages;
      for (const k of keys) {
        if (typeof value === "object" && value !== null) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      if (typeof value === "string") return interpolate(value, vars);
      // Permitir retornar arrays ou objetos diretamente
      if (Array.isArray(value) || typeof value === "object") return value as string;
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
