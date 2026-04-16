import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "./_lib/auth";
import { query } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "GET") {
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

  if (req.method === "POST") {
    const { score, playerName } = req.body || {};
    if (!score || typeof score !== "number") return res.status(400).json({ error: "score je povinne" });
    const name = (playerName || "Turista").trim().slice(0, 40);
    if (!name) return res.status(400).json({ error: "playerName je povinne" });
    const userId = await getUserId(req.headers.authorization);
    try {
      await query(
        `INSERT INTO game_scores (user_id, player_name, score) VALUES ($1, $2, $3)
         ON CONFLICT (player_name) DO UPDATE
           SET score = EXCLUDED.score, user_id = EXCLUDED.user_id, achieved_at = now()
           WHERE game_scores.score < EXCLUDED.score`,
        [userId, name, score]
      );
      return res.json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
