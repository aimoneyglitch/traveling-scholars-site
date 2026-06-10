import { SiteFooter } from "../_components/site-footer";
import { SiteNav } from "../_components/site-nav";
import { pageMetadata } from "../seo";
import { blogPosts } from "./blog-data";

export const metadata = pageMetadata({
  title: "Homeschool Blog | Traveling Scholars",
  description:
    "Read parent-focused homeschool articles about transcripts, credits, attendance records, record keeping, portfolios, certificates, and graduation planning.",
  path: "/blog/"
});

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            Homeschool blog
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            Practical homeschool record keeping articles for parent-led families.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Explore clear, parent-focused guides about homeschool transcripts, attendance, credits,
            portfolios, certificates, and record organization. These articles support family documentation
            and planning without claiming to replace parent responsibility.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/resources/"
              className="rounded-2xl bg-[#4b2f83] px-6 py-4 text-center font-black text-white shadow-xl shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]"
            >
              Visit Resource Library
            </a>
            <a
              href="/contact/"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-black text-slate-900 shadow-sm transition hover:border-[#d6a84f]"
            >
              Join Launch Updates
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="rounded-3xl border border-slate-200 bg-[#f8f4ee] p-6 shadow-sm transition hover:border-[#d6a84f] hover:bg-white"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b88a2d]">
                  {post.category} · {post.readTime}
                </p>
                <h2 className="mt-4 text-2xl font-black leading-tight text-[#080d22]">
                  {post.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-700">{post.description}</p>
                <span className="mt-5 inline-flex font-black text-[#8f6720]">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080d22] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Built for the future Traveling Scholars platform.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            These articles support the same product direction as Traveling Scholars: parent-controlled
            homeschool records, transcript readiness, attendance, grade organization, portfolios, certificates,
            and student recognition.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
