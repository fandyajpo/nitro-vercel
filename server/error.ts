import { H3Error } from "h3";
import { sendError } from "#imports";

export default defineNitroErrorHandler((error: H3Error, event) => {
  setResponseHeader(event, "Content-Type", "application/json");
  return sendError(event, error);
});
//
