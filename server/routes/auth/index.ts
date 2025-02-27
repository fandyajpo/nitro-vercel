import { encrypt } from "~/utils/jose";

export default defineEventHandler(async (event) => {
  const cookie: string = await encrypt({ name: "fandy" });
  setCookie(event, "NitroCook", cookie);

  return cookie;
});
