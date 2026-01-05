# Baseline — Project Context

## What I'm Building

Baseline is a personal library system for building high-end websites fast. It has two connected parts:

1. **Reference Library** — Curated screenshots from top design galleries (Maxibestof, Craftwork, Supahero, Bentogrids), tagged with a defined taxonomy
2. **Section Library** — React/TypeScript/Tailwind components I code myself to match that level of quality

The goal: eliminate AI slop by training my workflow on only the best examples, then building a reusable library of premium sections.

## Why This Exists

AI-generated code regresses to the mean because it learned from the entire internet. Baseline solves this by:

- Curating only top-tier references
- Hand-coding sections that meet that standard
- Using reference + existing sections to build client sites faster while maintaining quality

This is NOT an AI wrapper. The AI assists in building sections, but the quality control and curation is manual and intentional.

## Current State

- Project scaffolded as a Next.js app
- Taxonomy defined and documented
- Currently in **Day 1: Reference Blitz** — collecting 60-80 screenshots
- Have collected 20+ hero references so far

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Local JSON files for metadata (no database)

## File Structure

```
/baseline
├── references/
│   ├── heroes/
│   │   ├── heroes.json      ← hero reference metadata
│   │   └── hero-ref-001.png
│   ├── features/
│   │   ├── features.json    ← features reference metadata
│   │   └── features-ref-001.png
│   └── ...
├── sections/
│   ├── heroes/
│   │   └── hero-001/
│   │       ├── Hero001.tsx
│   │       └── meta.json
│   └── ...
├── primitives/              ← functional components (Osmo, etc.)
└── app/
    └── preview/[category]/[section]/page.tsx
```

## Taxonomy

References and sections are tagged with:

- **Section type:** hero, nav, features, bento, pricing, testimonials, cta, footer, etc.
- **Visual style:** editorial, minimal, brutalist, bold, clean, luxury, techy, etc.
- **Layout:** centered, asymmetric, grid, split-screen, overlapping, full-bleed, etc.
- **Mood:** dark, light, muted, vibrant, warm, cool, fun, pastel
- **Typography:** large-type, small-type, serif, sans, mono, mixed
- **Special:** has-product-ui, has-mockup, has-gradient, has-animation, has-marquee, has-code-block, has-glassmorphism, etc.
- **Website type:** portfolio, saas, ecommerce, ai, finance, etc.

## Reference JSON Format

```json
{
  "id": "hero-ref-001",
  "file": "/references/heroes/hero-ref-001.png",
  "sourceUrl": "https://example.com/",
  "sectionType": "hero",
  "tags": ["editorial", "dark", "asymmetric", "serif", "has-animation"],
  "builtAs": null
}
```

## Workflow

**Adding references:**

1. Screenshot from curated gallery
2. Save to `/references/{sectionType}/`
3. Add entry to `/references/{sectionType}/{sectionType}.json`

**Building sections:**

1. Pick reference(s) for inspiration
2. Create `/sections/{sectionType}/{section-id}/`
3. Code component as `{ComponentName}.tsx`
4. Create `meta.json` linking back to reference
5. Update reference's `builtAs` field

## 2-Day MVP Goal

**Day 1:**

- 60-80 tagged references
- 10 coded sections (4 heroes, 2 navs, 2 CTAs, 2 footers)

**Day 2:**

- 9 more sections (features, testimonials, pricing, bento)
- Polish and test preview system
- Validate workflow works end-to-end

## How Claude Can Help

- Tag screenshots I share (respond in JSON format)
- Suggest new Special tags when patterns emerge
- Help build sections from reference screenshots
- Convert Osmo HTML/CSS/JS primitives to React/TypeScript
- Keep responses concise — I'm moving fast
