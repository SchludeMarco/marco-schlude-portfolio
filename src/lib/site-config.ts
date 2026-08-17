export interface NavItem {
  label: string;
  href: string;
}

/**
 * Muss nach dem Vercel-Deployment auf die finale Produktions-Domain
 * gesetzt werden (z.B. via NEXT_PUBLIC_SITE_URL Env-Var in Vercel).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marco-schlude.vercel.app";

export const mainNavItems: NavItem[] = [
  { label: "Über mich", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Erfahrung", href: "/#experience" },
  { label: "Projekte", href: "/#projects" },
  { label: "Für Recruiter", href: "/for-recruiters" },
  { label: "Ask Marco", href: "/ask-marco" },
];

export const legalNavItems: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
