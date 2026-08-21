import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { certificates, getCertificateById } from "@/data/certificates";

export function generateStaticParams() {
  return certificates.map((certificate) => ({ id: certificate.id }));
}

export async function generateMetadata(
  props: PageProps<"/certificates/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const certificate = getCertificateById(id);

  if (!certificate) {
    return {};
  }

  return {
    title: certificate.title,
    description: certificate.description,
    alternates: { canonical: `/certificates/${certificate.id}` },
  };
}

export default async function CertificateDetailPage(
  props: PageProps<"/certificates/[id]">
) {
  const { id } = await props.params;
  const certificate = getCertificateById(id);

  if (!certificate) {
    notFound();
  }

  return (
    <main className="flex-1">
      <Section className="pt-16">
        <Link
          href="/#certificates"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Zurück zu den Zertifikaten
        </Link>

        <div className="flex items-center gap-2">
          <Award className="size-5 text-brand" />
          <Badge variant="outline">{certificate.category}</Badge>
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {certificate.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {certificate.issuer}
          {certificate.date ? ` · ${certificate.date}` : ""}
        </p>

        {certificate.description && (
          <p className="mt-8 max-w-2xl">{certificate.description}</p>
        )}
      </Section>
    </main>
  );
}
