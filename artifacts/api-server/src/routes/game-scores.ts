import { Router } from "express";
import { getAuth } from "@clerk/express";
import { pool } from "@workspace/db";
import { db } from "@workspace/db";
import { gameScoresTable, teamsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router = Router();

const requireAuth = (req: any, res: any, next: any) => {
  const auth = getAuth(req);
  const userId = auth?.sessionClaims?.userId || auth?.userId;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  req.userId = userId;
  next();
};

router.post("/", requireAuth, async (req: any, res) => {
  try {
    const { score, playerName } = req.body;
    if (!score || typeof score !== "number") {
      return res.status(400).json({ error: "score je povinné" });
    }
    const name = (playerName || "Turista").slice(0, 40);

    await pool.query(
      `INSERT INTO game_scores (user_id, player_name, score) VALUES ($1, $2, $3)
       ON CONFLICT (user_id) DO UPDATE
         SET score = EXCLUDED.score, player_name = EXCLUDED.player_name, achieved_at = now()
         WHERE game_scores.score < EXCLUDED.score`,
      [req.userId, name, score]
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
      `SELECT COALESCE(up.nickname, gs.player_name) AS player_name, gs.score
       FROM game_scores gs
       LEFT JOIN user_profiles up ON gs.user_id = up.user_id
       ORDER BY gs.score DESC LIMIT 3`
    );
    res.json({ scores: rows.rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
