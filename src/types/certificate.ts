export type CertificateCategory =
  | "KI"
  | "Prozessautomatisierung"
  | "ERP"
  | "Cloud";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  /** Vollständiger Name und Sitz der ausstellenden Organisation */
  organization?: string;
  /** Akkreditierungen/Siegel der ausstellenden Organisation, z.B. "AZAV-zertifiziert" */
  accreditations?: string[];
  category: CertificateCategory;
  date?: string;
  /** Umfang/Zeitraum, z.B. "150 UE · 17.11.2025 – 05.12.2025" */
  duration?: string;
  /** Erlernte Kompetenzen laut Zertifikat/Modulbescheinigung */
  competencies?: string[];
  description?: string;
  /** Verweist auf das Projekt, das dem Zertifikat zugrunde liegt, z.B. ein IHK-Abschlussprojekt */
  relatedProjectSlug?: string;
}
