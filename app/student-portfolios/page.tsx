import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const portfolioCategories = [
  "Writing samples",
  "Reading lists",
  "Science projects",
  "Art and creative work",
  "Photos of hands-on learning",
  "Volunteer or service records",
  "Awards and achievements",
  "Certificates and milestones"
];

const benefits = [
  {
    title: "Show growth over time",
    text: "A portfolio helps parents preserve evidence of learning, not just final grades."
  },
  {
    title: "Support transcript records",
    text: "Projects, papers, reading lists, and assessments can support course notes and grade decisions."
  },
  {
    title: "Celebrate student identity",
    text: "Portfolios can show interests, strengths, creativity, service, and personal learning paths."
  },
  {
    title: "Reduce end-of-year stress",
    text: "Saving work throughout the year keeps families from scrambling when records are needed."
  }
];

export const metadata = pageMetadata({
  title: "Homeschool Student Portfolio Guide | Traveling Scholars",
  description:
    "Learn how homeschool families can organize student portfolios with work samples, projects, writing, photos, service, achievements, and learning records.",
  path: "/student-portfolios/"
});

export default function StudentPortfoliosPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Student portfolios
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Build a homeschool student portfolio that shows real learning.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            A homeschool portfolio gives parents a practical way to preserve work samples, projects,
            writing, photos, achievements, and learning evidence. It can support transcript planning,
            year-end reviews, student confidence, and graduation readiness.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              What can go in a homeschool portfolio?
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              A strong portfolio does not need to include every worksheet. It should preserve meaningful
              evidence of progress, skill development, creativity, effort, and completed learning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {portfolioCategories.map((item) => (
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
            Why portfolios matter for homeschool families
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map((item) => (
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
            Future Traveling Scholars portfolio direction
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            The future platform vision includes organized portfolio records connected to student profiles,
            transcript notes, certificates, IDs, and parent dashboards. For now, this page is a planning
            guide and does not collect or store real student work.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/resources/" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#080d22]">
              Visit Resource Library
            </a>
            <a href="/dashboard-preview/" className="rounded-2xl border border-white/20 px-6 py-4 text-center font-black text-white">
              View Dashboard Preview
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
