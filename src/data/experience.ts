import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "scherzinger-pumpen",
    company: "Scherzinger Pumpen GmbH & Co. KG",
    role: "Softwareentwickler",
    period: {
      start: "2022-12",
      end: "2024-12",
    },
    summary:
      "Entwicklung und Anpassung von APplus ERP Dashboards sowie SQL Server Optimierungen sowie Unterstützung der Fachbereiche Einkauf, Vertrieb, Produktion, Lager und Versand.",
    tasks: [
      "Entwicklung und Anpassung von APplus ERP Dashboards",
      "SQL Server Optimierungen",
      "Unterstützung von Einkauf, Vertrieb, Produktion, Lager und Versand",
      "Entwicklung einer Barcode-Anwendung in C# WPF",
    ],
    technologies: ["APplus ERP", "SQL Server", "C#", "WPF"],
  },
  {
    id: "sanetta-gebrueder-ammann",
    company: "Sanetta Gebrüder Ammann GmbH & Co. KG",
    role: "Softwareentwickler",
    period: {
      start: "2018-01",
      end: "2022-12",
    },
    summary:
      "RPG- und IBM i / AS400-Entwicklung mit Fokus auf ERP-Anpassungen, Migration von Fixed auf Free RPG sowie Entwicklung und Einführung einer Schnittstelle zwischen Protex ERP und ASAP LVS zur automatisierten Datenintegration zwischen ERP und Lagerverwaltungssystem.",
    tasks: [
      "RPG Entwicklung",
      "IBM i / AS400 Entwicklung",
      "ERP-Anpassungen",
      "Migration von Fixed RPG auf Free RPG",
      "Entwicklung und Einführung einer Schnittstelle zwischen Protex ERP und ASAP LVS zur automatisierten Datenintegration zwischen ERP und Lagerverwaltungssystem (ca. 1,5 Jahre)",
    ],
    technologies: ["IBM i", "AS400", "RPG", "Free RPG", "Protex ERP", "ASAP LVS", "SQL"],
  },
];
