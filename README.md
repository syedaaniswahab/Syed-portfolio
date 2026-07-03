# Syed Aanis Wahab — Portfolio

A Next.js (App Router, TypeScript, Tailwind v4) personal portfolio with:

- A real 3D centerpiece in the hero — a rotating, mouse-reactive node-network sphere
  built with Three.js / react-three-fiber, tying into the automation/workflow visual
  motif used throughout the site
- Animated node-graph hero background, glassmorphic nav, scroll reveals, 3D-tilt
  project cards and stack tiles
- Case-study project modals, AI stack grid, categorized skills
- ⌘K command palette, Konami code easter egg
- A real "Ask AI about me" chatbot, grounded only in this site's content, powered by
  a server-side API route that calls the Anthropic API (your key stays on the server)
- SEO metadata, JSON-LD, dynamic OG image, sitemap.xml, robots.txt

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your ANTHROPIC_API_KEY
npm run dev
```

Open http://localhost:3000.

## Before you deploy — things to fill in

All of these live in `src/lib/data.ts` unless noted:

- ✅ Email, LinkedIn, GitHub, location, projects, skills, and the About copy are filled
  in with your real details.
- `PROFILE.siteUrl` — still a placeholder; set it to your real deployed domain
  (used in metadata, sitemap, and JSON-LD).
- `EXPERIENCE` and `EDUCATION` — still placeholders. No specific roles, companies,
  or dates were provided yet, so these need your input.
- `BLOG` — still teaser cards with no linked posts. Wire up real posts or remove
  the section.
- Resume PDF: the "Download PDF" button just shows a toast right now. Add a
  real file to `/public` and point the button at it (`src/components/Resume.tsx`).
- `ANTHROPIC_API_KEY` environment variable — required for the chat widget to
  respond; without it the route returns a friendly error.
- The "AI Portfolio & Personal Brand" project case study describes the planned
  RAG/Supabase knowledge layer as a next step — the chat widget currently answers
  from a fixed summary (see `src/lib/data.ts` → `buildSystemPrompt`), not a real
  retrieval pipeline. Update that case study if/when you build the real thing.
- The 3D hero visual (`src/components/Hero3D.tsx`) loads client-side only and
  respects `prefers-reduced-motion` (it stops auto-rotating but still renders).
  If WebGL fails for any reason it falls back to a soft gradient blob instead of
  crashing the page.

## Deploying

Works out of the box on Vercel: push to GitHub, import the repo, add the
`ANTHROPIC_API_KEY` environment variable in your project settings, deploy.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Framer Motion · Three.js / react-three-fiber · Anthropic API
