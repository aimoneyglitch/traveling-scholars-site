import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const privacyPoints = [
  [
    "Family privacy focused",
    "Traveling Scholars is being designed for homeschool families who need organized records without unnecessary exposure of student information."
  ],
  [
    "No selling student data",
    "We do not plan to sell student records, family records, portfolio materials, or personal homeschool documentation."
  ],
  [
    "Records belong to families",
    "Parents should remain in control of the records they create, review, correct, export, and choose to share."
  ]
];

export const metadata = pageMetadata({
  title: "Privacy for Homeschool Families | Traveling Scholars",
  description:
    "Read Traveling Scholars privacy principles for homeschool families, including parent-owned records, student data care, and no selling student data.",
  path: "/privacy/"
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Privacy
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Family records should be treated with care.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveling Scholars is an educational organization and records platform.
            This preview site does not collect student records, process payments, or run user accounts.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {privacyPoints.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-2xl font-black text-[#4b2f83]">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 shadow-sm sm:rounded-3xl sm:p-7">
          <h2 className="text-xl font-black text-[#4b2f83]">Current preview site</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The current public site uses mailto links for early access interest. If you send an email,
            the information you include is handled through email communication. Avoid sending sensitive
            student records through the waitlist email.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
