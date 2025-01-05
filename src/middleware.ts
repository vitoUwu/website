import { type NextRequest, NextResponse, URLPattern } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from "./lib/languages";

const pattern = /^\/([a-z]+)\/?/i;

const StatusCodes = {
  PERMANENT_REDIRECT: 301,
  TEMPORARY_REDIRECT: 302,
} as const;

const redirects = [
  {
    redirectTo: "/",
    pattern: new URLPattern({ pathname: "/works" }),
    code: StatusCodes.PERMANENT_REDIRECT,
  },
  {
    redirectTo: "/",
    pattern: new URLPattern({ pathname: "/experience" }),
    code: StatusCodes.PERMANENT_REDIRECT,
  },
  {
    redirectTo: "/",
    pattern: new URLPattern({ pathname: "/projects" }),
    code: StatusCodes.PERMANENT_REDIRECT,
  },
  {
    redirectTo: "/en",
    pattern: new URLPattern({ pathname: "/en/projects" }),
    code: StatusCodes.PERMANENT_REDIRECT,
  },
  {
    redirectTo: "/",
    pattern: new URLPattern({ pathname: "/project/*" }),
    code: StatusCodes.PERMANENT_REDIRECT,
  },
  {
    redirectTo: "/en",
    pattern: new URLPattern({ pathname: "/en/project/*" }),
    code: StatusCodes.PERMANENT_REDIRECT,
  },
];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const redirect = redirects.find((redirect) => redirect.pattern.test(req.url));

  if (redirect) {
    return NextResponse.redirect(
      new URL(redirect.redirectTo, req.nextUrl.origin),
      redirect.code
    );
  }

  const userLanguage =
    pathname === "/" && req.cookies.has("language")
      ? DEFAULT_LOCALE.value
      : pattern.exec(pathname)?.[1] ??
        req.cookies.get("language")?.value ??
        req.headers.get("accept-language")?.split(",")[0] ??
        DEFAULT_LOCALE.value;

  const language =
    SUPPORTED_LANGUAGES.find((language) =>
      language.value.startsWith(userLanguage)
    ) ?? DEFAULT_LOCALE;

  const pathnameHasLocale = SUPPORTED_LANGUAGES.some(
    (locale) =>
      pathname.startsWith(`/${locale.inPath}/`) ||
      pathname === `/${locale.inPath}`
  );

  if (!pathnameHasLocale && language.value !== DEFAULT_LOCALE.value) {
    req.nextUrl.pathname = `/${language.value}${pathname}`;
    return NextResponse.redirect(req.nextUrl);
  }

  const response = NextResponse.next();
  response.cookies.set("language", language.value);
  return response;
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
