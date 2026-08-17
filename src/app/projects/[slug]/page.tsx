import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1">
      <Section className="pt-16">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Zurück zu den Projekten
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          {project.featured && <Badge>Highlight</Badge>}
        </div>

        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          {project.shortDescription}
        </p>

        {project.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.url}
                variant="outline"
                nativeButton={false}
                render={<a href={link.url} target="_blank" rel="noreferrer" />}
              >
                {link.label}
                <ArrowUpRight className="size-4" />
              </Button>
            ))}
          </div>
        )}

        <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-4 text-sm sm:grid-cols-3">
          {project.duration && (
            <div>
              <dt className="text-muted-foreground">Dauer</dt>
              <dd className="mt-1">{project.duration}</dd>
            </div>
          )}
          {project.role && (
            <div>
              <dt className="text-muted-foreground">Rolle</dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
          )}
          <div>
            <dt className="text-muted-foreground">Kategorie</dt>
            <dd className="mt-1">{project.category}</dd>
          </div>
        </dl>

        <p className="mt-8 max-w-2xl">{project.description}</p>

        <div className="mt-8">
          <h2 className="text-sm font-medium text-muted-foreground">
            Technologien
          </h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {project.features && (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-muted-foreground">
              Features
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.focus && (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-muted-foreground">
              Fokus
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {project.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </main>
  );
}
