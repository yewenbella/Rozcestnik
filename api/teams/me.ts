import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const userId = await getUserId(req.headers.authorization);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  try {
    const mem = await query("SELECT team_id FROM team_members WHERE user_id = $1 LIMIT 1", [userId]);
    if (mem.rows.length === 0) return res.json({ team: null });

    const teamId = mem.rows[0].team_id;
    const teamRes = await query("SELECT * FROM teams WHERE id = $1 LIMIT 1", [teamId]);
    if (teamRes.rows.length === 0) return res.json({ team: null });

    const team = teamRes.rows[0];
    const countRes = await query("SELECT COUNT(*) AS cnt FROM team_members WHERE team_id = $1", [teamId]);
    const memberCount = parseInt(countRes.rows[0].cnt);

    return res.json({
      team: {
        id: team.id,
        name: team.name,
        inviteCode: team.invite_code,
        createdBy: team.created_by,
        createdAt: team.created_at,
      },
      memberCount,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
