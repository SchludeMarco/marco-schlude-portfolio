import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { formatPeriod } from "@/lib/format";
import { experiences, getExperienceById } from "@/data/experience";

export function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

export async function generateMetadata(
  props: PageProps<"/experience/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const experience = getExperienceById(id);

  if (!experience) {
    return {};
  }

  return {
    title: `${experience.role} · ${experience.company}`,
    description: experience.summary,
    alternates: { canonical: `/experience/${experience.id}` },
  };
}

export default async function ExperienceDetailPage(
  props: PageProps<"/experience/[id]">
) {
  const { id } = await props.params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="flex-1">
      <Section className="pt-16">
        <Link
          href="/#experience"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Zurück zur Erfahrung
        </Link>

        <p className="text-sm text-muted-foreground">
          {formatPeriod(experience.period)}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          {experience.role}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {experience.company}
          {experience.location ? ` · ${experience.location}` : ""}
        </p>

        <p className="mt-8 max-w-2xl">{experience.summary}</p>

        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Diese Detailseite bietet einen vertieften Einblick in diese Station
          und stellt insbesondere meine Aufgaben, meinen technischen Beitrag
          und die eingesetzten Technologien heraus. Zusätzliche Inhalte wie
          konkrete Projektergebnisse, Kennzahlen, Screenshots und technische
          Details können zukünftig ergänzt werden.
        </p>

        <div className="mt-8">
          <h2 className="text-sm font-medium text-muted-foreground">
            Aufgaben
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {experience.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        {experience.technologies && (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-muted-foreground">
              Technologien
            </h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Section>
    </main>
  );
}
