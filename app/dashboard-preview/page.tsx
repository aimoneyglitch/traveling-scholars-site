import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";

const students = [
  {
    name: "Avery",
    level: "Grade 10",
    attendance: "142 days",
    gpa: "3.82",
    transcript: "72% ready",
    portfolio: "18 items"
  },
  {
    name: "Milo",
    level: "Grade 7",
    attendance: "139 days",
    gpa: "3.66",
    transcript: "Building",
    portfolio: "11 items"
  },
  {
    name: "June",
    level: "Grade 4",
    attendance: "141 days",
    gpa: "N/A",
    transcript: "Not needed yet",
    portfolio: "9 items"
  }
];

const dashboardStats = [
  ["Attendance", "142", "learning days logged", "Year-to-date family record"],
  ["Gradebook", "3.82", "sample GPA", "Transparent parent-reviewed inputs"],
  ["Transcripts", "72%", "readiness", "Courses, credits, and grades checked"],
  ["Portfolio", "38", "saved items", "Projects, writing, service, and awards"]
];

const readinessItems = [
  ["Student details", "Complete"],
  ["Course credits", "Needs review"],
  ["Final grades", "2 missing"],
  ["GPA summary", "Calculated"],
  ["Parent review", "Next step"]
];

const activity = [
  "Attendance updated for Avery",
  "Milo added a science project record",
  "June received a reading milestone certificate",
  "Transcript draft waiting for parent review"
];

export const metadata = pageMetadata({
  title: "Static Dashboard Preview | Traveling Scholars",
  description:
    "Preview the future Traveling Scholars parent dashboard with mock homeschool records, attendance, GPA, transcripts, certificates, portfolios, and subscription status.",
  path: "/dashboard-preview/"
});

export default function DashboardPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
                Future app preview
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
                A parent dashboard for calmer homeschool records.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                This static preview uses mock data only. It is not a login area,
                does not collect student records, and does not connect to a backend.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <h2 className="text-xl font-black text-[#4b2f83]">Preview status</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Mock family workspace. Static page. No auth, no database, no uploads,
                no live student data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-white p-4 shadow-2xl shadow-slate-900/8 ring-1 ring-slate-200/70 sm:rounded-[2rem] sm:p-6 lg:p-8">
          <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-[1.25rem] bg-[#4b2f83] p-5 text-white sm:rounded-[1.5rem]">
              <p className="text-sm font-black text-[#f1d28a]">Traveling Scholars</p>
              <div className="mt-5 text-2xl font-black leading-tight">Parent Dashboard</div>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Future app structure for parent-controlled homeschool records.
              </p>

              <div className="mt-8 grid gap-2 text-sm font-black">
                {["Home", "Students", "Attendance", "Gradebook", "Transcripts", "Certificates", "Portfolio", "Plan"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="grid gap-5">
              <section className="rounded-[1.25rem] border border-slate-200 bg-[#f8f4ee] p-5 sm:rounded-[1.5rem] sm:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b88a2d]">Welcome back</p>
                    <h2 className="mt-2 text-3xl font-black leading-tight text-[#080d22] sm:text-4xl">
                      The Harper Family
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                      Three student records organized for the 2026-2027 school year.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">Subscription</p>
                    <p className="mt-2 text-xl font-black text-[#4b2f83]">Founding Family</p>
                    <p className="mt-1 text-sm font-bold text-slate-500">Preview placeholder</p>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map(([label, value, suffix, detail]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl">
                    <p className="text-sm font-black text-slate-500">{label}</p>
                    <div className="mt-3 flex items-end gap-2">
                      <p className="text-4xl font-black text-[#4b2f83]">{value}</p>
                      <p className="pb-1 text-sm font-bold text-slate-500">{suffix}</p>
                    </div>
                    <p className="mt-4 text-sm font-bold leading-6 text-slate-600">{detail}</p>
                  </div>
                ))}
              </section>

              <section>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b88a2d]">Students</p>
                    <h2 className="mt-2 text-2xl font-black text-[#080d22]">Student records at a glance</h2>
                  </div>
                  <span className="rounded-full bg-[#f3ead7] px-4 py-2 text-sm font-black text-[#4b2f83]">
                    Mock data only
                  </span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {students.map((student) => (
                    <article key={student.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-black text-[#4b2f83]">{student.name}</h3>
                          <p className="mt-1 text-sm font-bold text-slate-500">{student.level}</p>
                        </div>
                        <span className="rounded-full bg-[#f8f4ee] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#b88a2d]">
                          Active
                        </span>
                      </div>

                      <div className="mt-6 grid gap-3 text-sm font-bold text-slate-700">
                        <div className="flex justify-between gap-3 rounded-xl bg-[#f8f4ee] px-4 py-3">
                          <span>Attendance</span>
                          <span>{student.attendance}</span>
                        </div>
                        <div className="flex justify-between gap-3 rounded-xl bg-[#f8f4ee] px-4 py-3">
                          <span>GPA</span>
                          <span>{student.gpa}</span>
                        </div>
                        <div className="flex justify-between gap-3 rounded-xl bg-[#f8f4ee] px-4 py-3">
                          <span>Transcript</span>
                          <span>{student.transcript}</span>
                        </div>
                        <div className="flex justify-between gap-3 rounded-xl bg-[#f8f4ee] px-4 py-3">
                          <span>Portfolio</span>
                          <span>{student.portfolio}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <h2 className="text-2xl font-black text-[#4b2f83]">Transcript readiness</h2>
                  <p className="mt-3 leading-7 text-slate-700">
                    Future workflow for reviewing courses, credits, grades, GPA,
                    and parent-created transcript wording before export.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {readinessItems.map(([item, status]) => (
                      <div key={item} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#f8f4ee] px-4 py-3">
                        <span className="font-black text-slate-800">{item}</span>
                        <span className="rounded-full bg-white px-3 py-2 text-sm font-black text-[#4b2f83]">{status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                    <h2 className="text-2xl font-black text-[#4b2f83]">Documents</h2>
                    <div className="mt-5 grid gap-3 text-sm font-bold text-slate-700">
                      <div className="flex justify-between rounded-xl bg-[#f8f4ee] px-4 py-3">
                        <span>Certificates</span>
                        <span>6 drafts</span>
                      </div>
                      <div className="flex justify-between rounded-xl bg-[#f8f4ee] px-4 py-3">
                        <span>Portfolio items</span>
                        <span>38 saved</span>
                      </div>
                      <div className="flex justify-between rounded-xl bg-[#f8f4ee] px-4 py-3">
                        <span>Exports</span>
                        <span>Preview only</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                    <h2 className="text-2xl font-black text-[#4b2f83]">Reminders</h2>
                    <div className="mt-5 grid gap-3">
                      {activity.map((item) => (
                        <div key={item} className="rounded-xl bg-[#f8f4ee] px-4 py-3 text-sm font-bold leading-6 text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d6a84f]/40 bg-[#fffaf0] p-5 text-center shadow-sm sm:rounded-3xl sm:p-7">
          <h2 className="text-xl font-black text-[#4b2f83]">Future app preview only</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-slate-800 sm:text-base sm:leading-8">
            This page is a static prototype with fictional records. Traveling Scholars
            is not an accredited school or curriculum provider, and parents remain
            responsible for instruction, records accuracy, and homeschool legal compliance.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
