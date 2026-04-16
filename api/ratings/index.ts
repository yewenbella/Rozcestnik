import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const { routeId, rating } = req.body || {};
  if (!routeId || !rating || rating < 1 || rating > 5) {
    return res.status(400).json({ error: "routeId a rating (1-5) jsou povinné" });
  }

  try {
    const mem = await query("SELECT team_id FROM team_members WHERE user_id = $1 LIMIT 1", [userId]);
    if (mem.rows.length === 0) return res.status(400).json({ error: "Nejsi v žádném týmu" });

    const teamId = mem.rows[0].team_id;
    await query(
      `INSERT INTO route_ratings (team_id, route_id, rating) VALUES ($1, $2, $3)
       ON CONFLICT (team_id, route_id) DO UPDATE SET rating = EXCLUDED.rating, rated_at = now()`,
      [teamId, routeId, rating]
    );
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
