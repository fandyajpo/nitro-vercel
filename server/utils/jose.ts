import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { H3Event } from "h3";

const key = (event: H3Event) => {
  const JOSE_SECRET = useRuntimeConfig(event).JOSE_SECRET;
  return new TextEncoder().encode(JOSE_SECRET);
};

export async function encrypt(event: H3Event, payload: any): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("5 minutes")
    .setIssuedAt()
    .sign(key(event));
}

export async function decrypt(
  event: H3Event,
  input: string
): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key(event), {
    algorithms: ["HS256"],
  });

  return payload;
}
