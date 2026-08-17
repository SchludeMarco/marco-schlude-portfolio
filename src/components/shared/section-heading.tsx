import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-medium tracking-wide text-brand uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
