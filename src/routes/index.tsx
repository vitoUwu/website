import { createFileRoute, redirect } from "@tanstack/react-router";
import { getLocalePath } from "@/lib/i18n";
import { getVisitorContext } from "@/lib/visitor";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const { locale } = await getVisitorContext();

    throw redirect({
      to: "/$locale",
      params: { locale: getLocalePath(locale) },
      statusCode: 307,
    });
  },
});
