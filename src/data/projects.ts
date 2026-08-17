import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "erp-lvs-integration",
    title: "ERP-LVS Integration",
    category: "ERP",
    featured: true,
    duration: "18 Monate",
    role: "Entwicklung",
    shortDescription:
      "Schnittstelle zwischen dem Protex ERP System und einem zugekauften Lagerverwaltungssystem (ASAP LVS).",
    description:
      "Implementierung einer Schnittstelle zwischen dem Protex ERP System und einem zugekauften Lagerverwaltungssystem. Im Mittelpunkt standen eine zuverlässige Datenintegration zwischen beiden Systemen, robuste Fehlerbehandlung sowie die Automatisierung bisher manueller Prozessschritte – bei durchgehend hoher Stabilität im Produktivbetrieb.",
    technologies: [
      "IBM i",
      "RPG",
      "SQL",
      "Dateisystem-Trigger",
      "Protex ERP",
      "ASAP LVS",
    ],
    focus: [
      "Datenintegration",
      "Fehlerbehandlung",
      "Prozessautomatisierung",
      "Stabilität",
      "Produktivbetrieb",
    ],
  },
  {
    slug: "querysage-ai",
    title: "QuerySage AI",
    category: "KI",
    featured: true,
    resumeHighlight: true,
    role: "Konzeption & Entwicklung",
    shortDescription: "KI-gestützter SQL Review Assistent.",
    description:
      "QuerySage AI ist ein KI-gestützter Assistent, der SQL-Abfragen automatisiert analysiert, bewertet und Verbesserungsvorschläge liefert. Ziel ist es, Entwicklerinnen und Entwicklern schnelles, konsistentes Feedback zu Performance und Sicherheit ihrer Queries zu geben, bevor diese in Produktion gehen.",
    technologies: [
      "Python",
      "FastAPI",
      "Ollama",
      "Llama 3.1",
      "Docker",
      "Fly.io",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    features: [
      "SQL Analyse",
      "Performancebewertung",
      "Sicherheitsanalyse",
      "Verbesserungsvorschläge",
      "Bewertungssystem",
    ],
  },
  {
    slug: "smartcraft",
    title: "Sm@rtCraft – Der Kollege in der Hosentasche",
    category: "KI",
    featured: true,
    role: "Konzeption & Entwicklung",
    shortDescription:
      "Eigenständig konzipierte und entwickelte KI-Webanwendung, die Baustellen- und Heimwerkerprobleme per Foto oder Beschreibung analysiert und in Sekunden eine fachliche Einschätzung liefert. Aus einem nicht produktionsfähigen Prototyp entstand eine gehärtete Vite/React-Anwendung mit Firebase-Backend, serverseitigem Gemini-API-Proxy und mehrstufigem Schutz gegen automatisierten API-Missbrauch.",
    description:
      "Sm@rtCraft analysiert ein Foto oder eine Beschreibung eines Baustellenproblems und liefert in Sekunden eine fachlich fundierte Einschätzung samt Materialliste, Sicherheits-Check und kundentauglichem Bericht als PDF-Export. Die Idee entstand aus der eigenen Vergangenheit als Zimmermann: Auf der Baustelle fehlt oft der Kollege, der schnell weiterhilft. Aus einem nicht eigenständig lauffähigen KI-Prototyp (Google-AI-Studio-Export) wurde ein produktiv gehärtetes Vite/React-Projekt mit serverseitigem Gemini-Proxy, Firebase Auth/Firestore und mehrstufigem Schutz gegen automatisierten API-Missbrauch (Origin-Check, App Check, Rate-Limiting, dauerhaftes Demo-Kontingent).",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase (Auth, Firestore)",
      "Google Gemini API",
      "Vercel Serverless Functions",
    ],
    focus: [
      "KI-Bildanalyse",
      "API-Sicherheit & Missbrauchsschutz",
      "Serverless-Architektur",
      "PDF-Export",
    ],
    links: [
      { label: "Live-Demo", url: "https://smartcraft-baustellenanalyse.vercel.app" },
      { label: "GitHub", url: "https://github.com/SchludeMarco/smartcraft-baustellenanalyse" },
    ],
  },
  {
    slug: "casauto-real",
    title: "CasAuto Real – Autohaus Royal",
    category: "Web",
    featured: true,
    role: "Team-Projekt (2 Entwickler) – Konzeption & Entwicklung",
    shortDescription:
      "Vollwertige Fullstack-Plattform für ein Autohaus: Fahrzeugkatalog, Probefahrt-Buchung und Admin-Bereich, gebaut im Team mit einem Mitschüler.",
    description:
      "CasAuto Real ist eine im Team mit einem Mitschüler entwickelte Fullstack-Plattform für ein fiktives Autohaus. Das Frontend bietet einen filterbaren Fahrzeugkatalog (Marke, Kategorie, Kraftstoff, Preis, Baujahr) in Deutsch, Englisch und Spanisch, Probefahrt-Buchung ohne Account, Merkliste und einen Fahrzeugvergleich für eingeloggte Kunden. Das Backend stellt eine JWT-gesicherte REST-API samt Admin-Bereich zur Fahrzeug- und Terminverwaltung bereit. Die Infrastruktur (VPC, EC2, MySQL) ist vollständig als Terraform-Code beschrieben; produktiv läuft das Frontend auf Vercel, Backend und Datenbank auf AWS EC2.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "NestJS",
      "TypeORM",
      "MySQL",
      "Docker",
      "Terraform",
      "AWS",
    ],
    focus: [
      "Fullstack-Architektur",
      "REST-API & Authentifizierung",
      "Infrastructure-as-Code",
      "Teamarbeit",
    ],
    links: [
      { label: "Live-Demo", url: "https://cas-auto-real-web.vercel.app" },
      { label: "GitHub", url: "https://github.com/Lucasle6/CasAuto-Real" },
    ],
  },
  {
    slug: "websurface",
    title: "WebSurface – App-Ideen für den Mittelstand",
    category: "Web",
    featured: true,
    resumeHighlight: true,
    role: "Konzeption & Entwicklung",
    shortDescription:
      "Studien-/Portfolio-Prototyp, der mittelständischen Unternehmen passende App-Konzepte vorschlägt – per Branchenauswahl oder echter Analyse hochgeladener Geschäftsdaten.",
    description:
      "WebSurface schlägt mittelständischen Unternehmen passende App-Konzepte vor – entweder anhand ausgewählter Branchen (Dienstleistungen, Handel, Industrie & Verarbeitendes Gewerbe, Baugewerbe & Handwerk) mit kuratiertem Ideen-Katalog, oder anhand einer echten, regelbasierten Analyse hochgeladener CSV-Verkaufsdaten (Saisonalität, Kategorie-Konzentration) – bewusst keine Blackbox und ohne externe API-Calls. Bewusste Abgrenzung: WebSurface generiert keinen Produktivcode, sondern geprüfte Konzept-Briefs als Entscheidungsgrundlage. Ergänzt um eine vollständige, ehrliche Datenschutzerklärung sowie einen vollständigen AWS-Zielaufbau als reviewbarer CDK-Code (VPC, ALB, ECS/Fargate, RDS, KMS, Secrets Manager, IAM) – als Infrastruktur-Nachweis bewusst nicht deployed.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma ORM",
      "PostgreSQL",
      "AWS CDK",
    ],
    focus: [
      "Regelbasierte Datenanalyse",
      "Datenschutz",
      "Infrastructure-as-Code",
      "Produktkonzeption",
    ],
    links: [
      { label: "Live-Demo", url: "https://websurface.vercel.app" },
      { label: "GitHub", url: "https://github.com/SchludeMarco/websurface" },
    ],
  },
  {
    slug: "portfolio-cv-generator",
    title: "Portfolio & CV Generator",
    category: "Web",
    featured: true,
    resumeHighlight: true,
    role: "Konzeption & Entwicklung",
    shortDescription:
      "Persönliche Portfolio-Plattform mit automatischer PDF-Lebenslauf-Generierung – Single Source of Truth für Website und Lebenslauf.",
    description:
      "Die eigene Portfolio-Website hält Profil, Berufserfahrung, Skills und Projekte in typisierten Datendateien. Ein Node-Skript generiert daraus per PDFKit den Lebenslauf als PDF, sodass Website und CV nie auseinanderlaufen – Inhalte werden an einer Stelle gepflegt, nicht doppelt.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "PDFKit"],
    focus: ["Single Source of Truth", "PDF-Generierung", "Design-System"],
    links: [
      { label: "GitHub", url: "https://github.com/SchludeMarco/marco-schlude-portfolio" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
