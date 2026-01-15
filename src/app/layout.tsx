import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SYNTALYS GROUP | Swiss Excellence in Technology, Sports & Real Estate",
  description: "SYNTALYS GROUP SA - Swiss holding company bringing together technological innovation (SYNTALYS TECH), sports excellence (SYNTALYS SPORTS), and real estate solutions (SYNTALYS INMO).",
  keywords: [
    "SYNTALYS GROUP",
    "Swiss holding company",
    "SYNTALYS TECH",
    "SYNTALYS SPORTS",
    "SYNTALYS INMO",
    "AI solutions",
    "software development",
    "cybersecurity",
    "sports technology",
    "real estate",
    "Switzerland",
  ],
  authors: [{ name: "SYNTALYS GROUP SA" }],
  creator: "SYNTALYS GROUP SA",
  publisher: "SYNTALYS GROUP SA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syntalysgroup.com",
    siteName: "SYNTALYS GROUP",
    title: "SYNTALYS GROUP | Swiss Excellence",
    description: "Swiss holding company - Technology, Sports & Real Estate divisions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SYNTALYS GROUP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTALYS GROUP | Swiss Excellence",
    description: "Swiss holding company - Technology, Sports & Real Estate divisions",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#03366d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
