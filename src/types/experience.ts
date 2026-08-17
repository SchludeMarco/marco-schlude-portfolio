export interface ExperiencePeriod {
  /** Format "YYYY-MM" */
  start: string;
  /** Format "YYYY-MM" oder "present" */
  end: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: ExperiencePeriod;
  summary: string;
  tasks: string[];
  technologies?: string[];
}
