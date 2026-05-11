import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import ReviewSchema from "@/components/ReviewSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "TL Roofing | Professional Roofing Services in Leeds & West Yorkshire",
  description:
    "Expert roofing services in Leeds and West Yorkshire. Professional roof repairs, replacements, installations, and emergency services. Trusted local roofers with quality workmanship.",
  keywords:
    "roofing Leeds, roofers West Yorkshire, roof repairs, roof replacement, emergency roofing, gutter services, roof inspections, T & L Roofing",
  authors: [{ name: "T & L Roofing" }],
  creator: "T & L Roofing",
  publisher: "T & L Roofing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tl-roofing.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://tl-roofing.co.uk",
    title:
      "TL Roofing | Professional Roofing Services in Leeds & West Yorkshire",
    description:
      "Expert roofing services in Leeds and West Yorkshire. Professional roof repairs, replacements, installations, and emergency services.",
    siteName: "TL Roofing",
    images: [
      {
        url: "/tl-logo-favicon.png",
        width: 1000,
        height: 1000,
        alt: "TL Roofing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TL Roofing | Professional Roofing Services in Leeds & West Yorkshire",
    description:
      "Expert roofing services in Leeds and West Yorkshire. Professional roof repairs, replacements, installations, and emergency services.",
    images: ["/tl-logo-favicon.png"],
    creator: "@tlroofing",
    site: "@tlroofing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/tl-logo-favicon.png",
    shortcut: "/tl-logo-favicon.png",
    apple: "/tl-logo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#292929" />
        <meta name="referrer" content="origin-when-cross-origin" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SchemaMarkup />
        <ReviewSchema />
        <BreadcrumbSchema
          items={[{ name: "Home", url: "https://tl-roofing.co.uk" }]}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
