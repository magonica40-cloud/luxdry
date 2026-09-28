import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/data/site';
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://luxedry.in'),
  title: {
    default: "LuxeDry | Premium Laundry, Steam Iron & Dry Cleaning",
    template: "%s | LuxeDry",
  },
  description: site.description,
  keywords: [
    "laundry service",
    "dry cleaning",
    "steam ironing",
    "commercial laundry",
    "hotel laundry",
    "hospital laundry",
    "Bengaluru",
    "Hoskote",
    "LuxeDry",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "LuxeDry | Premium Laundry, Steam Iron & Dry Cleaning",
    description: site.description,
    images: [{ url: "/brand-lockup.png", width: 1876, height: 517, alt: "LuxeDry" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeDry | Premium Laundry, Steam Iron & Dry Cleaning",
    description: site.description,
    images: ["/brand-lockup.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} text-slate-800 bg-slate-50 antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
