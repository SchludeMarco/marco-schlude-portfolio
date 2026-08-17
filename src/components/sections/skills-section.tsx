import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillsTabs } from "@/components/shared/skills-tabs";
import { Reveal } from "@/components/motion/reveal";

export function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Skills"
        title="ERP-Tiefe trifft KI-Kompetenz"
        description="Von IBM i / AS400 und RPG über SQL und ERP-Systeme bis zu modernen KI-Anwendungen und DevOps."
      />
      <Reveal delay={0.1}>
        <SkillsTabs />
      </Reveal>
    </Section>
  );
}
