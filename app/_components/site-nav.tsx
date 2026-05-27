import Image from "next/image";

const links = [
  ["Features", "/features/"],
  ["App Preview", "/app-preview/"],
  ["Dashboard Preview", "/dashboard-preview/"],
  ["Pricing", "/pricing/"],
  ["FAQ", "/faq/"],
  ["About", "/about/"]
];

type SiteNavProps = {
  ctaHref?: string;
};

export function SiteNav({ ctaHref = "/#early-access" }: SiteNavProps) {
  return (
    <nav className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
        <a href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md shadow-slate-900/5 ring-1 ring-[#d6a84f]/40 sm:h-14 sm:w-14">
            <Image
              src="/logo-mark.png"
              alt="Traveling Scholars Foundation Inc. logo"
              width={360}
              height={319}
              sizes="56px"
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-black leading-tight text-[#4b2f83] sm:text-2xl">
              Traveling Scholars
            </span>
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-sm sm:tracking-[0.16em]">
              Foundation Inc.
            </span>
          </span>
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl bg-white text-xl font-black text-[#4b2f83] shadow-md shadow-slate-900/5 ring-1 ring-slate-200 transition hover:ring-[#d6a84f] [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">☰</span>
            <span className="hidden group-open:inline">×</span>
          </summary>
          <div className="absolute right-0 top-14 z-20 w-[min(20rem,calc(100vw-2rem))] rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/15">
            <div className="grid gap-1.5">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="rounded-2xl px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-[#f8f4ee] hover:text-[#4b2f83]">
                  {label}
                </a>
              ))}
            </div>
            <a href={ctaHref} className="mt-3 block w-full rounded-2xl bg-[#4b2f83] px-5 py-4 text-center text-sm font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
              Join the Waitlist →
            </a>
          </div>
        </details>
      </div>

      <div className="hidden w-full flex-col gap-3 lg:flex lg:w-auto lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-black text-slate-700">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 transition hover:text-[#4b2f83]">
              {label}
            </a>
          ))}
        </div>
        <a href={ctaHref} className="hidden shrink-0 rounded-full bg-[#4b2f83] px-6 py-3 text-center text-sm font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770] lg:inline-block">
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
}
