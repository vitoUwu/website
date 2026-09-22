import { match } from "@formatjs/intl-localematcher";
import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import {
  DEFAULT_LOCALE,
  getLocaleFromPath,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n";

const SAO_PAULO_TIME_ZONE = "America/Sao_Paulo";
const saoPauloTimeFormatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: SAO_PAULO_TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
const saoPauloDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: SAO_PAULO_TIME_ZONE,
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function detectBrowserLocale(): Locale {
  const acceptLanguage = getRequestHeader("accept-language") ?? "";
  const requestedLocales = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim())
    .filter((locale): locale is string => Boolean(locale) && locale !== "*");

  try {
    return match(
      requestedLocales,
      [...SUPPORTED_LOCALES],
      DEFAULT_LOCALE,
    ) as Locale;
  } catch {
    return DEFAULT_LOCALE;
  }
}

export const getVisitorContext = createServerFn({ method: "GET" }).handler(
  () => {
    const pathname = new URL(getRequest().url).pathname;
    const localePath = pathname.split("/").filter(Boolean)[0];
    const locale = getLocaleFromPath(localePath) ?? detectBrowserLocale();
    const now = new Date();
    const saoPauloTime = saoPauloTimeFormatter.format(now);
    const dateParts = Object.fromEntries(
      saoPauloDateFormatter
        .formatToParts(now)
        .map(({ type, value }) => [type, value]),
    );
    const monthNames =
      locale === "pt-BR"
        ? [
            "JAN",
            "FEV",
            "MAR",
            "ABR",
            "MAI",
            "JUN",
            "JUL",
            "AGO",
            "SET",
            "OUT",
            "NOV",
            "DEZ",
          ]
        : [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ];
    const month = monthNames[Number(dateParts.month) - 1] ?? monthNames[0];
    const updatedDate = `${dateParts.day} ${month} ${dateParts.year}`;

    return { locale, saoPauloTime, updatedDate };
  },
);
