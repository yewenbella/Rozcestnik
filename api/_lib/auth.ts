import { verifyToken } from "@clerk/backend";

export async function getUserId(authHeader: string | undefined): Promise<string | null> {
  if (!authHeader?.startsWith("Bearer ")) {
    console.log("[auth] No Bearer token found");
    return null;
  }
  const token = authHeader.slice(7);
  const secretKey = process.env.CLERK_SECRET_KEY;
  if (!secretKey) {
    console.error("[auth] CLERK_SECRET_KEY is not set");
    return null;
  }
  try {
    const payload = await verifyToken(token, { secretKey });
    return payload.sub;
  } catch (err: any) {
    console.error("[auth] verifyToken failed:", err?.message ?? String(err));
    return null;
  }
}

export function cors(res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
}
