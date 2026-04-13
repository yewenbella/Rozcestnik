import { Router } from "express";
import { getAuth } from "@clerk/express";
import { db } from "@workspace/db";
import { teamsTable, teamMembersTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { randomBytes } from "crypto";

const router = Router();

const requireAuth = (req: any, res: any, next: any) => {
  const auth = getAuth(req);
  const userId = auth?.sessionClaims?.userId || auth?.userId;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  req.userId = userId;
  next();
};

router.get("/me", requireAuth, async (req: any, res) => {
  try {
    const memberships = await db
      .select()
      .from(teamMembersTable)
      .where(eq(teamMembersTable.userId, req.userId));

    if (memberships.length === 0) return res.json({ team: null });

    const teams = await db
      .select()
      .from(teamsTable)
      .where(eq(teamsTable.id, memberships[0].teamId));

    if (teams.length === 0) return res.json({ team: null });

    const allMembers = await db
      .select()
      .from(teamMembersTable)
      .where(eq(teamMembersTable.teamId, teams[0].id));

    res.json({ team: teams[0], memberCount: allMembers.length });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", requireAuth, async (req: any, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "Název týmu je povinný" });
  }

  const existing = await db
    .select()
    .from(teamMembersTable)
    .where(eq(teamMembersTable.userId, req.userId));
  if (existing.length > 0) {
    return res.status(400).json({ error: "Již jsi v týmu" });
  }

  const inviteCode = randomBytes(3).toString("hex").toUpperCase();

  const [team] = await db
    .insert(teamsTable)
    .values({ name: name.trim(), inviteCode, createdBy: req.userId })
    .returning();

  await db.insert(teamMembersTable).values({ teamId: team.id, userId: req.userId });

  res.json({ team });
});

router.post("/join", requireAuth, async (req: any, res) => {
  const { inviteCode } = req.body;
  if (!inviteCode) return res.status(400).json({ error: "Kód je povinný" });

  const existing = await db
    .select()
    .from(teamMembersTable)
    .where(eq(teamMembersTable.userId, req.userId));
  if (existing.length > 0) return res.status(400).json({ error: "Již jsi v týmu" });

  const teams = await db
    .select()
    .from(teamsTable)
    .where(eq(teamsTable.inviteCode, inviteCode.trim().toUpperCase()));

  if (teams.length === 0) return res.status(404).json({ error: "Tým nebyl nalezen" });

  await db.insert(teamMembersTable).values({ teamId: teams[0].id, userId: req.userId });

  res.json({ team: teams[0] });
});

router.delete("/leave", requireAuth, async (req: any, res) => {
  await db
    .delete(teamMembersTable)
    .where(eq(teamMembersTable.userId, req.userId));
  res.json({ ok: true });
});

export default router;
