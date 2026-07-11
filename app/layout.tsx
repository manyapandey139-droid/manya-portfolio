import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://manyapandey.dev";
const title = "Manya Pandey — Software Developer & AI Builder";
const description =
  "Manya Pandey is a software developer building in public — AI projects, cybersecurity learning, and technical writing, documented as it happens.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Manya Pandey",
    "Software Developer",
    "AI Builder",
    "Cybersecurity",
    "Technical Writer",
    "Portfolio",
  ],
  authors: [{ name: "Manya Pandey", url: siteUrl }],
  creator: "Manya Pandey",
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
    siteName: "Manya Pandey",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manya Pandey — Software Developer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-primary font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LoadingScreen />
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>
          <main id="main-content">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
