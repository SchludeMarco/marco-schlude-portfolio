import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Marco Schlude",
  title: "Backend & Data Engineer",
  tagline: "ERP-Tiefe trifft auf modernen Fullstack- und Cloud-Stack.",
  shortBio:
    "Backend- und Data-Engineering-Erfahrung mit Schwerpunkt auf SQL, ERP-Systemen (IBM i / AS400, RPG) – erweitert um moderne Fullstack- und KI-Anwendungen mit Next.js, TypeScript, FastAPI und Cloud-Deployment.",
  bio:
    "Ich entwickle seit mehreren Jahren Softwarelösungen im ERP-Umfeld – von RPG-Anwendungen auf IBM i / AS400 über SQL Server Optimierungen bis hin zu Schnittstellen zwischen ERP- und Lagerverwaltungssystemen. In den letzten Monaten habe ich diesen Erfahrungsschatz gezielt um einen modernen Fullstack- und Cloud-Stack erweitert: eigene Produkte mit Next.js, React, TypeScript und FastAPI gebaut, containerisiert mit Docker und über GitHub Actions auf Vercel und Fly.io deployt, dazu PostgreSQL-Datenmodelle entworfen und KI-gestützte Anwendungen von der Idee bis zum produktiven Deployment umgesetzt. Mein Ziel ist es, klassische Business-Systeme und moderne Web-/KI-Technologien sinnvoll zu verbinden, um Prozesse zu automatisieren und Teams produktiver zu machen.",
  focusAreas: [
    "IBM i / AS400",
    "RPG",
    "SQL",
    "ERP-Systeme",
    "Next.js & TypeScript",
    "Python & FastAPI",
    "Docker & CI/CD",
    "Cloud (AWS, Vercel)",
    "KI-Anwendungen",
    "Fullstack-Entwicklung",
  ],
  location: "Deutschland",
  contact: {
    email: "marco.schlude@gmail.com",
    location: "Deutschland",
    linkedin: "https://www.linkedin.com/in/marco-schlude-44670a226",
    github: "https://github.com/SchludeMarco",
  },
  availability: {
    status: "auf-anfrage",
    label: "Auf Anfrage verfügbar",
    note: "Offen für neue Projekte und Festanstellungen im ERP- und KI-Umfeld.",
  },
  resumeUrl: "/marco-schlude-lebenslauf.pdf",
};
