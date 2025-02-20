import { encrypt } from "~/utils/jose";

export default defineEventHandler({
  handler: async (event) => {
    const cookie = encrypt(event, { name: "fandy" });
    return cookie;
  },
});
