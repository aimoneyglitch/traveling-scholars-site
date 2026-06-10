import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const certificateUses = [
  "Course completion",
  "Reading milestones",
  "Project achievement",
  "Volunteer service",
  "Sports or enrichment",
  "Graduation recognition",
  "Skill development",
  "Family celebration"
];

const recognitionPrinciples = [
  {
    title: "Keep the language honest",
    text: "Use certificates for parent-led recognition, not misleading claims about accreditation or official school authority."
  },
  {
    title: "Connect certificates to real work",
    text: "A certificate is stronger when it connects to a completed project, course, portfolio sample, service record, or milestone."
  },
  {
    title: "Make students feel seen",
    text: "Recognition documents can help students feel proud of effort, progress, creativity, service, and growth."
  },
  {
    title: "Store them with records",
    text: "Keep certificates alongside portfolios, attendance notes, grade records, and transcript planning materials."
  }
];

export const metadata = pageMetadata({
  title: "Homeschool Certificates and Student Recognition | Traveling Scholars",
  description:
    "Explore homeschool certificates, student IDs, achievement records, milestone recognition, completion documents, and parent-led celebration ideas.",
  path: "/homeschool-certificates/"
});

export default function HomeschoolCertificatesPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Certificates and recognition
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Homeschool certificates that celebrate real student progress.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Certificates can help homeschool families recognize progress, completion, service, projects,
            reading, enrichment, and graduation milestones. Used honestly, they become part of a larger
            parent-controlled record system.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              What can homeschool certificates recognize?
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              Certificates work best when they reflect meaningful effort or completion. They can support
              portfolios, family celebrations, end-of-year reviews, and student confidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certificateUses.map((item) => (
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
            Recognition should feel meaningful, not misleading
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {recognitionPrinciples.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-black text-[#4b2f83]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080d22] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Future certificate and ID direction
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            The future Traveling Scholars platform may help parents create and organize student IDs,
            certificates, recognition records, and milestone documents. These records should support
            parent-led learning without claiming to replace a school, government agency, or legal authority.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/resources/" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#080d22]">
              Visit Resource Library
            </a>
            <a href="/contact/" className="rounded-2xl border border-white/20 px-6 py-4 text-center font-black text-white">
              Join Launch Updates
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
