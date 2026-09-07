export type CertificateCategory =
  | "KI"
  | "Prozessautomatisierung"
  | "DevOps"
  | "ERP"
  | "Cloud";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  date?: string;
  description?: string;
  /** Verweist auf das Projekt, das dem Zertifikat zugrunde liegt, z.B. ein IHK-Abschlussprojekt */
  relatedProjectSlug?: string;
}
