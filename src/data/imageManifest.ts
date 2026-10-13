/**
 * Central asset manifest for Ravex Technology.
 *
 * Every visual asset used by the site is registered here. Sections
 * reference assets by ID, never by raw path, so a filename change
 * only requires updating this file.
 *
 * Status values:
 *   "present"     -- the file exists in public/assets/ at the listed path
 *   "pending"     -- the asset has not been supplied yet; a designed
 *                    placeholder will be shown in its place
 *   "placeholder" -- a deliberate stand-in is in use (dev only)
 *
 * Update `status` to "present" as files are added.
 */
import type { PortfolioAsset } from "@/types/portfolio";

export const imageManifest: PortfolioAsset[] = [
  {
    id: "01-hero-portrait",
    section: "hero",
    imagePath: "/assets/images/hero/01-hero-portrait.webp",
    alt: "Portrait of Rakib for the Ravex Technology homepage",
    focalPoint: "50% 30%",
    aspectRatio: 3 / 4,
    priority: "critical",
    status: "pending",
  },
  {
    id: "02-developer-workstation",
    section: "workstation",
    imagePath: "/assets/images/workstation/02-developer-workstation.webp",
    alt: "Developer workstation with monitors, keyboard, and ambient lighting",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "high",
    status: "pending",
  },
  {
    id: "03-full-body-reveal",
    section: "portraits",
    imagePath: "/assets/images/portraits/03-full-body-reveal.webp",
    alt: "Full-body portrait revealing the developer in context",
    focalPoint: "50% 40%",
    aspectRatio: 3 / 4,
    priority: "normal",
    status: "pending",
  },
  {
    id: "04-typing-hands",
    section: "hands",
    imagePath: "/assets/images/hands/04-typing-hands.webp",
    alt: "Close-up of hands typing on a mechanical keyboard",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "05-scene-transition",
    section: "transitions",
    imagePath: "/assets/images/hero/05-scene-transition.webp",
    alt: "Cinematic scene transition frame",
    focalPoint: "50% 50%",
    aspectRatio: 21 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "06-wide-dream-garage",
    section: "garage",
    imagePath: "/assets/images/garage/06-wide-dream-garage.webp",
    alt: "Wide cinematic reveal of the dream garage interior",
    focalPoint: "50% 50%",
    aspectRatio: 21 / 9,
    priority: "high",
    status: "pending",
  },
  {
    id: "07-coupe-front",
    section: "cars",
    imagePath: "/assets/images/cars/07-coupe-front.webp",
    alt: "Front detail of the blue coupe",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "08-coupe-side",
    section: "cars",
    imagePath: "/assets/images/cars/08-coupe-side.webp",
    alt: "Side profile of the blue coupe",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "09-coupe-rear",
    section: "cars",
    imagePath: "/assets/images/cars/09-coupe-rear.webp",
    alt: "Rear three-quarter view of the blue coupe",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "10-superbike-bmw",
    section: "motorcycles",
    imagePath: "/assets/images/motorcycles/10-superbike-bmw.webp",
    alt: "BMW-inspired sport superbike",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "11-superbike-kawasaki",
    section: "motorcycles",
    imagePath: "/assets/images/motorcycles/11-superbike-kawasaki.webp",
    alt: "Kawasaki-inspired sport superbike",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "12-superbike-ducati",
    section: "motorcycles",
    imagePath: "/assets/images/motorcycles/12-superbike-ducati.webp",
    alt: "Ducati-inspired sport superbike",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "13-superbike-yamaha",
    section: "motorcycles",
    imagePath: "/assets/images/motorcycles/13-superbike-yamaha.webp",
    alt: "Yamaha-inspired sport superbike",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "14-skills-command-center",
    section: "skills",
    imagePath: "/assets/images/skills/14-skills-command-center.webp",
    alt: "Developer workspace representing the skills command center",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "15-network-engineering",
    section: "networking",
    imagePath: "/assets/images/networking/15-network-engineering.webp",
    alt: "Network engineering visualization",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "16-cybersecurity-operations",
    section: "cybersecurity",
    imagePath: "/assets/images/cybersecurity/16-cybersecurity-operations.webp",
    alt: "Cybersecurity operations visualization",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "17-cloud-devops",
    section: "cloud-devops",
    imagePath: "/assets/images/cloud-devops/17-cloud-devops.webp",
    alt: "Cloud and DevOps architecture visualization",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "18-projects-showcase",
    section: "projects",
    imagePath: "/assets/images/projects/18-projects-showcase.webp",
    alt: "Projects showcase hero image",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "19-about-experience",
    section: "about",
    imagePath: "/assets/images/contact/19-about-experience.webp",
    alt: "About and experience section image",
    focalPoint: "50% 50%",
    aspectRatio: 16 / 9,
    priority: "normal",
    status: "pending",
  },
  {
    id: "20-contact-finale",
    section: "contact",
    imagePath: "/assets/images/contact/20-contact-finale.webp",
    alt: "Cinematic closing image for the contact section",
    focalPoint: "50% 50%",
    aspectRatio: 21 / 9,
    priority: "normal",
    status: "pending",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

const byId: Map<string, PortfolioAsset> = new Map(
  imageManifest.map((asset) => [asset.id, asset]),
);

/**
 * Look up an asset by ID. Throws on unknown IDs so typos are caught
 * at build or first render rather than silently rendering nothing.
 */
export function getAsset(id: string): PortfolioAsset {
  const asset = byId.get(id);
  if (!asset) {
    throw new Error(
      `[imageManifest] Unknown asset id: "${id}". Add it to src/data/imageManifest.ts.`,
    );
  }
  return asset;
}

/** Return all assets in a given section. */
export function getAssetsBySection(section: string): PortfolioAsset[] {
  return imageManifest.filter((a) => a.section === section);
}