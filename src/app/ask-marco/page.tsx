import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AiDisclosureNote } from "@/components/shared/ai-disclosure-note";
import { AskMarcoClient } from "./ask-marco-client";

export const metadata: Metadata = {
  title: "Ask Marco",
  description: "Stell Marco eine Frage zu seinem Werdegang, seinen Skills und Projekten.",
  alternates: { canonical: "/ask-marco" },
};

export default function AskMarcoPage() {
  return (
    <main className="flex-1">
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Ask Marco"
          title="Frag mich etwas"
          description="Ein einfacher Assistent, der Fragen zu meinem Werdegang aus statischen Daten beantwortet. Eine Anbindung an ein echtes Sprachmodell folgt."
        />
        <AiDisclosureNote />
        <AskMarcoClient />
      </Section>
    </main>
  );
}
