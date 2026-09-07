export type SkillCategory =
  | "ERP"
  | "Datenbanken"
  | "Backend"
  | "Frontend"
  | "KI"
  | "Cloud"
  | "DevOps";

export type SkillLevel =
  | "Grundkenntnisse"
  | "Fortgeschritten"
  | "Erfahren"
  | "Experte";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  /** Balken-/Punktedarstellung, 1-5 */
  levelScore: number;
  experienceYears: number;
  description: string;
}
