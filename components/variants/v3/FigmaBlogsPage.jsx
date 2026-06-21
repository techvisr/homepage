"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, RefreshCw, Search } from "lucide-react";
import FigmaFooter from "./FigmaFooter";
import HeaderActionButton from "./HeaderActionButton";
import SiteHeader from "./SiteHeader";
import { asset } from "./figmaContent";
import {
  blogCategories,
  blogHeroVideo,
  blogPosts,
  certificationBadges,
} from "./blogContent";

const PAGE_SIZE = 6;

function useBlogReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-blog-reveal]")];

    if (!elements.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  });
}

function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.56] saturate-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src={blogHeroVideo}
      />
      <div
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_60%,rgba(29,113,170,0.28),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.42))]"
        aria-hidden="true"
      />
      <div className="relative z-20 mx-auto grid min-h-[340px] max-w-5xl content-center justify-items-center px-4 py-16 text-center sm:min-h-[420px] sm:px-6 lg:min-h-[500px] lg:py-20">
        <h1 className="m-0 max-w-[340px] text-[2rem] font-extrabold leading-[1.05] tracking-[0] text-white motion-safe:animate-[heroReveal_800ms_ease_both] sm:max-w-none sm:text-[3rem] lg:text-[3.6rem]">
          Blogs and Insights
        </h1>
        <p className="m-0 mt-5 max-w-[330px] text-sm font-medium leading-6 text-white/90 motion-safe:animate-[heroReveal_800ms_120ms_ease_both] sm:max-w-3xl sm:text-xl sm:leading-8 lg:max-w-4xl lg:text-2xl">
          Explore thought leadership, engineering best practices, and AI-driven innovations helping organizations navigate digital transformation.
        </p>
        <HeaderActionButton
          href="/contact"
          light
          compact
          className="blog-button-lift mt-7 min-h-11 rounded-lg px-5 py-3 text-sm font-bold motion-safe:animate-[heroReveal_800ms_220ms_ease_both] sm:text-base"
        >
          Talk To Our Experts
        </HeaderActionButton>
      </div>
    </section>
  );
}

function BlogCard({ post, index }) {
  return (
    <article
      className="blog-card-lift blog-reveal flex min-h-[500px] min-w-0 max-w-full flex-col overflow-hidden rounded-[8px] border border-[rgba(22,24,33,0.15)] bg-white shadow-[0_12px_28px_rgba(22,24,33,0.04)]"
      data-blog-reveal
      style={{ "--blog-reveal-delay": `${(index % PAGE_SIZE) * 70}ms` }}
    >
      <a className="group block overflow-hidden bg-[#05060a]" href={`/blogs/${post.slug}`} aria-label={post.title}>
        <img
          className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-[1.035]"
          src={post.image}
          alt={post.imageAlt}
        />
      </a>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase leading-none text-[#8d8d8d]">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-[#f37135]" aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
        <h2 className="m-0 mt-4 break-words text-[1.45rem] font-extrabold leading-[1.12] tracking-[0] text-[#ff7436]">
          <a className="text-current no-underline" href={`/blogs/${post.slug}`}>
            {post.title}
          </a>
        </h2>
        <p className="m-0 mt-4 text-base font-medium leading-7 text-[#858585]">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-6">
          <div className="h-[2px] w-full bg-[linear-gradient(90deg,#f36b35_0%,#f04c68_100%)]" />
          <a
            className="blog-button-lift mt-6 inline-flex min-h-10 w-fit items-center justify-center gap-3 rounded-[6px] border border-[#161821] bg-white px-4 text-sm font-extrabold leading-none text-[#161821] no-underline transition hover:bg-[#161821] hover:text-white"
            href={`/blogs/${post.slug}`}
          >
            <span>View Blog</span>
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </article>
  );
}

function BlogLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const searchable = [
        post.title,
        post.category,
        post.excerpt,
        post.summary,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-24">
      <img
        className="pointer-events-none absolute left-[-560px] top-[130px] z-0 h-auto w-[1680px] max-w-none opacity-[0.12] md:left-[-360px] lg:left-[-170px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="pointer-events-none absolute bottom-[-480px] right-[-620px] z-0 h-auto w-[1700px] max-w-none rotate-180 opacity-[0.12] lg:right-[-360px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1080px]">
        <h2
          className="blog-reveal m-0 mx-auto max-w-[340px] text-center text-[2rem] font-extrabold leading-[1.12] tracking-[0] text-[#161821] sm:max-w-[840px] sm:text-5xl lg:text-[4rem]"
          data-blog-reveal
        >
          Start Your Digital Transformation Journey
        </h2>

        <div
          className="blog-reveal mt-10 flex flex-col gap-5 border-y border-[rgba(22,24,33,0.1)] py-5 lg:flex-row lg:items-center lg:justify-between"
          data-blog-reveal
          style={{ "--blog-reveal-delay": "80ms" }}
        >
          <div
            className="blog-category-rail flex w-full min-w-0 flex-nowrap gap-3 overflow-x-auto pb-2 lg:flex-1"
            role="tablist"
            aria-label="Blog categories"
          >
            {blogCategories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  className={[
                    "min-h-10 flex-none whitespace-nowrap rounded-[6px] px-4 text-xs font-extrabold leading-tight transition sm:px-5 sm:text-sm",
                    isActive
                      ? "bg-[#161821] text-white shadow-[0_10px_20px_rgba(22,24,33,0.12)]"
                      : "bg-transparent text-[#858585] hover:bg-[#f4f4f4] hover:text-[#161821]",
                  ].join(" ")}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <label className="relative block w-full lg:w-[360px] lg:shrink-0">
            <span className="sr-only">Search blogs</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#f37135]"
              size={18}
              strokeWidth={2.1}
              aria-hidden="true"
            />
            <input
              className="blog-search-input h-11 w-full rounded-[6px] border border-[#ff9b76] bg-white pl-11 pr-4 text-sm font-semibold text-[#161821] outline-none placeholder:text-[#8d8d8d] focus:border-[#f37135] focus:ring-2 focus:ring-[#f37135]/20"
              type="search"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search Bar"
            />
          </label>
        </div>

        {visiblePosts.length ? (
          <div className="mt-10 grid w-full min-w-0 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <BlogCard post={post} index={index} key={post.slug} />
            ))}
          </div>
        ) : (
          <div className="blog-reveal mt-10 rounded-[8px] border border-[#ff9b76] bg-white p-8 text-center shadow-[0_12px_28px_rgba(22,24,33,0.04)]" data-blog-reveal>
            <h3 className="m-0 text-2xl font-extrabold text-[#161821]">No matching insights yet</h3>
            <p className="m-0 mt-3 text-base font-medium leading-7 text-[#858585]">
              Try a different category or search term.
            </p>
          </div>
        )}

        {hasMore ? (
          <div className="mt-10 grid justify-items-center">
            <button
              className="blog-button-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border-2 border-[#161821] bg-white px-6 text-base font-extrabold leading-none text-[#161821] hover:bg-[#161821] hover:text-white"
              type="button"
              onClick={() => setVisibleCount((current) => current + 3)}
            >
              <span>Load more</span>
              <RefreshCw size={18} strokeWidth={2.2} />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function BlogCta() {
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
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.42))]" aria-hidden="true" />
      <div
        className="blog-reveal relative z-20 mx-auto grid max-w-[920px] justify-items-center text-center"
        data-blog-reveal
      >
        <h2 className="m-0 max-w-[840px] text-[2.15rem] font-extrabold leading-[1.05] tracking-[0] text-white sm:text-5xl lg:text-[3.65rem]">
          Why Leading Businesses Choose Techvisr
        </h2>
        <p className="m-0 mt-5 max-w-[860px] text-base font-medium leading-7 text-white/88 sm:text-xl sm:leading-8">
          From AI-native engineering to cloud modernization, we help organizations build scalable digital solutions that accelerate innovation, improve operational efficiency, and support long-term business growth.
        </p>
        <HeaderActionButton
          href="/contact"
          light
          compact
          className="blog-button-lift mt-7 min-h-11 rounded-lg px-5 py-3 text-sm font-bold sm:text-base"
        >
          Contact Us
        </HeaderActionButton>
      </div>
    </section>
  );
}

export default function FigmaBlogsPage() {
  useBlogReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#161821] [font-family:var(--font-figma-body),Roboto,sans-serif]">
      <SiteHeader />
      <main>
        <BlogHero />
        <BlogLibrary />
        <BlogCta />
      </main>
      <FigmaFooter asset={asset} certificationBadges={certificationBadges} showDescription={false} />
    </div>
  );
}
