"use client";
import { createContext } from "react";

export type Locale = "en" | "pt";

export interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

export const I18nContext = createContext<I18nContextProps>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});
