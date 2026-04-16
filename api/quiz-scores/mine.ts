import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.json({ played: false });

  try {
    const result = await query(
      `SELECT COALESCE(up.nickname, qs.player_name) AS player_name, qs.score
       FROM quiz_scores qs
       LEFT JOIN user_profiles up ON qs.user_id = up.user_id
       WHERE qs.user_id = $1 LIMIT 1`,
      [userId]
    );
    if (result.rows.length === 0) return res.json({ played: false });
    return res.json({ played: true, score: result.rows[0].score, player_name: result.rows[0].player_name });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
