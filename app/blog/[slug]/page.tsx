import { notFound } from "next/navigation";
import { SiteFooter } from "../../_components/site-footer";
import { SiteNav } from "../../_components/site-nav";
import { pageMetadata } from "../../seo";
import { blogPosts, getBlogPost } from "../blog-data";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:py-7">
        <SiteNav />

        <article className="py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b88a2d] sm:text-sm sm:tracking-[0.32em]">
            {post.category} · {post.readTime}
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#080d22] sm:text-5xl md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {post.intro}
          </p>

          <div className="mt-10 grid gap-4 sm:flex sm:flex-wrap">
            {post.relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center font-black text-[#4b2f83] shadow-sm transition hover:border-[#d6a84f]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black leading-tight text-[#080d22]">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <h2 className="text-3xl font-black leading-tight text-[#080d22]">
            Parent questions
          </h2>

          <div className="mt-8 space-y-6">
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-black text-[#4b2f83]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080d22] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Keep homeschool records organized and parent-controlled.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            Traveling Scholars is being built to help families organize homeschool records, transcripts,
            attendance, portfolios, certificates, and student recognition. It is not an accredited school,
            curriculum provider, diploma-granting institution, government record authority, or legal compliance
            service. Parents remain responsible for instruction, compliance, and record accuracy.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/resources/" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#080d22]">
              Visit Resource Library
            </a>
            <a href="/contact/" className="rounded-2xl border border-white/20 px-6 py-4 text-center font-black text-white">
              Join Launch Updates
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}