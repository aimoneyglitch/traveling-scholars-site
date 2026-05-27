import Image from "next/image";

const features = [
  ["Academic Records", "Attendance, grades, GPA, credits, progress reports, and transcripts organized in one place."],
  ["Student Recognition", "Certificates, student IDs, honor roll, achievement tracking, and graduation-ready documents."],
  ["Portfolio Vault", "Store projects, writing samples, photos, volunteer records, and homeschool documentation."],
  ["Community Support", "Future field trips, graduation events, fundraising opportunities, and family connection."]
];

const steps = [
  ["Create your family account", "Parents stay in control from day one."],
  ["Add student profiles", "Build organized records for each child."],
  ["Track progress", "Attendance, grades, credits, and achievements stay clean."],
  ["Generate documents", "Transcripts, certificates, IDs, and portfolios look professional."]
];

type PricingTier = [string, string, string, string[]];
type Faq = [string, string];

const pricing: PricingTier[] = [
  [
    "Free Preview",
    "$0",
    "For families who want to see the platform before launch.",
    ["Launch updates", "Feature previews", "Early access invitations"]
  ],
  [
    "Founding Family",
    "Early pricing",
    "For families ready to organize records and help shape the first release.",
    ["Priority early access", "Founding family pricing", "Input on record and portfolio tools"]
  ],
  [
    "Legacy Family",
    "Best fit",
    "For long-term homeschool families who want polished records year after year.",
    ["Multi-year planning", "Student recognition tools", "Portfolio and transcript support"]
  ]
];

const faqs: Faq[] = [
  [
    "Is Traveling Scholars a school?",
    "Traveling Scholars is a homeschool organization and records platform, not a replacement for parent-led homeschool responsibility."
  ],
  [
    "Do I need to pay today?",
    "No. Early access is handled by email for now, so families can learn more before launch."
  ],
  [
    "What will families be able to track?",
    "The platform is being built for attendance, grades, credits, transcripts, certificates, portfolios, and student recognition."
  ],
  [
    "Will this handle my state's homeschool laws?",
    "Parents remain responsible for understanding and following their local homeschool requirements."
  ]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:py-7">
        <nav className="flex items-center justify-between gap-5">
          <div className="flex min-w-0 items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="Traveling Scholars Foundation Inc. logo"
              width={1536}
              height={1024}
              priority
              className="h-14 w-[84px] shrink-0 rounded-xl object-cover shadow-sm ring-1 ring-black/5 sm:h-16 sm:w-24"
            />
            <div className="min-w-0">
              <div className="text-xl font-black leading-tight text-[#4b2f83] sm:text-2xl">
                Traveling Scholars
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Foundation Inc.
              </div>
            </div>
          </div>
          <a href="#early-access" className="shrink-0 rounded-full bg-[#4b2f83] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770] sm:px-6">
            Join Early Access
          </a>
        </nav>

        <div className="grid min-h-[78vh] items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#b88a2d] sm:text-sm">
              Homeschool records &bull; portfolios &bull; recognition
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-[#080d22] md:text-7xl">
              Learning Beyond Walls.
              <span className="block text-[#4b2f83]">Growing Beyond Limits.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              A modern homeschool organization platform built for families who want structure,
              beautiful records, student pride, transcripts, portfolios, certificates, IDs,
              and community support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#early-access" className="rounded-2xl bg-[#4b2f83] px-8 py-4 text-center font-black text-white shadow-xl shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
                Request Early Access
              </a>
              <a href="#features" className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-center font-black text-slate-900 shadow-sm transition hover:border-[#d6a84f]">
                Explore Features
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/70 sm:p-6 lg:mr-0">
            <div className="rounded-[1.5rem] bg-[#4b2f83] p-7 text-white shadow-lg shadow-[#4b2f83]/20">
              <p className="text-sm font-black text-[#f1d28a]">Parent Dashboard Preview</p>
              <h2 className="mt-3 text-4xl font-black">3 Students Active</h2>
              <p className="mt-2 text-white/75">Records, progress, and recognition at a glance.</p>
            </div>

            <div className="mt-5 grid gap-4">
              {["Attendance", "Gradebook", "Transcripts", "Certificates"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-black">{item}</span>
                    <span className="rounded-full bg-[#f3ead7] px-4 py-2 text-sm font-black text-[#4b2f83]">Ready</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-4">
          {["Parent controlled", "Private by design", "Mobile first", "Built for families"].map((item) => (
            <div key={item} className="font-black text-[#4b2f83]">{item}</div>
          ))}
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.32em] text-[#d6a84f]">
            Platform features
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-black md:text-5xl">
            Everything families need to make homeschool feel organized, official, and recognized.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {features.map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-[#4b2f83]">{title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.32em] text-[#d6a84f]">
            How it works
          </p>
          <h2 className="mt-4 text-center text-4xl font-black md:text-5xl">
            Simple enough for busy parents.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#f8f4ee] p-7">
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

      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b88a2d]">
              Founding family options
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Start simple, then grow into a polished homeschool record system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Pricing is being finalized for launch. Families can request early access now
              and choose the right path when the first release opens.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map(([name, price, description, benefits]) => (
              <div key={name} className="flex min-h-[360px] flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div>
                  <h3 className="text-2xl font-black text-[#4b2f83]">{name}</h3>
                  <p className="mt-4 text-4xl font-black text-[#080d22]">{price}</p>
                  <p className="mt-4 leading-7 text-slate-700">{description}</p>
                </div>
                <ul className="mt-7 grid gap-3 text-sm font-bold text-slate-700">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="rounded-xl bg-[#f8f4ee] px-4 py-3">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hello@travelingscholars.org?subject=Traveling%20Scholars%20early%20access" className="mt-auto inline-block rounded-2xl bg-[#4b2f83] px-6 py-4 text-center font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
                  Request Access
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-[#4b2f83] p-8 text-white shadow-2xl shadow-[#4b2f83]/15 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <p className="font-black text-[#f1d28a]">Founding Family Early Access</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Help shape the platform before launch.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Join the early access list for launch updates, founding family pricing,
              and first access to Traveling Scholars.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b88a2d]">
              No payment required
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Send a quick email and we will follow up with preview details, timing,
              and founding family information.
            </p>
            <a href="mailto:hello@travelingscholars.org?subject=Traveling%20Scholars%20early%20access" className="mt-6 inline-block w-full rounded-2xl bg-[#4b2f83] px-8 py-4 text-center font-black text-white">
              Email for Early Access
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#d6a84f]/40 bg-[#fffaf0] p-7 text-center shadow-sm">
          <p className="text-base font-bold leading-8 text-slate-800">
            Traveling Scholars is a homeschool organization and records platform.
            Parents remain responsible for curriculum, instruction, records accuracy,
            and homeschool legal compliance.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.32em] text-[#b88a2d]">
            FAQ
          </p>
          <h2 className="mt-4 text-center text-4xl font-black md:text-5xl">
            A few details before launch.
          </h2>

          <div className="mt-12 grid gap-4">
            {faqs.map(([question, answer]) => (
              <div key={question} className="rounded-3xl border border-slate-200 bg-[#f8f4ee] p-7">
                <h3 className="text-xl font-black text-[#4b2f83]">{question}</h3>
                <p className="mt-3 leading-7 text-slate-700">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black text-[#4b2f83]">Traveling Scholars</div>
            <p className="text-sm text-slate-500">Learning Beyond Walls, Growing Beyond Limits.</p>
          </div>
          <p className="text-sm text-slate-500">&copy; 2026 Traveling Scholars Foundation Inc.</p>
        </div>
      </footer>
    </main>
  );
}
