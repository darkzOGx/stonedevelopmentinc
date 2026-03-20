# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Stone Development Inc. — a luxury construction/general contractor website for Southern California (stonedevelopmentinc.com). Single-page marketing site with contact form, portfolio gallery, and lead capture (exit-intent modal + support bubble).

## Commands

```bash
npm run dev      # Next.js dev server (port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

**Next.js 16 App Router** with React 19 and TypeScript. Originally scaffolded from Lovable (Vite template), migrated to Next.js.

### Routes
- `/` — Landing page with section-based layout (Hero → TrustBar → Services → About → Portfolio → CTA → ContactForm)
- `/contact` — Dedicated contact page (`ContactClient.tsx` client component)
- `/portfolio` — Portfolio gallery (`PortfolioClient.tsx` client component)

### Key Directories
- `components/sections/` — Page sections composing the homepage
- `components/ui/` — Reusable UI (Button, SupportBubble, ExitIntentModal, QuickLeadForm, etc.)
- `components/layout/` — Navbar, Footer
- `lib/projects.ts` — Portfolio project data (images imported from `src/assets/`)
- `src/assets/` — Static images (imported via Next.js, not served from `public/`)

### Backend
- **Supabase** — `leads` table stores form submissions (name, email, phone, project_type, budget, message, status). RLS enabled with open insert/select/update policies for anon users.
- Environment: `.env` contains `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Design System
- **Fonts**: Inter (sans) + Cormorant Garamond (serif) via `next/font/google`
- **Colors**: Warm neutrals — background `#F5F3EF`, accent gold `#B8892A`, dark foreground `#141414`
- **Tailwind v3** with custom theme in `tailwind.config.ts` using CSS variables (`--font-inter`, `--font-cormorant`)
- **shadcn/ui** component primitives (Radix UI) — full set installed
- **Framer Motion** for animations throughout
- **Lucide React** for icons

### SEO
- JSON-LD `GeneralContractor` schema in root layout
- OpenGraph + Twitter meta tags
- Speakable summary on homepage

### Lead Capture
Two entry points both render `QuickLeadForm`:
1. `SupportBubble` — floating chat-style bubble (bottom-right)
2. `ExitIntentModal` — triggered when mouse leaves viewport upward (once per session)

### Path Aliases
`@/` maps to project root (configured in `tsconfig.json`). Static assets use `@/src/assets/`.
