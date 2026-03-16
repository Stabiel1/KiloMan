# AGENTS.md

## Cursor Cloud specific instructions

This is **Kilo Man**, a client-side 2D platformer browser game. The entire app is a single Next.js 15 page rendering an HTML5 Canvas game — no backend, database, or external services.

### Services

| Service | Command | Port |
|---|---|---|
| Next.js dev server | `npm run dev` | 3000 |

### Key commands

See `package.json` `scripts` for the canonical list:

- **Dev server**: `npm run dev` (port 3000)
- **Lint**: `npm run lint` (runs ESLint via flat config in `eslint.config.mjs`)
- **Build**: `npm run build`
- **Production server**: `npm run start`

### Caveats

- The game is entirely client-side (HTML5 Canvas + React). There are no automated integration/e2e tests in the repo; manual browser testing via `computerUse` is the way to verify gameplay changes.
- All game logic lives under `app/components/Game/`. The entry point is `app/page.tsx` which renders `GameContainer`.
- The dev server supports hot reload — file edits are reflected immediately without restart.
