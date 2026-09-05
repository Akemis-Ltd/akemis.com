import en from "./dictionaries/en";
import es from "./dictionaries/es";
import fr from "./dictionaries/fr";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { en, fr, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
export * from "./config";
