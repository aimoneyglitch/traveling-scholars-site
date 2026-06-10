import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const guides = [
  {
    title: "Homeschool Transcripts",
    href: "/homeschool-transcripts/",
    text: "Plan course records, credits, grades, GPA notes, and supporting documentation for high school homeschool records."
  },
  {
    title: "Student Portfolios",
    href: "/student-portfolios/",
    text: "Organize writing samples, projects, photos, achievements, reading, service, and evidence of student progress."
  },
  {
    title: "Homeschool Record Keeping",
    href: "/homeschool-record-keeping/",
    text: "Build a calmer system for attendance, grade records, yearly summaries, credits, and family documentation."
  },
  {
    title: "Homeschool Certificates",
    href: "/homeschool-certificates/",
    text: "Create parent-led recognition records for milestones, completion moments, achievements, and student encouragement."
  }
];

const planningTopics = [
  "Attendance tracking",
  "Gradebook organization",
  "Transcript readiness",
  "Portfolio planning",
  "Student ID records",
  "Certificate recognition",
  "Graduation preparation",
  "Parent-controlled documentation"
];

export const metadata = pageMetadata({
  title: "Homeschool Resource Library | Traveling Scholars",
  description:
    "Explore parent-focused homeschool record keeping guides for transcripts, portfolios, attendance, certificates, student IDs, grades, GPA, and graduation readiness.",
  path: "/resources/"
});

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Homeschool resource library
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Parent-focused guides for homeschool records, portfolios, and recognition.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveling Scholars helps families think through the records that support parent-led learning:
            transcripts, attendance, grade summaries, portfolios, certificates, student IDs, and graduation
            readiness. These resources are educational guides, not legal advice or school accreditation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact/"
              className="rounded-2xl bg-[#4b2f83] px-6 py-4 text-center font-black text-white shadow-xl shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]"
            >
              Join Launch Updates
            </a>
            <a
              href="/app-preview/"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-black text-slate-900 shadow-sm transition hover:border-[#d6a84f]"
            >
              Preview the Future App
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
              Start here
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Core homeschool record guides
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              These pages help parents organize the most common homeschool documentation categories while
              keeping family control and clear platform boundaries at the center.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-slate-200 bg-[#f8f4ee] p-6 shadow-sm transition hover:border-[#d6a84f] hover:bg-white"
              >
                <h3 className="text-xl font-black text-[#4b2f83]">{guide.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{guide.text}</p>
                <span className="mt-5 inline-flex font-black text-[#8f6720]">
                  Read the guide →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
                Platform planning
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Built around the records homeschool families actually need.
              </h2>
              <p className="mt-5 leading-7 text-slate-700">
                The long-term Traveling Scholars platform is being shaped around parent-controlled
                documentation, not fake school authority. Parents remain responsible for compliance,
                accuracy, instruction, and final records.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {planningTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#080d22] shadow-sm"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080d22] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f1d28a] sm:text-sm sm:tracking-[0.32em]">
              Clear trust boundaries
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Official-feeling records without misleading claims.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              Traveling Scholars is a homeschool organization and future records platform. It is not an
              accredited school, curriculum provider, diploma-granting institution, government records
              authority, or legal compliance service. The goal is to help parents organize and present
              family-controlled records with more confidence.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
