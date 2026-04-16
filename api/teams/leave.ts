import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "DELETE") return res.status(405).json({ error: "Method not allowed" });

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  try {
    await query("DELETE FROM team_members WHERE user_id = $1", [userId]);
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
