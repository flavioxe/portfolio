"use client";
import { createContext } from "react";

export type Locale = "en" | "pt";

export interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(key: string, vars?: Record<string, string | number>) => T;
}

export const I18nContext = createContext<I18nContextProps>({
  locale: "en",
  setLocale: () => {},
  t: ((key: string) => key) as I18nContextProps["t"],
});
