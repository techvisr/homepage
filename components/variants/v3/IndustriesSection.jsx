"use client";

import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const DOT_TRANSITION_MS = 420;
const DOT_RELEASE_MS = 90;
const activeLiquidColor = "#f75a45";

const displayIndustryTitle = (title) => (title === "BSFI" ? "BFSI" : title);

const linearDotPosition = (index, count) => ({
  left: count > 1 ? `${(index / (count - 1)) * 100}%` : "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

export default function IndustriesSection({
  asset,
  industries,
  ctaHref = "/services",
  ctaLabel = "Explore solutions",
  spotlight = false,
}) {
  const carouselRef = useRef(null);
  const liquidIndexRef = useRef(0);
  const leavingTimerRef = useRef(null);
  const motionTimerRef = useRef(null);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [liquidIndex, setLiquidIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const [liquidMotion, setLiquidMotion] = useState({ moving: false, angle: 0, id: 0 });

  const setIndustryIndex = (index, shouldScroll = false) => {
    const nextIndex = Math.max(0, Math.min(industries.length - 1, index));
    const currentLiquidIndex = liquidIndexRef.current;

    if (currentLiquidIndex !== nextIndex) {
      liquidIndexRef.current = nextIndex;
      setLeavingIndex(currentLiquidIndex);
      setLiquidMotion((currentMotion) => ({
        moving: true,
        angle: nextIndex > currentLiquidIndex ? 0 : 180,
        id: currentMotion.id + 1,
      }));
      setLiquidIndex(nextIndex);

      if (leavingTimerRef.current) {
        window.clearTimeout(leavingTimerRef.current);
      }

      if (motionTimerRef.current) {
        window.clearTimeout(motionTimerRef.current);
      }

      leavingTimerRef.current = window.setTimeout(() => {
        setLeavingIndex(null);
        leavingTimerRef.current = null;
      }, DOT_RELEASE_MS);

      motionTimerRef.current = window.setTimeout(() => {
        setLiquidMotion((currentMotion) => ({ ...currentMotion, moving: false }));
        motionTimerRef.current = null;
      }, DOT_TRANSITION_MS);
    }

    setActiveIndustryIndex((currentIndex) => (currentIndex === index ? currentIndex : index));

    if (shouldScroll) {
      const carousel = carouselRef.current;
      const card = carousel?.querySelectorAll("[data-industry-card]")[nextIndex];

      if (carousel && card) {
        carousel.scrollTo({
          left: card.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const handleCarouselWheel = (event) => {
    const carousel = carouselRef.current;

    if (!carousel || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const nextScrollLeft = carousel.scrollLeft + event.deltaY;
    const isAtStart = carousel.scrollLeft <= 0 && event.deltaY < 0;
    const isAtEnd = carousel.scrollLeft >= maxScrollLeft - 1 && event.deltaY > 0;

    if (isAtStart || isAtEnd) {
      return;
    }

    event.preventDefault();
    carousel.scrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return undefined;
    }

    let frame = 0;

    const updateActiveIndustry = () => {
      frame = 0;

      const cards = [...carousel.querySelectorAll("[data-industry-card]")];

      if (!cards.length) {
        return;
      }

      const nextIndex = cards.reduce(
        (closest, card, index) => {
          const distance = Math.abs(card.offsetLeft - carousel.scrollLeft);

          return distance < closest.distance ? { distance, index } : closest;
        },
        { distance: Number.POSITIVE_INFINITY, index: 0 },
      ).index;

      setIndustryIndex(nextIndex);
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveIndustry);
    };

    updateActiveIndustry();
    carousel.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      carousel.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [industries.length]);

  useEffect(() => () => {
    if (leavingTimerRef.current) {
      window.clearTimeout(leavingTimerRef.current);
    }

    if (motionTimerRef.current) {
      window.clearTimeout(motionTimerRef.current);
    }
  }, []);

  return (
    <section
      id="industries"
      className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
      aria-label="Industries we serve"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="industry-gooeyness" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <img
        className="pointer-events-none absolute left-[-340px] top-[-360px] z-0 h-auto w-[1780px] max-w-none opacity-[0.14] md:left-[-220px] md:top-[-370px] md:w-[1900px] lg:left-[-130px] lg:top-[-430px] lg:w-[2040px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 bg-[radial-gradient(80%_55%_at_50%_100%,rgba(243,113,53,0.09)_0%,rgba(255,255,255,0)_72%)]" aria-hidden="true" />

      <div className="relative z-10 grid content-start justify-items-center">
        <h2 className="relative z-10 m-0 mb-8 text-center text-3xl font-extrabold leading-[1.1] tracking-[0] text-[#05060a] sm:text-4xl md:mb-10 md:text-5xl lg:mb-8 lg:text-[3.4rem] xl:mb-9 xl:text-[3.875rem]">
          Industries We Serve
        </h2>

        <div
          ref={carouselRef}
          className={`relative z-10 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-6 md:gap-8 lg:gap-9 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            spotlight ? "max-w-[820px] 2xl:max-w-[880px]" : "max-w-[1180px] 2xl:max-w-[1320px]"
          }`}
          onWheel={handleCarouselWheel}
          aria-label="Industries carousel"
        >
          {industries.map((industry, index) => {
            const isActive = activeIndustryIndex === index;
            const industryTitle = displayIndustryTitle(industry.title);
            const industryCtaLabel =
              typeof ctaLabel === "function" ? ctaLabel(industry, index, industryTitle) : ctaLabel;

            return (
              <article
                className={`relative z-10 grid w-full flex-[0_0_86%] snap-start overflow-hidden rounded-2xl border-2 border-transparent bg-white shadow-[0_18px_44px_rgba(22,24,33,0.1)] transition-[box-shadow,transform] duration-500 min-[460px]:flex-[0_0_80%] sm:flex-[0_0_72%] md:min-h-[390px] md:flex-[0_0_78%] md:grid-cols-[0.58fr_0.42fr] md:rounded-[24px] lg:min-h-[430px] lg:rounded-[28px] xl:min-h-[460px] ${
                  spotlight ? "lg:flex-[0_0_100%] xl:flex-[0_0_100%]" : "xl:flex-[0_0_74%]"
                } ${
                  isActive
                    ? "shadow-[0_20px_48px_rgba(22,24,33,0.12)]"
                    : "shadow-[0_12px_30px_rgba(22,24,33,0.08)]"
                }`}
                data-industry-card
                key={industry.label}
                style={{
                  background: isActive
                    ? "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #f37135 0%, #ff6b3b 45%, #ef4169 100%) border-box"
                    : "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, rgba(243, 113, 53, 0.38) 0%, rgba(255, 107, 59, 0.26) 48%, rgba(239, 65, 105, 0.28) 100%) border-box",
                }}
              >
                <div
                  className="relative z-10 order-2 grid content-start px-4 pb-5 pt-4 sm:px-6 sm:pb-7 sm:pt-6 md:order-1 md:px-6 md:py-6 lg:px-7 lg:py-6 xl:px-9 xl:py-7"
                >
                  <h3 className="m-0 text-xl font-extrabold leading-[1.1] text-black sm:text-2xl md:text-[1.8rem] lg:text-[1.8rem] xl:text-[2.1rem]">
                    {industryTitle}
                  </h3>
                  <p className="m-0 mt-3 max-w-[680px] text-sm font-bold leading-6 text-black sm:mt-3 sm:text-[15px] sm:leading-6 md:text-[15px] md:leading-6 lg:mt-3 lg:text-sm lg:leading-6 xl:mt-4 xl:text-base xl:leading-7">
                    {industry.text}
                  </p>
                  <ul className="mt-4 grid gap-2 p-0 sm:mt-4 lg:mt-3 lg:gap-2 xl:mt-4">
                    {industry.bullets.map((bullet) => (
                      <li
                        className="inline-flex w-fit max-w-full rounded-full border border-[rgba(5,6,10,0.42)] px-3 py-2 text-xs font-extrabold leading-tight text-black sm:px-4 sm:py-1.5 sm:text-[13px] md:px-4 md:text-[13px] lg:px-3.5 lg:py-1.5 lg:text-xs xl:px-4 xl:py-2 xl:text-sm"
                        key={bullet}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <HeaderActionButton
                    className="mt-5 w-fit justify-self-start border-2 border-black px-4 text-[13px] text-black hover:bg-black hover:text-white sm:mt-5 sm:text-sm md:mt-6 lg:mt-4 lg:min-h-10 lg:gap-3 lg:rounded-[9px] lg:px-4 lg:text-sm xl:mt-5 xl:min-h-11 xl:gap-3 xl:px-5 xl:text-[15px]"
                    href={ctaHref}
                    icon="up-right"
                    size="compact"
                    variant="outline"
                  >
                    {industryCtaLabel}
                  </HeaderActionButton>
                </div>

                <div
                  className="relative order-1 min-h-[150px] overflow-hidden min-[360px]:min-h-[168px] sm:min-h-[230px] md:order-2 md:min-h-full"
                >
                  <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" src={asset(industry.image)} alt="" />
                  <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_10%,rgba(255,255,255,0.62)_25%,rgba(255,255,255,0)_46%)] md:block" />
                </div>
              </article>
            );
          })}
          {spotlight ? null : (
            <div
              className="shrink-0 basis-[12%] sm:basis-[16%] lg:basis-[18%]"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="relative z-20 mt-5 flex w-full items-center justify-center md:mt-6" aria-label="Select industry">
          <div className="relative h-10 w-full max-w-[260px] overflow-visible md:h-14 md:max-w-[420px]">
            <div className="pointer-events-none absolute inset-0 z-20 overflow-visible" style={{ filter: "url(#industry-gooeyness)" }}>
              {leavingIndex !== null ? (
                <span
                  className="absolute size-4 rounded-full md:size-6"
                  style={{
                    ...linearDotPosition(leavingIndex, industries.length),
                    background: activeLiquidColor,
                    animation: `industryDotRelease ${DOT_RELEASE_MS}ms ease-out both`,
                  }}
                  aria-hidden="true"
                />
              ) : null}
              <span
                className="absolute size-4 md:size-6"
                style={{
                  ...linearDotPosition(liquidIndex, industries.length),
                  transition: `left ${DOT_TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1)`,
                }}
                aria-hidden="true"
              >
                <span
                  key={liquidMotion.id}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: activeLiquidColor,
                    transform: `rotate(${liquidMotion.angle}deg) scaleX(${liquidMotion.moving ? 1.28 : 1}) scaleY(${liquidMotion.moving ? 0.9 : 1})`,
                    transition: `transform ${DOT_TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1)`,
                  }}
                />
              </span>
            </div>
            {industries.map((industry, index) => {
              const isActive = index === liquidIndex;

              return (
                <button
                  className={`absolute z-10 size-5 cursor-pointer rounded-full border-4 p-0 shadow-[0_3px_8px_rgba(0,0,0,0.18)] outline-none transition-[background-color,border-color,transform] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-tap-highlight-color:transparent] hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 md:size-8 md:border-[5px] ${
                    isActive ? "border-[#f75a45] bg-[#f75a45]" : "border-white bg-[#8e8e8e]"
                  }`}
                  key={industry.label}
                  style={linearDotPosition(index, industries.length)}
                  type="button"
                  onMouseEnter={() => setIndustryIndex(index, true)}
                  onFocus={() => setIndustryIndex(index, true)}
                  onClick={() => setIndustryIndex(index, true)}
                  aria-label={`Show ${displayIndustryTitle(industry.title)}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
