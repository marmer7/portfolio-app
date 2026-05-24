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

Next.js 16 App Router site with two routes: `/` (`src/app/page.tsx`, the main portfolio) and `/links` (`src/app/links/page.tsx`, a stacked-buttons link-in-bio page). React 19, TypeScript, Tailwind v4 via `@tailwindcss/postcss`. All visual styling lives in `src/app/globals.css` — there are no Tailwind utility classes in the JSX; components use semantic class names (`term`, `prompt`, `row`, `kv`, `t-*` for terminal pieces, `links-*` for the links page) defined in globals.css. The OG share card is generated at `src/app/opengraph-image.tsx` (programmatic via `next/og` `ImageResponse`).

### Résumé data lives in one place

All résumé content (`NAME`, `TAGLINE`, `BIO`, `WORK_ALL`, `WORK`, `PROJECTS`, `EDUCATION`, `SKILLS`, `CONTACT`) is defined in `src/app/data.ts` and imported by every surface (`/`, `/links`, `Terminal`, `layout.tsx` SEO, `opengraph-image.tsx`):

- `WORK_ALL` is the full chronological history; `WORK = WORK_ALL.slice(0, 3)` is the abbreviated view shown on `/` and by the terminal's default `work` command. The terminal's `work --all` uses `WORK_ALL`.
- `Terminal.tsx` is the `"use client"` interactive shell embedded on `/`.

When adding a job, project, skill, or contact link, edit `data.ts` only.

### Terminal component

`Terminal.tsx` is a self-contained fake shell:
- `exec(raw, recall)` is the command dispatcher (switch on the lowercased first token). New commands are added there.
- The `COMMANDS` array drives tab-completion; the `HELP_LINES` array drives the `help` output. Both must be updated when adding a command that should be discoverable.
- `clear` is handled in `submit()` (not `exec`) because it mutates history state. ⌘K / Ctrl+K also clears.
- ArrowUp/ArrowDown navigate the per-session `recall` history.

### Other

- Resume PDF is served from `public/resume/marlon-merjos-resume.pdf` and surfaced via the `CONTACT` entry in `data.ts`.
- `metadataBase` in `layout.tsx` is `https://marlonm.dev` — update if the deploy domain changes.
- `.env.example` lists `NEXT_PUBLIC_FORMSPRING_FORM_ID`, `NEXT_PUBLIC_LINKEDIN_LINK`, `NEXT_PUBLIC_GITHUB_LINK`, but no current code reads them — every link lives in `data.ts`'s `CONTACT` array.
