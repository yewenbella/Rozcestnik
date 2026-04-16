import { createRemoteJWKSet, jwtVerify, decodeJwt } from "jose";

export async function getUserId(authHeader: string | undefined): Promise<string | null> {
  if (!authHeader?.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7);
  try {
    const decoded = decodeJwt(token);
    const issuer = decoded.iss as string;
    if (!issuer) return null;
    const jwksUri = new URL("/.well-known/jwks.json", issuer);
    const JWKS = createRemoteJWKSet(jwksUri);
    const { payload } = await jwtVerify(token, JWKS, { issuer });
    return (payload.sub as string) ?? null;
  } catch (err: any) {
    console.error("[auth] JWT verification failed:", err?.message ?? String(err));
    return null;
  }
}

export function cors(res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
}
