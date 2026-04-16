import type { VercelRequest, VercelResponse } from "@vercel/node";
import { cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const result = await query(
      `SELECT COALESCE(up.nickname, gs.player_name) AS player_name, gs.score
       FROM game_scores gs
       LEFT JOIN user_profiles up ON gs.user_id = up.user_id
       ORDER BY gs.score DESC LIMIT 3`
    );
    return res.json({ scores: result.rows });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
