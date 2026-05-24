"use client";

import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const displayIndustryTitle = (title) => (title === "BSFI" ? "BFSI" : title);

export default function IndustriesSection({ asset, industries }) {
  const sectionRef = useRef(null);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const activeIndustry = industries[activeIndustryIndex];
  const activeTitle = displayIndustryTitle(activeIndustry.title);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    let frame = 0;

    const updateActiveIndustry = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 0.999);
      const nextIndex = Math.min(industries.length - 1, Math.floor(progress * industries.length));

      setActiveIndustryIndex(nextIndex);
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

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [industries.length]);

  return (
    <section id="industries" ref={sectionRef} className="relative bg-white xl:min-h-[300vh]" aria-label="Industries we serve">
      <div className="relative isolate grid content-start justify-items-center overflow-hidden px-5 pb-12 pt-[112px] md:px-8 md:pt-[118px] xl:sticky xl:top-[80px] xl:min-h-[calc(100vh-80px)] xl:px-12 xl:pb-8 xl:pt-[52px]">
        <img
          className="pointer-events-none absolute left-[-340px] top-[-360px] z-0 h-auto w-[1780px] max-w-none opacity-[0.14] md:left-[-220px] md:top-[-370px] md:w-[1900px] lg:left-[-130px] lg:top-[-430px] lg:w-[2040px]"
          src="/images/story-wave-pattern.svg"
          alt=""
          aria-hidden="true"
        />

        <h2 className="relative z-10 m-0 mb-8 text-center text-[38px] font-extrabold leading-[1.08] tracking-[0] text-[#05060a] md:mb-10 md:text-[58px] xl:mb-[92px] xl:text-[76px]">
          Industries We Serve
        </h2>

        <article className="relative z-10 grid w-full max-w-[1816px] overflow-hidden rounded-[28px] border-2 border-[#e57b3f] bg-white shadow-[0_20px_45px_rgba(22,24,33,0.08)] md:rounded-[42px] xl:h-[min(640px,calc(100vh-250px))] xl:min-h-[600px] xl:grid-cols-[0.58fr_0.42fr] xl:rounded-[54px]">
          <div
            key={activeIndustry.title}
            className="relative z-10 order-2 grid content-start px-7 pb-9 pt-7 md:px-10 md:pb-12 xl:order-1 xl:px-[52px] xl:py-[38px] animate-[industryCardSwap_520ms_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <h3 className="m-0 text-[34px] font-extrabold leading-[1.08] text-black md:text-[42px] xl:text-[44px]">
              {activeTitle}
            </h3>
            <p className="m-0 mt-6 max-w-[850px] text-[19px] font-bold leading-[1.48] text-black md:text-[26px] md:leading-[1.48] xl:mt-6 xl:text-[25px] xl:leading-[1.44]">
              {activeIndustry.text}
            </p>
            <ul className="mt-7 grid gap-4 p-0 xl:mt-6 xl:gap-3">
              {activeIndustry.bullets.map((bullet) => (
                <li
                  className="inline-flex w-fit rounded-full border-2 border-[rgba(5,6,10,0.42)] px-5 py-3 text-[15px] font-extrabold leading-none text-black md:px-7 md:text-[19px] xl:px-7 xl:py-3 xl:text-[20px]"
                  key={bullet}
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <HeaderActionButton
              className="mt-8 w-fit justify-self-start border-black text-black hover:bg-black hover:text-white md:mt-9 xl:mt-[30px] xl:h-[70px] xl:gap-9 xl:rounded-[17px] xl:px-9 xl:text-[28px]"
              href="/services"
              icon="up-right"
              variant="outline"
              size="large"
            >
              {activeTitle} solutions
            </HeaderActionButton>
          </div>

          <div
            key={activeIndustry.image}
            className="relative order-1 min-h-[260px] overflow-hidden md:min-h-[380px] xl:order-2 xl:min-h-full animate-[industryImageSwap_620ms_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <img className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500" src={asset(activeIndustry.image)} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_52%,rgba(255,255,255,0.78)_100%)] xl:bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_10%,rgba(255,255,255,0.62)_25%,rgba(255,255,255,0)_46%)]" />
          </div>
        </article>
      </div>
    </section>
  );
}
