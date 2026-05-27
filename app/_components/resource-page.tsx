import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";

type ResourceSection = {
  title: string;
  body: string;
  points?: string[];
};

type ResourceLink = {
  href: string;
  label: string;
};

type ResourcePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: ResourceSection[];
  links: ResourceLink[];
};

export function ResourcePage({ eyebrow, title, intro, sections, links }: ResourcePageProps) {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#080d22] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {intro}
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5 sm:rounded-3xl sm:p-7">
              <h2 className="text-2xl font-black text-[#4b2f83]">{section.title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{section.body}</p>
              {section.points ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {section.points.map((point) => (
                    <div key={point} className="rounded-xl bg-[#f8f4ee] px-4 py-3 text-sm font-bold leading-6 text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-[#f8f4ee] p-5 shadow-sm sm:rounded-3xl sm:p-7">
          <h2 className="text-xl font-black text-[#4b2f83]">Related resources</h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#4b2f83] shadow-sm transition hover:text-[#3f2770]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
