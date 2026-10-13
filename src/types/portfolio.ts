/**
 * Shared TypeScript types for Ravex Technology portfolio content.
 */

/* ------------------------------------------------------------------ */
/* Assets                                                             */
/* ------------------------------------------------------------------ */

/** Asset IDs follow the master prompt convention: "NN-short-name". */
export type AssetId = string;

/** Loading priority hint used by preload and lazy-load decisions. */
export type AssetPriority = "critical" | "high" | "normal" | "low";

/** Availability status of an asset file on disk. */
export type AssetStatus = "present" | "pending" | "placeholder";

/** A single media asset (image or video) registered in the manifest. */
export interface PortfolioAsset {
  /** Stable ID from the manifest. Example: "01-hero-portrait". */
  id: AssetId;
  /** Section name for grouping. Example: "hero". */
  section: string;
  /** Public path to the still image, relative to the site root. */
  imagePath: string;
  /** Optional public path to a video clip (Google Flow output). */
  videoPath?: string;
  /** Optional public path to a poster image for the video. */
  posterPath?: string;
  /** Alt text for accessibility. Required for every image. */
  alt: string;
  /** CSS object-position value. Example: "50% 30%". */
  focalPoint?: string;
  /** Aspect ratio as width / height. Example: 16 / 9. */
  aspectRatio: number;
  /** Loading priority. */
  priority: AssetPriority;
  /** Current availability. */
  status: AssetStatus;
}

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export interface Skill {
  /** Display name. Example: "React". */
  name: string;
  /** Optional short note. Example: "Hooks, Suspense, Server Components". */
  note?: string;
}

export interface SkillCategory {
  /** Category ID used for anchors. Example: "fullstack". */
  id: string;
  /** Human-readable title. */
  title: string;
  /** One-line description of the category. */
  description: string;
  /** Skills in this category. */
  skills: Skill[];
}

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

export interface ProjectLink {
  label: string;
  href: string;
  /** "live" | "repo" | "case-study" | "other" for icon selection. */
  kind: "live" | "repo" | "case-study" | "other";
}

export interface Project {
  /** URL-safe identifier. Used as a React key and future route param. */
  slug: string;
  /** Display title. */
  title: string;
  /** Short category. Example: "Full-stack", "Networking", "Security". */
  category: string;
  /** One-sentence summary shown on the card. */
  summary: string;
  /** Longer problem statement for the case-study view. */
  problem?: string;
  /** Longer solution description for the case-study view. */
  solution?: string;
  /** Technology tags. */
  technologies: string[];
  /** Links to live site, repository, or case study. */
  links: ProjectLink[];
  /** Optional asset ID for the project screenshot. */
  screenshotAssetId?: AssetId;
  /** Optional verified outcome (only include if genuinely verified). */
  result?: string;
}

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */

export interface ContactInfo {
  email: string;
  /** Optional phone/WhatsApp number. Leave blank to hide. */
  phone?: string;
  /** Optional LinkedIn URL. */
  linkedin?: string;
  /** Optional GitHub URL. */
  github?: string;
  /** Optional location string. */
  location?: string;
}

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  /** Target path with optional hash. Example: "/#projects". */
  to: string;
}