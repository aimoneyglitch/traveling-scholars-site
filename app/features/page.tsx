import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";
import { creations, features, trustPoints } from "../site-data";

export const metadata = pageMetadata({
  title: "Homeschool Record Platform Features | Traveling Scholars",
  description:
    "Explore parent-focused homeschool tools for transcripts, attendance, grades, portfolios, student IDs, certificates, and family-controlled records.",
  path: "/features/"
});

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Platform features
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Homeschool records that feel organized, official, and easy to share.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveling Scholars is being built to help families keep academic records,
            recognition, student documents, and portfolio materials in one clean place.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">Core tools</h2>
          <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-4">
            {features.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
                <h3 className="text-xl font-black text-[#4b2f83]">{title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">What families will be able to create</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creations.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 text-center text-lg font-black text-[#4b2f83] shadow-sm sm:rounded-3xl sm:p-6 sm:text-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {trustPoints.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:rounded-3xl sm:p-6">
              <h2 className="text-xl font-black text-[#4b2f83]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
