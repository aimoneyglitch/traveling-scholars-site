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
    <nav className="flex flex-col gap-3 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
        <a href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-[#d6a84f]/35 sm:h-14 sm:w-14">
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

        <a href={ctaHref} className="shrink-0 rounded-full bg-[#4b2f83] px-4 py-2.5 text-center text-xs font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770] sm:px-5 sm:py-3 sm:text-sm lg:hidden">
          Join
        </a>
      </div>

      <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-1 text-sm font-black text-slate-700 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
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
