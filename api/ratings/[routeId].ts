import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserId, cors } from "../_lib/auth";
import { query } from "../_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const routeId = parseInt(String(req.query.routeId));
  if (isNaN(routeId)) return res.status(400).json({ error: "Neplatné routeId" });

  try {
    const avgRes = await query(
      "SELECT AVG(rating)::float AS avg, COUNT(*)::int AS count FROM route_ratings WHERE route_id = $1",
      [routeId]
    );
    const avgRating = avgRes.rows[0]?.avg ?? null;
    const totalCount = avgRes.rows[0]?.count ?? 0;

    let myRating: number | null = null;
    const userId = await getUserId(req.headers.authorization);
    if (userId) {
      const mem = await query("SELECT team_id FROM team_members WHERE user_id = $1 LIMIT 1", [userId]);
      if (mem.rows.length > 0) {
        const mine = await query(
          "SELECT rating FROM route_ratings WHERE team_id = $1 AND route_id = $2 LIMIT 1",
          [mem.rows[0].team_id, routeId]
        );
        if (mine.rows.length > 0) myRating = mine.rows[0].rating;
      }
    }

    return res.json({ avg: avgRating, count: totalCount, myRating });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
