import type { VercelRequest, VercelResponse } from "@vercel/node";
import { cors } from "../../_lib/auth";
import { query } from "../../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const routeId = parseInt(String(req.query.routeId));
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
