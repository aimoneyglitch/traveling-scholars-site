import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const recordTypes = [
  "Attendance logs",
  "Course lists",
  "Grade records",
  "Credit notes",
  "Portfolio samples",
  "Reading records",
  "Certificate records",
  "Year-end summaries"
];

const systemSteps = [
  {
    title: "Choose the records you need",
    text: "Different families and states may require different records. Start with attendance, courses, grades, and student progress notes."
  },
  {
    title: "Update records regularly",
    text: "A simple weekly or monthly habit can prevent end-of-year record stress."
  },
  {
    title: "Keep proof organized",
    text: "Save supporting work samples, project notes, assessments, photos, and parent comments near the record they support."
  },
  {
    title: "Review before milestones",
    text: "Before graduation, transfers, applications, or evaluations, review records for accuracy and completeness."
  }
];

export const metadata = pageMetadata({
  title: "Homeschool Record Keeping Guide | Traveling Scholars",
  description:
    "A parent-focused homeschool record keeping guide for attendance, grades, credits, portfolios, transcripts, certificates, and student progress records.",
  path: "/homeschool-record-keeping/"
});

export default function HomeschoolRecordKeepingPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Homeschool record keeping
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            A calmer way to think about homeschool record keeping.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Homeschool records can include attendance, course progress, grades, credits, portfolios,
            certificates, transcripts, and parent notes. The goal is to keep records organized throughout
            the year so families feel prepared instead of overwhelmed.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Common homeschool records parents organize
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              Requirements vary by family and location, but many parents keep a simple collection of
              learning records that show progress, attendance, courses, grades, and milestones.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recordTypes.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 font-black text-[#080d22]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            A practical record keeping system
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {systemSteps.map((step) => (
              <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-black text-[#4b2f83]">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080d22] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Parent responsibility stays clear
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            Traveling Scholars can support organization, but it does not replace a parent&apos;s responsibility
            for homeschool requirements, legal compliance, curriculum decisions, instruction, or record accuracy.
            The platform direction is parent-controlled documentation and recognition.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/resources/" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#080d22]">
              Visit Resource Library
            </a>
            <a href="/features/" className="rounded-2xl border border-white/20 px-6 py-4 text-center font-black text-white">
              Explore Planned Features
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
