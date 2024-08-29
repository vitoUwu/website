import { HTTPStatusCodes } from "~/utils/types";

export default defineEventHandler(async (event) => {
  return await sendRedirect(
    event,
    "https://open.spotify.com/user/victorhugomeurer?si=a714d04c7b5b4585",
    HTTPStatusCodes.MOVED_PERMANENTLY,
  );
});
