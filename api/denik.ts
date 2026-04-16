import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "./_lib/auth";
import { query } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  if (req.method === "GET") {
    try {
      const result = await query(
        "SELECT id, user_id AS \"userId\", type, item_id AS \"itemId\", item_name AS \"itemName\", completed_at AS \"completedAt\" FROM completed_items WHERE user_id = $1",
        [userId]
      );
      return res.json({ items: result.rows });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  if (req.method === "POST") {
    const { type, itemId, itemName } = req.body || {};
    if (!type || !itemId || !itemName) return res.status(400).json({ error: "Missing fields" });
    try {
      const check = await query(
        "SELECT id, user_id AS \"userId\", type, item_id AS \"itemId\", item_name AS \"itemName\", completed_at AS \"completedAt\" FROM completed_items WHERE user_id = $1 AND type = $2 AND item_id = $3",
        [userId, type, itemId]
      );
      if (check.rows.length > 0) return res.json({ item: check.rows[0] });

      const result = await query(
        "INSERT INTO completed_items (user_id, type, item_id, item_name) VALUES ($1, $2, $3, $4) ON CONFLICT (user_id, type, item_id) DO NOTHING RETURNING id, user_id AS \"userId\", type, item_id AS \"itemId\", item_name AS \"itemName\", completed_at AS \"completedAt\"",
        [userId, type, itemId, itemName]
      );
      if (result.rows.length === 0) {
        const existing = await query(
          "SELECT id, user_id AS \"userId\", type, item_id AS \"itemId\", item_name AS \"itemName\", completed_at AS \"completedAt\" FROM completed_items WHERE user_id = $1 AND type = $2 AND item_id = $3",
          [userId, type, itemId]
        );
        return res.json({ item: existing.rows[0] });
      }
      return res.json({ item: result.rows[0] });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
