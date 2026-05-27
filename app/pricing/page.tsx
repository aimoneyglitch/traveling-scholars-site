import type { Metadata } from "next";
import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { mailtoHref, pricing } from "../site-data";

export const metadata: Metadata = {
  title: "Pricing | Traveling Scholars Foundation Inc.",
  description:
    "Review early access pricing paths for Traveling Scholars, including Free Preview, Founding Family, and Legacy Family options.",
  alternates: {
    canonical: "/pricing/"
  }
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Founding family options
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Simple early access paths for homeschool families.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Pricing is being finalized for launch. Families can join the waitlist now
            and choose the right option when preview invitations open.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 lg:grid-cols-3">
          {pricing.map(([name, price, description, benefits]) => (
            <div key={name} className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:min-h-[360px] sm:rounded-[2rem] sm:p-7">
              <div>
                <h2 className="text-2xl font-black text-[#4b2f83]">{name}</h2>
                <p className="mt-4 text-3xl font-black text-[#080d22] sm:text-4xl">{price}</p>
                <p className="mt-4 leading-7 text-slate-700">{description}</p>
              </div>
              <ul className="mt-7 grid gap-3 text-sm font-bold text-slate-700">
                {benefits.map((benefit) => (
                  <li key={benefit} className="rounded-xl bg-[#f8f4ee] px-4 py-3">
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href={mailtoHref} className="mt-auto inline-block w-full rounded-2xl bg-[#4b2f83] px-5 py-4 text-center font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
                Ask About This Option
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 text-center shadow-sm sm:rounded-3xl sm:p-7">
          <h2 className="text-xl font-black text-[#4b2f83]">No payment required for the waitlist</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-slate-800 sm:text-base sm:leading-8">
            Traveling Scholars is not an accredited school or curriculum provider.
            Parents remain responsible for curriculum, instruction, records accuracy,
            and homeschool legal compliance.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
