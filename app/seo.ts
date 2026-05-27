import type { Metadata } from "next";

const siteName = "Traveling Scholars Foundation Inc.";
const siteUrl = "https://thetravelingscholars.org";
const socialImage = {
  url: "/logo-og.jpg",
  width: 1200,
  height: 630,
  alt: "Traveling Scholars Foundation Inc. logo"
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [socialImage],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url]
    }
  };
}
