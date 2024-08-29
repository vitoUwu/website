import { HTTPStatusCodes } from "~/utils/types";

export default defineEventHandler(async (event) => {
  return await sendRedirect(
    event,
    "https://github.com/vitoUwu",
    HTTPStatusCodes.MOVED_PERMANENTLY,
  );
});
