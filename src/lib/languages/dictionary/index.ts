import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES, type Language } from "../index";
import enUS from "./en-US";
import ptBR from "./pt-BR";

export type Dictionary = typeof ptBR;

const dictionaries: Record<Language, Dictionary> = {
  "en-US": enUS,
  "pt-BR": ptBR,
};

export const getDictionary = (locale: Language) => {
  const lang =
    SUPPORTED_LANGUAGES.find((lang) => lang.inPath === locale) ||
    DEFAULT_LOCALE;
  return dictionaries[lang.value] || dictionaries[DEFAULT_LOCALE.value];
};
