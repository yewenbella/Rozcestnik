import { Router } from "express";
import { getAuth } from "@clerk/express";
import { pool } from "@workspace/db";

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
    const row = await pool.query(
      `SELECT nickname FROM user_profiles WHERE user_id = $1`,
      [req.userId]
    );
    res.json({ nickname: row.rows[0]?.nickname || null });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/", requireAuth, async (req: any, res) => {
  try {
    const { nickname } = req.body;
    if (!nickname || typeof nickname !== "string") {
      return res.status(400).json({ error: "nickname je povinné" });
    }
    const trimmed = nickname.trim().slice(0, 30);
    if (!trimmed) return res.status(400).json({ error: "Přezdívka nesmí být prázdná" });

    await pool.query(
      `INSERT INTO user_profiles (user_id, nickname)
       VALUES ($1, $2)
       ON CONFLICT (user_id) DO UPDATE SET nickname = EXCLUDED.nickname, updated_at = now()`,
      [req.userId, trimmed]
    );
    res.json({ ok: true, nickname: trimmed });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
