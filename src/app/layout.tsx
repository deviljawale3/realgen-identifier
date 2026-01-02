import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MarketingPopup } from "@/components/marketing-popup";
import Script from "next/script";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RealGen Identifier | Verify Content Authenticity with AI",
    template: "%s | RealGen Identifier"
  },
  description: "Detect AI-generated photos, videos, and documents instantly. RealGen Identifier provides high-accuracy origin checks with privacy-first forensic analysis.",
  keywords: [
    "AI detection tool",
    "is this AI generated",
    "detect deepfakes",
    "verify photo authenticity",
    "AI image checker",
    "RealGen Identifier",
    "free AI detector",
    "open source AI identifier"
  ],
  authors: [{ name: "RealGen Labs" }],
  creator: "RealGen Labs",
  metadataBase: new URL("https://realgen-identifier.com"), // Placeholder URL for canonicals
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon?realgen=1",
    shortcut: "/icon?realgen=1",
    apple: "/icon?realgen=1",
  },
  openGraph: {
    title: "RealGen Identifier | The Ultimate AI Content Detector",
    description: "Instantly identify if a file was made by a human or AI. Private, fast, and open-source.",
    url: "https://realgen-identifier.com",
    siteName: "RealGen Identifier",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RealGen Identifier Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RealGen Identifier | Verify Content Authenticity",
    description: "Detect AI-generated content in seconds. High-accuracy, privacy-focused, and open-source.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RealGen Labs",
    "url": "https://realgen-identifier.com",
    "logo": "https://realgen-identifier.com/icon?realgen=1",
    "sameAs": [
      "https://twitter.com/realgenlabs",
      "https://github.com/realgenlabs"
    ],
    "description": "The world's most advanced forensic suite for identifying AI-generated media."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${leagueSpartan.variable} antialiased bg-background text-foreground`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MarketingPopup />
        <Toaster />
      </body>
    </html>
  );
}
