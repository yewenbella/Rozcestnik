import type { VercelRequest, VercelResponse } from "@vercel/node";
import { query } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const dbUrl = process.env.DATABASE_URL;
  const hasDb = !!dbUrl;
  const dbHost = dbUrl ? new URL(dbUrl.replace(/^postgres(ql)?:\/\//, "postgresql://")).hostname : "missing";

  try {
    await query("SELECT 1");
    const tables = await query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public' ORDER BY table_name
    `);
    res.json({
      ok: true,
      db: "connected",
      host: dbHost,
      tables: tables.rows.map((r: any) => r.table_name),
    });
  } catch (e: any) {
    res.status(500).json({
      ok: false,
      db: "error",
      host: dbHost,
      hasDb,
      error: e.message,
    });
  }
}
