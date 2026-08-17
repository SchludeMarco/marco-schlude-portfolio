import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExperienceTimeline } from "@/components/shared/experience-timeline";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <SectionHeading eyebrow="Werdegang" title="Berufserfahrung" />
      <ExperienceTimeline experiences={experiences} />
    </Section>
  );
}
