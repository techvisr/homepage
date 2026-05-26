"use client";

import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const frameworkAnimationModes = new Set([
  "line-draw",
  "rise-pulse",
  "badge-pop",
  "slide-train",
  "spotlight-sweep",
  "scroll-progress",
]);

export default function DeliveryFrameworkSection({ steps }) {
  const frameworkRef = useRef(null);
  const [frameworkInView, setFrameworkInView] = useState(false);
  const [frameworkAnimation, setFrameworkAnimation] = useState("line-draw");

  useEffect(() => {
    const selectedAnimation = new URLSearchParams(window.location.search).get("frameworkAnimation");

    if (frameworkAnimationModes.has(selectedAnimation)) {
      setFrameworkAnimation(selectedAnimation);
    }
  }, []);

  useEffect(() => {
    const section = frameworkRef.current;

    if (!section) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setFrameworkInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFrameworkInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -16% 0px", threshold: 0.28 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const connectorDelay = frameworkAnimation === "badge-pop" ? "0ms" : "120ms";
  const syncedStepDelay = (index) => {
    if (frameworkAnimation !== "line-draw") {
      return 260 + index * 360;
    }

    return 160 + index * 520;
  };
  const showConnectorRunner =
    frameworkAnimation === "line-draw" ||
    frameworkAnimation === "rise-pulse" ||
    frameworkAnimation === "scroll-progress";
  const showSpotlight = frameworkAnimation === "spotlight-sweep";

  return (
    <section
      id="delivery-framework"
      ref={frameworkRef}
      className="relative isolate grid scroll-mt-0 justify-items-center overflow-hidden bg-white px-5 py-16 md:px-8 md:py-[92px] lg:px-12 lg:pb-[96px] lg:pt-[122px]"
    >
      <img
        className="pointer-events-none absolute left-[-220px] top-[-430px] z-0 h-auto w-[1720px] max-w-none opacity-[0.18] md:left-[-150px] md:top-[-420px] md:w-[1800px] lg:left-[-80px] lg:top-[-418px] lg:w-[1760px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto mb-14 grid max-w-[1050px] gap-6 text-center md:mb-[90px] lg:mb-[110px] lg:max-w-[1120px]">
        <h2 className="m-0 text-[34px] font-extrabold leading-[1.08] tracking-[0] text-[#161821] md:text-[52px] lg:whitespace-nowrap lg:text-[68px]">
          Intelligent Delivery
          <br className="md:hidden" /> Framework
        </h2>
        <p className="mx-auto m-0 max-w-[1010px] text-[16px] leading-[1.42] text-[rgba(22,24,33,0.58)] md:text-[21px] md:leading-[1.42] lg:text-[24px]">
          Techvisr, an AI software development company offers a strategic delivery framework
          focused on speed, scalability, governance, and operational visibility across every
          engagement to help enterprises accelerate transformation and achieve measurable
          business outcomes.
        </p>
      </div>

      <div className="relative z-10 mb-[72px] grid w-full max-w-[1120px] grid-cols-1 justify-items-center gap-9 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:mb-[92px] lg:max-w-[1264px] lg:grid-cols-5 lg:gap-7">
        <div
          className={`pointer-events-none absolute left-[9%] right-[9%] top-[142px] z-0 hidden h-[8px] origin-left overflow-hidden rounded-full bg-[linear-gradient(90deg,#f37135_0%,#ff6b3b_42%,#ef4169_100%)] transition-[opacity,transform] duration-[2900ms] ease-linear lg:block ${
            frameworkInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
          style={{ transitionDelay: frameworkInView ? connectorDelay : "0ms" }}
          aria-hidden="true"
        >
          {showConnectorRunner ? (
            <span
              className={`absolute inset-y-0 left-0 w-[18%] rounded-full bg-white/80 blur-[1px] ${
                frameworkInView ? "animate-[frameworkStepRunner_2.9s_linear_120ms_both]" : ""
              }`}
            />
          ) : null}
        </div>
        {showSpotlight ? (
          <div
            className={`pointer-events-none absolute -inset-x-10 top-[-28px] z-0 hidden h-[370px] rounded-full bg-[linear-gradient(100deg,transparent_0%,rgba(255,228,212,0.72)_42%,rgba(239,65,105,0.18)_50%,transparent_62%)] opacity-0 blur-2xl lg:block ${
              frameworkInView ? "animate-[frameworkSpotlightSweep_1.9s_cubic-bezier(0.22,1,0.36,1)_220ms_both]" : ""
            }`}
            aria-hidden="true"
          />
        ) : null}
        {steps.map((step, index) => (
          <article
            className={`group relative z-10 grid min-h-[252px] w-full max-w-[238px] content-start rounded-[14px] border border-[rgba(22,24,33,0.12)] bg-white px-6 pb-6 pt-[62px] text-left shadow-[0_18px_26px_rgba(22,24,33,0.18)] transition-[opacity,transform,filter,box-shadow] duration-[680ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:min-h-[266px] md:max-w-[248px] lg:min-h-[276px] lg:max-w-[228px] ${
              frameworkInView
                ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
                : frameworkAnimation === "badge-pop"
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
                  : frameworkAnimation === "rise-pulse"
                    ? "translate-y-10 scale-[0.96] opacity-0 blur-0"
                    : frameworkAnimation === "slide-train"
                      ? "-translate-x-20 scale-[0.98] opacity-0 blur-0"
                      : frameworkAnimation === "spotlight-sweep"
                        ? "translate-y-4 scale-[0.98] opacity-0 blur-[4px]"
                        : frameworkAnimation === "scroll-progress"
                          ? "translate-x-[-18px] scale-[0.96] opacity-0 blur-0"
                          : "-translate-x-10 translate-y-6 scale-[0.94] opacity-0 blur-[2px]"
            }`}
            style={{ transitionDelay: frameworkInView ? `${syncedStepDelay(index)}ms` : "0ms" }}
            key={step.number}
          >
            <span
              className={`absolute left-7 top-[-14px] grid size-[58px] place-items-center rounded-[13px] bg-[#161821] text-[18px] font-extrabold leading-none text-white shadow-[0_10px_18px_rgba(22,24,33,0.28)] transition-[opacity,transform] duration-500 group-hover:-translate-y-1 ${
                frameworkAnimation === "badge-pop" && !frameworkInView ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
              style={{ transitionDelay: frameworkInView ? `${syncedStepDelay(index)}ms` : undefined }}
            >
              {step.number}
            </span>
            <step.icon className="mb-6 text-black" size={34} strokeWidth={2.2} />
            <h3 className="m-0 text-[22px] font-extrabold uppercase leading-[1.08] tracking-[0] text-[#161821] md:text-[24px] lg:text-[24px]">
              {step.title}
            </h3>
            <p className="m-0 mt-5 text-[16px] leading-[1.42] text-[rgba(22,24,33,0.58)] md:text-[17px] lg:text-[16px]">
              {step.text}
            </p>
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="relative z-10 min-h-[54px] border-2 px-6 text-[17px] md:min-h-[58px] md:px-7 md:text-[18px]"
      >
        Know More
      </HeaderActionButton>
    </section>
  );
}
