import type { AskMarcoEntry } from "@/types";

export const askMarcoEntries: AskMarcoEntry[] = [
  {
    id: "erp-erfahrung",
    question: "Welche Erfahrung hat Marco mit ERP-Systemen?",
    answer:
      "Marco hat mehrere Jahre Erfahrung mit ERP-Systemen wie Protex ERP und APplus ERP – von RPG-Entwicklung auf IBM i / AS400 über ERP-Anpassungen bis zur Entwicklung von Schnittstellen zwischen ERP- und Lagerverwaltungssystemen.",
    category: "ERP",
    keywords: ["erp", "applus", "protex", "as400", "ibm i"],
  },
  {
    id: "ki-erfahrung",
    question: "Welche KI-Kompetenzen bringt Marco mit?",
    answer:
      "Marco beschäftigt sich mit Prompt-Engineering, KI-Agenten, generativer KI und lokalen LLMs (z.B. via Ollama). Ein Beispiel ist QuerySage AI, ein selbst entwickelter KI-gestützter SQL Review Assistent.",
    category: "KI",
    keywords: ["ki", "ai", "llm", "prompting", "ollama", "querysage"],
  },
  {
    id: "programmiersprachen",
    question: "Welche Programmiersprachen beherrscht Marco?",
    answer:
      "Zu Marcos Kernsprachen zählen RPG (inkl. Free RPG), SQL, C# sowie Python. Ergänzend bringt er Grundlagen in JavaScript, HTML und CSS mit.",
    category: "Skills",
    keywords: ["rpg", "sql", "c#", "python", "javascript", "programmiersprachen"],
  },
  {
    id: "highlight-projekt",
    question: "Was war Marcos bisher größtes Projekt?",
    answer:
      "Die ERP-LVS Integration bei Sanetta Gebrüder Ammann: eine 18-monatige Implementierung einer Schnittstelle zwischen Protex ERP und dem Lagerverwaltungssystem ASAP LVS, mit Fokus auf Datenintegration, Fehlerbehandlung und Prozessautomatisierung im Produktivbetrieb.",
    category: "Projekte",
    keywords: ["projekt", "lvs", "erp-lvs", "integration", "highlight"],
  },
  {
    id: "verfuegbarkeit",
    question: "Ist Marco aktuell verfügbar?",
    answer:
      "Marco ist auf Anfrage verfügbar und offen für neue Projekte und Festanstellungen im ERP- und KI-Umfeld. Am besten direkt über die Kontaktseite oder per E-Mail melden.",
    category: "Verfügbarkeit",
    keywords: ["verfügbar", "verfuegbar", "start", "kontakt"],
  },
  {
    id: "zertifikate",
    question: "Welche Zertifikate hat Marco?",
    answer:
      "Unter anderem den IHK-Abschluss 'KI Anwendungsspezialist' sowie Qualifikationen in Generative AI & LLMs, Prozessautomatisierung mit Prompting & Agenten und DevOps & Administration.",
    category: "Zertifikate",
    keywords: ["zertifikat", "ihk", "qualifikation", "abschluss"],
  },
];

export function findAskMarcoAnswer(query: string): AskMarcoEntry | undefined {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return undefined;

  return askMarcoEntries.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword))
  );
}
