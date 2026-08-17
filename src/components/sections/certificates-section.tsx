import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CertificateCard } from "@/components/shared/certificate-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { certificates } from "@/data/certificates";

export function CertificatesSection() {
  return (
    <Section id="certificates" className="border-t border-border/60">
      <SectionHeading eyebrow="Zertifikate" title="Qualifikationen" />
      <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate) => (
          <StaggerItem key={certificate.id}>
            <CertificateCard certificate={certificate} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
