import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Projekte"
        title="Ausgewählte Projekte"
        description="Von der ERP-Schnittstellenentwicklung im Produktivbetrieb bis zum eigenen KI-Tool."
      />
      <StaggerGroup className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
