"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function ResourcesSection({
  asset,
  resources,
  sectionId = "blogs",
  title = "Resources",
  description,
  ctaLabel = "View Blog",
  cardVariant = "default",
}) {
  const carouselRef = useRef(null);
  const isBlogCard = cardVariant === "blog";
  const carouselResources = isBlogCard ? resources : [...resources, ...resources];
  const getResourceHref = (resource) => resource.href || (resource.slug ? `/blogs/${resource.slug}` : "/blogs");
  const getResourceImage = (resource) => (resource.image?.startsWith("/") ? resource.image : asset(resource.image));

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
      id={sectionId}
      className="relative isolate grid justify-items-center overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
    >
      <div className="relative z-10 mb-10 grid w-full justify-items-center gap-4 text-center md:mb-14 lg:mb-16">
        <h2 className="m-0 w-full text-4xl font-black leading-[1.04] tracking-[0] text-[#161821] sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
          {title}
        </h2>
        {description ? (
          <p className="m-0 max-w-[850px] text-base leading-7 text-[rgba(22,24,33,0.58)] md:text-lg md:leading-8">
            {description}
          </p>
        ) : null}
      </div>

      {isBlogCard ? (
        <div className="relative z-10 grid w-full min-w-0 max-w-[1180px] gap-7 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const href = getResourceHref(resource);
            const imageSrc = getResourceImage(resource);

            return (
              <article
                className="blog-card-lift flex min-h-[500px] min-w-0 max-w-full flex-col overflow-hidden rounded-[8px] border border-[rgba(22,24,33,0.15)] bg-white shadow-[0_12px_28px_rgba(22,24,33,0.04)]"
                key={resource.slug || resource.title}
              >
                <a className="group relative block h-[180px] overflow-hidden bg-[#05060a]" href={href} aria-label={resource.title}>
                  <Image
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                    src={imageSrc}
                    alt={resource.imageAlt || ""}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw"
                    priority={index < 3}
                  />
                </a>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase leading-none text-[#8d8d8d]">
                    {resource.category ? <span>{resource.category}</span> : null}
                    {resource.category && resource.readTime ? <span className="h-1 w-1 rounded-full bg-[#f37135]" aria-hidden="true" /> : null}
                    {resource.readTime ? <span>{resource.readTime}</span> : null}
                  </div>
                  <h3 className="m-0 mt-4 break-words text-[1.45rem] font-extrabold leading-[1.12] tracking-[0] text-[#ff7436]">
                    <a className="text-current no-underline" href={href}>
                      {resource.title}
                    </a>
                  </h3>
                  <p className="m-0 mt-4 text-base font-medium leading-7 text-[#858585]">
                    {resource.excerpt || resource.text}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="h-[2px] w-full bg-[linear-gradient(90deg,#f36b35_0%,#f04c68_100%)]" />
                    <a
                      className="blog-button-lift mt-6 inline-flex min-h-10 w-fit items-center justify-center gap-3 rounded-[6px] border border-[#161821] bg-white px-4 text-sm font-extrabold leading-none text-[#161821] no-underline transition hover:bg-[#161821] hover:text-white"
                      href={href}
                    >
                      <span>{ctaLabel}</span>
                      <ArrowRight size={17} strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="relative z-10 flex w-full min-w-0 max-w-[1180px] items-center gap-4 overflow-hidden lg:max-w-[1320px] lg:gap-6">
          <div
            ref={carouselRef}
            className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6 lg:gap-10 xl:gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Resources carousel"
          >
            {carouselResources.map((resource, index) => {
              const href = getResourceHref(resource);
              const imageSrc = getResourceImage(resource);

              return (
                <article
                  className="reveal-card flex min-h-[360px] w-full flex-[0_0_82%] snap-start flex-col overflow-hidden rounded-xl border border-[rgba(22,24,33,0.14)] bg-white sm:min-h-[470px] sm:flex-[0_0_calc((100%_-_1.5rem)/2)] sm:rounded-2xl md:min-h-[520px] lg:flex-[0_0_calc((100%_-_5rem)/3)] xl:min-h-[550px] xl:flex-[0_0_calc((100%_-_6rem)/3)]"
                  data-resource-card
                  key={`${resource.title}-${index}`}
                  style={{ "--reveal-delay": `${(index % resources.length) * 70}ms` }}
                >
                  <div className="relative h-32 w-full overflow-hidden bg-[#05060a] min-[360px]:h-36 sm:h-48 md:h-52 lg:h-[220px]">
                    <Image
                      className="object-cover"
                      src={imageSrc}
                      alt={resource.imageAlt || ""}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 82vw"
                    />
                  </div>
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
                      href={href}
                    >
                      <span>{ctaLabel}</span>
                      <ArrowRight size={24} strokeWidth={2.6} />
                    </a>
                  </div>
                </article>
              );
            })}
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
      )}
    </section>
  );
}
