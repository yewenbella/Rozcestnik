import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { clerkMiddleware } from "@clerk/express";
import { CLERK_PROXY_PATH, clerkProxyMiddleware } from "./middlewares/clerkProxyMiddleware";
import router from "./routes";
import { logger } from "./lib/logger";
import { pool } from "@workspace/db";

async function runMigrations() {
  try {
    await pool.query(`ALTER TABLE game_scores DROP CONSTRAINT IF EXISTS unique_game_user`);
    await pool.query(`ALTER TABLE game_scores ALTER COLUMN user_id DROP NOT NULL`);
    const res = await pool.query(`
      SELECT 1 FROM pg_constraint WHERE conname = 'unique_game_player'
    `);
    if (res.rowCount === 0) {
      await pool.query(`ALTER TABLE game_scores ADD CONSTRAINT unique_game_player UNIQUE (player_name)`);
    }
    await pool.query(`
      UPDATE game_scores gs
      SET player_name = up.nickname
      FROM user_profiles up
      WHERE gs.user_id = up.user_id
        AND up.nickname IS NOT NULL
        AND gs.player_name != up.nickname
    `);
    await pool.query(`
      UPDATE game_scores
      SET score = 1812, achieved_at = now()
      WHERE user_id = 'user_3CLenR2GuqyElaCgkiBUbgBxka3'
        AND score < 1812
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quiz_scores (
        id serial PRIMARY KEY,
        user_id varchar,
        player_name varchar(40) NOT NULL,
        score integer NOT NULL DEFAULT 0,
        achieved_at timestamptz NOT NULL DEFAULT now()
      )
    `);
    const qc = await pool.query(`SELECT 1 FROM pg_constraint WHERE conname = 'unique_quiz_player'`);
    if (qc.rowCount === 0) {
      await pool.query(`ALTER TABLE quiz_scores ADD CONSTRAINT unique_quiz_player UNIQUE (player_name)`);
    }
    await pool.query(`
      CREATE TABLE IF NOT EXISTS completed_items (
        id serial PRIMARY KEY,
        user_id text NOT NULL,
        type text NOT NULL,
        item_id text NOT NULL,
        item_name text NOT NULL,
        completed_at timestamptz NOT NULL DEFAULT now(),
        CONSTRAINT unique_completed_item UNIQUE (user_id, type, item_id)
      )
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS viewpoint_ratings (
        id serial PRIMARY KEY,
        user_id text NOT NULL,
        item_id text NOT NULL,
        rating integer NOT NULL,
        rated_at timestamptz NOT NULL DEFAULT now(),
        CONSTRAINT unique_user_viewpoint_rating UNIQUE (user_id, item_id)
      )
    `);
    logger.info("DB migrations OK");
  } catch (e) {
    logger.error({ e }, "DB migration error");
  }
}

runMigrations();

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
      },
      res(res) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);

app.use(CLERK_PROXY_PATH, clerkProxyMiddleware());

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(clerkMiddleware());

app.use("/api", router);

export default app;
