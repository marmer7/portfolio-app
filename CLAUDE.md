# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (fails on any warning: `--max-warnings=0`)

Note: `dev` and `build` pass `--webpack`, overriding Next 16's default Turbopack bundler. `next.config.js` still sets a `turbopack.root` for when Turbopack is used directly.

No test framework is configured.

## Architecture

Next.js 16 App Router site with a single route (`src/app/page.tsx`). React 19, TypeScript, Tailwind v4 via `@tailwindcss/postcss`. All visual styling lives in `src/app/globals.css` — there are no Tailwind utility classes in the JSX; components use semantic class names (`term`, `prompt`, `row`, `kv`, `t-*` for terminal pieces) defined in globals.css.

### Résumé data lives in one place

All résumé content (`WORK_ALL`, `WORK`, `PROJECTS`, `EDUCATION`, `SKILLS`, `CONTACT`) is defined in `src/app/data.ts` and imported by both surfaces:

1. `src/app/page.tsx` — server component with the static, scrollable view. Shows the abbreviated `WORK` (first 3 of `WORK_ALL`).
2. `src/app/components/Terminal.tsx` — `"use client"` interactive shell embedded mid-page. Uses the full `WORK_ALL` for the `work --all` command.

When adding a job, project, or skill, edit `data.ts` only.

### Terminal component

`Terminal.tsx` is a self-contained fake shell:
- `exec(raw, recall)` is the command dispatcher (switch on the lowercased first token). New commands are added there.
- The `COMMANDS` array drives tab-completion; the `HELP_LINES` array drives the `help` output. Both must be updated when adding a command that should be discoverable.
- `clear` is handled in `submit()` (not `exec`) because it mutates history state. ⌘K / Ctrl+K also clears.
- ArrowUp/ArrowDown navigate the per-session `recall` history.

### Other

- Resume PDF is served from `public/resume/marlon-merjos-resume.pdf` and linked from both surfaces.
- `metadataBase` in `layout.tsx` is `https://marlonm.dev` — update if the deploy domain changes.
- `.env.example` lists `NEXT_PUBLIC_FORMSPRING_FORM_ID`, `NEXT_PUBLIC_LINKEDIN_LINK`, `NEXT_PUBLIC_GITHUB_LINK`, but no current code reads them (links are hardcoded in `page.tsx` and `Terminal.tsx`).
