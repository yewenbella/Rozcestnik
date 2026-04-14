import { Router } from "express";
import { getAuth } from "@clerk/express";
import { pool } from "@workspace/db";

const router = Router();

router.post("/", async (req: any, res) => {
  try {
    const { score, playerName } = req.body;
    if (typeof score !== "number") {
      return res.status(400).json({ error: "score je povinne" });
    }
    const name = (playerName || "Turista").trim().slice(0, 40);
    if (!name) return res.status(400).json({ error: "playerName je povinne" });

    const auth = getAuth(req);
    const userId = auth?.userId || null;

    await pool.query(
      `INSERT INTO quiz_scores (user_id, player_name, score) VALUES ($1, $2, $3)
       ON CONFLICT (player_name) DO UPDATE
         SET score = EXCLUDED.score, user_id = EXCLUDED.user_id, achieved_at = now()
         WHERE quiz_scores.score < EXCLUDED.score`,
      [userId, name, score]
    );

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/top", async (_req, res) => {
  try {
    const rows = await pool.query(
      `SELECT COALESCE(up.nickname, qs.player_name) AS player_name, qs.score
       FROM quiz_scores qs
       LEFT JOIN user_profiles up ON qs.user_id = up.user_id
       ORDER BY qs.score DESC LIMIT 5`
    );
    res.json({ scores: rows.rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
