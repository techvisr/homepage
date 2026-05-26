"use client";

import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const displayIndustryTitle = (title) => (title === "BSFI" ? "BFSI" : title);
const DOT_STEP = 58;
const MANUAL_SCROLL_LOCK_MS = 920;

export default function IndustriesSection({ asset, industries }) {
  const sectionRef = useRef(null);
  const activeIndustryIndexRef = useRef(0);
  const manualScrollLockRef = useRef(false);
  const manualScrollTimerRef = useRef(0);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const activeIndustry = industries[activeIndustryIndex];
  const activeTitle = displayIndustryTitle(activeIndustry.title);

  const setIndustryIndex = (index) => {
    activeIndustryIndexRef.current = index;
    setActiveIndustryIndex((currentIndex) => (currentIndex === index ? currentIndex : index));
  };

  const scrollToIndustry = (index) => {
    const section = sectionRef.current;

    if (!section) {
      setIndustryIndex(index);
      return;
    }

    const rect = section.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
    const targetProgress = Math.min((index + 0.18) / industries.length, 0.98);

    manualScrollLockRef.current = true;
    setIndustryIndex(index);

    window.clearTimeout(manualScrollTimerRef.current);
    window.scrollTo({
      top: sectionTop + scrollableDistance * targetProgress,
      behavior: "smooth",
    });
    manualScrollTimerRef.current = window.setTimeout(() => {
      manualScrollLockRef.current = false;
    }, MANUAL_SCROLL_LOCK_MS);
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    let frame = 0;

    const updateActiveIndustry = () => {
      frame = 0;

      if (manualScrollLockRef.current) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 0.999);
      const nextIndex = Math.min(industries.length - 1, Math.floor(progress * industries.length));

      setIndustryIndex(nextIndex);
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveIndustry);
    };

    updateActiveIndustry();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.clearTimeout(manualScrollTimerRef.current);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [industries.length]);

  return (
    <section id="industries" ref={sectionRef} className="relative bg-white lg:min-h-[190vh]" aria-label="Industries we serve">
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="industry-gooeyness">
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

      <div className="relative isolate grid content-start justify-items-center overflow-hidden px-5 pb-12 pt-[112px] md:px-8 md:pt-[118px] lg:sticky lg:top-[80px] lg:min-h-[calc(100vh-80px)] lg:px-12 lg:pb-8 lg:pt-[52px]">
        <img
          className="pointer-events-none absolute left-[-340px] top-[-360px] z-0 h-auto w-[1780px] max-w-none opacity-[0.14] md:left-[-220px] md:top-[-370px] md:w-[1900px] lg:left-[-130px] lg:top-[-430px] lg:w-[2040px]"
          src="/images/story-wave-pattern.svg"
          alt=""
          aria-hidden="true"
        />

        <h2 className="relative z-10 m-0 mb-8 text-center text-[38px] font-extrabold leading-[1.08] tracking-[0] text-[#05060a] md:mb-10 md:text-[58px] lg:mb-[52px] lg:text-[60px] xl:mb-[92px] xl:text-[76px]">
          Industries We Serve
        </h2>

        <article className="relative z-10 grid w-full max-w-[1816px] overflow-hidden rounded-[28px] border-2 border-[#e57b3f] bg-white shadow-[0_20px_45px_rgba(22,24,33,0.08)] md:rounded-[42px] lg:h-[min(560px,calc(100vh-220px))] lg:min-h-[540px] lg:grid-cols-[0.58fr_0.42fr] lg:rounded-[54px] xl:h-[min(640px,calc(100vh-250px))] xl:min-h-[600px] min-[1800px]:h-[720px] min-[1800px]:min-h-[720px]">
          <div
            key={activeIndustry.title}
            className="relative z-10 order-2 grid content-start px-7 pb-9 pt-7 md:px-10 md:pb-12 lg:order-1 lg:px-9 lg:py-8 xl:px-[52px] xl:py-[38px] animate-[industryCardSwap_520ms_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <h3 className="m-0 text-[34px] font-extrabold leading-[1.08] text-black md:text-[42px] lg:text-[38px] xl:text-[44px]">
              {activeTitle}
            </h3>
            <p className="m-0 mt-6 max-w-[850px] text-[19px] font-bold leading-[1.48] text-black md:text-[26px] md:leading-[1.48] lg:mt-5 lg:text-[20px] lg:leading-[1.42] xl:mt-6 xl:text-[25px] xl:leading-[1.44]">
              {activeIndustry.text}
            </p>
            <ul className="mt-7 grid gap-4 p-0 lg:mt-5 lg:gap-3 xl:mt-6">
              {activeIndustry.bullets.map((bullet) => (
                <li
                  className="inline-flex w-fit rounded-full border-2 border-[rgba(5,6,10,0.42)] px-5 py-3 text-[15px] font-extrabold leading-none text-black md:px-7 md:text-[19px] lg:px-5 lg:py-2.5 lg:text-[16px] xl:px-7 xl:py-3 xl:text-[20px]"
                  key={bullet}
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <HeaderActionButton
              className="mt-8 w-fit justify-self-start border-black text-black hover:bg-black hover:text-white md:mt-9 lg:mt-6 lg:h-[62px] lg:gap-7 lg:rounded-[17px] lg:px-8 lg:text-[22px] xl:mt-[30px] xl:h-[70px] xl:gap-9 xl:px-9 xl:text-[28px]"
              href="/services"
              icon="up-right"
              variant="outline"
            >
              {activeTitle} solutions
            </HeaderActionButton>
          </div>

          <div
            key={activeIndustry.image}
            className="relative order-1 min-h-[260px] overflow-hidden md:min-h-[380px] lg:order-2 lg:min-h-full animate-[industryImageSwap_620ms_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <img className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500" src={asset(activeIndustry.image)} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_52%,rgba(255,255,255,0.78)_100%)] lg:bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_10%,rgba(255,255,255,0.62)_25%,rgba(255,255,255,0)_46%)]" />
          </div>
        </article>

        <div className="relative z-20 mt-3 flex w-full items-center justify-center lg:mt-2 xl:mt-2" aria-label="Select industry">
          <div className="relative flex gap-3 overflow-visible p-1 [filter:url(#industry-gooeyness)]">
            {industries.map((industry, index) => {
              const isActive = index === activeIndustryIndex;

              return (
                <button
                  className={`relative z-10 size-[46px] cursor-pointer rounded-full border-[12px] bg-transparent p-0 opacity-100 outline-none transition-[border-color,transform] duration-[800ms] [-webkit-tap-highlight-color:transparent] hover:scale-[1.04] ${
                    isActive ? "scale-[1.04] border-[#f37135]" : "scale-100 border-[#e3e4e8]"
                  }`}
                  key={industry.label}
                  type="button"
                  onClick={() => scrollToIndustry(index)}
                  aria-label={`Show ${displayIndustryTitle(industry.title)}`}
                  aria-pressed={isActive}
                />
              );
            })}
            <span
              className="pointer-events-none absolute left-[13px] top-[13px] z-20 size-5 rounded-full bg-[#f37135] transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(${activeIndustryIndex * DOT_STEP}px)` }}
              data-industry-ball
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
