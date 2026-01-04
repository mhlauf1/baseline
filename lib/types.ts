// Section Types
export type SectionType =
  | "hero"
  | "nav"
  | "features"
  | "bento"
  | "pricing"
  | "testimonials"
  | "cta"
  | "footer"
  | "about"
  | "stats"
  | "logos"
  | "faq"
  | "contact"
  | "gallery"
  | "team"
  | "blog-header"
  | "blog-section"
  | "product-list"
  | "product-header";

// Visual Style (pick 1-3)
export type VisualStyle =
  | "editorial"
  | "minimal"
  | "brutalist"
  | "corporate"
  | "playful"
  | "luxury"
  | "retro"
  | "techy"
  | "3d"
  | "big-imagery"
  | "black-and-white"
  | "clean"
  | "colorful"
  | "monochromatic"
  | "bold";

// Layout (pick 1-2)
export type Layout =
  | "centered"
  | "asymmetric"
  | "grid"
  | "split-screen"
  | "overlapping"
  | "full-bleed"
  | "contained"
  | "horizontal-scroll";

// Mood (pick 1-2)
export type Mood =
  | "dark"
  | "light"
  | "muted"
  | "vibrant"
  | "warm"
  | "cool"
  | "fun"
  | "pastel";

// Typography (pick 1-2)
export type Typography =
  | "large-type"
  | "small-type"
  | "serif"
  | "sans"
  | "grotesk"
  | "mono"
  | "italic"
  | "mixed";

// Special tags (optional, pick any that apply)
export type Special =
  | "has-illustration"
  | "has-3d"
  | "has-animation"
  | "has-video"
  | "has-product-ui"
  | "has-mockup"
  | "has-gradient"
  | "has-logo-strip"
  | "has-halftone"
  | "has-pixel-art"
  | "has-glassmorphism"
  | "has-grid-bg"
  | "has-line-bg"
  | "has-sunburst-bg"
  | "has-code-block"
  | "has-script-type"
  | "has-outline-type"
  | "has-rounded-cards"
  | "unusual-grid"
  | "heavy-whitespace"
  | "dense";

// Website Type (pick 1-2)
export type WebsiteType =
  | "portfolio"
  | "saas"
  | "ecommerce"
  | "marketing"
  | "ai"
  | "architecture"
  | "art"
  | "automotive"
  | "beauty"
  | "community"
  | "construction"
  | "finance"
  | "food-drink"
  | "healthcare"
  | "magazine"
  | "photography"
  | "real-estate"
  | "travel";

// Reference entry in references.json
export interface Reference {
  id: string;
  file: string;
  sourceUrl: string;
  sourceName: string;
  sectionType: SectionType;
  websiteType: WebsiteType[];
  style: VisualStyle[];
  layout: Layout[];
  mood: Mood[];
  typography: Typography[];
  special: Special[];
  builtAs: string | null;
  dateAdded: string;
}

// References JSON file structure
export interface ReferencesFile {
  schema: string;
  references: Reference[];
}

// Section metadata in meta.json
export interface SectionMeta {
  id: string;
  name: string;
  sectionType: SectionType;
  websiteType: WebsiteType[];
  style: VisualStyle[];
  layout: Layout[];
  mood: Mood[];
  typography: Typography[];
  special: Special[];
  referenceId: string | null;
  notes: string;
  dependencies: string[];
  dateCreated: string;
  lastModified: string;
}

// Mapping from section type to folder name
export const sectionTypeToFolder: Record<SectionType, string> = {
  hero: "heroes",
  nav: "navs",
  features: "features",
  bento: "bento",
  pricing: "pricing",
  testimonials: "testimonials",
  cta: "cta",
  footer: "footers",
  about: "about",
  stats: "stats",
  logos: "logos",
  faq: "faq",
  contact: "contact",
  gallery: "gallery",
  team: "team",
  "blog-header": "blog-headers",
  "blog-section": "blog-sections",
  "product-list": "product-lists",
  "product-header": "product-headers",
};

// All valid folder names for categories
export const categoryFolders = [
  "heroes",
  "navs",
  "features",
  "bento",
  "pricing",
  "testimonials",
  "cta",
  "footers",
  "about",
  "stats",
  "logos",
  "faq",
  "contact",
  "gallery",
  "team",
  "blog-headers",
  "blog-sections",
  "product-lists",
  "product-headers",
] as const;

export type CategoryFolder = (typeof categoryFolders)[number];
