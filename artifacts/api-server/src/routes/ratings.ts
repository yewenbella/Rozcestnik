import { Router } from "express";
import { getAuth } from "@clerk/express";
import { db } from "@workspace/db";
import { routeRatingsTable, teamMembersTable } from "@workspace/db";
import { eq, and, avg, count } from "drizzle-orm";

const router = Router();

const requireAuth = (req: any, res: any, next: any) => {
  const auth = getAuth(req);
  const userId = auth?.sessionClaims?.userId || auth?.userId;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  req.userId = userId;
  next();
};

router.get("/:routeId", async (req: any, res) => {
  try {
    const routeId = parseInt(req.params.routeId);
    if (isNaN(routeId)) return res.status(400).json({ error: "Neplatné routeId" });

    const rows = await db
      .select({ avg: avg(routeRatingsTable.rating), count: count() })
      .from(routeRatingsTable)
      .where(eq(routeRatingsTable.routeId, routeId));

    const avgRating = rows[0]?.avg ? parseFloat(rows[0].avg) : null;
    const totalCount = rows[0]?.count ?? 0;

    let myRating: number | null = null;
    const auth = getAuth(req);
    const userId = auth?.sessionClaims?.userId || auth?.userId;
    if (userId) {
      const memberships = await db
        .select()
        .from(teamMembersTable)
        .where(eq(teamMembersTable.userId, userId));
      if (memberships.length > 0) {
        const teamId = memberships[0].teamId;
        const mine = await db
          .select()
          .from(routeRatingsTable)
          .where(and(eq(routeRatingsTable.teamId, teamId), eq(routeRatingsTable.routeId, routeId)));
        if (mine.length > 0) myRating = mine[0].rating;
      }
    }

    res.json({ avg: avgRating, count: totalCount, myRating });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", requireAuth, async (req: any, res) => {
  try {
    const { routeId, rating } = req.body;
    if (!routeId || !rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "routeId a rating (1–5) jsou povinné" });
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
      .insert(routeRatingsTable)
      .values({ teamId, routeId, rating })
      .onConflictDoUpdate({
        target: [routeRatingsTable.teamId, routeRatingsTable.routeId],
        set: { rating, ratedAt: new Date() },
      });

    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
