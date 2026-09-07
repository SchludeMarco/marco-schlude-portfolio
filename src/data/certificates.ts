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
    category: "KI",
    description:
      "Vertiefung zu generativer KI und Large Language Models sowie deren praktischem Einsatz.",
  },
  {
    id: "prozessautomatisierung-prompting-agenten",
    title: "Prozessautomatisierung mit Prompting & Agenten",
    issuer: "Syntax Institut",
    category: "Prozessautomatisierung",
    description:
      "Automatisierung von Geschäftsprozessen mittels Prompt-Engineering und KI-Agenten.",
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
    description:
      "IHK-Prüfung zum Cloud Business Expert im September 2026 erfolgreich bestanden – das Zertifikat wird in Kürze nachgereicht. Kompetenzen in Cloud-Strategie, -Beratung und -Geschäftsmodellen, nachgewiesen im Abschlussprojekt zur Cloud-Migration einer SQL-Analyseplattform.",
    relatedProjectSlug: "cloud-strategie-sql-analyseplattform",
  },
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((certificate) => certificate.id === id);
}
