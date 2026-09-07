import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "cloud-business-expert-ihk",
    title: "Cloud Business Expert (IHK)",
    issuer: "IHK",
    category: "Cloud",
    date: "Prüfung bestanden im September 2026",
    competencies: [
      "Cloud-Architektur & Anbieterbewertung",
      "Migrationsstrategie (Replatforming)",
      "IT-Security & Compliance",
      "Kostenoptimierung & Wirtschaftlichkeit",
    ],
    description:
      "Kompetenzen in Cloud-Strategie, -Beratung und -Geschäftsmodellen, nachgewiesen im Abschlussprojekt zur Cloud-Migration einer SQL-Analyseplattform (Microsoft Azure). Prüfung im September 2026 bestanden – Zertifikat folgt in Kürze.",
    relatedProjectSlug: "cloud-strategie-sql-analyseplattform",
  },
  {
    id: "ki-anwendungsspezialist-ihk",
    title: "KI Anwendungsspezialist (IHK)",
    issuer: "Syntax Institut, IHK-geprüft",
    organization: "Syntax GmbH für Aus- und Weiterbildung, Berlin",
    accreditations: ["AZAV-zertifiziert", "CERTQUA", "IHK-geprüft"],
    category: "KI",
    date: "20.02.2026",
    duration: "600 UE · 17.11.2025 – 20.02.2026 (Remote Learning)",
    competencies: [
      "Professionelle Anwendung & Bewertung multimodaler KI-Systeme",
      "Datenanalyse, Deep Research & strategische Informationsvalidierung",
      "KI-Projektplanung, Nutzerforschung & Workflow-Automatisierung",
      "Datenschutz, KI-Compliance & rechtliche Rahmenbedingungen (inkl. EU AI Act)",
      "Entwicklung und Steuerung agentischer KI- und Agenten-Systeme",
      "Fortgeschrittenes Prompting für Text, Bild, Daten & Frontend-Entwicklung",
    ],
    description:
      "Übergreifendes Kurszertifikat für die Qualifizierung „KI & digitale Prozessoptimierung\" (Module: KI Grundlagen, Professionell mit KI im Job arbeiten, Prozessautomatisierung mit Prompting & Agenten). Zertifizierte Qualifikation im praktischen Einsatz von KI-Anwendungen in Unternehmen.",
  },
  {
    id: "generative-ai-llms",
    title: "Generative AI & LLMs",
    issuer: "Syntax Institut, IHK-geprüft",
    organization: "Syntax GmbH für Aus- und Weiterbildung, Berlin",
    accreditations: ["AZAV-zertifiziert", "CERTQUA", "IHK-geprüft"],
    category: "KI",
    date: "05.12.2025",
    duration: "150 UE · 17.11.2025 – 05.12.2025",
    competencies: [
      "KI Evaluierung & Delegation",
      "Multimodale KI professionell nutzen",
      "EU AI Act & Datenschutz",
      "KI Projektplanung & Nutzerforschung",
      "Generative KI in der Projektarbeit",
      "KI Compliance",
    ],
    description:
      "Praktischer Umgang mit generativen KI-Werkzeugen (u.a. ChatGPT, Claude, Gemini) in eigenständigen und Team-Projekten, mit Fokus auf rechtssicheren und verantwortungsvollen Einsatz.",
  },
  {
    id: "prozessautomatisierung-prompting-agenten",
    title: "Prozessautomatisierung mit Prompting & Agenten",
    issuer: "Syntax Institut, IHK-geprüft",
    organization: "Syntax GmbH für Aus- und Weiterbildung, Berlin",
    accreditations: ["AZAV-zertifiziert", "CERTQUA", "IHK-geprüft"],
    category: "Prozessautomatisierung",
    date: "20.02.2026",
    duration: "250 UE · 17.01.2026 – 20.02.2026",
    competencies: [
      "Ethische und rechtliche Rahmenbedingungen der KI-Nutzung",
      "Strategische Informationsgewinnung und -validierung",
      "Professionelles Prompting für Text, Bild & Frontend-Entwicklung",
      "Datenschutz & Compliance für agentische KI",
      "Automatisierung und Optimierung von Geschäftsprozessen mit KI-Tools",
      "Konzeption und Steuerung autonomer KI-Agenten-Systeme",
    ],
    description:
      "Entwicklung komplexer LLM-Kontexte mittels RAG, End-to-End-KI-Workflows zur Prozessautomatisierung sowie Konzeption und Steuerung autonomer Multi-Agenten-Systeme.",
  },
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((certificate) => certificate.id === id);
}
