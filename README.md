# Marco Schlude – Portfolio

Interaktiver Entwickler-Lebenslauf und Bewerbungsportfolio, gebaut mit Next.js
(App Router), TypeScript, Tailwind CSS und shadcn/ui.

## Tech-Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (base-ui)
- Framer Motion
- Lucide Icons

## Entwicklung

```bash
npm install
npm run dev
```

Seite läuft dann unter [http://localhost:3000](http://localhost:3000).

Weitere Skripte:

```bash
npm run build   # Production-Build
npm run start   # Production-Server (nach build)
npm run lint    # ESLint
```

## Projektstruktur

```
src/
  app/            Routen (App Router): /, /for-recruiters, /ask-marco,
                   /projects/[slug], /impressum, /datenschutz
  components/
    layout/       Navbar, Footer, Theme-Toggle
    sections/     Startseiten-Abschnitte (Hero, Skills, Projekte, ...)
    shared/       Wiederverwendbare Cards, Section-Wrapper, etc.
    motion/       Framer-Motion-Wrapper (Reveal, Stagger)
    seo/          Strukturierte Daten (JSON-LD)
    ui/           shadcn/ui-Primitives
  data/           Alle Inhalte (Profil, Erfahrung, Projekte, Skills, ...)
  types/          TypeScript-Datenmodelle
  lib/            Utilities, Site-Konfiguration
```

Inhalte pflegen: Die Dateien in `src/data/` anpassen – die Seiten selbst
müssen dafür nicht verändert werden.

## Umgebungsvariablen

Siehe [`.env.example`](.env.example). Aktuell wird nur
`NEXT_PUBLIC_SITE_URL` verwendet (für Sitemap, robots.txt, Canonical-URLs
und Open-Graph-Metadaten).

## Offene Punkte vor dem Live-Gang

- **Lebenslauf-PDF fehlt:** `profile.resumeUrl` (`src/data/profile.ts`)
  zeigt auf `/resume/marco-schlude-lebenslauf.pdf` – diese Datei muss unter
  `public/resume/` abgelegt werden, sonst führt der „Lebenslauf“-Button ins
  Leere.
- **`NEXT_PUBLIC_SITE_URL`** in den Vercel-Projekteinstellungen auf die
  echte Produktions-Domain setzen (siehe unten).
- **Rechtstexte** (`/impressum`, `/datenschutz`) vor dem Live-Gang von
  einem Anwalt/einer Kanzlei gegenchecken lassen.

## Deployment (Vercel)

1. Repository zu GitHub (oder GitLab/Bitbucket) pushen.
2. Auf [vercel.com/new](https://vercel.com/new) das Repository importieren
   – Next.js wird automatisch erkannt, kein zusätzliches Setup nötig.
3. In den Projekteinstellungen unter **Environment Variables**
   `NEXT_PUBLIC_SITE_URL` auf die finale Domain setzen (z.B.
   `https://marco-schlude.de`).
4. Deploy auslösen. Bei jedem Push auf den Hauptbranch wird automatisch neu
   deployt.

Alternativ per CLI:

```bash
npm install -g vercel
vercel        # Preview-Deployment
vercel --prod # Production-Deployment
```
