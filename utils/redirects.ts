export default {
  "/experience": {
    to: "/",
    code: HTTPStatusCodes.MOVED_PERMANENTLY,
  },
  "/works": {
    to: "/",
    code: HTTPStatusCodes.MOVED_PERMANENTLY,
  },
  "/projects": {
    to: "/",
    code: HTTPStatusCodes.MOVED_PERMANENTLY,
  },
} as Record<string, { to: string; code: number }>;
