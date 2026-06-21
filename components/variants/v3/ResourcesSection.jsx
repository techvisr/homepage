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
      className="relative isolate grid justify-items-center overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
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

      <h2 className="relative z-10 m-0 mb-10 w-full text-center text-4xl font-black leading-[1.04] tracking-[0] text-[#161821] sm:text-5xl md:mb-14 md:text-[3.5rem] lg:mb-16 lg:text-[4rem] xl:text-[4.5rem]">
        Resources
      </h2>

      <div className="relative z-10 flex w-full min-w-0 max-w-[1180px] items-center gap-4 overflow-hidden lg:max-w-[1320px] lg:gap-6">
        <div
          ref={carouselRef}
          className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6 lg:gap-10 xl:gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Resources carousel"
        >
          {carouselResources.map((resource, index) => (
            <article
              className="reveal-card flex min-h-[360px] w-full flex-[0_0_82%] snap-start flex-col overflow-hidden rounded-xl border border-[rgba(22,24,33,0.14)] bg-white sm:min-h-[470px] sm:flex-[0_0_calc((100%_-_1.5rem)/2)] sm:rounded-2xl md:min-h-[520px] lg:flex-[0_0_calc((100%_-_5rem)/3)] xl:min-h-[550px] xl:flex-[0_0_calc((100%_-_6rem)/3)]"
              data-resource-card
              key={`${resource.title}-${index}`}
              style={{ "--reveal-delay": `${(index % resources.length) * 70}ms` }}
            >
              <img
                className="h-32 w-full object-cover min-[360px]:h-36 sm:h-48 md:h-52 lg:h-[220px]"
                src={resource.image?.startsWith("/") ? resource.image : asset(resource.image)}
                alt={resource.imageAlt || ""}
              />
              <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-6 md:px-8 md:pb-8 md:pt-8 lg:px-8 lg:pb-9 lg:pt-8 xl:px-9 xl:pb-10 xl:pt-9">
                <h3 className="m-0 text-lg font-extrabold leading-[1.16] tracking-[0] text-[#f36b35] min-[360px]:text-xl sm:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem]">
                  {resource.title}
                </h3>
                <p className="m-0 mt-3 text-sm leading-6 text-[#858585] sm:mt-5 sm:text-base sm:leading-7 md:text-lg lg:text-[1.15rem] xl:text-xl">
                  {resource.text}
                </p>
                <div className="mt-auto h-[3px] w-full bg-[linear-gradient(90deg,#f36b35_0%,#f04c68_100%)]" />
                <a
                  className="mt-6 inline-flex min-h-9 w-fit items-center justify-center gap-3 rounded-[8px] border border-[#161821] bg-white px-3 text-xs font-extrabold leading-none text-[#161821] no-underline transition-colors duration-200 hover:bg-[#161821] hover:text-white sm:mt-8 sm:min-h-12 sm:gap-4 sm:border-2 sm:px-5 sm:text-base md:min-h-[54px] md:text-lg lg:min-h-[56px] lg:text-xl"
                  href={resource.href || (resource.slug ? `/blogs/${resource.slug}` : "/blogs")}
                >
                  <span>View Blog</span>
                  <ArrowRight size={24} strokeWidth={2.6} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <button
          className="hidden shrink-0 text-7xl font-light leading-none text-[#05060a] transition-transform duration-200 hover:translate-x-1 lg:inline-flex lg:pl-1 xl:text-8xl"
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
