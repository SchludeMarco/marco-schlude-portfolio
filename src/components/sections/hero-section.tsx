import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="border-b border-border/60">
      <StaggerGroup
        mode="mount"
        className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 md:py-28"
      >
        <StaggerItem>
          <AvailabilityBadge availability={profile.availability} />
        </StaggerItem>

        <StaggerItem>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            {profile.name}
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="text-lg text-muted-foreground">{profile.title}</p>
        </StaggerItem>

        <StaggerItem>
          <p className="max-w-xl text-balance text-muted-foreground">
            {profile.tagline}
          </p>
        </StaggerItem>

        <StaggerItem className="mt-2 flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href="/#projects" />}>
            Projekte ansehen
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={profile.resumeUrl} />}
          >
            <Download className="size-4" />
            Lebenslauf
          </Button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
