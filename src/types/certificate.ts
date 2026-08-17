export type CertificateCategory =
  | "KI"
  | "Prozessautomatisierung"
  | "DevOps"
  | "ERP";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  date?: string;
  description?: string;
}
