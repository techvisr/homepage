"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import CarouselControls from "./CarouselControls";

export default function SuccessStoriesSection({ asset, stories }) {
  const carouselRef = useRef(null);

  return (
    <section
      id="case-studies"
      className="relative isolate grid scroll-mt-0 justify-items-center overflow-hidden bg-[#fffdfb] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
    >
      <h2 className="relative z-10 m-0 mb-10 w-full text-center text-[45px] font-semibold leading-none tracking-[0] text-[#161821] [font-family:var(--font-figma-display),Barlow,sans-serif] max-[820px]:text-[clamp(26px,7.3vw,32px)] max-[820px]:leading-[1.14] md:mb-14 lg:mb-16">
        Our Success Stories
      </h2>

      <div className="relative z-10 grid w-full min-w-0 max-w-[1180px] overflow-hidden 2xl:max-w-[1320px]">
        <div
          ref={carouselRef}
          id="success-stories-carousel"
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
                <div className="success-story-media relative shrink-0">
                  <img className="h-32 w-full object-cover min-[360px]:h-36 sm:h-48 md:h-52 lg:h-[214px]" src={asset(story.image)} alt="" />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-6 md:px-8 md:pb-8 md:pt-7 lg:px-8 lg:pb-9">
                  <h3 className="success-story-title m-0 max-w-[270px] text-base font-extrabold leading-[1.08] sm:text-2xl md:text-[26px]">
                    {story.title === "SaaS Product Launch" ? <>SaaS Product<br />Launch</> : story.title}
                  </h3>
                  <strong className="success-story-metric">{statValue}</strong>
                  <p className="m-0 mt-1 text-base font-extrabold leading-[1.15] text-[#161821] sm:text-xl md:text-2xl">
                    {statLabel}
                  </p>
                  <a
                    className="figma-secondary-button relative self-start mt-6 inline-flex min-h-9 w-max max-w-full items-center justify-center gap-3 px-4 py-2 text-sm font-semibold leading-tight no-underline sm:mt-8 sm:min-h-10 sm:gap-4 sm:px-6 sm:text-[17px] lg:text-lg"
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

        {stories.length > 1 && <CarouselControls carouselRef={carouselRef} carouselId="success-stories-carousel" itemLabel="success story" />}
      </div>
    </section>
  );
}
