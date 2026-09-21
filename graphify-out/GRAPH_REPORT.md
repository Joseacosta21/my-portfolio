# Graph Report - my-portfolio  (2026-09-21)

## Corpus Check
- Large corpus: 89 files · ~884,602 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 204 nodes · 269 edges · 20 communities (10 shown, 5 thin omitted)
- Extraction: 96% EXTRACTED · 3% INFERRED · 1% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 88,878 input · 8,947 output

## Community Hubs (Navigation)
- UI & Animation Dependencies
- Project Docs & Agent Roster
- Portfolio Section Components
- Lint & Build Tooling
- Package Config & Scripts
- Resume & Career History
- App Entry & Static Export
- Env Secret Incident & YouTube API
- Entry Point Render Chain
- Root Layout Metadata
- Mobile Detection & Drag Scroll
- Layout Array Pattern
- Next.js Config
- Desktop Header
- Mobile Header

## God Nodes (most connected - your core abstractions)
1. `My Portfolio (Project)` - 24 edges
2. `checkMobile()` - 12 edges
3. `createMobileScrollFunction()` - 12 edges
4. `Jose Acosta Aldrete` - 12 edges
5. `useScrollProgress()` - 11 edges
6. `useDragScroll()` - 11 edges
7. `scripts` - 7 edges
8. `CS()` - 6 edges
9. `ProjectsCard()` - 6 edges
10. `Design()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Computer Skills List` --semantically_similar_to--> `My Portfolio (Project)`  [INFERRED] [semantically similar]
  public/assets/files/Jose Acosta Aldrete.pdf → CLAUDE.md
- `Jose Acosta Aldrete` --conceptually_related_to--> `Vercel (deploy host)`  [INFERRED]
  public/assets/files/Jose Acosta Aldrete.pdf → CLAUDE.md
- `My Portfolio (Project)` --references--> `Jose Acosta Aldrete`  [EXTRACTED]
  CLAUDE.md → public/assets/files/Jose Acosta Aldrete.pdf
- `Resume Asset Reference` --references--> `Jose Acosta Aldrete`  [EXTRACTED]
  CLAUDE.md → public/assets/files/Jose Acosta Aldrete.pdf
- `My Portfolio (Vite version, per README)` --conceptually_related_to--> `My Portfolio (Project)`  [AMBIGUOUS]
  README.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Claude Code Agent Roster for Portfolio Project** — claude_md_agent_general_purpose, claude_md_agent_explore, claude_md_agent_plan, claude_md_agent_cybersecurity [EXTRACTED 1.00]
- **Entry Point Rendering Flow** — claude_md_app_layout_jsx, claude_md_app_slug_page_jsx, claude_md_app_slug_client_jsx, claude_md_src_app_jsx, claude_md_src_layout_layout_jsx, claude_md_entry_point_flow [EXTRACTED 1.00]
- **Project Font Set** — claude_md_ibm_plex_mono, claude_md_junicode, claude_md_cotham_sans, claude_md_libre_baskerville [EXTRACTED 1.00]

## Communities (20 total, 5 thin omitted)

### Community 0 - "UI & Animation Dependencies"
Cohesion: 0.04
Nodes (45): @fortawesome/fontawesome-svg-core, @fortawesome/free-brands-svg-icons, @fortawesome/free-regular-svg-icons, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome, framer-motion, dependencies, @fortawesome/fontawesome-svg-core (+37 more)

### Community 1 - "Project Docs & Agent Roster"
Cohesion: 0.07
Nodes (33): Explore agent, general-purpose agent, Plan agent, Cotham Sans (font), Custom Next.js Docs-First Rule, FontAwesome 6, Framer Motion 11, GitHub Pages (secondary deploy) (+25 more)

### Community 2 - "Portfolio Section Components"
Cohesion: 0.21
Nodes (17): About(), CS(), Design(), Engineering(), Footer(), Header(), MobileHeader(), Music() (+9 more)

### Community 3 - "Lint & Build Tooling"
Cohesion: 0.07
Nodes (29): autoprefixer, eslint, @eslint/js, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+21 more)

### Community 4 - "Package Config & Scripts"
Cohesion: 0.14
Nodes (13): homepage, name, packageManager, private, scripts, build, deploy, dev (+5 more)

### Community 5 - "Resume & Career History"
Cohesion: 0.21
Nodes (12): Resume Asset Reference, Concordia Baja SAE, Camp Santa Ursula, Computer Skills List, Concordia University, CUSRA Research Assistant Role, Fanabox GP – Formula 1 Store, Concordia Formula SAE (+4 more)

### Community 6 - "App Entry & Static Export"
Cohesion: 0.28
Nodes (3): App, Client(), Layout()

### Community 7 - "Env Secret Incident & YouTube API"
Cohesion: 0.40
Nodes (5): cybersecurity agent, Committed .env Secret Incident (commit 90822ab), music.jsx, VITE_YOUTUBE_API_KEY (leaked, legacy), NEXT_PUBLIC_YOUTUBE_API_KEY

### Community 8 - "Entry Point Render Chain"
Cohesion: 0.40
Nodes (5): app/layout.jsx, app/[[...slug]]/client.jsx, app/[[...slug]]/page.jsx, src/App.jsx, src/layout/layout.jsx

### Community 10 - "Mobile Detection & Drag Scroll"
Cohesion: 0.50
Nodes (4): Mobile vs Desktop Detection Pattern, mobileUtils.js, ProjectsCard Component, useDragScroll.js hook

## Ambiguous Edges - Review These
- `My Portfolio (Project)` → `My Portfolio (Vite version, per README)`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to
- `Next.js (App Router, static export)` → `Vite`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps
- **83 isolated node(s):** `metadata`, `viewport`, `nextConfig`, `homepage`, `name` (+78 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 98 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `My Portfolio (Project)` and `My Portfolio (Vite version, per README)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Next.js (App Router, static export)` and `Vite`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `dependencies` connect `UI & Animation Dependencies` to `Package Config & Scripts`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Lint & Build Tooling` to `Package Config & Scripts`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `My Portfolio (Project)` connect `Project Docs & Agent Roster` to `Resume & Career History`, `Env Secret Incident & YouTube API`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `metadata`, `viewport`, `nextConfig` to the rest of the system?**
  _83 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI & Animation Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._