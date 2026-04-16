import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "./_lib/auth";
import { query } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "GET") {
    const routeId = parseInt(String(req.query.routeId || ""));
    if (isNaN(routeId)) return res.status(400).json({ error: "Neplatné routeId" });
    try {
      const result = await query(
        `SELECT t.name AS "teamName", rr.total_time_ms AS "totalTimeMs", rr.completed_at AS "completedAt"
         FROM route_results rr
         INNER JOIN teams t ON rr.team_id = t.id
         WHERE rr.route_id = $1
         ORDER BY rr.total_time_ms ASC`,
        [routeId]
      );
      return res.json({ results: result.rows });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  if (req.method === "POST") {
    const userId = await getUserId(req.headers.authorization);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { routeId, totalTimeMs } = req.body || {};
    if (!routeId || !totalTimeMs || typeof totalTimeMs !== "number") {
      return res.status(400).json({ error: "routeId a totalTimeMs jsou povinné" });
    }

    try {
      const mem = await query("SELECT team_id FROM team_members WHERE user_id = $1 LIMIT 1", [userId]);
      if (mem.rows.length === 0) return res.status(400).json({ error: "Nejsi v žádném týmu" });

      const teamId = mem.rows[0].team_id;
      await query(
        `INSERT INTO route_results (team_id, route_id, total_time_ms) VALUES ($1, $2, $3)
         ON CONFLICT (team_id, route_id) DO UPDATE SET total_time_ms = EXCLUDED.total_time_ms, completed_at = now()`,
        [teamId, routeId, totalTimeMs]
      );
      return res.json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
