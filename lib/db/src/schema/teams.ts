import { pgTable, serial, text, integer, timestamp, unique, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const teamsTable = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  inviteCode: text("invite_code").notNull().unique(),
  createdBy: text("created_by").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const teamMembersTable = pgTable(
  "team_members",
  {
    id: serial("id").primaryKey(),
    teamId: integer("team_id")
      .notNull()
      .references(() => teamsTable.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull(),
    joinedAt: timestamp("joined_at").defaultNow(),
  },
  (t) => [unique("unique_team_user").on(t.teamId, t.userId)]
);

export const routeResultsTable = pgTable(
  "route_results",
  {
    id: serial("id").primaryKey(),
    teamId: integer("team_id")
      .notNull()
      .references(() => teamsTable.id, { onDelete: "cascade" }),
    routeId: integer("route_id").notNull(),
    totalTimeMs: integer("total_time_ms").notNull(),
    completedAt: timestamp("completed_at").defaultNow(),
  },
  (t) => [unique("unique_team_route").on(t.teamId, t.routeId)]
);

export type RouteResult = typeof routeResultsTable.$inferSelect;

export const gameScoresTable = pgTable(
  "game_scores",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id"),
    playerName: text("player_name").notNull(),
    score: integer("score").notNull(),
    achievedAt: timestamp("achieved_at").defaultNow(),
  },
  (t) => [unique("unique_game_player").on(t.playerName)]
);

export const routeRatingsTable = pgTable(
  "route_ratings",
  {
    id: serial("id").primaryKey(),
    teamId: integer("team_id")
      .notNull()
      .references(() => teamsTable.id, { onDelete: "cascade" }),
    routeId: integer("route_id").notNull(),
    rating: integer("rating").notNull(),
    ratedAt: timestamp("rated_at").defaultNow(),
  },
  (t) => [unique("unique_team_route_rating").on(t.teamId, t.routeId)]
);

export type RouteRating = typeof routeRatingsTable.$inferSelect;

export const userProfilesTable = pgTable("user_profiles", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  nickname: text("nickname").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UserProfile = typeof userProfilesTable.$inferSelect;

export const completedItemsTable = pgTable(
  "completed_items",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    type: text("type").notNull(),
    itemId: text("item_id").notNull(),
    itemName: text("item_name").notNull(),
    completedAt: timestamp("completed_at").defaultNow().notNull(),
  },
  (t) => [unique("unique_completed_item").on(t.userId, t.type, t.itemId)]
);

export type CompletedItem = typeof completedItemsTable.$inferSelect;

export const viewpointRatingsTable = pgTable(
  "viewpoint_ratings",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    itemId: text("item_id").notNull(),
    rating: integer("rating").notNull(),
    ratedAt: timestamp("rated_at").defaultNow(),
  },
  (t) => [unique("unique_user_viewpoint_rating").on(t.userId, t.itemId)]
);

export type ViewpointRating = typeof viewpointRatingsTable.$inferSelect;

export const insertTeamSchema = createInsertSchema(teamsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type Team = typeof teamsTable.$inferSelect;
export type TeamMember = typeof teamMembersTable.$inferSelect;
