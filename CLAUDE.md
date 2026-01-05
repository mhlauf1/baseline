# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Baseline is a personal design reference library built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and TypeScript.

### Core Concept

The app collects design reference images and their coded implementations:
- **References** (`/references/`) - Screenshot images of designs organized by section type
- **Sections** (`/sections/`) - React component implementations of those designs

### Directory Structure

Both `/references/` and `/sections/` mirror the same category folder structure defined in `lib/types.ts`:
- heroes, navs, features, bento, pricing, testimonials, cta, footers, about, stats, logos, faq, contact, gallery, team, blog-headers, blog-sections, product-lists, product-headers

### Key Files

- `lib/types.ts` - Central type definitions including `categoryFolders`, section types, style/mood/layout/interaction taxonomy, and interfaces for Reference and SectionMeta
- `references/{category}/{category}.json` - Per-section metadata files (e.g., `heroes/heroes.json`, `features/features.json`)
- `app/page.tsx` - Home page that scans `/sections/` for components and lists them by category
- `app/preview/[category]/[section]/page.tsx` - Dynamic preview route for viewing individual sections

### Section Component Convention

Section components live at `/sections/{category}/{section-id}/{ComponentName}.tsx`:
- Folder name uses kebab-case (e.g., `hero-001`)
- Component name uses PascalCase derived from folder (e.g., `Hero001.tsx` exports `Hero001`)
- The preview route dynamically imports: `@/sections/${category}/${section}/${ComponentName}`

### Path Alias

`@/*` maps to the project root.
