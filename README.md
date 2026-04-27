# Biryani In Cage

The web platform for **Biryani In Cage** — Deoghar's #1 themed biryani restaurant. Multi-cuisine, veg & non-veg, slow-dum biryani. The site is built to convert: every page lands the visitor on either Zomato, Swiggy, or a phone call.

> Caged in flavour. Set free in every bite.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 with a custom cage/saffron palette |
| Animation | Framer Motion |
| Routing | React Router v6 with lazy-loaded pages |
| Icons | Lucide React |
| Backend | Supabase (Postgres + RLS) — optional; the site falls back to local data when env vars are missing |
| Deploy | Vercel-ready (`vercel.json` with SPA rewrites) |

## Architecture

```
src/
├── api/           → server-talking modules (enquiries.js)
├── components/
│   ├── ui/        → primitives (CageBars, NeonText, MagneticButton, MarqueeStrip, FloatingCTAs, Steam, VegBadge, ScrollReveal)
│   ├── layout/    → Navbar, Footer, PageShell
│   ├── home/      → home-page sections (Hero, Stats, Story, Signature, Features, OrderCTA, Gallery, Locate, MarqueeStrips)
│   ├── menu/      → MenuItemCard, MenuToolbar, CategoryNav
│   └── contact/   → ContactForm
├── data/          → site constants, menu, gallery
├── hooks/         → useMediaQuery, usePrefersReducedMotion
├── lib/           → supabaseClient
├── pages/         → Home, Menu, About, Contact, NotFound
├── styles/        → globals.css (Tailwind layers + custom utilities)
└── utils/         → cn (class-merge), motion (animation presets)
public/
└── photos/        → restaurant photography
supabase/
└── schema.sql     → enquiries + menu_items tables with RLS policies
```

The site has been split intentionally:

- **`data/`** is the source of truth for copy, menu, links. The marketing team can edit these JS files without touching components.
- **`api/`** isolates anything that talks to the outside world. Each function decides locally whether to use Supabase or a no-op fallback.
- **`components/ui`** are zero-business-logic primitives reused across pages.
- **Routes are lazy-loaded** — only the Home bundle is fetched on first paint.

## Quick start

```bash
cp .env.example .env       # fill in real values when ready
npm install
npm run dev                # http://localhost:5173
```

```bash
npm run build              # production build into dist/
npm run preview            # serve the build locally
```

## Environment variables

All env vars are optional — without them, the site renders with sensible placeholders and any form submission is logged to the console instead of the database.

| Var | Purpose |
|---|---|
| `VITE_PHONE_NUMBER` | The number rendered in CTAs and `tel:` links |
| `VITE_ZOMATO_URL` | Direct link to the restaurant's Zomato page |
| `VITE_SWIGGY_URL` | Direct link to the restaurant's Swiggy page |
| `VITE_GOOGLE_MAPS_URL` | Google Maps URL (the same one tracked by Google Business analytics) |
| `VITE_INSTAGRAM_URL` | Instagram handle URL |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, paste and run [`supabase/schema.sql`](supabase/schema.sql). This creates:
   - `enquiries` — accepts anonymous inserts (contact form, bulk orders, reservations); read access is closed.
   - `menu_items` — anonymous read of available items; future-proofing if the menu ever needs to be edited from a CMS instead of the codebase.
3. Drop the project URL + anon key into `.env`.

## Updating the menu

The full menu lives in [`src/data/menu.js`](src/data/menu.js). Each item is a plain object:

```js
item({
  category: 'biryani',
  name: 'Hyderabadi Chicken Dum Biryani',
  desc: 'Kacchi-style dum, sealed pot, fragrant saffron strands.',
  price: 290,        // full plate
  priceHalf: 0,      // optional — set when half plate exists
  veg: false,
  popular: true,     // shows the "Bestseller" tag
})
```

> **Owner action**: the printed menu cards we transcribed from didn't include the biryani section. Placeholder biryani items are marked in `menu.js` — please confirm names and prices and replace.

## Deploy

The repo includes `vercel.json` with SPA rewrites and long-cache headers for `/photos`. To deploy:

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo into Vercel. Set the env vars in the Vercel dashboard.

## Brand notes

- **Palette**: deep ink black + warm saffron neon, mirroring the actual restaurant lighting.
- **Type**: Cinzel (display, like the neon sign), Playfair (italic accents), Plus Jakarta Sans (body), Noto Serif Devanagari (`बिरयानी` wordmark).
- **Motion**: subtle and confident — cage bars opening on hero, neon flicker, magnetic buttons, scroll-fade for sections. Respects `prefers-reduced-motion`.
