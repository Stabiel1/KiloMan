# Black Lotus Goddess — KiloCode Agent Rules

These rules apply when Kilo Code agents work on this codebase. They align with AGENTS.md and .cursor/rules.

## Code Style

- Use TypeScript for all new files.
- Use named exports for components (`export function X()`); default export only for `App` in `App.tsx`.
- Add JSDoc or brief comments for pose, lighting, material intent, and non-obvious logic.
- Keep material configs as shared objects at file or component top.

## Three.js / R3F

- Use R3F declarative props (e.g. `castShadow`, `receiveShadow`).
- Prefer R3F's declarative API over imperative Three.js calls.
- Keep components under 300 lines; split large components.

## Quality Gates

- Run `npm run lint` and `npm run build` after changes; fix all errors before considering work done.
- Update AGENTS.md when adding components or changing architecture.

## Structure

- App → Scene → Avatar → Outfit | Hair | MakeupDecals
- Respect this hierarchy when adding or refactoring components.
