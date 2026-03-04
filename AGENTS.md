# Black Lotus Goddess — Project & Agent Guide

AGENTS.md standard — compatible with Kilo Code, Cursor, and Windsurf. AI agents should follow these instructions when working on this codebase.

**Role:** You are helping maintain and extend this project. Keep this file and the codebase updated, commented, and correct.

## Project overview

- **Name:** black-lotus-goddess  
- **Stack:** React 18, TypeScript, Vite, React Three Fiber (R3F), Three.js, @react-three/drei  
- **Purpose:** 3D avatar viewer — Iggy-inspired figure with low-angle camera, cyberpunk neon-haze lighting, platinum hair, black outfit, makeup decals, and performance mic (“click that mic”). Dominatrix/femdom presence. Phase 1: avatar alive (idle breathing). Managed by Anna.

## Structure

- `src/App.tsx` — Root: full-viewport Canvas, camera, renders `<Scene />`.
- `src/components/Scene.tsx` — Scene graph: neon-haze background/fog, tone mapping, camera rig, cyberpunk lighting (cyan/magenta/red), `<Avatar />`.
- `src/components/Avatar.tsx` — Figure: head, neck, torso, arms (hand-on-hip + mic in left hand), hips, legs; composes `<Outfit />`, `<Hair />`, `<Mic />`, `<MakeupDecals />`.
- `src/components/Outfit.tsx` — Choker, top, long gloves, stiletto boots (black fabric/leather).
- `src/components/Hair.tsx` — Platinum blonde hair (sphere + box strands).
- `src/components/Mic.tsx` — Performance mic in left hand (vintage-style, subtle neon ring).
- `src/components/face/MakeupDecals.tsx` — Beauty mark, lipstick, winged eyeliner on head sphere.

## Conventions (keep code consistent)

1. **Comments:** Add JSDoc or short comments for non-obvious intent (e.g. “hand on hip”, “low-angle”, material choices). Keep existing comments when editing.
2. **Exports:** Use named exports for components (`export function Scene()`); default export only for `App` in `App.tsx`.
3. **Three/R3F:** Use R3F’s declarative props (e.g. `castShadow`, `receiveShadow`). Material configs as shared objects (e.g. `skin`, `blackFabric`) at top of file or next to component.
4. **Styling:** Global reset and layout in `index.css`; app-level overrides in `App.css` if needed. No inline styles except where layout demands (e.g. Canvas container).
5. **Quality:** Run `npm run lint` and `npm run build` before considering a change done. Fix lint and TypeScript errors.

## Keeping the project updated

- When adding features: update this file if you add new components or change architecture.
- When changing behavior: adjust comments in the affected files so they stay accurate.
- After edits: save files, run lint and build, and fix any issues.

## Safe project (security & version control)

- **Version control:** Use Git. A `.gitignore` is in place so `node_modules/`, `dist/`, `.env*`, and editor/OS junk are not committed.
- **Secrets:** Never commit `.env`, `.env.local`, or any keys or passwords. They are listed in `.gitignore`.
- **Dependencies:** Run `npm audit` periodically and fix high/critical issues before deploying.
- **To save the project in Git:** From project root run `git init`, then add and commit. Remote backup (e.g. GitHub) recommended.

## Commands

- `npm run dev` — Start dev server  
- `npm run build` — TypeScript check + production build  
- `npm run lint` — ESLint  
- `npm run preview` — Preview production build  
- `npm audit` — Check dependencies for known vulnerabilities  

## AI Agents (Kilo Code, Cursor, Windsurf)

- **Kilo Code:** Install via `code --install-extension kilocode.kilo-code` or use the VS Code marketplace. Project rules in `.kilocode/rules/`.
- **AGENTS.md:** This file is the shared standard. Kilo Code, Cursor, and Windsurf all load it for project context.
