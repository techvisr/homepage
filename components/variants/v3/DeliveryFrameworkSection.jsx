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
  const [frameworkSequenceComplete, setFrameworkSequenceComplete] = useState(false);

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

  const connectorDelay = frameworkAnimation === "badge-pop" ? "0ms" : "140ms";
  const syncedStepDelay = (index) => {
    if (frameworkAnimation !== "line-draw") {
      return 260 + index * 360;
    }

    return 280 + index * 430;
  };
  const showConnectorRunner =
    frameworkAnimation === "line-draw" ||
    frameworkAnimation === "rise-pulse" ||
    frameworkAnimation === "scroll-progress";
  const showSpotlight = frameworkAnimation === "spotlight-sweep";
  const sequenceEndDelay = syncedStepDelay(Math.max(steps.length - 1, 0)) + 720;

  useEffect(() => {
    if (!frameworkInView) {
      setFrameworkSequenceComplete(false);
      return undefined;
    }

    setFrameworkSequenceComplete(false);

    const timer = window.setTimeout(() => {
      setFrameworkSequenceComplete(true);
    }, sequenceEndDelay);

    return () => window.clearTimeout(timer);
  }, [frameworkInView, sequenceEndDelay]);

  return (
    <section
      id="delivery-framework"
      ref={frameworkRef}
      data-in-view={frameworkInView ? "true" : "false"}
      className="relative isolate grid scroll-mt-0 justify-items-center overflow-hidden bg-[#fffaf7] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(78%_48%_at_50%_0%,rgba(243,113,53,0.13)_0%,rgba(255,250,247,0.72)_42%,rgba(255,255,255,0)_72%),radial-gradient(70%_46%_at_50%_100%,rgba(239,65,105,0.08)_0%,rgba(255,250,247,0.72)_46%,rgba(255,255,255,0)_74%),linear-gradient(180deg,#ffffff_0%,#fffaf7_34%,#ffffff_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.34] [background-image:radial-gradient(circle_at_1px_1px,rgba(243,113,53,0.22)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(72%_62%_at_50%_46%,#000_0%,rgba(0,0,0,0.72)_44%,transparent_82%)]"
      />
      <img
        className="delivery-wave-layer pointer-events-none absolute left-[-520px] top-[-340px] z-0 h-auto w-[1480px] max-w-none opacity-[0.18] md:left-[-360px] md:top-[-390px] md:w-[1680px] lg:left-[-220px] lg:top-[-410px] lg:w-[1760px] 2xl:left-[-40px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="delivery-wave-layer pointer-events-none absolute bottom-[-440px] right-[-620px] z-0 h-auto w-[1520px] max-w-none rotate-180 opacity-[0.12] md:bottom-[-520px] md:right-[-420px] md:w-[1720px] lg:bottom-[-610px] lg:right-[-260px] lg:w-[1800px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto mb-12 grid max-w-[1050px] gap-5 text-center md:mb-16 lg:mb-20 lg:max-w-[1120px]">
        <h2 className="m-0 text-3xl font-extrabold leading-[1.1] tracking-[0] text-[#161821] sm:text-4xl md:text-5xl lg:text-[3.45rem] xl:whitespace-nowrap xl:text-[4rem]">
          Intelligent Delivery
          <br className="md:hidden" /> Framework
        </h2>
        <p className="mx-auto m-0 max-w-[840px] text-base leading-7 text-[rgba(22,24,33,0.58)] md:text-lg md:leading-8 lg:text-xl">
          Driving faster enterprise transformation through intelligent and scalable delivery models.
        </p>
      </div>

      <div className="relative z-10 mb-10 grid w-full max-w-[1160px] grid-cols-1 justify-items-center gap-3.5 min-[520px]:grid-cols-2 min-[520px]:gap-x-10 min-[520px]:gap-y-12 sm:gap-x-14 sm:gap-y-14 md:mb-16 md:gap-x-20 md:gap-y-16 lg:mb-[76px] lg:grid-cols-5 lg:gap-5 xl:gap-6">
        <div
          className="pointer-events-none absolute left-[9%] right-[9%] top-[132px] z-0 hidden h-[8px] overflow-hidden rounded-full bg-[rgba(243,113,53,0.12)] lg:block xl:top-[142px]"
          aria-hidden="true"
        >
          <span
            className={`absolute inset-0 origin-left rounded-full bg-[linear-gradient(90deg,#f37135_0%,#ff6b3b_42%,#ef4169_100%)] transition-[opacity,transform] duration-[2600ms] ease-linear ${
              frameworkInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transitionDelay: frameworkInView ? connectorDelay : "0ms" }}
          />
          {showConnectorRunner ? (
            <span
              className={`absolute inset-y-0 left-0 w-[18%] rounded-full bg-white/80 blur-[1px] ${
                frameworkInView ? "animate-[frameworkStepRunner_2.6s_linear_140ms_both]" : ""
              }`}
            />
          ) : null}
        </div>
        <div
          className="pointer-events-none absolute bottom-5 left-[calc(50%-min(45vw,180px)+29px)] top-5 z-0 w-[4px] overflow-hidden rounded-full bg-[rgba(243,113,53,0.12)] min-[520px]:hidden"
          aria-hidden="true"
        >
          <span
            className={`absolute inset-0 origin-top rounded-full bg-[linear-gradient(180deg,#f37135_0%,#ff6b3b_42%,#ef4169_100%)] transition-[opacity,transform] duration-[2600ms] ease-linear ${
              frameworkInView ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            style={{ transitionDelay: frameworkInView ? connectorDelay : "0ms" }}
          />
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
            className={`framework-step-card group relative z-10 grid min-h-[124px] w-full max-w-[360px] content-center rounded-xl border border-[rgba(22,24,33,0.12)] bg-white py-4 pl-[4.75rem] pr-4 text-left opacity-100 shadow-[0_10px_24px_rgba(22,24,33,0.11)] transition-[clip-path,transform,filter,box-shadow] duration-[680ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform min-[520px]:last:col-span-2 min-[520px]:min-h-[168px] min-[520px]:max-w-[270px] min-[520px]:content-start min-[520px]:px-4 min-[520px]:pb-4 min-[520px]:pt-11 sm:min-h-[178px] sm:max-w-[260px] sm:gap-0 sm:pt-12 md:min-h-[220px] md:max-w-[280px] md:pb-6 lg:last:col-span-1 lg:min-h-[238px] lg:max-w-none lg:px-4 lg:shadow-[0_14px_28px_rgba(22,24,33,0.12)] xl:min-h-[250px] xl:px-6 ${
              frameworkInView
                ? "translate-x-0 translate-y-0 scale-100 blur-0"
                : frameworkAnimation === "badge-pop"
                  ? "translate-x-0 translate-y-0 scale-100 blur-0"
                  : frameworkAnimation === "rise-pulse"
                    ? "translate-y-10 scale-[0.96] blur-0"
                    : frameworkAnimation === "slide-train"
                      ? "-translate-x-20 scale-[0.98] blur-0"
                      : frameworkAnimation === "spotlight-sweep"
                        ? "translate-y-4 scale-[0.98] blur-0"
                        : frameworkAnimation === "scroll-progress"
                          ? "translate-x-[-18px] scale-[0.96] blur-0"
                          : "-translate-x-10 translate-y-6 scale-[0.94] blur-0"
            }`}
            style={{
              clipPath:
                frameworkInView || frameworkAnimation === "badge-pop"
                  ? "inset(-24px -24px -24px -24px round 18px)"
                  : "inset(-24px calc(100% + 24px) -24px -24px round 18px)",
              transitionDelay:
                frameworkInView && !frameworkSequenceComplete ? `${syncedStepDelay(index)}ms` : "0ms",
            }}
            key={step.number}
          >
            <span
              className={`absolute left-4 top-4 grid size-10 place-items-center rounded-[10px] bg-[#161821] text-xs font-extrabold leading-none text-white shadow-[0_10px_18px_rgba(22,24,33,0.22)] transition-[opacity,transform] duration-500 min-[520px]:top-[-12px] min-[520px]:size-9 sm:size-10 md:left-5 md:size-[54px] md:text-[17px] xl:left-7 xl:size-[58px] xl:text-lg ${
                frameworkAnimation === "badge-pop" && !frameworkInView ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
              style={{
                transitionDelay:
                  frameworkInView && !frameworkSequenceComplete ? `${syncedStepDelay(index)}ms` : undefined,
              }}
            >
              {step.number}
            </span>
            <step.icon className="mb-1.5 text-black min-[520px]:mb-3 sm:mb-4 md:mb-6" size={28} strokeWidth={2.2} />
            <h3 className="m-0 text-sm font-extrabold uppercase leading-[1.08] tracking-[0] text-[#161821] min-[360px]:text-[15px] sm:text-lg md:text-[22px] xl:text-[23px]">
              {step.title}
            </h3>
            <p className="m-0 mt-1.5 text-[12px] leading-[1.45] text-[rgba(22,24,33,0.62)] min-[360px]:text-[13px] min-[520px]:mt-2 sm:mt-3 sm:text-sm md:text-base lg:text-sm xl:mt-5 xl:text-[15px]">
              {step.text}
            </p>
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="relative z-10 border-2"
      >
        Know More
      </HeaderActionButton>
    </section>
  );
}
