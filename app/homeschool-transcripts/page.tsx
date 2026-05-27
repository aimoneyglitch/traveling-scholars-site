import type { Metadata } from "next";
import { ResourcePage } from "../_components/resource-page";

export const metadata: Metadata = {
  title: "Homeschool Transcripts | Traveling Scholars Foundation Inc.",
  description:
    "Parent-focused guidance for organizing homeschool transcript records, including courses, credits, grades, GPA, and supporting documentation.",
  alternates: {
    canonical: "/homeschool-transcripts/"
  }
};

export default function HomeschoolTranscriptsPage() {
  return (
    <ResourcePage
      eyebrow="Homeschool transcripts"
      title="Homeschool transcripts are easier when records stay organized all year."
      intro="A transcript is only as useful as the records behind it. Traveling Scholars is being designed to help parents keep courses, credits, grades, and student milestones clear before transcript season arrives."
      sections={[
        {
          title: "What belongs on a homeschool transcript?",
          body: "Most homeschool transcript records include student information, course titles, credits, grades, GPA summaries, school years, and graduation details. Parents should decide what is accurate for their student and local requirements.",
          points: ["Course names and years", "Credits and final grades", "GPA and graduation details"]
        },
        {
          title: "Why organized records matter",
          body: "Trying to reconstruct several years of learning at the end of high school can be stressful. Keeping course and grade records current gives parents a cleaner path to a professional-looking transcript.",
          points: ["Less end-of-year scrambling", "Cleaner parent review", "Better supporting documentation"]
        },
        {
          title: "Parent responsibility stays central",
          body: "Traveling Scholars is not an accredited school or transcript authority. The platform is intended to support parent-created records, and parents remain responsible for accuracy and homeschool compliance."
        }
      ]}
      links={[
        { href: "/features/", label: "Explore features" },
        { href: "/app-preview/", label: "See app preview" },
        { href: "/homeschool-record-keeping/", label: "Record keeping guide" }
      ]}
    />
  );
}
