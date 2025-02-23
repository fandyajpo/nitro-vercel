import { decrypt } from "~/utils/jose";

export default defineEventHandler({
  handler: (event) => {
    const cookie = getCookie(event, "NitroCook");

    if (!cookie) {
      return "NO COOKIE";
    }

    const verify = decrypt(cookie);

    return verify;
  },
});
