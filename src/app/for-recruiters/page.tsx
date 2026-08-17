import type { Metadata } from "next";
import { Download, Mail } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { CertificateCard } from "@/components/shared/certificate-card";
import { SkillsTabs } from "@/components/shared/skills-tabs";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Für Recruiter",
  description: `Executive Summary, Skillübersicht und Kontaktmöglichkeiten für ${profile.name}.`,
  alternates: { canonical: "/for-recruiters" },
};

export default function ForRecruitersPage() {
  return (
    <main className="flex-1">
      <Section className="border-b border-border/60 pt-16">
        <AvailabilityBadge availability={profile.availability} />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          Executive Summary
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{profile.bio}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {profile.resumeUrl && (
            <Button nativeButton={false} render={<a href={profile.resumeUrl} />}>
              <Download className="size-4" />
              Lebenslauf herunterladen
            </Button>
          )}
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={`mailto:${profile.contact.email}`} />}
          >
            <Mail className="size-4" />
            {profile.contact.email}
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Skills" title="Skillübersicht" />
        <SkillsTabs />
      </Section>

      <Section className="border-t border-border/60">
        <SectionHeading eyebrow="Qualifikationen" title="Zertifikate" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border/60">
        <SectionHeading eyebrow="Verfügbarkeit" title="Wann geht es los?" />
        <div className="flex flex-col gap-3">
          <AvailabilityBadge availability={profile.availability} />
          {profile.availability.note && (
            <p className="text-muted-foreground">{profile.availability.note}</p>
          )}
        </div>
      </Section>
    </main>
  );
}
