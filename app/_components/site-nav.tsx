import Image from "next/image";

const links = [
  ["Features", "/features/"],
  ["App Preview", "/app-preview/"],
  ["Pricing", "/pricing/"],
  ["FAQ", "/faq/"],
  ["About", "/about/"]
];

type SiteNavProps = {
  ctaHref?: string;
};

export function SiteNav({ ctaHref = "/#early-access" }: SiteNavProps) {
  return (
    <nav className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-5">
      <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
        <Image
          src="/logo.jpg"
          alt="Traveling Scholars Foundation Inc. logo"
          width={1536}
          height={1024}
          sizes="(min-width: 640px) 96px, 72px"
          priority
          className="h-12 w-[72px] shrink-0 rounded-xl object-cover shadow-sm ring-1 ring-black/5 sm:h-16 sm:w-24"
        />
        <span className="min-w-0">
          <span className="block text-lg font-black leading-tight text-[#4b2f83] sm:text-2xl">
            Traveling Scholars
          </span>
          <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-sm">
            Foundation Inc.
          </span>
        </span>
      </a>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-black text-slate-700">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#4b2f83]">
              {label}
            </a>
          ))}
        </div>
        <a href={ctaHref} className="w-full shrink-0 rounded-full bg-[#4b2f83] px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770] sm:w-auto sm:px-6">
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
}
