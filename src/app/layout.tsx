import type { Metadata } from "next";
import { inter, spaceGrotesk } from "./fonts";
import { personalInfo } from "@/lib/constants";
import Providers from "./providers";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://manan-bhutada.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manan Bhutada | Engineer, Researcher & Builder",
    template: "%s | Manan Bhutada",
  },
  description:
    "Manan Bhutada — an engineer, researcher and builder exploring projects, competitions, research, technology and a personal library through an interactive 3D universe.",
  keywords: [
    "portfolio",
    "developer",
    "web development",
    "React",
    "Next.js",
    "Three.js",
    "TypeScript",
    "creative developer",
  ],
  authors: [{ name: "Manan Bhutada", url: SITE_URL }],
  creator: "Manan Bhutada",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manan Bhutada | Engineer, Researcher & Builder",
    description:
      "An interactive 3D portfolio universe for Manan Bhutada.",
    type: "website",
    locale: "en_US",
    siteName: "Manan Bhutada",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Bhutada | Engineer, Researcher & Builder",
    description:
      "An interactive 3D portfolio universe for Manan Bhutada."
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    google: "notranslate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: personalInfo.name,
      url: SITE_URL,
      jobTitle: personalInfo.title,
      email: personalInfo.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: personalInfo.location,
      },
      sameAs: personalInfo.socials
        .filter((s) => !s.url.startsWith("mailto:"))
        .map((s) => s.url),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${personalInfo.name} — Portfolio`,
      description: personalInfo.subtitle,
      author: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="theme-color" content="#8154ff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#hero" className="skip-to-main">Skip to main content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
