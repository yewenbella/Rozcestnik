import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "./_lib/auth";
import { query } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  if (req.method === "GET") {
    try {
      const result = await query("SELECT nickname FROM user_profiles WHERE user_id = $1", [userId]);
      return res.json({ nickname: result.rows[0]?.nickname || null });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  if (req.method === "PUT") {
    const { nickname } = req.body || {};
    if (!nickname || typeof nickname !== "string") return res.status(400).json({ error: "nickname je povinné" });
    const trimmed = nickname.trim().slice(0, 30);
    if (!trimmed) return res.status(400).json({ error: "Přezdívka nesmí být prázdná" });
    try {
      await query(
        "INSERT INTO user_profiles (user_id, nickname) VALUES ($1, $2) ON CONFLICT (user_id) DO UPDATE SET nickname = EXCLUDED.nickname, updated_at = now()",
        [userId, trimmed]
      );
      return res.json({ ok: true, nickname: trimmed });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
