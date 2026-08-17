import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-config";

export function StructuredData() {
  const sameAs = [profile.contact.linkedin, profile.contact.github].filter(
    (url): url is string => Boolean(url)
  );

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.shortBio,
    url: siteUrl,
    email: profile.contact.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    sameAs,
    knowsAbout: profile.focusAreas,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} – Portfolio`,
    url: siteUrl,
    inLanguage: "de-DE",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
