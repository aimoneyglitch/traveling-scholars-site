import type { Metadata } from "next";
import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";

const terms = [
  [
    "Educational organization language",
    "Traveling Scholars is a homeschool organization and records platform intended to support parent-led documentation and recognition."
  ],
  [
    "Parent responsibility",
    "Parents remain responsible for curriculum choices, instruction, records accuracy, homeschool compliance, and how records are used."
  ],
  [
    "No accreditation claim",
    "Traveling Scholars is not presented as an accredited school, diploma-granting institution, legal advisor, or curriculum provider."
  ]
];

export const metadata: Metadata = {
  title: "Terms | Traveling Scholars Foundation Inc.",
  description:
    "Basic terms and educational responsibility notes for Traveling Scholars Foundation Inc. and its homeschool records platform preview.",
  alternates: {
    canonical: "/terms/"
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Terms
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Clear expectations for a parent-led records platform.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            These preview terms describe the intended boundaries of Traveling Scholars before
            launch. They are written to keep the site clear, realistic, and family-friendly.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {terms.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-2xl font-black text-[#4b2f83]">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 shadow-sm sm:rounded-3xl sm:p-7">
          <h2 className="text-xl font-black text-[#4b2f83]">Preview status</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The public website is a static preview and waitlist experience. Product features,
            pricing, and availability may change before launch.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
