import { Router } from "express";
import { getAuth } from "@clerk/express";
import { db } from "@workspace/db";
import { routeResultsTable, teamsTable, teamMembersTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";

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
    const { routeId, totalTimeMs } = req.body;
    if (!routeId || !totalTimeMs || typeof totalTimeMs !== "number") {
      return res.status(400).json({ error: "routeId a totalTimeMs jsou povinné" });
    }

    const memberships = await db
      .select()
      .from(teamMembersTable)
      .where(eq(teamMembersTable.userId, req.userId));

    if (memberships.length === 0) {
      return res.status(400).json({ error: "Nejsi v žádném týmu" });
    }

    const teamId = memberships[0].teamId;

    await db
      .insert(routeResultsTable)
      .values({ teamId, routeId, totalTimeMs })
      .onConflictDoUpdate({
        target: [routeResultsTable.teamId, routeResultsTable.routeId],
        set: { totalTimeMs, completedAt: new Date() },
      });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/leaderboard/:routeId", async (req, res) => {
  try {
    const routeId = parseInt(req.params.routeId);
    if (isNaN(routeId)) return res.status(400).json({ error: "Neplatné routeId" });

    const rows = await db
      .select({
        teamName: teamsTable.name,
        totalTimeMs: routeResultsTable.totalTimeMs,
        completedAt: routeResultsTable.completedAt,
      })
      .from(routeResultsTable)
      .innerJoin(teamsTable, eq(routeResultsTable.teamId, teamsTable.id))
      .where(eq(routeResultsTable.routeId, routeId))
      .orderBy(asc(routeResultsTable.totalTimeMs));

    res.json({ results: rows });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
