import type { ExperiencePeriod } from "./experience";

export type ProjectCategory = "ERP" | "KI" | "Web" | "Automatisierung";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  features?: string[];
  /** Schwerpunkte, z.B. bei Case Studies wie der ERP-LVS Integration */
  focus?: string[];
  /** Hervorgehobenes Highlight-Projekt (z.B. auf der Startseite) */
  featured?: boolean;
  /** In der Lebenslauf-PDF im Abschnitt "Ausgewählte Projekte" anzeigen */
  resumeHighlight?: boolean;
  role?: string;
  duration?: string;
  period?: ExperiencePeriod;
  links?: ProjectLink[];
  coverImage?: string;
  gallery?: string[];
}
