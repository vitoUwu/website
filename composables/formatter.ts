const dateFormatters = new Map<string, Intl.DateTimeFormat>();
const relativeDateFormatters = new Map<string, Intl.RelativeTimeFormat>();

function date(date: string | Date, locale: string): string {
  const formatter = dateFormatters.get(locale);

  if (formatter) {
    return formatter.format(new Date(date));
  }

  const newFormatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  });

  dateFormatters.set(locale, newFormatter);

  return newFormatter.format(new Date(date));
}

function useRelativeData(locale: string) {
  const toRelativeData = (
    amount: number,
    relativeTo: Intl.RelativeTimeFormatUnit
  ) => {
    const formatter = relativeDateFormatters.get(locale);

    if (formatter) {
      return formatter.format(amount, relativeTo);
    }

    const newFormatter = new Intl.RelativeTimeFormat(locale, {
      numeric: "auto",
    });

    relativeDateFormatters.set(locale, newFormatter);

    return newFormatter.format(amount, relativeTo);
  };

  return {
    toRelativeData,
  };
}

export { date, useRelativeData };
