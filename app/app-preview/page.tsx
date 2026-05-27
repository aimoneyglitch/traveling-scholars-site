import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const previewSections = [
  [
    "Parent dashboard logic",
    "A parent-first command center for each family.",
    [
      "See active students, upcoming record tasks, attendance status, and document readiness.",
      "Surface missing grades, incomplete days, and portfolio gaps before they become stressful.",
      "Keep family-level decisions separate from each student profile."
    ]
  ],
  [
    "Student profile logic",
    "Organized records for each child.",
    [
      "Store student details, school year context, grade level, achievements, and milestones.",
      "Connect attendance, grade records, portfolio items, certificates, and transcript data to one profile.",
      "Support multiple students without mixing records across children."
    ]
  ],
  [
    "Attendance tracking logic",
    "Simple day-by-day homeschool attendance.",
    [
      "Mark learning days, absences, notes, and year-to-date totals.",
      "Help parents review consistency by student and school year.",
      "Keep attendance export-ready for family records."
    ]
  ],
  [
    "Gradebook/GPA logic",
    "Course-level grades without spreadsheet chaos.",
    [
      "Track courses, credits, final grades, and weighted grade points.",
      "Prepare GPA summaries from parent-entered grade records.",
      "Keep grade calculations transparent so parents can review every input."
    ]
  ],
  [
    "Transcript generator logic",
    "Professional transcript-ready data.",
    [
      "Group courses by student and school year.",
      "Combine credits, grades, GPA summaries, and graduation-ready details.",
      "Generate polished transcript views from records parents control."
    ]
  ],
  [
    "Certificate/ID logic",
    "Recognition and identity documents.",
    [
      "Create student IDs, honor recognition, completion certificates, and milestone documents.",
      "Reuse profile data so names, grade levels, and dates stay consistent.",
      "Give students official-feeling documents without requiring school accreditation."
    ]
  ],
  [
    "Portfolio vault logic",
    "A home for evidence of learning.",
    [
      "Store writing samples, photos, projects, volunteer records, and learning artifacts.",
      "Attach portfolio items to students, years, subjects, or achievements.",
      "Make it easier to tell the story behind the transcript."
    ]
  ]
];

export const metadata = pageMetadata({
  title: "Homeschool App Preview | Traveling Scholars",
  description:
    "Preview planned homeschool app logic for parent dashboards, student profiles, attendance, gradebook, transcripts, certificates, IDs, and portfolios.",
  path: "/app-preview/"
});

export default function AppPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            App preview
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            A clear look at what the future platform will do.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveling Scholars is being designed around practical homeschool workflows:
            parent control, organized student records, clean calculations, and document-ready outputs.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {previewSections.map(([title, summary, items]) => (
            <div key={title as string} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-2xl font-black text-[#4b2f83]">{title}</h2>
              <p className="mt-3 text-lg font-bold leading-7 text-slate-800">{summary}</p>
              <ul className="mt-5 grid gap-3 text-sm font-bold leading-6 text-slate-700">
                {(items as string[]).map((item) => (
                  <li key={item} className="rounded-xl bg-[#f8f4ee] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 text-center shadow-sm sm:rounded-3xl sm:p-7">
          <h2 className="text-xl font-black text-[#4b2f83]">Still parent-led</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-slate-800 sm:text-base sm:leading-8">
            This preview describes planned product logic. Traveling Scholars is not an
            accredited school or curriculum provider, and parents remain responsible
            for instruction, records accuracy, and homeschool legal compliance.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
