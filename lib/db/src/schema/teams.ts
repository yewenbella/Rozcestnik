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

export const insertTeamSchema = createInsertSchema(teamsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type Team = typeof teamsTable.$inferSelect;
export type TeamMember = typeof teamMembersTable.$inferSelect;
