const footerLinks = [
  ["Privacy", "/privacy/"],
  ["Terms", "/terms/"],
  ["Contact", "/contact/"]
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-black text-[#4b2f83]">Traveling Scholars</div>
          <p className="text-sm text-slate-500">Learning Beyond Walls, Growing Beyond Limits.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-bold text-slate-500 sm:flex-row sm:items-center sm:gap-5">
          {footerLinks.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#4b2f83]">
              {label}
            </a>
          ))}
          <span>&copy; 2026 Traveling Scholars Foundation Inc.</span>
        </div>
      </div>
    </footer>
  );
}
