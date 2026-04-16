import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../../_lib/auth";
import { query } from "../../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "DELETE") return res.status(405).json({ error: "Method not allowed" });

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const { type, itemId } = req.query;
  try {
    await query(
      "DELETE FROM completed_items WHERE user_id = $1 AND type = $2 AND item_id = $3",
      [userId, type, decodeURIComponent(String(itemId))]
    );
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
