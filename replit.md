# Workspace

## Uživatelské preference

- **Potvrzení před akcí**: Vždy se zeptat na potvrzení před provedením jakékoliv změny v kódu, push na GitHub, nebo jiné akce. Nejdřív popsat co chci udělat a počkat na souhlas.



## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Rozcestník (react-vite, previewPath: /)
A mobile-optimized Czech hiking challenge web app. Features:
- Home page with mountain hero image and 4 navigation buttons (Mapa, Trasy, Žebříček, Pravidla) styled as wooden signpost buttons
- Map page with favorite hiking locations
- Trasy (Routes) page with 5 hiking routes with difficulty, distance, time
- Žebříček (Leaderboard) page with ranked couples/teams
- Pravidla (Rules) page explaining how to play and score points
- Dark forest green theme, mobile-first layout (max-width 480px)
- No backend required — all static data
- RozhlednyPage: 676 rozhledny with photo grid, DetailModal, DEFUNCT_TOWERS badges, "Navštívené" & "V okolí" filters
- rozhlednyCoords.ts: GPS coordinates for 666/676 rozhledny (scraped from rozhlednovymrajem.cz)
- "V okolí" filter uses browser Geolocation API + haversine distance, shows distance badges on cards, filters to 100km radius
- "Navštívené" filter shows only towers marked complete via useDenik hook

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
