import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { certificates, getCertificateById } from "@/data/certificates";
import { getProjectBySlug } from "@/data/projects";

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

  const relatedProject = certificate.relatedProjectSlug
    ? getProjectBySlug(certificate.relatedProjectSlug)
    : undefined;

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

        {certificate.organization && (
          <p className="mt-1 text-sm text-muted-foreground">
            {certificate.organization}
          </p>
        )}

        {certificate.accreditations && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {certificate.accreditations.map((accreditation) => (
              <Badge key={accreditation} variant="secondary">
                {accreditation}
              </Badge>
            ))}
          </div>
        )}

        {certificate.description && (
          <p className="mt-8 max-w-2xl">{certificate.description}</p>
        )}

        {certificate.duration && (
          <p className="mt-6 text-sm">
            <span className="text-muted-foreground">Umfang: </span>
            {certificate.duration}
          </p>
        )}

        {certificate.competencies && (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-muted-foreground">
              Erlernte Kompetenzen
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {certificate.competencies.map((competency) => (
                <li key={competency}>{competency}</li>
              ))}
            </ul>
          </div>
        )}

        {relatedProject && (
          <div className="mt-8 max-w-2xl rounded-lg border border-border/60 bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              Zugehöriges Projekt
            </p>
            <Link
              href={`/projects/${relatedProject.slug}`}
              className="mt-1 inline-flex items-center gap-1.5 font-medium hover:underline"
            >
              {relatedProject.title}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )}
      </Section>
    </main>
  );
}
