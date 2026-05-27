import type { Metadata } from "next";
import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { faqs } from "../site-data";

export const metadata: Metadata = {
  title: "FAQ | Traveling Scholars Foundation Inc.",
  description:
    "Answers to common questions about Traveling Scholars early access, homeschool records, legal responsibility, and platform plans.",
  alternates: {
    canonical: "/faq/"
  }
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            FAQ
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Answers before launch.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            A few practical details for families considering the Traveling Scholars waitlist.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-5xl gap-4">
          {faqs.map(([question, answer]) => (
            <div key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-xl font-black text-[#4b2f83]">{question}</h2>
              <p className="mt-3 leading-7 text-slate-700">{answer}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
