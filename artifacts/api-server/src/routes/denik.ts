import { Router } from "express";
import { getAuth } from "@clerk/express";
import { db, completedItemsTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";

const router = Router();

const requireAuth = (req: any, res: any, next: any) => {
  const auth = getAuth(req);
  const userId = auth?.sessionClaims?.userId || auth?.userId;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  req.userId = userId;
  next();
};

router.get("/", requireAuth, async (req: any, res) => {
  try {
    const items = await db
      .select()
      .from(completedItemsTable)
      .where(eq(completedItemsTable.userId, req.userId));
    res.json({ items });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", requireAuth, async (req: any, res) => {
  const { type, itemId, itemName } = req.body;
  if (!type || !itemId || !itemName) return res.status(400).json({ error: "Missing fields" });
  try {
    const inserted = await db
      .insert(completedItemsTable)
      .values({ userId: req.userId, type, itemId, itemName })
      .onConflictDoNothing()
      .returning();
    if (inserted.length === 0) {
      const existing = await db
        .select()
        .from(completedItemsTable)
        .where(and(
          eq(completedItemsTable.userId, req.userId),
          eq(completedItemsTable.type, type),
          eq(completedItemsTable.itemId, itemId)
        ));
      return res.json({ item: existing[0] });
    }
    res.json({ item: inserted[0] });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:type/:itemId", requireAuth, async (req: any, res) => {
  const { type, itemId } = req.params;
  try {
    await db
      .delete(completedItemsTable)
      .where(and(
        eq(completedItemsTable.userId, req.userId),
        eq(completedItemsTable.type, type),
        eq(completedItemsTable.itemId, decodeURIComponent(itemId))
      ));
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
