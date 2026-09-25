import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxeDry | Premium Laundry, Steam Iron & Dry Cleaning",
  description: "LuxeDry provides professional laundry, steam ironing and dry cleaning with convenient doorstep pickup and delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} text-slate-800 bg-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
