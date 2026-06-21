"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";
import FigmaFooter from "./FigmaFooter";
import HeaderActionButton from "./HeaderActionButton";
import SiteHeader from "./SiteHeader";
import { asset } from "./figmaContent";
import { blogHeroVideo, certificationBadges } from "./blogContent";

function BlogArticleHero({ post }) {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.5] saturate-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src={blogHeroVideo}
      />
      <div
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_66%,rgba(29,113,170,0.28),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.52))]"
        aria-hidden="true"
      />
      <div className="relative z-20 mx-auto grid min-h-[460px] max-w-[1080px] content-center px-4 py-16 sm:px-6 lg:min-h-[560px] lg:px-12 lg:py-20">
        <a
          className="blog-button-lift mb-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-white/86 no-underline hover:text-white"
          href="/blogs"
        >
          <ArrowLeft size={17} strokeWidth={2.3} />
          <span>Back to Blogs</span>
        </a>
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase leading-none text-white/78">
          <span className="rounded-[4px] bg-[#ff7436] px-3 py-2 text-white">{post.category}</span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} strokeWidth={2.1} />
            {post.displayDate}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 size={16} strokeWidth={2.1} />
            {post.readTime}
          </span>
        </div>
        <h1 className="m-0 mt-6 max-w-[960px] text-[2.2rem] font-extrabold leading-[1.04] tracking-[0] text-white sm:text-5xl lg:text-[4.2rem]">
          {post.title}
        </h1>
        <p className="m-0 mt-6 max-w-[880px] text-base font-medium leading-7 text-white/88 sm:text-xl sm:leading-8">
          {post.summary}
        </p>
        <HeaderActionButton
          href="/contact"
          light
          compact
          className="blog-button-lift mt-8 min-h-11 w-fit rounded-lg px-5 py-3 text-sm font-bold sm:text-base"
        >
          Discuss This Topic
        </HeaderActionButton>
      </div>
    </section>
  );
}

function ArticleSection({ section, index }) {
  return (
    <section className="blog-article-section" id={`section-${index + 1}`}>
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets?.length ? (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function RelatedCard({ post }) {
  return (
    <article className="blog-card-lift overflow-hidden rounded-[8px] border border-[rgba(22,24,33,0.14)] bg-white shadow-[0_12px_28px_rgba(22,24,33,0.04)]">
      <a className="group relative block h-40 overflow-hidden bg-[#05060a]" href={`/blogs/${post.slug}`} aria-label={post.title}>
        <Image
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </a>
      <div className="p-5">
        <span className="text-xs font-extrabold uppercase leading-none text-[#8d8d8d]">{post.category}</span>
        <h3 className="m-0 mt-3 text-xl font-extrabold leading-[1.14] tracking-[0] text-[#ff7436]">
          <a className="text-current no-underline" href={`/blogs/${post.slug}`}>
            {post.title}
          </a>
        </h3>
        <a
          className="blog-button-lift mt-5 inline-flex min-h-10 w-fit items-center justify-center gap-3 rounded-[6px] border border-[#161821] bg-white px-4 text-sm font-extrabold leading-none text-[#161821] no-underline hover:bg-[#161821] hover:text-white"
          href={`/blogs/${post.slug}`}
        >
          <span>View Blog</span>
          <ArrowRight size={17} strokeWidth={2.4} />
        </a>
      </div>
    </article>
  );
}

function BlogArticleBody({ post }) {
  return (
    <main className="blog-article-shell relative isolate overflow-x-clip px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <div className="relative z-10 mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <article className="min-w-0">
          <figure className="relative m-0 h-[260px] overflow-hidden rounded-[8px] border border-[rgba(22,24,33,0.12)] bg-[#05060a] shadow-[0_18px_42px_rgba(22,24,33,0.08)] sm:h-[360px] lg:h-[430px]">
            <Image
              className="object-cover"
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(min-width: 1024px) 740px, 100vw"
              priority
            />
          </figure>

          <div className="blog-article-body mt-10">
            <p className="blog-article-lede">{post.excerpt}</p>
            {post.sections.map((section, index) => (
              <ArticleSection section={section} index={index} key={section.heading} />
            ))}
            <section className="blog-article-section">
              <h2>Final Thought</h2>
              <p>{post.closing}</p>
            </section>
          </div>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[8px] border border-[#ff9b76] bg-white p-6 shadow-[0_14px_34px_rgba(22,24,33,0.06)]">
            <h2 className="m-0 text-xl font-extrabold leading-tight text-[#161821]">Key Takeaways</h2>
            <ul className="m-0 mt-5 grid list-none gap-4 p-0">
              {post.keyTakeaways.map((takeaway) => (
                <li className="flex gap-3 text-sm font-semibold leading-6 text-[#5f5f5f]" key={takeaway}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#ff7436]" size={18} strokeWidth={2.4} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-[8px] bg-[#161821] p-6 text-white shadow-[0_14px_34px_rgba(22,24,33,0.12)]">
            <h2 className="m-0 text-xl font-extrabold leading-tight text-white">Plan your next move</h2>
            <p className="m-0 mt-3 text-sm font-medium leading-6 text-white/78">
              Talk with Techvisr about product engineering, AI automation, cloud modernization, or delivery acceleration.
            </p>
            <HeaderActionButton
              href="/contact"
              light
              compact
              className="blog-button-lift mt-5 min-h-10 rounded-lg px-4 py-2 text-sm font-bold"
            >
              Contact Us
            </HeaderActionButton>
          </div>
        </aside>
      </div>
    </main>
  );
}

function RelatedPosts({ posts }) {
  return (
    <section className="relative bg-[#f3f3f3] px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="m-0 text-center text-[2rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-5xl lg:text-[3.4rem]">
          Related Insights
        </h2>
        <div className="mt-9 grid gap-7 md:grid-cols-3">
          {posts.map((post) => (
            <RelatedCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogArticleCta() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-14 text-white sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.62] saturate-[1.05]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src={blogHeroVideo}
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.44))]" aria-hidden="true" />
      <div className="relative z-20 mx-auto grid max-w-[880px] justify-items-center text-center">
        <h2 className="m-0 max-w-[780px] text-[2.1rem] font-extrabold leading-[1.05] tracking-[0] text-white sm:text-5xl lg:text-[3.55rem]">
          Build the Next Version of Your Digital Business
        </h2>
        <p className="m-0 mt-5 max-w-[820px] text-base font-medium leading-7 text-white/88 sm:text-xl sm:leading-8">
          Bring us the challenge. We will help shape the roadmap, architecture, engineering plan, and delivery model to move it forward.
        </p>
        <HeaderActionButton
          href="/contact"
          light
          compact
          className="blog-button-lift mt-7 min-h-11 rounded-lg px-5 py-3 text-sm font-bold sm:text-base"
        >
          Talk To Our Experts
        </HeaderActionButton>
      </div>
    </section>
  );
}

export default function FigmaBlogArticlePage({ post, relatedPosts }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#161821] [font-family:var(--font-figma-body),Roboto,sans-serif]">
      <SiteHeader />
      <BlogArticleHero post={post} />
      <BlogArticleBody post={post} />
      <RelatedPosts posts={relatedPosts} />
      <BlogArticleCta />
      <FigmaFooter asset={asset} certificationBadges={certificationBadges} showDescription={false} />
    </div>
  );
}
