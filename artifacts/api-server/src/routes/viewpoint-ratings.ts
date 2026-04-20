import { Router } from "express";
import { getAuth } from "@clerk/express";
import { pool } from "@workspace/db";

const router = Router();

const getUserId = (req: any): string | null => {
  const auth = getAuth(req);
  return auth?.sessionClaims?.userId || auth?.userId || null;
};

router.get("/all", async (req: any, res) => {
  try {
    const { rows } = await pool.query<{ item_id: string; avg_rating: string; count: string }>(
      `SELECT item_id, ROUND(AVG(rating)::numeric, 1)::text AS avg_rating, COUNT(*)::text AS count
       FROM viewpoint_ratings
       GROUP BY item_id`
    );
    const result: Record<string, { avg: number; count: number }> = {};
    for (const row of rows) {
      result[row.item_id] = { avg: parseFloat(row.avg_rating), count: parseInt(row.count) };
    }
    res.json(result);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:itemId", async (req: any, res) => {
  try {
    const { itemId } = req.params;
    const { rows } = await pool.query<{ avg_rating: string; count: string }>(
      `SELECT ROUND(AVG(rating)::numeric, 1)::text AS avg_rating, COUNT(*)::text AS count
       FROM viewpoint_ratings WHERE item_id = $1`,
      [itemId]
    );
    const avgRating = rows[0]?.avg_rating ? parseFloat(rows[0].avg_rating) : null;
    const count = rows[0]?.count ? parseInt(rows[0].count) : 0;

    let myRating: number | null = null;
    const userId = getUserId(req);
    if (userId) {
      const { rows: myRows } = await pool.query<{ rating: number }>(
        `SELECT rating FROM viewpoint_ratings WHERE user_id = $1 AND item_id = $2`,
        [userId, itemId]
      );
      if (myRows.length > 0) myRating = myRows[0].rating;
    }

    res.json({ avg: avgRating, count, myRating });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req: any, res) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const { itemId, rating } = req.body;
  if (!itemId || !rating || rating < 1 || rating > 5) {
    return res.status(400).json({ error: "itemId a rating (1–5) jsou povinné" });
  }

  try {
    await pool.query(
      `INSERT INTO viewpoint_ratings (user_id, item_id, rating)
       VALUES ($1, $2, $3)
       ON CONFLICT ON CONSTRAINT unique_user_viewpoint_rating
       DO UPDATE SET rating = $3, rated_at = now()`,
      [userId, itemId, rating]
    );
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
