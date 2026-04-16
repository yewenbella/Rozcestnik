import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "./_lib/auth";
import { query } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

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
