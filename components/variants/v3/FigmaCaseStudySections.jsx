"use client";

import { memo, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeaderActionButton from "./HeaderActionButton";
import { caseStudiesHeroVideo } from "./caseStudiesContent";
import { asset } from "./figmaContent";

export function useCaseReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-case-reveal]")];

    if (!elements.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--case-reveal-delay", `${Math.min(index * 70, 260)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export function CaseStudiesHeroSection({ heroVideo = caseStudiesHeroVideo }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#020612] text-white">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,18,0.8)_0%,rgba(2,6,18,0.56)_46%,rgba(2,6,18,0.92)_100%),linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.62)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-[58%] -z-10 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(67,199,255,0.88)_48%,transparent_100%)] opacity-80" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[360px] max-w-[1100px] content-center justify-items-center px-4 py-16 text-center sm:min-h-[430px] sm:px-6 lg:min-h-[470px] lg:py-20">
        <h1 className="case-reveal m-0 max-w-[860px] text-[2.15rem] font-extrabold leading-[1.04] tracking-[0] text-white sm:text-[3rem] md:text-[3.35rem] lg:text-[3.55rem]" data-case-reveal>
          Proven Results Across Industries
        </h1>
        <p className="case-reveal m-0 mt-5 max-w-[820px] text-base font-medium leading-7 text-white/86 sm:text-lg sm:leading-8 md:text-xl" data-case-reveal>
          See how Techvisr helps enterprises accelerate digital transformation, modernize legacy systems, and deliver measurable business outcomes.
        </p>
        <div className="case-reveal mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row" data-case-reveal>
          <HeaderActionButton href="/contact" light size="compact" className="min-h-11 w-full border border-transparent px-5 py-3 text-sm font-bold sm:w-auto">
            Discuss your Project
          </HeaderActionButton>
          <a
            className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-lg border border-white bg-transparent px-5 py-3 text-sm font-bold leading-none text-white no-underline hover:bg-white hover:text-black sm:w-auto"
            href="/services"
          >
            <span>Explore Our Services</span>
            <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function BusinessMetricsSection({ metrics }) {
  return (
    <section className="relative isolate !bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 2xl:px-20">
      <h2 className="case-reveal m-0 text-center text-[2.1rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-5xl lg:text-[3.45rem]" data-case-reveal>
        Business Outcomes Delivered
      </h2>

      <div className="relative z-10 mx-auto mt-8 grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10 lg:gap-6">
        {metrics.map((metric, index) => (
          <article
            className="case-reveal grid min-h-[190px] content-start rounded-xl border border-[rgba(22,24,33,0.28)] bg-white px-6 py-6 text-left shadow-[0_8px_18px_rgba(22,24,33,0.035)] sm:min-h-[230px] lg:min-h-[252px] lg:px-8 lg:py-7"
            data-case-reveal
            key={metric.value}
            style={{ "--case-reveal-delay": `${index * 80}ms` }}
          >
            <strong className="block text-[2.7rem] font-black leading-none tracking-[0] text-black md:text-[3.2rem] lg:text-[3.65rem]">
              {metric.value}
            </strong>
            <span className="mt-4 h-0.5 w-full rounded-full bg-[linear-gradient(90deg,#f37135,#ef4169)]" aria-hidden="true" />
            <p className="m-0 mt-4 max-w-[270px] text-lg font-extrabold leading-[1.16] text-[#161821] lg:text-xl">
              {metric.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OutcomePills({ outcomes, active }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {outcomes.map((outcome) => (
        <span
          className={`rounded-full border px-3 py-1.5 text-[11px] font-extrabold leading-none transition-colors duration-300 sm:text-xs ${
            active
              ? "border-[rgba(22,24,33,0.48)] bg-white text-[#161821]"
              : "border-[rgba(22,24,33,0.18)] bg-white/70 text-[rgba(22,24,33,0.42)]"
          }`}
          key={outcome}
        >
          {outcome}
        </span>
      ))}
    </div>
  );
}

const DesktopScrollerHeading = memo(function DesktopScrollerHeading() {
  return (
    <h2 className="m-0 transform-gpu text-center text-[3rem] font-extrabold leading-[1.05] tracking-[0] text-[#161821] will-change-transform xl:text-[3.25rem]">
      Featured Case Studies
    </h2>
  );
});

function DesktopOutcomeScroller({ studies }) {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const listViewportRef = useRef(null);
  const listTrackRef = useRef(null);
  const rowRefs = useRef([]);
  const imageRefs = useRef([]);
  const timelineRef = useRef(null);
  const activeIndexRef = useRef(0);
  const programmaticScrollRef = useRef(false);
  const programmaticUnlockRef = useRef(null);
  const restoreScrollBehaviorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateListOffset = (immediate = false) => {
    const viewport = listViewportRef.current;
    const track = listTrackRef.current;
    const activeRow = rowRefs.current[activeIndexRef.current];

    if (!viewport || !track || !activeRow) {
      return;
    }

    const rowCenter = activeRow.offsetTop + activeRow.offsetHeight / 2;
    const viewportCenter = viewport.clientHeight / 2;
    const nextOffset = viewportCenter - rowCenter;

    gsap.to(track, {
      y: nextOffset,
      duration: immediate ? 0 : 0.42,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const showStudyImage = (index, duration = 0.28) => {
    const images = imageRefs.current.slice(0, studies.length).filter(Boolean);
    const activeImage = images[index];

    if (!activeImage) {
      return;
    }

    gsap.to(images, {
      opacity: 0,
      scale: 1.045,
      filter: "blur(2.4px)",
      duration,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(activeImage, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const setActiveStudy = (index, imageDuration = 0.28, forceImage = false) => {
    const indexChanged = activeIndexRef.current !== index;

    if (indexChanged) {
      activeIndexRef.current = index;
      setActiveIndex(index);
    }

    if (indexChanged || forceImage) {
      showStudyImage(index, imageDuration);
    }
  };

  const restoreNativeScrollBehavior = () => {
    if (!restoreScrollBehaviorRef.current) {
      return;
    }

    restoreScrollBehaviorRef.current();
    restoreScrollBehaviorRef.current = null;
  };

  const forceNativeScrollBehavior = () => {
    restoreNativeScrollBehavior();

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    restoreScrollBehaviorRef.current = () => {
      root.style.scrollBehavior = previousScrollBehavior;
    };
  };

  const finishProgrammaticScroll = (trigger) => {
    programmaticScrollRef.current = false;

    if (programmaticUnlockRef.current) {
      window.clearTimeout(programmaticUnlockRef.current);
      programmaticUnlockRef.current = null;
    }

    restoreNativeScrollBehavior();
    trigger.update();
  };

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const images = imageRefs.current.slice(0, studies.length).filter(Boolean);

    if (!section || !panel || images.length !== studies.length) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let labelTimes = [];
      let labelProgresses = [];
      let timeline;
      const syncActiveToScroll = (trigger) => {
        if (!labelProgresses.length || programmaticScrollRef.current) {
          return;
        }

        const activeProgress = gsap.utils.snap(labelProgresses, trigger.progress);
        const nextIndex = labelProgresses.findIndex((progress) => Math.abs(progress - activeProgress) < 0.001);

        if (nextIndex >= 0) {
          setActiveStudy(nextIndex);
        }
      };

      timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top+=81",
          end: () => `+=${Math.max(window.innerHeight * (studies.length - 1), 900)}`,
          pin: panel,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: syncActiveToScroll,
          onEnterBack: syncActiveToScroll,
          onEnter: syncActiveToScroll,
        },
      });

      gsap.set(images, { opacity: 0, scale: 1.045, filter: "blur(2.4px)" });
      gsap.set(images[0], { opacity: 1, scale: 1, filter: "blur(0px)" });
      activeIndexRef.current = 0;
      setActiveIndex(0);
      const initialCenter = window.requestAnimationFrame(() => updateListOffset(true));

      studies.forEach((_, index) => {
        timeline.addLabel(`study-${index}`, index);

        if (index < studies.length - 1) {
          timeline.to({}, { duration: 1 });
        }
      });

      timeline.to({}, { duration: 0.7 });
      labelTimes = studies.map((_, index) => timeline.labels[`study-${index}`]);
      labelProgresses = labelTimes.map((time) => time / timeline.duration());

      timelineRef.current = timeline;
      const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120);

      return () => {
        window.clearTimeout(refresh);
        window.cancelAnimationFrame(initialCenter);
        if (programmaticUnlockRef.current) {
          window.clearTimeout(programmaticUnlockRef.current);
        }
        restoreNativeScrollBehavior();
        if (listTrackRef.current) {
          gsap.killTweensOf(listTrackRef.current);
        }
        timelineRef.current = null;
        timeline.kill();
      };
    });

    return () => {
      timelineRef.current = null;
      restoreNativeScrollBehavior();
      if (listTrackRef.current) {
        gsap.killTweensOf(listTrackRef.current);
      }
      mm.revert();
    };
  }, [studies.length]);

  useEffect(() => {
    let frame = 0;

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateListOffset();
      });
    };

    scheduleUpdate();
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [activeIndex, studies.length]);

  const scrollToStudy = (index) => {
    const timeline = timelineRef.current;
    const trigger = timeline?.scrollTrigger;

    setActiveStudy(index, 0, true);

    if (!trigger || window.innerWidth < 1024) {
      return;
    }

    const targetProgress = timeline.labels[`study-${index}`] / timeline.duration();
    const targetTop = gsap.utils.mapRange(
      0,
      1,
      trigger.start,
      trigger.end,
      targetProgress,
    );

    programmaticScrollRef.current = true;
    forceNativeScrollBehavior();
    if (programmaticUnlockRef.current) {
      window.clearTimeout(programmaticUnlockRef.current);
    }
    programmaticUnlockRef.current = window.setTimeout(() => {
      finishProgrammaticScroll(trigger);
    }, 680);

    gsap.killTweensOf(window);
    gsap.to(window, {
      duration: 0.48,
      ease: "power2.out",
      scrollTo: { y: targetTop, autoKill: true },
      overwrite: "auto",
      onComplete: () => {
        setActiveStudy(index);
        finishProgrammaticScroll(trigger);
      },
      onInterrupt: () => {
        finishProgrammaticScroll(trigger);
      },
    });
  };

  return (
    <section ref={sectionRef} className="relative hidden !bg-white px-4 py-0 lg:block lg:px-12 2xl:px-20">
      <div ref={panelRef} className="mx-auto flex min-h-[calc(100svh-81px)] w-full max-w-[1120px] transform-gpu flex-col justify-center py-7 will-change-transform xl:py-9">
        <DesktopScrollerHeading />

        <div className="mt-7 grid min-h-0 items-center gap-10 lg:grid-cols-[0.9fr_0.84fr] xl:gap-12">
          <div
            ref={listViewportRef}
            className="relative overflow-hidden"
            style={{ height: "clamp(430px, calc(100svh - 220px), 690px)" }}
          >
            <div
              ref={listTrackRef}
              className="relative grid gap-3 transform-gpu will-change-transform"
            >
              {studies.map((study, index) => {
                const active = activeIndex === index;
                const inactiveDistance = Math.min(Math.abs(activeIndex - index), 2);
                const inactiveRowStyle = active
                  ? undefined
                  : {
                      opacity: inactiveDistance === 1 ? 0.52 : 0.24,
                      transform: `scale(${inactiveDistance === 1 ? 0.97 : 0.92})`,
                    };
                const inactiveNumberStyle = active
                  ? undefined
                  : {
                      color: inactiveDistance === 1 ? "#8f8f8f" : "#c8c8c8",
                      fontSize: inactiveDistance === 1 ? "2rem" : "1.65rem",
                    };
                const inactiveTitleStyle = active
                  ? undefined
                  : {
                      color: inactiveDistance === 1 ? "#8f8f8f" : "#c8c8c8",
                      display: "-webkit-box",
                      fontSize: inactiveDistance === 1 ? "1.22rem" : "1rem",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      overflow: "hidden",
                    };

                return (
                  <article
                    className={`relative grid origin-left grid-cols-[78px_minmax(0,1fr)] gap-4 overflow-hidden transform-gpu transition-[opacity,transform] duration-300 ease-out ${
                      active
                        ? "max-h-[620px] translate-x-0 scale-100 py-2 opacity-100"
                        : "max-h-[52px] py-0"
                    }`}
                    key={study.number}
                    aria-current={active ? "step" : undefined}
                    ref={(node) => {
                      rowRefs.current[index] = node;
                    }}
                    style={inactiveRowStyle}
                  >
                    <span
                      className={`absolute left-[38px] top-[56px] bottom-0 w-px bg-[#161821]/75 transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                    <button
                      className={`relative z-10 h-10 w-[70px] cursor-pointer bg-white text-left font-medium leading-none tracking-[0] transition-[color,transform] duration-300 ease-out ${
                        active
                          ? "translate-y-0 text-[2.3rem] text-black xl:text-[2.5rem]"
                          : "translate-y-1"
                      }`}
                      type="button"
                      onClick={() => scrollToStudy(index)}
                      aria-label={`Show case study ${study.number}`}
                      style={inactiveNumberStyle}
                    >
                      {study.number}
                    </button>

                    <div className="min-w-0">
                      <button
                        className={`block w-full cursor-pointer bg-transparent p-0 text-left font-medium leading-[1.08] tracking-[0] transition-[color,opacity,transform] duration-300 ease-out ${
                          active
                            ? "translate-y-0 text-[1.65rem] text-black opacity-100 xl:text-[1.9rem]"
                            : "translate-y-1"
                        }`}
                        type="button"
                        onClick={() => scrollToStudy(index)}
                        style={inactiveTitleStyle}
                      >
                        {study.title}
                      </button>

                      {active ? (
                        <div className="mt-4 overflow-hidden">
                          <span className="inline-flex rounded-[3px] bg-[#ff7436] px-3 py-1.5 text-[11px] font-extrabold leading-none text-white xl:text-xs">
                            {study.category}
                          </span>
                          <p className="m-0 mt-3 max-w-[490px] text-sm font-extrabold leading-[1.55] text-[#161821] xl:text-base xl:leading-6">
                            {study.summary}
                          </p>
                          <p className="m-0 mt-4 text-sm font-extrabold leading-none text-black xl:text-base">
                            Key Outcomes
                          </p>
                          <OutcomePills outcomes={study.outcomes} active={active} />
                          <a
                            className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#161821] pb-2 text-sm font-extrabold leading-none text-[#161821] no-underline hover:text-[#f37135] xl:mt-6"
                            href={study.href}
                          >
                            <span>Read More</span>
                            <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-[18px] bg-[#09101c] shadow-[0_22px_44px_rgba(22,24,33,0.18)]"
            style={{ height: "clamp(430px, calc(100svh - 220px), 690px)" }}
          >
            {studies.map((study, index) => {
              return (
                <img
                  className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-200"
                  src={asset(study.image)}
                  alt={study.imageAlt}
                  key={`${study.slug}-image`}
                  ref={(node) => {
                    imageRefs.current[index] = node;
                  }}
                  style={{ opacity: index === 0 ? 1 : 0 }}
                />
              );
            })}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,18,0)_54%,rgba(2,6,18,0.22)_100%)]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileOutcomesList({ studies }) {
  return (
    <section className="relative !bg-white px-4 py-12 sm:px-6 md:px-8 lg:hidden">
      <h2 className="case-reveal m-0 text-center text-[2.1rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-5xl" data-case-reveal>
        Featured Case Studies
      </h2>
      <div className="mx-auto mt-8 grid max-w-[680px] gap-5">
        {studies.map((study, index) => (
          <article
            className="case-reveal overflow-hidden rounded-xl border border-[rgba(22,24,33,0.16)] bg-white shadow-[0_14px_30px_rgba(22,24,33,0.07)]"
            data-case-reveal
            key={study.number}
            style={{ "--case-reveal-delay": `${index * 70}ms` }}
          >
            <img className="h-56 w-full object-cover sm:h-72" src={asset(study.image)} alt={study.imageAlt} />
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-medium leading-none text-[#9d9d9d]">{study.number}</span>
                <span className="inline-flex rounded-[3px] bg-[#ff7436] px-3 py-1.5 text-[11px] font-extrabold leading-none text-white">
                  {study.category}
                </span>
              </div>
              <h3 className="m-0 mt-4 text-2xl font-extrabold leading-[1.08] tracking-[0] text-black">
                {study.title}
              </h3>
              <p className="m-0 mt-4 text-sm font-bold leading-6 text-[#161821]">
                {study.summary}
              </p>
              <p className="m-0 mt-5 text-sm font-extrabold leading-none text-black">
                Key Outcomes
              </p>
              <OutcomePills outcomes={study.outcomes} active />
              {study.focusAreas?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.focusAreas.map((area) => (
                    <span className="rounded-[5px] bg-[#f3f3f3] px-3 py-2 text-[11px] font-extrabold leading-none text-[#5f5f5f]" key={area}>
                      {area}
                    </span>
                  ))}
                </div>
              ) : null}
              <a
                className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#161821] pb-2 text-sm font-extrabold leading-none text-[#161821] no-underline hover:text-[#f37135]"
                href={study.href}
              >
                <span>Read More</span>
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FeaturedCaseStudiesSection({ studies }) {
  return (
    <>
      <DesktopOutcomeScroller studies={studies} />
      <MobileOutcomesList studies={studies} />
    </>
  );
}

export function CaseStudiesFinalCta({ heroVideo = caseStudiesHeroVideo }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#020612] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24 2xl:px-20">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-62"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,18,0.78),rgba(2,6,18,0.82)),linear-gradient(90deg,rgba(243,113,53,0.1),transparent_36%,rgba(67,199,255,0.16))]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[900px] justify-items-center text-center">
        <h2 className="case-reveal m-0 max-w-[820px] text-3xl font-extrabold leading-[1.08] tracking-[0] text-white sm:text-4xl md:text-5xl lg:text-[4rem]" data-case-reveal>
          Ready to Become Our Next Success Story?
        </h2>
        <p className="case-reveal m-0 mt-5 max-w-[760px] text-base font-medium leading-7 text-white/82 sm:text-lg sm:leading-8" data-case-reveal>
          Discover how Techvisr can accelerate your cloud, AI, and digital transformation initiatives.
        </p>
        <HeaderActionButton href="/contact" light size="compact" className="case-reveal mt-8 min-h-11 border border-transparent px-5 py-3 text-sm font-bold" data-case-reveal>
          Talk to an Expert
        </HeaderActionButton>
      </div>
    </section>
  );
}

export function CaseStudyDetailHero({ study }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#020612] text-white">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-64"
        src={caseStudiesHeroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,18,0.8),rgba(2,6,18,0.9)),linear-gradient(90deg,rgba(243,113,53,0.12),transparent_38%,rgba(67,199,255,0.16))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[420px] max-w-[1080px] content-center px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
        <a className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-white/82 no-underline hover:text-white" href="/case-studies">
          <ArrowLeft size={17} strokeWidth={2.3} />
          <span>Back to Case Studies</span>
        </a>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-[4px] bg-[#ff7436] px-3 py-2 text-xs font-extrabold uppercase leading-none text-white">
            {study.category}
          </span>
          <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/62">
            Case Study {study.number}
          </span>
        </div>
        <h1 className="m-0 mt-5 max-w-[980px] text-[2.25rem] font-extrabold leading-[1.04] tracking-[0] text-white sm:text-5xl lg:text-[4rem]">
          {study.title}
        </h1>
        <p className="m-0 mt-5 max-w-[820px] text-base font-medium leading-7 text-white/84 sm:text-xl sm:leading-8">
          {study.summary}
        </p>
      </div>
    </section>
  );
}

export function CaseStudyDetailBody({ study }) {
  const sections = [
    ["Business Context", study.context],
    ["Challenge", study.challenge],
    ["Solution", study.solution],
    ["Impact", study.impact],
    ["Result Narrative", study.resultNarrative],
  ];

  return (
    <main className="!bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <article className="min-w-0">
          <figure className="m-0 overflow-hidden rounded-[12px] border border-[rgba(22,24,33,0.12)] bg-[#09101c] shadow-[0_18px_42px_rgba(22,24,33,0.08)]">
            <img className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[460px]" src={asset(study.image)} alt={study.imageAlt} />
          </figure>

          <div className="mt-10 grid gap-9">
            {sections.map(([heading, text]) => (
              <section key={heading}>
                <h2 className="m-0 text-[2rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-[2.5rem]">
                  {heading}
                </h2>
                <p className="m-0 mt-4 text-base font-semibold leading-8 text-[rgba(22,24,33,0.66)] sm:text-lg">
                  {text}
                </p>
              </section>
            ))}

            <section>
              <h2 className="m-0 text-[2rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-[2.5rem]">
                Execution Approach
              </h2>
              <div className="mt-5 grid gap-4">
                {study.approach.map((item, index) => (
                  <article className="rounded-[8px] border border-[rgba(22,24,33,0.12)] bg-white p-5 shadow-[0_10px_24px_rgba(22,24,33,0.04)]" key={item}>
                    <span className="text-sm font-extrabold leading-none text-[#ff7436]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="m-0 mt-3 text-base font-semibold leading-7 text-[rgba(22,24,33,0.68)]">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="m-0 text-[2rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-[2.5rem]">
                What We Delivered
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {study.deliverables.map((item) => (
                  <div className="rounded-[8px] border border-[rgba(22,24,33,0.12)] bg-[#fafafa] px-4 py-4 text-sm font-extrabold leading-6 text-[#161821]" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>

        <aside className="lg:sticky lg:top-28">
          <div className="rounded-[8px] border border-[rgba(22,24,33,0.14)] bg-[#fff7f3] p-6 shadow-[0_14px_34px_rgba(22,24,33,0.06)]">
            <h2 className="m-0 text-xl font-extrabold leading-tight text-[#161821]">Engagement Snapshot</h2>
            <dl className="m-0 mt-5 grid gap-4">
              {[
                ["Engagement", study.engagement],
                ["Timeline", study.timeline],
                ["Delivery Model", study.deliveryModel],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-extrabold uppercase leading-none tracking-[0.14em] text-[#ff7436]">{label}</dt>
                  <dd className="m-0 mt-2 text-sm font-extrabold leading-6 text-[#161821]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5 rounded-[8px] border border-[rgba(22,24,33,0.14)] bg-white p-6 shadow-[0_14px_34px_rgba(22,24,33,0.06)]">
            <h2 className="m-0 text-xl font-extrabold leading-tight text-[#161821]">Key Outcomes</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.outcomes.map((outcome) => (
                <span className="rounded-full border border-[rgba(22,24,33,0.48)] bg-white px-3 py-2 text-xs font-extrabold leading-none text-[#161821]" key={outcome}>
                  {outcome}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[8px] border border-[rgba(22,24,33,0.14)] bg-white p-6 shadow-[0_14px_34px_rgba(22,24,33,0.06)]">
            <h2 className="m-0 text-xl font-extrabold leading-tight text-[#161821]">Technical Priorities</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.technicalPriorities.map((priority) => (
                <span className="rounded-[5px] bg-[#f3f3f3] px-3 py-2 text-xs font-extrabold leading-none text-[#5f5f5f]" key={priority}>
                  {priority}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[8px] bg-[#161821] p-6 text-white shadow-[0_14px_34px_rgba(22,24,33,0.12)]">
            <h2 className="m-0 text-xl font-extrabold leading-tight text-white">Capabilities Used</h2>
            <ul className="m-0 mt-5 grid list-none gap-3 p-0">
              {study.capabilities.map((capability) => (
                <li className="text-sm font-semibold leading-6 text-white/78" key={capability}>
                  {capability}
                </li>
              ))}
            </ul>
            <HeaderActionButton href="/contact" light compact className="mt-6 min-h-10 rounded-lg px-4 py-2 text-sm font-bold">
              Discuss Similar Work
            </HeaderActionButton>
          </div>
        </aside>
      </div>
    </main>
  );
}

export function RelatedCaseStudiesSection({ relatedStudies }) {
  if (!relatedStudies.length) {
    return null;
  }

  return (
    <section className="bg-[#f3f3f3] px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="m-0 text-center text-[2rem] font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-5xl">
          More Case Studies
        </h2>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {relatedStudies.map((study) => (
            <article className="overflow-hidden rounded-[8px] border border-[rgba(22,24,33,0.14)] bg-white shadow-[0_12px_28px_rgba(22,24,33,0.04)]" key={study.slug}>
              <img className="h-52 w-full object-cover" src={asset(study.image)} alt={study.imageAlt} />
              <div className="p-5">
                <span className="text-xs font-extrabold uppercase leading-none text-[#ff7436]">{study.category}</span>
                <h3 className="m-0 mt-3 text-2xl font-extrabold leading-[1.12] tracking-[0] text-[#161821]">
                  {study.title}
                </h3>
                <a className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#161821] pb-2 text-sm font-extrabold leading-none text-[#161821] no-underline hover:text-[#f37135]" href={study.href}>
                  <span>Read More</span>
                  <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
