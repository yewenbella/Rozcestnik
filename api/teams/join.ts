import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const { inviteCode } = req.body || {};
  if (!inviteCode) return res.status(400).json({ error: "Kód je povinný" });

  try {
    const existing = await query("SELECT id FROM team_members WHERE user_id = $1 LIMIT 1", [userId]);
    if (existing.rows.length > 0) return res.status(400).json({ error: "Již jsi v týmu" });

    const teamRes = await query(
      "SELECT * FROM teams WHERE invite_code = $1 LIMIT 1",
      [inviteCode.trim().toUpperCase()]
    );
    if (teamRes.rows.length === 0) return res.status(404).json({ error: "Tým nebyl nalezen" });

    const team = teamRes.rows[0];
    await query("INSERT INTO team_members (team_id, user_id) VALUES ($1, $2)", [team.id, userId]);

    return res.json({
      team: {
        id: team.id,
        name: team.name,
        inviteCode: team.invite_code,
        createdBy: team.created_by,
        createdAt: team.created_at,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
