import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "ki-anwendungsspezialist-ihk",
    title: "KI Anwendungsspezialist (IHK)",
    issuer: "IHK",
    category: "KI",
    description:
      "Zertifizierte Qualifikation im praktischen Einsatz von KI-Anwendungen in Unternehmen.",
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
    issuer: "Syntax Institut",
    organization: "Syntax GmbH für Aus- und Weiterbildung, Berlin",
    accreditations: ["AZAV-zertifiziert", "CERTQUA", "IHK-geprüft"],
    category: "Prozessautomatisierung",
    description:
      "Modul im Rahmen der Qualifizierung „KI & digitale Prozessoptimierung\" bei Syntax Institut. Automatisierung von Geschäftsprozessen mittels Prompt-Engineering und KI-Agenten.",
  },
  {
    id: "devops-administration",
    title: "DevOps & Administration",
    issuer: "Syntax Institut",
    organization: "Syntax GmbH für Aus- und Weiterbildung, Berlin",
    accreditations: ["AZAV-zertifiziert", "CERTQUA", "IHK-geprüft"],
    category: "DevOps",
    description:
      "Modul im Rahmen der Qualifizierung „KI & digitale Prozessoptimierung\" bei Syntax Institut. Grundlagen und Praxis von DevOps-Methoden, Systemadministration und Deployment.",
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
