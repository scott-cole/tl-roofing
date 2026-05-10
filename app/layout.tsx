import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title:
    "T & L Roofing | Professional Roofing Services in Leeds & West Yorkshire",
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
  metadataBase: new URL("https://tlroofing.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://tlroofing.co.uk",
    title:
      "T & L Roofing | Professional Roofing Services in Leeds & West Yorkshire",
    description:
      "Expert roofing services in Leeds and West Yorkshire. Professional roof repairs, replacements, installations, and emergency services.",
    siteName: "T & L Roofing",
    images: [
      {
        url: "/tl-logo-favicon.png",
        width: 1000,
        height: 1000,
        alt: "T & L Roofing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "T & L Roofing | Professional Roofing Services in Leeds & West Yorkshire",
    description:
      "Expert roofing services in Leeds and West Yorkshire. Professional roof repairs, replacements, installations, and emergency services.",
    images: ["/tl-logo-favicon.png"],
    creator: "@tlroofing",
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
    <html lang="en-GB" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <SchemaMarkup />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
