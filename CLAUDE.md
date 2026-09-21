# CLAUDE.md — My Portfolio

## Project Overview

Personal portfolio website for Jose Acosta Aldrete. Built with React + Vite, deployed on Vercel. Live at [www.joseacostaaldrete.com](https://www.joseacostaaldrete.com).

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + Next.js (App Router, static export) |
| Styling | Tailwind CSS 4 (CSS-first config) + SASS + custom CSS |
| Animation | Framer Motion 11 + React Scroll Parallax |
| Icons | FontAwesome 6 + React Icons + React Social Icons |
| UI | Semantic UI React |
| Analytics | Vercel Analytics |
| Package manager | pnpm |
| Deploy | Vercel (primary) + GitHub Pages (`pnpm deploy`) |

There is no client-side router — this is a single-page scroller (see Entry Point Flow below). In-page nav uses `react-scroll`, not `next/link`.

## Commands

```bash
pnpm dev          # Start Next.js dev server (next dev)
pnpm build        # Production build — static export to dist/ (next build)
pnpm preview      # Serve the static export locally (npx serve dist)
pnpm lint         # ESLint (max warnings: 0 — strict)
pnpm deploy       # Build + deploy dist/ to GitHub Pages
```

## Architecture

### Entry Point Flow
```
app/layout.jsx → app/[[...slug]]/page.jsx → app/[[...slug]]/client.jsx → src/App.jsx → src/layout/layout.jsx → sections
```

The app is a static export (`output: 'export'` in `next.config.mjs`) rendered as a client-only SPA: `app/[[...slug]]/client.jsx` loads `src/App.jsx` via `next/dynamic` with `{ ssr: false }`, so `App` and everything beneath it (all 7 sections, `Header`/`MobileHeader`, `ProjectsCard`, hooks/utils) never runs server-side and needs no SSR-specific handling. `generateStaticParams` in `page.jsx` emits a single static `index.html` at the site root — there are no real Next.js routes. New sections still follow the existing `Layout`-array pattern in `src/layout/layout.jsx`, not new `app/` route files.

### Section Order (rendered in layout.jsx)
1. `about/` — Hero / introduction
2. `engineering/` — Mechanical & hardware projects
3. `CS/` — Computer Science & programming projects
4. `music/` — Music production & composition
5. `photo_filmmaking/` — Photography & film projects
6. `design/` — Design & UI portfolio
7. `footer/` — Contact & social links

### Key Components
- `src/ProjectsCard/ProjectsCard.jsx` — Reusable project card. Supports 3D hover transforms (desktop only), staggered fade-in via IntersectionObserver, and lazy image loading.
- `src/utils/mobileUtils.js` — Mobile detection (`checkMobile()`), scroll helpers, and React hooks.
- `src/utils/useDragScroll.js` — Drag-to-scroll hook used in section carousels.
- `src/header/header.jsx` — Desktop sticky header; collapses to icon-only at ≤800px.
- `src/header/MobileHeader.jsx` — Touch-optimized mobile header.

## Styling Conventions

- CSS custom properties are defined in `src/index.css` and `src/App.css` (colors, spacing, radii, shadows).
- Each component has its own `.css` file co-located alongside it.
- Mobile-specific overrides go in separate files (e.g., `CS-mobile.css`, `MobileHeader.css`).
- Responsive breakpoints: `768px` (tablet/mobile), `800px` (narrow desktop), `428px` (small phone), `375px` (iPhone SE).
- Fluid typography uses `clamp()`.
- **Never add 3D transform or heavy GPU effects to mobile paths** — touch devices skip 3D for performance.

## Mobile vs Desktop Pattern

`App.jsx` uses a multi-method detection (`checkMobile()`: screen width + user agent + touch support) to set an `isMobile` state, which is passed through the tree. When adding features:
- Wrap desktop-only effects in `!isMobile` checks or CSS `@media` guards.
- Touch targets must be ≥44px.
- Carousels on mobile use `createMobileScrollFunction()` from `mobileUtils.js`.

## ProjectsCard Props

```jsx
<ProjectsCard
  projectImg=""          // image path (prefer WebP)
  projectTitle=""        // card title
  projectDescription=""  // short description
  projectTags={[]}       // array of tag strings
  projectGitHub=""       // GitHub URL (optional)
  projectLink=""         // external/internal link (optional)
  fitType=""             // CSS object-fit value (default: "cover")
  animationDelay={0}     // stagger delay in ms
/>
```

## Environment Variables

```
NEXT_PUBLIC_YOUTUBE_API_KEY=...   # YouTube Data API key (in .env, gitignored)
```

Access in code via `process.env.NEXT_PUBLIC_YOUTUBE_API_KEY` (used client-side in `src/music/music.jsx`).

## Assets

- Images: `public/assets/project-card-photos/<category>/` — use WebP format.
- SVG tech icons: `public/assets/svgs/`.
- Resume: `public/assets/files/Jose Acosta Aldrete.pdf`.
- Fonts: `public/fonts/` (IBM Plex Mono, Junicode, Cotham Sans, Libre Baskerville).

## Deployment Notes

- **Vercel** is the primary host. Push to `main` triggers automatic deployment. The Next.js migration (`feat/nextjs-migration`) was merged to `main` and deployed to production on 2026-09-21; the Vercel project's framework preset was manually switched from "Vite" to "Next.js" in the dashboard (Settings → General → Framework Preset) since the Vercel API token used by tooling lacks permission to update project settings.
- **GitHub Pages** is a secondary target: `pnpm deploy` runs `predeploy` (`pnpm build`, static export to `dist/`) then `gh-pages -d dist`.
- Homepage for GH Pages: `https://joseacosta21.github.io/my-portfolio`

## Agents

### `general-purpose`
Use for multi-step tasks: debugging layout issues across multiple components, adding a new portfolio section end-to-end, or cross-file refactors.

### `Explore`
Use to navigate the codebase quickly — finding which component handles a specific section, tracing a prop through the tree, or locating CSS variables.

**Example prompts:**
- "Find where the horizontal scroll carousel is implemented for the CS section."
- "Which files import `useDragScroll`?"

### `Plan`
Use before adding a new section or making a significant architectural change (e.g., adding a new portfolio category, switching animation libraries, changing the mobile detection strategy).

**Example prompts:**
- "Plan how to add a new 'Writing' portfolio section following the existing section pattern."
- "Plan how to migrate from CSS Modules to Tailwind for the ProjectsCard component."

### `cybersecurity` (general-purpose)
Use for any security-related tasks: auditing dependencies, scanning for exposed secrets, reviewing code for XSS/injection/prototype-pollution vulnerabilities, and hardening the project against common web attacks.

**When to invoke:**
- Running or interpreting `npm audit` / `pnpm audit` results
- Checking for accidentally committed secrets (API keys, tokens, `.env` files in git history)
- Reviewing new dependencies before adding them
- Evaluating third-party embeds (social media, analytics scripts) for security risk
- Hardening headers, CSP, or Vercel config

**Example prompts:**
- "Audit the current dependencies and list all high/critical vulnerabilities with fix instructions."
- "Scan the git history for any committed secrets or .env files and tell me how to purge them."
- "Review the social media embed component for XSS risk."
- "Check whether the Vercel deployment has security headers (CSP, X-Frame-Options, etc.) configured."

## Security Notes

- **`.env` was committed** in commit `90822ab`. The `VITE_YOUTUBE_API_KEY` is exposed in public git history. **Rotate it immediately in Google Cloud Console**, then purge the file from history with `git filter-branch` or `git filter-repo` and force-push.
- `.env` is listed in `.gitignore` — never override this.
- All `NEXT_PUBLIC_*` env vars are **bundled into the client-side JS** at build time and visible to anyone who inspects the built output. Never put secrets (private API keys, tokens) in `NEXT_PUBLIC_*` variables. Only public/restricted keys (e.g., a YouTube Data API key scoped to your domain) belong here.
- Run `npm audit` after every dependency update and before every production deploy.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
