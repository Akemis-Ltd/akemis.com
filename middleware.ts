import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, isLocale, matchLocale } from "./app/i18n/config";

const COOKIE = "NEXT_LOCALE";

/** Paths that are served as-is, without a language prefix. */
const PASSTHROUGH = ["/api", "/creators", "/images", "/_next", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PASSTHROUGH.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  if (isLocale(first)) {
    // Remember the language actually being browsed, so the next visit to "/"
    // lands in the same place rather than back on the system default.
    const response = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== first) {
      response.cookies.set(COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return response;
  }

  // A previous choice wins over the system language; otherwise use the
  // browser's Accept-Language header, which reflects the visitor's system.
  const saved = request.cookies.get(COOKIE)?.value;
  const locale =
    saved && isLocale(saved) ? saved : matchLocale(request.headers.get("accept-language")) || DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Everything except Next internals and files with an extension.
    "/((?!_next/static|_next/image|.*\\..*).*)",
  ],
};

export { LOCALES };
