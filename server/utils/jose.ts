import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const key = () => {
  const event = useEvent();
  const JOSE_SECRET = useRuntimeConfig(event).JOSE_SECRET;
  return new TextEncoder().encode(JOSE_SECRET);
};

export async function encrypt(payload: any): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("5 minutes")
    .setIssuedAt()
    .sign(key());
}

export async function decrypt(input: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key(), {
    algorithms: ["HS256"],
  });

  if (!payload) {
    return null;
  }

  return payload;
}
