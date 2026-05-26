"use client";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function ResourcesSection({ asset, resources }) {
  const carouselRef = useRef(null);
  const carouselResources = [...resources, ...resources];

  const scrollCarousel = () => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector("[data-resource-card]");

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
      id="blogs"
      className="relative isolate grid justify-items-center overflow-hidden bg-white px-5 pb-16 pt-16 md:px-8 md:pb-[86px] md:pt-[96px] lg:px-12 lg:pb-[104px] lg:pt-[116px]"
    >
      <img
        className="pointer-events-none absolute left-[-330px] top-[-250px] z-0 h-auto w-[1640px] max-w-none rotate-180 opacity-[0.16] md:left-[-250px] md:top-[-245px] md:w-[1740px] lg:left-[-160px] lg:top-[-238px] lg:w-[1780px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="pointer-events-none absolute bottom-[-430px] right-[-620px] z-0 h-auto w-[1480px] max-w-none opacity-[0.14] md:right-[-520px] lg:bottom-[-500px] lg:right-[-430px] lg:w-[1700px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />

      <h2 className="relative z-10 m-0 mb-12 text-center text-[44px] font-black leading-[1.02] tracking-[-0.035em] text-[#161821] md:mb-[64px] md:text-[60px] lg:mb-[78px] lg:text-[72px]">
        Resources
      </h2>

      <div className="relative z-10 flex w-full max-w-[1120px] items-center gap-5 lg:max-w-[1320px] lg:gap-7">
        <div
          ref={carouselRef}
          className="flex w-full snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-12"
          aria-label="Resources carousel"
        >
          {carouselResources.map((resource, index) => (
            <article
              className="reveal-card flex min-h-[540px] w-full flex-[0_0_100%] snap-start flex-col overflow-hidden rounded-[20px] border border-[rgba(22,24,33,0.14)] bg-white md:flex-[0_0_calc((100%_-_2rem)/2)] lg:min-h-[560px] lg:flex-[0_0_calc((100%_-_6rem)/3)]"
              data-resource-card
              key={`${resource.title}-${index}`}
            >
              <img className="h-[210px] w-full object-cover lg:h-[220px]" src={asset(resource.image)} alt="" />
              <div className="flex flex-1 flex-col px-8 pb-8 pt-8 md:px-9 md:pb-9 lg:px-9 lg:pb-10 lg:pt-9">
                <h3 className="m-0 text-[28px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#f36b35] lg:text-[32px]">
                  {resource.title}
                </h3>
                <p className="m-0 mt-6 text-[18px] leading-[1.5] text-[#858585] md:text-[20px] lg:text-[21px]">
                  {resource.text}
                </p>
                <div className="mt-auto h-[3px] w-full bg-[linear-gradient(90deg,#f36b35_0%,#f04c68_100%)]" />
                <a
                  className="mt-10 inline-flex min-h-[54px] w-[174px] items-center justify-center gap-5 rounded-[8px] border-2 border-[#161821] bg-white text-[20px] font-extrabold leading-none text-[#161821] no-underline transition-colors duration-200 hover:bg-[#161821] hover:text-white lg:min-h-[56px] lg:w-[184px] lg:text-[21px]"
                  href="/case-studies"
                >
                  <span>View Blog</span>
                  <ArrowRight size={24} strokeWidth={2.6} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <button
          className="hidden shrink-0 text-[96px] font-light leading-none text-[#05060a] transition-transform duration-200 hover:translate-x-1 lg:inline-flex lg:pl-1"
          type="button"
          onClick={scrollCarousel}
          aria-label="Next resource"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
