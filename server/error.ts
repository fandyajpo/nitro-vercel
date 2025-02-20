import { H3Error } from "h3";
import { sendError } from "#imports";
import type { INitroError } from "~/types/error";

export default defineNitroErrorHandler((error: H3Error<INitroError>, event) => {
  setResponseHeader(event, "Content-Type", "application/json");
  return sendError(event, error);
});
