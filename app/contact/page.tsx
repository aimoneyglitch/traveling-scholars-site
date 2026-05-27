import type { Metadata } from "next";
import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { mailtoHref } from "../site-data";

export const metadata: Metadata = {
  title: "Contact | Traveling Scholars Foundation Inc.",
  description:
    "Contact Traveling Scholars Foundation Inc. for early access, homeschool records questions, and launch updates.",
  alternates: {
    canonical: "/contact/"
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Reach out about early access.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            The current site stays lightweight and static, so contact is handled by email
            instead of an embedded form.
          </p>
          <a href={mailtoHref} className="mt-8 inline-block rounded-2xl bg-[#4b2f83] px-8 py-4 text-center font-black text-white shadow-xl shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
            Email Traveling Scholars
          </a>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[#f8f4ee] p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h2 className="text-2xl font-black text-[#4b2f83]">Early access</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Ask about preview timing, founding family updates, and the platform roadmap.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8f4ee] p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h2 className="text-2xl font-black text-[#4b2f83]">Family records</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Share what record, transcript, portfolio, or recognition tools would help your family.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8f4ee] p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h2 className="text-2xl font-black text-[#4b2f83]">Privacy note</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Please do not send sensitive student records by email while the platform is still in preview.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
