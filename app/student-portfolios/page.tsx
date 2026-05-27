import type { Metadata } from "next";
import { ResourcePage } from "../_components/resource-page";

export const metadata: Metadata = {
  title: "Student Portfolios | Traveling Scholars Foundation Inc.",
  description:
    "Learn how homeschool student portfolios can organize projects, writing samples, photos, achievements, and learning evidence.",
  alternates: {
    canonical: "/student-portfolios/"
  }
};

export default function StudentPortfoliosPage() {
  return (
    <ResourcePage
      eyebrow="Student portfolios"
      title="Student portfolios help families preserve the story behind the transcript."
      intro="Portfolios give parents a place to gather work samples, projects, photos, volunteer records, and achievements so student growth is easier to remember and share."
      sections={[
        {
          title: "What can go in a student portfolio?",
          body: "A homeschool portfolio may include writing samples, project photos, reading lists, artwork, volunteer documentation, certificates, assessment notes, and examples of subject mastery.",
          points: ["Projects and writing samples", "Photos and learning artifacts", "Awards and volunteer records"]
        },
        {
          title: "Why portfolios build confidence",
          body: "Grades and credits show one part of the picture. Portfolio records help families show effort, creativity, service, growth, and hands-on learning that may not fit neatly into a gradebook.",
          points: ["Show growth over time", "Support student recognition", "Preserve meaningful work"]
        },
        {
          title: "A private family-first vault",
          body: "Traveling Scholars is being designed around family-controlled records. Parents decide what to keep, correct, export, and share."
        }
      ]}
      links={[
        { href: "/features/", label: "Explore features" },
        { href: "/app-preview/", label: "See portfolio logic" },
        { href: "/homeschool-certificates/", label: "Certificate resources" }
      ]}
    />
  );
}
