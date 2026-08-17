import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Über mich" title="Kurzprofil" />
      <Reveal delay={0.1} className="grid gap-8 md:grid-cols-3">
        <p className="text-muted-foreground md:col-span-2">{profile.bio}</p>
        <div className="flex flex-wrap content-start gap-2">
          {profile.focusAreas.map((area) => (
            <Badge key={area} variant="outline">
              {area}
            </Badge>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
