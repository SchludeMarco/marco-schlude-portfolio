import { Mail, MapPin } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Kontakt"
        title="Lass uns sprechen"
        description="Offen für neue Projekte und Festanstellungen im ERP- und KI-Umfeld."
      />

      <Reveal delay={0.1} className="flex flex-col gap-4">
        <AvailabilityBadge availability={profile.availability} />

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            {profile.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button nativeButton={false} render={<a href={`mailto:${profile.contact.email}`} />}>
            <Mail className="size-4" />
            {profile.contact.email}
          </Button>
          {profile.contact.linkedin && (
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={profile.contact.linkedin} target="_blank" rel="noreferrer" />}
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Button>
          )}
          {profile.contact.github && (
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={profile.contact.github} target="_blank" rel="noreferrer" />}
            >
              <GithubIcon className="size-4" />
              GitHub
            </Button>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
