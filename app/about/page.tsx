import type { Metadata } from "next";
import { SiteNav } from "../_components/site-nav";

export const metadata: Metadata = {
  title: "About | Traveling Scholars Foundation Inc.",
  description:
    "Learn about Traveling Scholars Foundation Inc., a homeschool organization and records platform built for parent-led families.",
  alternates: {
    canonical: "/about/"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            About Traveling Scholars
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Built for families who want homeschool records to feel calm, clear, and celebrated.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveling Scholars Foundation Inc. is a homeschool organization and records platform
            focused on helping parent-led families organize progress, preserve student work,
            and recognize meaningful milestones.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h2 className="text-2xl font-black text-[#4b2f83]">Parent-led first</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Families remain in charge of curriculum, instruction, and legal compliance.
              Traveling Scholars helps make the record side easier to manage.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h2 className="text-2xl font-black text-[#4b2f83]">Records with pride</h2>
            <p className="mt-4 leading-7 text-slate-700">
              The platform is designed for transcripts, portfolios, certificates,
              student IDs, attendance, grades, and achievement documentation.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h2 className="text-2xl font-black text-[#4b2f83]">Clear boundaries</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Traveling Scholars is not an accredited school or curriculum provider.
              It is a support platform for homeschool organization and documentation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
