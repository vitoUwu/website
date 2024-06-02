export function removeTrailingSlash(urlOrPath: string) {
  if (urlOrPath === "/") return urlOrPath;
  return urlOrPath.endsWith("/") ? urlOrPath.slice(0, -1) : urlOrPath;
}
