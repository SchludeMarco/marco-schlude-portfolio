import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { legalContact } from "@/data/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="flex-1">
      <Section className="pt-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Impressum
        </h1>

        <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              {legalContact.name}
              <br />
              {legalContact.street}
              <br />
              {legalContact.postalCode} {legalContact.city}
              <br />
              {legalContact.country}
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              Kontakt
            </h2>
            <p>
              Telefon: {legalContact.phone}
              <br />
              E-Mail: {legalContact.email}
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              {legalContact.name}, Anschrift wie oben.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              Hinweis zu dieser Website
            </h2>
            <p>
              Diese Website dient als privates Bewerbungsportfolio und wird
              nicht gewerblich betrieben. Es findet keine Vermittlung von
              Waren oder Dienstleistungen an Dritte statt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle bin ich nicht verpflichtet und
              nicht bereit.
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
