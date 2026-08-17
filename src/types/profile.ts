export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export type AvailabilityStatus =
  | "verfuegbar"
  | "auf-anfrage"
  | "nicht-verfuegbar";

export interface Availability {
  status: AvailabilityStatus;
  label: string;
  note?: string;
  earliestStart?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  shortBio: string;
  focusAreas: string[];
  location: string;
  contact: ContactInfo;
  availability: Availability;
  resumeUrl?: string;
}
