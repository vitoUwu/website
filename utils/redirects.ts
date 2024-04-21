export default {
  "/experience": {
    to: "/works",
    code: HTTPStatusCodes.MOVED_PERMANENTLY,
  },
} as Record<string, { to: string; code: number }>;
