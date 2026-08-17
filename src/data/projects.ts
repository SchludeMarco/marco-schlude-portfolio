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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
