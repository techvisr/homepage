"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SuccessStoriesSection({ asset, stories }) {
  const carouselRef = useRef(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const getCarouselStep = () => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector("[data-success-card]");

    if (!carousel || !firstCard) {
      return 0;
    }

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap || "0");
    return firstCard.getBoundingClientRect().width + gap;
  };

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const step = getCarouselStep();

    if (!carousel || !step) {
      return;
    }

    const nextIndex = (activeStoryIndex + direction + stories.length) % stories.length;

    carousel.scrollTo({
      left: step * nextIndex,
      behavior: "smooth",
    });

    setActiveStoryIndex(nextIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return undefined;
    }

    const updateActiveIndex = () => {
      const step = getCarouselStep();

      if (!step) {
        return;
      }

      const nextIndex = Math.round(carousel.scrollLeft / step);
      setActiveStoryIndex(Math.max(0, Math.min(stories.length - 1, nextIndex)));
    };

    carousel.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    updateActiveIndex();

    return () => {
      carousel.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [stories.length]);

  return (
    <section
      id="case-studies"
      className="relative isolate grid scroll-mt-0 justify-items-center overflow-hidden bg-[#fffdfb] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(72%_52%_at_50%_0%,rgba(243,113,53,0.08)_0%,rgba(255,253,251,0.8)_48%,rgba(255,255,255,0)_76%),linear-gradient(180deg,#ffffff_0%,#fffdfb_42%,#ffffff_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.26] [background-image:radial-gradient(circle_at_1px_1px,rgba(243,113,53,0.18)_1px,transparent_0)] [background-size:30px_30px] [mask-image:radial-gradient(70%_58%_at_50%_48%,#000_0%,rgba(0,0,0,0.7)_48%,transparent_84%)]"
      />
      <img
        className="story-wave-layer pointer-events-none absolute left-[-520px] top-[-260px] z-0 h-auto w-[1620px] max-w-none opacity-[0.16] md:left-[-340px] md:top-[-270px] md:w-[1740px] lg:left-[-180px] lg:top-[-270px] lg:w-[1840px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="story-wave-layer pointer-events-none absolute bottom-[-420px] right-[-620px] z-0 h-auto w-[1460px] max-w-none rotate-180 opacity-[0.1] md:bottom-[-500px] md:right-[-430px] md:w-[1680px] lg:bottom-[-600px] lg:right-[-280px] lg:w-[1820px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />

      <h2 className="relative z-10 m-0 mb-10 w-full text-center text-3xl font-extrabold leading-[1.1] tracking-[0] text-[#161821] sm:text-4xl md:mb-14 md:text-5xl lg:mb-16 lg:text-[3.5rem] xl:text-[4rem]">
        Our Success Stories
      </h2>

      <div className="relative z-10 grid w-full min-w-0 max-w-[1180px] gap-6 overflow-hidden 2xl:max-w-[1320px]">
        <div
          ref={carouselRef}
          className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-14 lg:gap-8 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Success stories carousel"
        >
          {stories.map((story, index) => {
            const [statValue, ...statLabelParts] = story.stat.split("\n");
            const statLabel = statLabelParts.join(" ");

            return (
              <article
                className="reveal-card flex h-full w-full flex-[0_0_88%] snap-start flex-col overflow-hidden rounded-xl border border-[rgba(22,24,33,0.12)] bg-white shadow-[0_10px_26px_rgba(22,24,33,0.08)] min-[420px]:flex-[0_0_82%] sm:flex-[0_0_calc((100%_-_3.5rem)/2)] sm:rounded-2xl lg:flex-[1_1_0] lg:snap-none lg:shadow-[0_14px_32px_rgba(22,24,33,0.08)]"
                data-success-card
                key={story.title}
                style={{ "--reveal-delay": `${index * 70}ms` }}
              >
                <img className="h-32 w-full object-cover min-[360px]:h-36 sm:h-48 md:h-52 lg:h-[214px]" src={asset(story.image)} alt="" />
                <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-6 md:px-8 md:pb-8 md:pt-7 lg:px-8 lg:pb-9">
                  <h3 className="m-0 max-w-[270px] text-base font-extrabold leading-[1.08] text-[#f37135] sm:text-2xl md:text-[26px]">
                    {story.title}
                  </h3>
                  <strong className="mt-3 block text-4xl font-black leading-[0.98] tracking-[0] text-[#161821] sm:mt-4 sm:text-6xl md:text-[4.25rem] xl:text-[4.75rem]">
                    {statValue}
                  </strong>
                  <p className="m-0 mt-1 text-base font-extrabold leading-[1.15] text-[#161821] sm:text-xl md:text-2xl">
                    {statLabel}
                  </p>
                  <div className="mt-4 h-[2px] w-full bg-[linear-gradient(90deg,#f37135_0%,#ef4169_100%)] sm:mt-5" />
                  <p className="m-0 mt-4 min-h-[72px] text-xs leading-5 text-[rgba(22,24,33,0.54)] min-[360px]:text-[13px] sm:mt-5 sm:min-h-[84px] sm:text-[15px] sm:leading-6 md:text-base">
                    {story.text}
                  </p>
                  <a
                    className="mt-auto inline-flex min-h-9 w-max items-center justify-center gap-2.5 rounded-[7px] border border-[#161821] bg-white px-3 text-xs font-bold leading-none text-[#161821] no-underline transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#161821] hover:text-white sm:min-h-11 sm:gap-3 sm:px-4 sm:text-base md:min-h-[46px] md:px-5 md:text-[17px]"
                    href={story.href || "/case-studies"}
                  >
                    <span>Read More</span>
                    <ArrowRight aria-hidden="true" className="size-4 shrink-0 sm:size-5" strokeWidth={2.4} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 lg:hidden">
          <button
            className="grid size-10 place-items-center rounded-full border border-[rgba(22,24,33,0.18)] bg-white text-[#161821] shadow-[0_8px_20px_rgba(22,24,33,0.08)] transition-colors duration-200 hover:bg-[#161821] hover:text-white"
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous success story"
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            {stories.map((story, index) => (
              <span
                className={`h-2 rounded-full transition-[width,background-color] duration-200 ${
                  activeStoryIndex === index ? "w-7 bg-[#f37135]" : "w-2 bg-[rgba(22,24,33,0.2)]"
                }`}
                key={story.title}
              />
            ))}
          </div>
          <button
            className="grid size-10 place-items-center rounded-full border border-[rgba(22,24,33,0.18)] bg-white text-[#161821] shadow-[0_8px_20px_rgba(22,24,33,0.08)] transition-colors duration-200 hover:bg-[#161821] hover:text-white"
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label="Next success story"
          >
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
