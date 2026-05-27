import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";
import { WaitlistForm } from "./_components/waitlist-form";
import { pageMetadata } from "./seo";
import { creations, faqs, features, pricing, steps, trustPoints } from "./site-data";

const heroTrust = [
  "Parent-led records",
  "No student data required to join",
  "Not a school or curriculum provider"
];

const dashboardPreviews = [
  {
    title: "Transcript preview",
    label: "Draft ready",
    value: "24.5 credits",
    detail: "Course years, credits, grades, and GPA organized for parent review."
  },
  {
    title: "Student ID preview",
    label: "Profile linked",
    value: "2026 ID",
    detail: "Student details flow into clean ID and recognition document layouts."
  },
  {
    title: "Attendance overview",
    label: "Year-to-date",
    value: "142 days",
    detail: "Track learning days, notes, absences, and family record totals."
  },
  {
    title: "GPA/gradebook card",
    label: "Calculated view",
    value: "3.82 GPA",
    detail: "Grades and credits stay transparent before transcript generation."
  }
];

const credibilityCallouts = [
  ["Privacy-first", "Families should not have to trade student privacy for cleaner homeschool records."],
  ["Parent-controlled", "Parents remain responsible for the records they create, review, correct, and share."],
  ["Modern records organization", "Transcripts, attendance, grades, portfolios, IDs, and certificates can live in a calmer workflow."],
  ["Built for homeschool families", "The platform is being shaped around parent-led learning, flexible paths, and meaningful milestones."]
];

const whyFamiliesSwitch = [
  ["From scattered files", "Families outgrow folders, screenshots, and last-minute transcript spreadsheets."],
  ["From generic tools", "Homeschool records need context that ordinary document apps were not designed to provide."],
  ["From end-of-year stress", "Keeping progress organized throughout the year makes reviews and milestones easier."],
  ["From unclear records", "Clean, consistent documentation helps parents explain progress with more confidence."]
];

const communityVision = [
  ["Homeschool family stories", "A future place to highlight real parent-led learning journeys, projects, and student growth."],
  ["Future graduation recognition", "Support for tasteful celebration moments, completion records, and family-led graduation milestones."],
  ["Student achievement showcases", "Portfolio-friendly ways to preserve service, projects, awards, reading, creativity, and progress."],
  ["Community support vision", "A long-term vision for connection, encouragement, field trips, events, and shared homeschool momentum."]
];

const platformVision = [
  "Transcript preparation",
  "Portfolio organization",
  "Student ID records",
  "Certificate creation",
  "Graduation support"
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thetravelingscholars.org/#organization",
      name: "Traveling Scholars Foundation Inc.",
      url: "https://thetravelingscholars.org",
      logo: "https://thetravelingscholars.org/logo-web.jpg",
      description:
        "A homeschool organization and records platform for transcripts, portfolios, student records, certificates, IDs, and homeschool family community support."
    },
    {
      "@type": "WebSite",
      "@id": "https://thetravelingscholars.org/#website",
      url: "https://thetravelingscholars.org",
      name: "Traveling Scholars Foundation Inc.",
      publisher: {
        "@id": "https://thetravelingscholars.org/#organization"
      },
      inLanguage: "en-US"
    }
  ]
};

export const metadata = pageMetadata({
  title: "Traveling Scholars Foundation Inc. | Homeschool Records Platform",
  description:
    "Parent-controlled homeschool records, transcripts, portfolios, attendance, grades, certificates, and student IDs for organized homeschool families.",
  path: "/"
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav ctaHref="#early-access" />

        <div className="grid items-center gap-10 py-12 sm:min-h-[78vh] sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#b88a2d] sm:mb-5 sm:text-sm sm:tracking-[0.28em]">
              Homeschool records &bull; portfolios &bull; recognition
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-[#080d22] sm:text-5xl md:text-7xl">
              Homeschool records that feel organized, official, and parent-controlled.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
              Traveling Scholars helps families prepare transcripts, attendance,
              grades, portfolios, student IDs, and certificates without turning
              homeschool into a paperwork project.
            </p>

            <div className="mt-6 grid gap-3 text-sm font-black text-slate-700 sm:grid-cols-3">
              {heroTrust.map((item) => (
                <div key={item} className="rounded-2xl border border-[#d6a84f]/30 bg-white/80 px-4 py-3 shadow-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#early-access" className="w-full rounded-2xl bg-[#4b2f83] px-6 py-4 text-center font-black text-white shadow-xl shadow-[#4b2f83]/15 transition hover:bg-[#3f2770] sm:w-auto sm:px-8">
                Join for Launch Updates
              </a>
              <a href="#features" className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-black text-slate-900 shadow-sm transition hover:border-[#d6a84f] sm:w-auto sm:px-8">
                Explore Features
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-[1.5rem] bg-white p-4 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/70 sm:rounded-[2rem] sm:p-6 lg:mr-0">
            <div className="rounded-[1.25rem] bg-[#4b2f83] p-5 text-white shadow-lg shadow-[#4b2f83]/20 sm:rounded-[1.5rem] sm:p-7">
              <p className="text-sm font-black text-[#f1d28a]">Future Parent Dashboard</p>
              <div className="mt-3 text-3xl font-black sm:text-4xl">3 student records organized</div>
              <p className="mt-2 text-white/75">A calmer view of progress, documents, and milestones.</p>
            </div>

            <div className="mt-5 grid gap-4">
              {["Attendance log", "Gradebook summary", "Transcript draft", "Certificate set"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-black">{item}</span>
                    <span className="shrink-0 rounded-full bg-[#f3ead7] px-4 py-2 text-sm font-black text-[#4b2f83]">Preview</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-7 sm:px-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-4">
          {["Parent controlled", "Family privacy focused", "Launch updates only", "Built for homeschool records"].map((item) => (
            <div key={item} className="font-black text-[#4b2f83]">{item}</div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
                Built for parents
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Less record stress. More confidence when it is time to show progress.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Traveling Scholars helps homeschool families keep important records
                organized, presentable, and ready for milestones without turning your
                homeschool into a paperwork project.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {trustPoints.map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200/70 sm:rounded-3xl sm:p-6">
                  <h3 className="text-lg font-black text-[#4b2f83]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
                Credibility layer
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Trust starts with clear boundaries and parent control.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Traveling Scholars is being built for families who want polished
                records without pretending a platform replaces the parent&apos;s role.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {credibilityCallouts.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <h3 className="text-xl font-black text-[#4b2f83]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
                Software preview
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Product logic parents can understand at a glance.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                These static previews show the kind of organized, document-ready views
                Traveling Scholars is being designed to provide.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardPreviews.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 shadow-lg shadow-slate-900/5 sm:rounded-3xl sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black text-[#4b2f83]">{card.title}</h3>
                    <span className="shrink-0 rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#b88a2d]">
                      {card.label}
                    </span>
                  </div>
                  <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm shadow-slate-900/5">
                    <p className="text-3xl font-black text-[#080d22]">{card.value}</p>
                    <p className="mt-3 leading-7 text-slate-700">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
              Why families switch
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Families need more than another place to store files.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              The goal is a records rhythm that makes homeschool progress easier
              to understand, preserve, and present when milestones arrive.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-4">
            {whyFamiliesSwitch.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200/70 sm:rounded-3xl sm:p-6">
                <h3 className="text-lg font-black text-[#4b2f83]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.22em] text-[#d6a84f] sm:text-sm sm:tracking-[0.32em]">
            Platform features
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Everything families need to make homeschool feel organized, official, and recognized.
          </h2>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-4">
            {features.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5 sm:rounded-3xl sm:p-7">
                <h3 className="text-xl font-black text-[#4b2f83]">{title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
                Community vision
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                A records platform with room for family stories and student pride.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Traveling Scholars is starting with records, but the bigger vision
                is a homeschool community where progress can be organized,
                recognized, and celebrated with care.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {communityVision.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <h3 className="text-xl font-black text-[#4b2f83]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.22em] text-[#d6a84f] sm:text-sm sm:tracking-[0.32em]">
            How it works
          </p>
          <h2 className="mt-4 text-center text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Simple enough for busy parents.
          </h2>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 shadow-sm shadow-slate-900/5 sm:rounded-3xl sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#4b2f83] font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
              What families will be able to create
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Official-feeling records without heavy software or scattered files.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {creations.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-lg font-black text-[#4b2f83] shadow-lg shadow-slate-900/5 sm:rounded-3xl sm:p-6 sm:text-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.5rem] border border-slate-200 bg-[#f8f4ee] p-5 shadow-sm sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
              Future platform vision
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Built toward the moments families care about most.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              The first release is focused on practical records, with a roadmap
              shaped around the documents and recognition homeschool families
              naturally need over time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {platformVision.map((item) => (
              <div key={item} className="rounded-2xl bg-white px-5 py-4 font-black text-[#4b2f83] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
              Founding family options
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Start simple, then grow into a polished homeschool record system.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Pricing is being finalized for launch. Families can request early access now
              and choose the right path when the first release opens.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            {pricing.map(([name, price, description, benefits]) => (
              <div key={name} className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:min-h-[360px] sm:rounded-[2rem] sm:p-7">
                <div>
                  <h3 className="text-2xl font-black text-[#4b2f83]">{name}</h3>
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
                <a href="/contact/#waitlist" className="mt-auto inline-block w-full rounded-2xl bg-[#4b2f83] px-5 py-4 text-center font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
                  Ask About This Option
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.5rem] bg-[#4b2f83] p-5 text-white shadow-2xl shadow-[#4b2f83]/15 sm:gap-8 sm:rounded-[2rem] sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <p className="font-black text-[#f1d28a]">Founding Family Early Access</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">Help shape the platform before launch.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Join the parent waitlist for launch updates, founding family pricing,
              and first access to Traveling Scholars when preview invitations open.
            </p>
          </div>
          <div className="rounded-[1.25rem] bg-white p-5 text-slate-950 sm:rounded-[1.5rem] sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b88a2d] sm:text-sm sm:tracking-[0.2em]">
              Launch updates only
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Add your name, email, and homeschool role. This static preview uses your
              email app to send the request for now.
            </p>
            <div className="mt-6">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 text-center shadow-sm sm:rounded-3xl sm:p-7">
          <p className="text-sm font-bold leading-7 text-slate-800 sm:text-base sm:leading-8">
            Traveling Scholars is a homeschool organization and records platform.
            It is not an accredited school or curriculum provider.
            Parents remain responsible for curriculum, instruction, records accuracy,
            and homeschool legal compliance.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            FAQ
          </p>
          <h2 className="mt-4 text-center text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            A few details before launch.
          </h2>

          <div className="mt-10 grid gap-4 sm:mt-12">
            {faqs.map(([question, answer]) => (
              <div key={question} className="rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 sm:rounded-3xl sm:p-7">
                <h3 className="text-xl font-black text-[#4b2f83]">{question}</h3>
                <p className="mt-3 leading-7 text-slate-700">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
