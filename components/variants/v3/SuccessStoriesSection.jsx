"use client";

import { useRef } from "react";

export default function SuccessStoriesSection({ asset, stories }) {
  const carouselRef = useRef(null);
  const carouselStories = [...stories, ...stories];

  const scrollCarousel = () => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector("[data-success-card]");

    if (!carousel || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap || "0");
    const step = firstCard.getBoundingClientRect().width + gap;
    const nearEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - step * 1.2;

    carousel.scrollTo({
      left: nearEnd ? 0 : carousel.scrollLeft + step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="case-studies"
      className="relative isolate grid scroll-mt-0 justify-items-center overflow-hidden bg-white px-5 pb-16 pt-20 md:px-8 md:pb-[92px] md:pt-[118px] lg:px-12 lg:pb-[118px] lg:pt-[148px]"
    >
      <img
        className="pointer-events-none absolute left-[-330px] top-[-250px] z-0 h-auto w-[1640px] max-w-none opacity-[0.16] md:left-[-250px] md:top-[-245px] md:w-[1740px] lg:left-[-160px] lg:top-[-238px] lg:w-[1780px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />

      <h2 className="relative z-10 m-0 mb-12 text-center text-[34px] font-extrabold leading-[1.08] tracking-[0] text-[#161821] md:mb-[72px] md:text-[52px] lg:mb-[88px] lg:text-[68px]">
        Our Success Stories
      </h2>

      <div className="relative z-10 flex w-full max-w-[1120px] items-center gap-5 lg:max-w-[1290px] lg:gap-7">
        <div
          ref={carouselRef}
          className="flex w-full snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Success stories carousel"
        >
          {carouselStories.map((story, index) => {
            const [statValue, ...statLabelParts] = story.stat.split("\n");
            const statLabel = statLabelParts.join(" ");

            return (
              <article
                className="reveal-card w-full flex-[0_0_100%] snap-start overflow-hidden rounded-[20px] border border-[rgba(22,24,33,0.12)] bg-white shadow md:flex-[0_0_calc((100%_-_2rem)/2)] lg:flex-[0_0_calc((100%_-_4rem)/3)]"
                data-success-card
                key={`${story.title}-${index}`}
              >
                <img className="h-[206px] w-full object-cover md:h-[220px] lg:h-[234px]" src={asset(story.image)} alt="" />
                <div className="px-8 pb-8 pt-7 md:px-9 md:pb-9 md:pt-8 lg:px-9 lg:pb-10">
                  <h3 className="m-0 max-w-[270px] text-[26px] font-extrabold leading-[1.05] text-[#f37135] md:text-[28px] lg:text-[30px]">
                    {story.title}
                  </h3>
                  <strong className="mt-5 block text-[62px] font-black leading-[0.95] tracking-[-0.03em] text-[#161821] md:text-[76px] lg:text-[88px]">
                    {statValue}
                  </strong>
                  <p className="m-0 mt-1 text-[24px] font-extrabold leading-[1.12] text-[#161821] md:text-[26px] lg:text-[28px]">
                    {statLabel}
                  </p>
                  <div className="mt-6 h-[2px] w-full bg-[linear-gradient(90deg,#f37135_0%,#ef4169_100%)]" />
                  <p className="m-0 mt-5 min-h-[92px] text-[17px] leading-[1.42] text-[rgba(22,24,33,0.54)] md:text-[18px]">
                    {story.text}
                  </p>
                  <a
                    className="mt-8 inline-flex min-h-[46px] items-center justify-center gap-6 rounded-[7px] border border-[#161821] bg-white px-5 text-[17px] font-bold leading-none text-[#161821] no-underline transition-colors duration-200 hover:bg-[#161821] hover:text-white"
                    href="/case-studies"
                  >
                    <span>Read More</span>
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <button
          className="hidden shrink-0 text-[72px] font-light leading-none text-[#05060a] transition-transform duration-200 hover:translate-x-1 lg:inline-flex lg:pl-1"
          type="button"
          onClick={scrollCarousel}
          aria-label="Next success story"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
