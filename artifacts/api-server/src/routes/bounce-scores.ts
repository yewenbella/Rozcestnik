import { Router } from "express";
import { getAuth } from "@clerk/express";
import { pool } from "@workspace/db";

const router = Router();

// Create table on startup
pool.query(`
  CREATE TABLE IF NOT EXISTS bounce_scores (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    player_name TEXT NOT NULL UNIQUE,
    score INTEGER NOT NULL,
    achieved_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`).catch(console.error);

router.post("/", async (req: any, res) => {
  try {
    const { score, playerName } = req.body;
    if (!score || typeof score !== "number") return res.status(400).json({ error: "score je povinne" });
    const name = (playerName || "Hrac").trim().slice(0, 40);
    const auth = getAuth(req);
    const userId = auth?.userId || null;

    await pool.query(
      `INSERT INTO bounce_scores (user_id, player_name, score)
       VALUES ($1, $2, $3)
       ON CONFLICT (player_name) DO UPDATE
         SET score = EXCLUDED.score, user_id = EXCLUDED.user_id, achieved_at = now()
         WHERE bounce_scores.score < EXCLUDED.score`,
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
      `SELECT COALESCE(up.nickname, bs.player_name) AS player_name, bs.score
       FROM bounce_scores bs
       LEFT JOIN user_profiles up ON bs.user_id = up.user_id
       ORDER BY bs.score DESC LIMIT 5`
    );
    res.json({ scores: rows.rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
