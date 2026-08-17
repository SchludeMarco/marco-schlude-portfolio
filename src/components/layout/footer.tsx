import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { profile } from "@/data/profile";
import { mainNavItems, legalNavItems } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {mainNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="E-Mail schreiben"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
          {profile.contact.linkedin && (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profil"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedinIcon className="size-4" />
            </a>
          )}
          {profile.contact.github && (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profil"
              className="text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-border/60 py-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-4">
            {legalNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
