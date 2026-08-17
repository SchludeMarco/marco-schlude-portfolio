import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}
