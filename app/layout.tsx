import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Legal WatchDog | AI Regulatory Monitoring Software",
    template: "%s | Legal WatchDog"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Legal WatchDog" }],
  creator: "Legal WatchDog",
  publisher: "Legal WatchDog",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Legal WatchDog | Regulatory Monitoring Software",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Legal WatchDog regulatory monitoring dashboard" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal WatchDog | Regulatory Monitoring Software",
    description: siteConfig.description,
    images: ["/og-image.svg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#0B1F33"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
