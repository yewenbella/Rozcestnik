import { Pool } from "pg";

let _pool: Pool | undefined;

export function getPool(): Pool {
  if (!_pool) {
    _pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 3,
    });
  }
  return _pool;
}

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    invite_code TEXT NOT NULL UNIQUE,
    created_by TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  );
  CREATE TABLE IF NOT EXISTS team_members (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL,
    joined_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(team_id, user_id)
  );
  CREATE TABLE IF NOT EXISTS route_results (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    route_id INTEGER NOT NULL,
    total_time_ms INTEGER NOT NULL,
    completed_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(team_id, route_id)
  );
  CREATE TABLE IF NOT EXISTS game_scores (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    player_name TEXT NOT NULL UNIQUE,
    score INTEGER NOT NULL,
    achieved_at TIMESTAMP DEFAULT NOW()
  );
  CREATE TABLE IF NOT EXISTS route_ratings (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    route_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    rated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(team_id, route_id)
  );
  CREATE TABLE IF NOT EXISTS user_profiles (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL UNIQUE,
    nickname TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW()
  );
  CREATE TABLE IF NOT EXISTS completed_items (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    type TEXT NOT NULL,
    item_id TEXT NOT NULL,
    item_name TEXT NOT NULL,
    completed_at TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, type, item_id)
  );
  CREATE TABLE IF NOT EXISTS quiz_scores (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    player_name TEXT NOT NULL UNIQUE,
    score INTEGER NOT NULL,
    achieved_at TIMESTAMP DEFAULT NOW()
  );
`;

let _migrationPromise: Promise<void> | null = null;

async function runMigration() {
  try {
    await getPool().query(SCHEMA);
    console.log("[db] schema OK");
  } catch (e: any) {
    console.error("[db] schema error:", e.message);
    _migrationPromise = null;
  }
}

export async function query(text: string, params?: unknown[]) {
  if (!_migrationPromise) {
    _migrationPromise = runMigration();
  }
  await _migrationPromise;
  return getPool().query(text, params);
}
