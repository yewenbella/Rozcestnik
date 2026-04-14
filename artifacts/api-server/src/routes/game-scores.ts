import { Router } from "express";
import { getAuth } from "@clerk/express";
import { db, pool } from "@workspace/db";
import { gameScoresTable, teamsTable, teamMembersTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";

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
    const { score } = req.body;
    if (!score || typeof score !== "number") {
      return res.status(400).json({ error: "score je povinné" });
    }

    const memberships = await db
      .select()
      .from(teamMembersTable)
      .where(eq(teamMembersTable.userId, req.userId));

    if (memberships.length === 0) {
      return res.status(400).json({ error: "Nejsi v žádném týmu" });
    }

    const teamId = memberships[0].teamId;

    await pool.query(
      `INSERT INTO game_scores (team_id, score) VALUES ($1, $2)
       ON CONFLICT (team_id) DO UPDATE
         SET score = EXCLUDED.score, achieved_at = now()
         WHERE game_scores.score < EXCLUDED.score`,
      [teamId, score]
    );

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/top", async (_req, res) => {
  try {
    const rows = await db
      .select({
        teamName: teamsTable.name,
        score: gameScoresTable.score,
      })
      .from(gameScoresTable)
      .innerJoin(teamsTable, eq(gameScoresTable.teamId, teamsTable.id))
      .orderBy(desc(gameScoresTable.score))
      .limit(3);

    res.json({ scores: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
