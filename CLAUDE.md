# CLAUDE.md — My Portfolio

## Project Overview

Personal portfolio website for Jose Acosta Aldrete. Built with React + Vite, deployed on Vercel. Live at [www.joseacostaaldrete.com](https://www.joseacostaaldrete.com).

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18.2 + Vite 5.1 |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS 3.4 + SASS + custom CSS |
| Animation | Framer Motion 11 + React Scroll Parallax |
| Icons | FontAwesome 6 + React Icons + React Social Icons |
| UI | Semantic UI React |
| Analytics | Vercel Analytics |
| Package manager | pnpm |
| Deploy | Vercel (primary) + GitHub Pages (`npm run deploy`) |

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build locally
pnpm lint         # ESLint (max warnings: 0 — strict)
pnpm deploy       # Build + deploy to GitHub Pages
```

## Architecture

### Entry Point Flow
```
index.html → src/main.jsx → App.jsx → layout/layout.jsx → sections
```

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
VITE_YOUTUBE_API_KEY=...   # YouTube Data API key (in .env, gitignored)
```

Access in code via `import.meta.env.VITE_YOUTUBE_API_KEY`.

## Assets

- Images: `public/assets/project-card-photos/<category>/` — use WebP format.
- SVG tech icons: `public/assets/svgs/`.
- Resume: `public/assets/files/Jose Acosta Aldrete.pdf`.
- Fonts: `public/fonts/` (IBM Plex Mono, Junicode, Cotham Sans, Libre Baskerville).

## Deployment Notes

- **Vercel** is the primary host. Push to `main` triggers automatic deployment.
- **GitHub Pages** is a secondary target: `pnpm deploy` runs `predeploy` (build) then `gh-pages -d dist`.
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
- All `VITE_*` env vars are **bundled into the client-side JS** at build time and visible to anyone who inspects the built output. Never put secrets (private API keys, tokens) in `VITE_*` variables. Only public/restricted keys (e.g., a YouTube Data API key scoped to your domain) belong here.
- Run `npm audit` after every dependency update and before every production deploy.
