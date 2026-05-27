import type { Metadata } from "next";
import { ResourcePage } from "../_components/resource-page";

export const metadata: Metadata = {
  title: "Homeschool Record Keeping | Traveling Scholars Foundation Inc.",
  description:
    "A parent-focused overview of homeschool record keeping for attendance, grades, credits, portfolios, transcripts, and legal responsibility.",
  alternates: {
    canonical: "/homeschool-record-keeping/"
  }
};

export default function HomeschoolRecordKeepingPage() {
  return (
    <ResourcePage
      eyebrow="Homeschool record keeping"
      title="Homeschool record keeping works best when it becomes a simple rhythm."
      intro="Good records help parents understand progress, prepare documents, and stay ready for milestones. The goal is not more paperwork; it is calmer organization."
      sections={[
        {
          title: "Core records families often track",
          body: "Many homeschool families track attendance, course work, grades, credits, reading, portfolio samples, achievements, and annual summaries. Requirements vary, so families should understand their local homeschool laws.",
          points: ["Attendance and learning days", "Grades, credits, and progress", "Portfolio and achievement records"]
        },
        {
          title: "How organization helps later",
          body: "Consistent record keeping makes it easier to prepare transcripts, certificates, IDs, portfolios, and progress summaries without starting from scratch.",
          points: ["Cleaner transcripts", "Faster document prep", "Better year-end review"]
        },
        {
          title: "Legal compliance remains with parents",
          body: "Traveling Scholars can support organization, but it does not replace parent responsibility for curriculum, instruction, records accuracy, or legal compliance."
        }
      ]}
      links={[
        { href: "/homeschool-transcripts/", label: "Transcript guide" },
        { href: "/student-portfolios/", label: "Portfolio guide" },
        { href: "/faq/", label: "Read FAQ" }
      ]}
    />
  );
}
