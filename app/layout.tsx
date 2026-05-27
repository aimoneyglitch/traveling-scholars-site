import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveling Scholars Foundation Inc. | Modern Homeschool Organization Platform",
  description:
    "A modern homeschool organization platform for transcripts, portfolios, student records, certificates, IDs, and homeschool family community support.",
  keywords: [
    "homeschool app",
    "homeschool transcripts",
    "homeschool organization",
    "student portfolios",
    "homeschool community",
    "homeschool records",
    "homeschool diploma",
    "homeschool certificates",
    "traveling scholars"
  ],
  openGraph: {
    title: "Traveling Scholars Foundation Inc.",
    description:
      "Modern homeschool organization, records, portfolios, and recognition platform.",
    url: "https://travelingscholars.org",
    siteName: "Traveling Scholars Foundation Inc.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
