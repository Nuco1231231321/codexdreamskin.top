import type { Locale } from "@/i18n/config";

export function localizePath(path: string, locale: Locale) {
  if (locale === "en" || path.startsWith("#")) return path;
  if (path === "/") return "/zh";
  if (path.startsWith("/#")) return `/zh${path.slice(1)}`;
  return `/zh${path}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const normalizedPath = pathname.endsWith(".html")
    ? pathname.slice(0, -5)
    : pathname;

  if (locale === "zh") {
    const englishPath = normalizedPath.replace(/^\/zh(?=\/|$)/, "");
    return englishPath || "/";
  }

  return normalizedPath === "/" ? "/zh" : `/zh${normalizedPath}`;
}
