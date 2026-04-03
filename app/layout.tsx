import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import GsapInit from "@/components/GsapInit";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Troy CDL School | CDL Training & Testing · Dayton, OH",
  description:
    "Get your Class A & B CDL license at Troy CDL School in Dayton, OH. Unlimited free exam retakes, free housing, flexible scheduling. Only $5,500. OhioMeansJobs grants accepted. Call 937-993-1741.",
  keywords: [
    "CDL school Dayton Ohio",
    "CDL training Dayton",
    "Class A CDL",
    "Class B CDL",
    "truck driving school",
    "OhioMeansJobs CDL grant",
    "CDL license Ohio",
  ],
  openGraph: {
    title: "Troy CDL School | CDL Training & Testing",
    description:
      "Class A & B CDL license training in Dayton, OH. Unlimited retakes, free housing, only $5,500.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <GsapInit />
        {children}
      </body>
    </html>
  );
}
