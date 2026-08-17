import type { Skill } from "@/types";

export const skills: Skill[] = [
  // ERP
  {
    id: "ibm-i-as400",
    name: "IBM i / AS400",
    category: "ERP",
    level: "Experte",
    levelScore: 5,
    experienceYears: 6,
    description:
      "Langjährige Entwicklungserfahrung auf der IBM i / AS400 Plattform im ERP-Umfeld.",
  },
  {
    id: "applus-erp",
    name: "APplus ERP",
    category: "ERP",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 2,
    description:
      "Entwicklung und Anpassung von Dashboards sowie Prozessunterstützung in APplus.",
  },
  {
    id: "protex-erp",
    name: "Protex ERP",
    category: "ERP",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 4,
    description:
      "Anpassung und Schnittstellenentwicklung im Protex ERP System.",
  },

  // Datenbanken
  {
    id: "sql",
    name: "SQL",
    category: "Datenbanken",
    level: "Experte",
    levelScore: 5,
    experienceYears: 6,
    description:
      "Abfragen, Optimierung und Datenmodellierung in relationalen Datenbanken.",
  },
  {
    id: "sql-server",
    name: "SQL Server",
    category: "Datenbanken",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 2,
    description: "Performance-Optimierung und Wartung von SQL Server Datenbanken.",
  },
  {
    id: "db2-for-i",
    name: "DB2 for i",
    category: "Datenbanken",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 4,
    description: "Datenbankentwicklung im IBM i / AS400 Umfeld.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Datenbanken",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description:
      "Relationale Datenmodellierung mit Prisma ORM, u.a. bei WebSurface (Neon Postgres).",
  },

  // Backend
  {
    id: "rpg-free-rpg",
    name: "RPG / Free RPG",
    category: "Backend",
    level: "Experte",
    levelScore: 5,
    experienceYears: 6,
    description:
      "Entwicklung und Migration von Fixed RPG zu modernem Free RPG.",
  },
  {
    id: "csharp",
    name: "C#",
    category: "Backend",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 2,
    description: "Entwicklung von Business-Anwendungen und Barcode-Lösungen.",
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 2,
    description: "Entwicklung von KI-Anwendungen und Automatisierungsskripten.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Aufbau performanter APIs für KI-gestützte Anwendungen.",
  },

  // Frontend
  {
    id: "wpf",
    name: "C# WPF",
    category: "Frontend",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 2,
    description: "Entwicklung von Desktop-Anwendungen, u.a. einer Barcode-Anwendung.",
  },
  {
    id: "js-html-css",
    name: "JavaScript, HTML & CSS",
    category: "Frontend",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Umsetzung von Web-Oberflächen für KI-Anwendungen wie QuerySage AI.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Typisierte Frontend- und Backend-Entwicklung, u.a. mit Next.js und NestJS.",
  },
  {
    id: "react-nextjs",
    name: "React & Next.js",
    category: "Frontend",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description:
      "Fullstack-Webanwendungen mit dem Next.js App Router, u.a. WebSurface und das eigene Portfolio.",
  },
  {
    id: "tailwind-shadcn",
    name: "Tailwind CSS & shadcn/ui",
    category: "Frontend",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Umsetzung konsistenter, responsiver UI-Design-Systeme.",
  },

  // KI
  {
    id: "prompting-agenten",
    name: "Prompting & KI-Agenten",
    category: "KI",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 1,
    description: "Prozessautomatisierung mittels Prompt-Engineering und KI-Agenten.",
  },
  {
    id: "ollama-llms",
    name: "Ollama & lokale LLMs",
    category: "KI",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 1,
    description: "Betrieb und Integration lokaler Sprachmodelle wie Llama 3.1.",
  },
  {
    id: "generative-ai",
    name: "Generative AI / LLMs",
    category: "KI",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Konzeption KI-gestützter Anwendungen auf Basis generativer Modelle.",
  },

  // DevOps
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Containerisierung von Anwendungen für Entwicklung und Deployment.",
  },
  {
    id: "fly-io",
    name: "Fly.io Deployment",
    category: "DevOps",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Deployment und Betrieb von Anwendungen auf Fly.io.",
  },
  {
    id: "git",
    name: "Git",
    category: "DevOps",
    level: "Erfahren",
    levelScore: 4,
    experienceYears: 3,
    description: "Versionsverwaltung und kollaborative Entwicklung.",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "DevOps",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "CI/CD-Pipelines für automatisierte Tests und Deployments.",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "DevOps",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description: "Deployment und Hosting von Next.js-Anwendungen mit Preview-Deployments.",
  },
  {
    id: "aws-cloud",
    name: "AWS Cloud (IAM, EC2, S3, VPC, CDK)",
    category: "DevOps",
    level: "Fortgeschritten",
    levelScore: 3,
    experienceYears: 1,
    description:
      "Cloud Practitioner Zertifizierung; Infrastructure-as-Code mit AWS CDK für WebSurface.",
  },
];

export function getSkillsByCategory() {
  return skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] ?? []), skill];
    return acc;
  }, {});
}
