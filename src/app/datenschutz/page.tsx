import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { legalContact } from "@/data/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß Art. 13 DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="flex-1">
      <Section className="pt-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) ist:
              <br />
              {legalContact.name}
              <br />
              {legalContact.street}
              <br />
              {legalContact.postalCode} {legalContact.city}
              <br />
              {legalContact.country}
              <br />
              E-Mail: {legalContact.email}
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              2. Ihre Rechte als betroffene Person
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung oder Einschränkung der Verarbeitung Ihrer
              gespeicherten personenbezogenen Daten, ein Recht auf
              Datenübertragbarkeit sowie ein Widerspruchsrecht gegen
              bestimmte Verarbeitungen. Zudem steht Ihnen ein
              Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
              Kontaktieren Sie mich hierzu unter der oben genannten
              E-Mail-Adresse.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133,
              Walnut, CA 91789, USA) gehostet. Dabei können personenbezogene
              Daten (insbesondere Server-Logfiles, siehe Punkt 4) auf
              Servern von Vercel und ggf. außerhalb der EU verarbeitet
              werden. Die Verarbeitung erfolgt auf Grundlage eines
              Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO sowie
              geeigneter Garantien für Drittlandtransfers (z.B.
              EU-Standardvertragsklauseln). Rechtsgrundlage ist mein
              berechtigtes Interesse an einer zuverlässigen, sicheren
              Bereitstellung dieser Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              4. Server-Logfiles
            </h2>
            <p>
              Beim Aufruf dieser Website erfasst der Hosting-Provider
              automatisch Informationen in sogenannten Server-Logfiles, die
              Ihr Browser automatisch übermittelt. Dazu gehören
              IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und
              -version, verwendetes Betriebssystem sowie die aufgerufene
              Seite. Diese Daten dienen ausschließlich der Gewährleistung
              eines störungsfreien Betriebs und der Systemsicherheit
              (Art. 6 Abs. 1 lit. f DSGVO) und werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              5. Kontaktaufnahme
            </h2>
            <p>
              Kontaktmöglichkeiten auf dieser Website (z.B. der
              „E-Mail schreiben“-Button) öffnen lediglich Ihr eigenes
              E-Mail-Programm über einen mailto-Link. Es findet keine
              serverseitige Übertragung oder Speicherung Ihrer Daten durch
              diese Website statt – die Verarbeitung erfolgt ausschließlich
              in Ihrem und meinem E-Mail-Postfach auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO (vorvertragliche Anfrage) bzw. lit. f
              DSGVO (Kommunikation im berechtigten Interesse).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              6. „Ask Marco“-Funktion
            </h2>
            <p>
              Die Funktion „Ask Marco“ beantwortet Ihre Eingaben aktuell
              ausschließlich clientseitig, also direkt in Ihrem Browser,
              auf Basis vordefinierter Daten. Ihre Eingaben werden nicht an
              einen Server übertragen, nicht gespeichert und nicht an
              Dritte weitergegeben. Sollte diese Funktion künftig um ein
              echtes Sprachmodell (z.B. per API eines Drittanbieters)
              erweitert werden, wird diese Datenschutzerklärung vor
              Inbetriebnahme entsprechend aktualisiert und die Verarbeitung
              gemäß Art. 50 EU AI Act transparent gekennzeichnet.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              7. Cookies und lokale Speicherung
            </h2>
            <p>
              Diese Website verwendet keine Cookies und keine
              Analyse- oder Tracking-Tools. Ihre Einstellung für den
              Dark-/Light-Mode wird technisch notwendig im lokalen
              Speicher (localStorage) Ihres Browsers abgelegt, um Ihre
              Auswahl bei erneutem Besuch beizubehalten. Diese Information
              verlässt Ihr Gerät nicht.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-foreground">
              8. Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung wird bei Änderungen an dieser
              Website oder an rechtlichen Vorgaben entsprechend angepasst.
            </p>
          </section>

          <p className="text-xs">Stand: August 2026</p>
        </div>
      </Section>
    </main>
  );
}
