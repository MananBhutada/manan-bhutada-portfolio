# Manan Bhutada — Portfolio Universe

An adaptation of Pedro Marques' open-source 3D portfolio engine, preserving the original galaxy, solar-system rendering, scroll-driven camera choreography, animations, responsive behavior, and component architecture while replacing the content and identity with Manan Bhutada's portfolio worlds.

> Original engine attribution: Pedro Marques. See `LICENSE`.

## Worlds

The planets no longer represent individual projects. They represent separate areas of the portfolio:

- **Projects** — PROJECT S.A.A.S., Nagar Register, Seizure Coma Watch, Autofill Application
- **Hackathon Wins** — competition archive
- **Research** — research-paper archive
- **Library** — books listed as actually read in the provided portfolio brief
- **Technology** — verified technologies listed in the provided portfolio brief

The source material did not provide detailed metadata for every project, competition ranking, or research paper title, so those fields are intentionally not fabricated.

## Stack

- Next.js 16 / React 19
- React Three Fiber / Three.js / Drei
- GSAP + Framer Motion
- Lenis smooth scrolling
- Tailwind CSS 4
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run start
```

## Vercel

1. Import this repository into Vercel.
2. Keep the build command as `npm run build`.
3. If you want canonical metadata/sitemap URLs to point to your deployed domain, set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

4. If you enable the contact API, configure the variables documented in `.env.example`.

No API keys or secrets are committed.

## Source / attribution

This project is a modification of Pedro Marques' original open-source portfolio. The original MIT license and required copyright notice are retained in `LICENSE`.
