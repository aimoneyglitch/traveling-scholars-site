import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thetravelingscholars.org"),
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
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Traveling Scholars Foundation Inc.",
    description:
      "Modern homeschool organization, records, portfolios, and recognition platform.",
    url: "https://thetravelingscholars.org",
    siteName: "Traveling Scholars Foundation Inc.",
    images: [
      {
        url: "/logo.jpg",
        width: 1536,
        height: 1024,
        alt: "Traveling Scholars Foundation Inc. logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Traveling Scholars Foundation Inc.",
    description:
      "Modern homeschool organization, records, portfolios, and recognition platform.",
    images: ["/logo.jpg"]
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
