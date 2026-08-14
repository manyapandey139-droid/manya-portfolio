import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { profile, siteUrl } from "@/lib/data";

/* Editorial serif for headings, Inter for everything else.
   Both are variable fonts, so this is two font files total. */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${profile.name} — Website Developer, LinkedIn Ghostwriter & Social Media Manager`;
const description =
  "Manya Pandey builds modern, responsive websites and helps brands and professionals grow online through LinkedIn ghostwriting and social media management.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Manya Pandey",
    "Website Developer",
    "LinkedIn Ghostwriter",
    "Social Media Manager",
    "Freelance Web Developer",
    "Personal Brand",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF8FB",
  colorScheme: "light",
};

/** Structured data — only facts that exist in lib/data.ts. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: [...profile.roles],
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-background font-body text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Smooth scrolling is handled natively in globals.css
            (scroll-behavior + scroll-padding-top), so no JS scroll library. */}
        <main id="main-content">{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
