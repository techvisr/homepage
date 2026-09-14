"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import ResourceIllustration from "./ResourceIllustration";
import CarouselControls from "./CarouselControls";

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
  const getResourceHref = (resource) => resource.href || (resource.slug ? `/blogs/${resource.slug}` : "/blogs");
  const getResourceImage = (resource) => (resource.image?.startsWith("/") ? resource.image : asset(resource.image));

  return (
    <section
      id={sectionId}
      className={`${isBlogCard ? "" : "resources-section"} relative isolate grid justify-items-center overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20`}
    >
      <div className="relative z-10 mb-10 grid w-full justify-items-center gap-4 text-center md:mb-14 lg:mb-16">
        <h2 className={isBlogCard ? "m-0 w-full text-4xl font-black leading-[1.04] tracking-[0] text-[#161821] sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]" : "m-0 w-full text-center text-[45px] font-semibold leading-none tracking-[0] text-[#161821] [font-family:var(--font-figma-display),Barlow,sans-serif] max-[820px]:text-[clamp(26px,7.3vw,32px)] max-[820px]:leading-[1.14]"}>
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
        <div className="relative z-10 w-full min-w-0 max-w-[1180px]">
          <div
            ref={carouselRef}
            className="resources-carousel"
            id={`${sectionId}-carousel`}
            aria-label="Resources carousel"
          >
            {resources.map((resource, index) => {
              const href = getResourceHref(resource);
              const imageSrc = getResourceImage(resource);

              return (
                <article
                  className="resource-preview-card"
                  data-resource-card
                  key={`${resource.title}-${index}`}
                >
                  <a className="resource-preview-link" href={href} aria-labelledby={`${sectionId}-resource-${index}`}>
                    <div className="resource-preview-copy">
                      <ArrowUpRight className="resource-preview-arrow" size={26} strokeWidth={1.7} aria-hidden="true" />
                      <h3 id={`${sectionId}-resource-${index}`}>{resource.title}</h3>
                      <p>{resource.text || resource.excerpt}</p>
                    </div>
                    <div className={`resource-preview-media ${resource.illustration ? "resource-preview-media--illustration" : ""}`}>
                      {resource.illustration ? <ResourceIllustration type={resource.illustration} /> : <Image
                        className="object-cover"
                        src={imageSrc}
                        alt={resource.imageAlt || ""}
                        fill
                        sizes="(min-width: 1280px) 280px, (min-width: 1024px) 23vw, (min-width: 768px) 34vw, 64vw"
                      />}
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
          {resources.length > 1 && <CarouselControls carouselRef={carouselRef} carouselId={`${sectionId}-carousel`} itemLabel="resource" compact={resources.length <= 3} />}
        </div>
      )}
    </section>
  );
}
