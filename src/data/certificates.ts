import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
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
      "Übergreifendes Kurszertifikat für die Qualifizierung „KI & digitale Prozessoptimierung\", bestehend aus drei Modulen: „KI Grundlagen: GenAI & LLMs\" (150 UE), „Professionell mit KI im Job arbeiten\" (200 UE) und „Prozessautomatisierung mit Prompting & Agenten\" (250 UE). Zertifizierte Qualifikation im praktischen Einsatz von KI-Anwendungen in Unternehmen.",
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
      "Modul „KI Grundlagen: GenAI & LLMs\" im Rahmen der Qualifizierung „KI & digitale Prozessoptimierung\". Praktischer Umgang mit generativen KI-Werkzeugen (u.a. Gemini Pro, ChatGPT, Claude, DeepSeek, Copilot, Adobe Firefly, Google Veo) in eigenständigen und Team-Projekten, mit Fokus auf rechtssicheren und verantwortungsvollen Einsatz.",
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
      "Modul „Prozessautomatisierung mit Prompting & Agenten\" im Rahmen der Qualifizierung „KI & digitale Prozessoptimierung\". Entwicklung und Feinabstimmung komplexer LLM-Kontexte mittels RAG, Umsetzung von End-to-End-KI-Workflows zur Prozessautomatisierung sowie Konzeption und Steuerung autonomer Multi-Agenten-Systeme für anspruchsvolle Aufgaben.",
  },
  {
    id: "devops-administration",
    title: "DevOps & Administration",
    issuer: "Syntax Institut",
    category: "DevOps",
    description:
      "Grundlagen und Praxis von DevOps-Methoden, Systemadministration und Deployment.",
  },
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
      "IHK-Prüfung zum Cloud Business Expert im September 2026 erfolgreich bestanden – das Zertifikat wird in Kürze nachgereicht. Kompetenzen in Cloud-Strategie, -Beratung und -Geschäftsmodellen, nachgewiesen im Abschlussprojekt zur Cloud-Migration einer SQL-Analyseplattform.",
    relatedProjectSlug: "cloud-strategie-sql-analyseplattform",
  },
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((certificate) => certificate.id === id);
}
