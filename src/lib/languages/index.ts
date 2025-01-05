export type Language = "en-US" | "pt-BR";

export type withLocaleParam<T = unknown> = {
  params: Promise<
    {
      locale: Language;
    } & T
  >;
};

export type SupportedLanguages = {
  label: string;
  value: Language;
  country: string;
  enabled: boolean;
  hreflang: string;
  inPath: string;
};

export const SUPPORTED_LANGUAGES: Array<SupportedLanguages> = [
  {
    label: "English",
    value: "en-US",
    country: "US",
    enabled: true,
    hreflang: "en-US",
    inPath: "en",
  },
  {
    label: "Português",
    value: "pt-BR",
    country: "BR",
    enabled: true,
    hreflang: "pt-BR",
    inPath: "pt",
  },
];

export const DEFAULT_LOCALE: SupportedLanguages = SUPPORTED_LANGUAGES.find(
  (language) => language.value === "pt-BR"
)!;
