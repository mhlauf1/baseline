# Baseline Taxonomy

All references and sections are tagged using this controlled vocabulary.

---

## Section Types

One value per reference/section:

| Value | Folder Name |
|-------|-------------|
| `hero` | heroes |
| `nav` | navs |
| `features` | features |
| `bento` | bento |
| `pricing` | pricing |
| `testimonials` | testimonials |
| `cta` | cta |
| `footer` | footers |
| `about` | about |
| `stats` | stats |
| `logos` | logos |
| `faq` | faq |
| `contact` | contact |
| `gallery` | gallery |
| `team` | team |
| `blog-header` | blog-headers |
| `blog-section` | blog-sections |
| `product-list` | product-lists |
| `product-header` | product-headers |

---

## Visual Style

Pick 1-3:

- `editorial` — Magazine-like, story-driven layouts
- `minimal` — Clean, reduced, lots of whitespace
- `brutalist` — Raw, unconventional, anti-design
- `corporate` — Professional, trustworthy, enterprise
- `playful` — Fun, whimsical, personality-driven
- `luxury` — Premium, refined, high-end
- `retro` — Vintage-inspired, nostalgic
- `techy` — Tech-forward, modern digital
- `3d` — Three-dimensional elements or effects
- `big-imagery` — Photography or visuals as the star
- `black-and-white` — Monochrome palette
- `clean` — Simple, uncluttered, balanced
- `colorful` — Bold, varied color palette
- `monochromatic` — Single color with variations
- `bold` — Strong, impactful, high-contrast design

---

## Layout

Pick 1-2:

- `centered` — Content centered horizontally
- `asymmetric` — Intentionally unbalanced composition
- `grid` — Structured grid-based layout
- `split-screen` — Two distinct halves
- `overlapping` — Elements layered on top of each other
- `full-bleed` — Content extends to edges
- `contained` — Content within max-width container
- `horizontal-scroll` — Scrolls horizontally

---

## Mood

Pick 1-2:

- `dark` — Dark backgrounds, light text
- `light` — Light backgrounds, dark text
- `muted` — Subdued, desaturated colors
- `vibrant` — Bright, saturated colors
- `warm` — Warm color temperature (reds, oranges, yellows)
- `cool` — Cool color temperature (blues, greens, purples)
- `fun` — Energetic, upbeat feeling
- `pastel` — Soft, pale colors

---

## Typography

Pick 1-2:

- `large-type` — Oversized headlines or text
- `small-type` — Smaller, refined typography
- `serif` — Serif typefaces dominate
- `sans` — Sans-serif typefaces dominate
- `grotesk` — Grotesk/neo-grotesk typefaces (Helvetica, Inter, etc.)
- `mono` — Monospace typefaces dominate
- `italic` — Italic or oblique typefaces featured
- `mixed` — Combination of typeface styles

---

## Special

Optional — pick any that apply:

- `has-illustration` — Contains custom illustrations
- `has-3d` — Contains 3D elements or renders
- `has-animation` — Contains meaningful animations
- `has-video` — Contains video content
- `has-product-ui` — App screenshots, dashboard mockups, UI previews
- `has-mockup` — Device mockups (phones, laptops)
- `has-gradient` — Notable gradient usage
- `has-logo-strip` — Social proof logos row
- `has-halftone` — Dithered/halftone image treatment
- `has-pixel-art` — Pixel art or 8-bit style graphics
- `has-glassmorphism` — Frosted glass/blur effects
- `has-grid-bg` — Grid pattern background
- `has-line-bg` — Line pattern background
- `has-sunburst-bg` — Radial burst/ray pattern background
- `has-code-block` — Code snippets or syntax highlighting
- `has-script-type` — Script/handwritten/calligraphic typefaces
- `has-outline-type` — Stroked/hollow text treatment
- `has-rounded-cards` — Large radius card elements
- `unusual-grid` — Non-standard grid structure
- `heavy-whitespace` — Lots of intentional empty space
- `dense` — Information-dense, packed layout

---

## Website Type

Pick 1-2:

- `portfolio` — Personal or agency portfolio sites
- `saas` — Software as a service products
- `ecommerce` — Online stores and shopping
- `marketing` — Marketing and landing pages
- `ai` — AI and machine learning products
- `architecture` — Architecture and interior design
- `art` — Art galleries and creative projects
- `automotive` — Cars, motorcycles, vehicles
- `beauty` — Beauty, cosmetics, skincare
- `community` — Social platforms and communities
- `construction` — Construction and building
- `finance` — Banking, fintech, investments
- `food-drink` — Restaurants, beverages, food brands
- `healthcare` — Medical, wellness, health tech
- `magazine` — Editorial and publications
- `photography` — Photography portfolios and studios
- `real-estate` — Property and real estate
- `travel` — Travel, hospitality, tourism

---

## ID Conventions

### Reference IDs
Format: `{sectionType}-ref-{number}`
Examples: `hero-ref-001`, `nav-ref-015`, `bento-ref-003`

### Section IDs
Format: `{sectionType}-{number}`
Examples: `hero-001`, `nav-015`, `bento-003`

---

## File Locations

- References: `/references/{folder-name}/{id}.png`
- Reference metadata: `/references/references.json`
- Sections: `/sections/{folder-name}/{id}/{ComponentName}.tsx`
- Section metadata: `/sections/{folder-name}/{id}/meta.json`
