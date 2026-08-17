import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} – ${profile.title}`,
    template: `%s – ${profile.name}`,
  },
  description: profile.shortBio,
  keywords: [
    ...profile.focusAreas,
    "Portfolio",
    "Lebenslauf",
    "Softwareentwickler",
    "Bewerbung",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: `${profile.name} – Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
