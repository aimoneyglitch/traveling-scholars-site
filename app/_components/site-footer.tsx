const footerLinks = [
  ["Privacy", "/privacy/"],
  ["Terms", "/terms/"],
  ["Contact", "/contact/"]
];

const resourceLinks = [
  ["Dashboard Preview", "/dashboard-preview/"],
  ["Resource Library", "/resources/"],
  ["Homeschool Transcripts", "/homeschool-transcripts/"],
  ["Student Portfolios", "/student-portfolios/"],
  ["Record Keeping", "/homeschool-record-keeping/"],
  ["Homeschool Certificates", "/homeschool-certificates/"]
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="text-xl font-black text-[#4b2f83]">Traveling Scholars</div>
          <p className="text-sm text-slate-500">Learning Beyond Walls, Growing Beyond Limits.</p>
        </div>
        <div className="grid gap-5 text-sm font-bold text-slate-500 sm:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-slate-400">Resources</p>
            <div className="mt-3 grid gap-2">
              {resourceLinks.map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-[#4b2f83]">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-slate-400">Site</p>
            <div className="mt-3 grid gap-2">
              {footerLinks.map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-[#4b2f83]">
                  {label}
                </a>
              ))}
              <span>&copy; 2026 Traveling Scholars Foundation Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

