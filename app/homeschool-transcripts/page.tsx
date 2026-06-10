import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const transcriptItems = [
  "Student name and school year",
  "Course titles by grade level",
  "Credits or units earned",
  "Final grades",
  "GPA notes when used",
  "Parent signature or review note",
  "Graduation planning notes",
  "Supporting portfolio references"
];

const transcriptSteps = [
  {
    title: "Start with course history",
    text: "List the courses your student completed each year. Keep names clear and parent-readable instead of overcomplicating them."
  },
  {
    title: "Add credits and grades consistently",
    text: "Use the same credit and grade approach across the transcript so the record is easier to review later."
  },
  {
    title: "Keep supporting records nearby",
    text: "Save grade notes, reading lists, projects, attendance summaries, and portfolio samples that support the transcript."
  },
  {
    title: "Review before sharing",
    text: "Parents should verify accuracy, state requirements, and family records before sending any transcript anywhere."
  }
];

export const metadata = pageMetadata({
  title: "How to Make a Homeschool Transcript | Traveling Scholars",
  description:
    "Learn how parents can organize homeschool transcripts with courses, credits, grades, GPA notes, attendance records, portfolios, and graduation readiness.",
  path: "/homeschool-transcripts/"
});

export default function HomeschoolTranscriptsPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Homeschool transcripts
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            How to organize a homeschool transcript parents can actually trust.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            A homeschool transcript is one of the most important records a parent may prepare for high school,
            graduation planning, college applications, trade programs, scholarships, or family documentation.
            Traveling Scholars is being built to help families organize transcript records clearly while keeping
            parents in control of the final record.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              What belongs on a homeschool transcript?
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              Transcript formats vary, but most parent-created transcripts include a clean course history,
              grades, credits, GPA information when used, and graduation notes. The goal is not to make the
              record look complicated. The goal is to make it organized, readable, and accurate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {transcriptItems.map((item) => (
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
            A simple parent-led transcript workflow
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {transcriptSteps.map((step) => (
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
            Important boundary for families
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            Traveling Scholars is not an accredited school or transcript authority. Parents remain responsible
            for instruction, record accuracy, legal compliance, and final transcript decisions. The platform
            direction is organization, recognition, and parent-controlled documentation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/resources/" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#080d22]">
              Visit Resource Library
            </a>
            <a href="/app-preview/" className="rounded-2xl border border-white/20 px-6 py-4 text-center font-black text-white">
              Preview Future App
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
