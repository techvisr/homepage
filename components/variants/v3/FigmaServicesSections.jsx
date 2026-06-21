"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderActionButton from "./HeaderActionButton";

const heroBrandLogos = [
  { label: "Nike", src: "/images/brand-logos/nike.png", className: "h-6 w-20 sm:h-7 sm:w-24" },
  { label: "Google", src: "/images/brand-logos/google.png", className: "h-8 w-28 sm:h-9 sm:w-32" },
  { label: "Microsoft", src: "/images/brand-logos/microsoft.png", className: "h-8 w-32 sm:h-9 sm:w-36" },
  { label: "adidas", src: "/images/brand-logos/adidas.png", className: "h-10 w-20 sm:h-12 sm:w-24" },
  { label: "M·A·C", src: "/images/brand-logos/mac.png", className: "h-5 w-32 sm:h-6 sm:w-40" },
];

export function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="relative z-10 mx-auto mb-9 grid max-w-[980px] gap-4 text-center md:mb-12 lg:mb-14">
      {eyebrow ? (
        <p className={`m-0 text-xs font-extrabold uppercase leading-none tracking-[0.22em] ${light ? "text-white/70" : "text-[#f37135]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`m-0 text-3xl font-extrabold leading-[1.08] tracking-[0] sm:text-4xl md:text-5xl lg:text-[3.45rem] ${light ? "text-white" : "text-[#161821]"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mx-auto m-0 max-w-[840px] text-base leading-7 md:text-lg md:leading-8 lg:text-xl ${light ? "text-white/72" : "text-[rgba(22,24,33,0.62)]"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function ServicesHeroSection({ heroVideo, showBrandLogos = false }) {
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
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,18,0.76)_0%,rgba(2,6,18,0.58)_46%,rgba(2,6,18,0.92)_100%),linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.14)_50%,rgba(0,0,0,0.62)_100%)]"
        aria-hidden="true"
      />
      <div className="service-scanline absolute inset-x-0 top-[54%] -z-10 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(67,199,255,0.88)_48%,transparent_100%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[340px] max-w-[1100px] content-center justify-items-center px-4 py-16 text-center sm:min-h-[420px] sm:px-6 lg:min-h-[500px] lg:py-20">
        <h1 className="service-reveal m-0 max-w-[1120px] text-[2.2rem] font-extrabold leading-[1.02] tracking-[0] text-white sm:text-[3rem] md:text-[3.35rem] lg:text-[3.45rem]" data-service-reveal>
          Engineering Intelligent Digital Transformation for Modern Enterprises
        </h1>
        <p className="service-reveal m-0 mt-5 max-w-[820px] text-base font-medium leading-7 text-white/82 sm:text-lg sm:leading-8 md:text-xl" data-service-reveal>
          Accelerate business growth with scalable product engineering, AI automation services, cloud modernization, and enterprise technology solutions designed for agility, performance, and long-term innovation.
        </p>
        <div className="service-reveal mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row" data-service-reveal>
          <HeaderActionButton href="/contact" light size="compact" className="min-h-10 w-full border border-transparent px-4 py-2 text-sm font-bold sm:w-auto">
            Talk to Our Experts
          </HeaderActionButton>
        </div>
        {showBrandLogos ? (
          <div
            className="service-reveal mt-10 grid w-full max-w-[760px] grid-cols-2 items-center justify-items-center gap-x-8 gap-y-5 text-white/88 sm:grid-cols-5 sm:gap-x-9 md:mt-12"
            data-service-reveal
            aria-label="Enterprise brands"
          >
            {heroBrandLogos.map((brand) => (
              <span className="inline-flex min-h-12 items-center justify-center opacity-90" key={brand.label}>
                <img
                  className={`${brand.className} max-w-full object-contain`}
                  src={brand.src}
                  alt={brand.label}
                  draggable={false}
                  decoding="async"
                />
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ServiceMetricsSection({ metrics }) {
  return (
    <section className="relative isolate !bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 2xl:px-20">
      <SectionIntro title="Numbers That Reflect Our Engineering Excellence" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1040px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {metrics.map((metric, index) => (
          <article
            className="service-metric-card service-reveal grid min-h-[148px] content-start rounded-lg border border-[rgba(22,24,33,0.24)] bg-white px-5 py-5 text-left shadow-[0_8px_18px_rgba(22,24,33,0.035)]"
            data-service-reveal
            key={metric.label}
            style={{ "--service-reveal-delay": `${index * 60}ms` }}
          >
            <strong className="block text-[2.35rem] font-black leading-none tracking-[0] text-[#161821] md:text-[2.75rem]">
              {metric.value}
            </strong>
            <span className="mt-3 h-0.5 w-full rounded-full bg-[#f37135]" aria-hidden="true" />
            <p className="m-0 mt-3 max-w-[150px] text-sm font-extrabold leading-[1.14] text-[#161821]">
              {metric.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServiceGoalsSection({ goals }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#f3f3f3] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 2xl:px-20">
      <img
        className="pointer-events-none absolute left-[-520px] top-[-360px] z-0 h-auto w-[1580px] max-w-none opacity-[0.12] md:left-[-360px] lg:left-[-220px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <SectionIntro title="What's Your Goal Today?" />
      <div className="relative z-10 mx-auto grid w-full max-w-[960px] grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal, index) => (
          <article
            className="service-goal-button service-reveal grid min-h-[82px] place-items-center rounded-lg border border-[#f37135] bg-transparent px-5 py-3 text-center text-[#f37135]"
            data-service-reveal
            key={goal.title}
            style={{ "--service-reveal-delay": `${index * 55}ms` }}
          >
            <span className="relative z-10 text-sm font-extrabold leading-tight md:text-base">
              {goal.title}
            </span>
          </article>
        ))}
      </div>
      <div className="relative z-10 mt-16 grid justify-items-center">
        <HeaderActionButton href="/contact" variant="outline" size="compact" className="min-h-10 border-2 bg-white px-4 py-2 text-sm font-bold">
          Book a Transformation Consultation
        </HeaderActionButton>
      </div>
    </section>
  );
}

export function ServicesTechnologySection({ technologies }) {
  return (
    <section className="relative isolate !bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 2xl:px-20">
      <SectionIntro title="Technologies Powering Scalable Digital Solutions" />
      <div className="relative z-10 mx-auto grid max-w-[900px] grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              className="service-tech-logo service-reveal grid justify-items-center gap-2 text-center"
              data-service-reveal
              key={tech.name}
              style={{
                "--service-reveal-delay": `${index * 50}ms`,
                "--service-tech-delay": `${index * 110}ms`,
              }}
            >
              <Icon className="h-11 w-16 sm:h-14 sm:w-20" color={tech.color} aria-hidden="true" />
              <span className="text-base font-extrabold leading-none text-[#161821] sm:text-lg">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function FeaturedServiceSection({ asset, service }) {
  return (
    <section
      id="core-services"
      className="relative isolate overflow-hidden !bg-[#fffaf7] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 2xl:px-20"
    >
      <img
        className="pointer-events-none absolute left-[-500px] top-[-320px] z-0 h-auto w-[1660px] max-w-none opacity-[0.14] md:left-[-320px] lg:left-[-160px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <SectionIntro
        title="Our Core Technology Services"
        text="Future-ready enterprises need intelligent systems, scalable engineering, and automation-first execution to stay competitive in a rapidly evolving digital landscape."
      />

      <article className="service-reveal relative z-10 mx-auto grid w-full max-w-[1040px] overflow-hidden rounded-2xl border border-[#f37135]/34 bg-white shadow-[0_18px_38px_rgba(22,24,33,0.08)] md:grid-cols-[0.58fr_0.42fr]" data-service-reveal>
        <div className="grid content-start p-5 sm:p-7 lg:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-[#161821] text-white">
              <Code2 size={20} strokeWidth={2.4} />
            </span>
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f37135]">
              Core Services
            </p>
          </div>
          <h3 className="m-0 mt-5 text-2xl font-extrabold leading-[1.08] tracking-[0] text-[#161821] sm:text-3xl md:text-[2.25rem]">
            {service.title}
          </h3>
          <p className="m-0 mt-4 max-w-[620px] text-sm font-semibold leading-7 text-[#161821] sm:text-[15px]">
            {service.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.bullets.map((bullet) => (
              <span
                className="rounded-full border border-[rgba(22,24,33,0.42)] bg-white px-3 py-2 text-xs font-extrabold leading-none text-[#161821]"
                key={bullet}
              >
                {bullet}
              </span>
            ))}
          </div>
          <HeaderActionButton href="/contact" variant="outline" size="compact" className="mt-6 min-h-10 w-fit border-2 px-4 py-2 text-sm font-bold">
            Learn More
          </HeaderActionButton>
        </div>

        <div className="relative min-h-[260px] overflow-hidden bg-[#f7fbfb] sm:min-h-[340px] md:min-h-full">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            src={asset(service.image)}
            alt={service.imageAlt}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.88)_16%,rgba(255,255,255,0)_46%)]" aria-hidden="true" />
        </div>
      </article>
    </section>
  );
}

function CapabilityPills({ items = [], active = true }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          className={`rounded-full border px-3 py-1.5 text-[11px] font-extrabold leading-none transition-colors duration-300 sm:text-xs ${
            active
              ? "border-[rgba(22,24,33,0.48)] bg-white text-[#161821]"
              : "border-[rgba(22,24,33,0.18)] bg-white/70 text-[rgba(22,24,33,0.42)]"
          }`}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function DesktopStrategicCapabilitiesScroller({ asset, capabilities }) {
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

  const showCapabilityImage = (index, duration = 0.28) => {
    const images = imageRefs.current.slice(0, capabilities.length).filter(Boolean);
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

  const setActiveCapability = (index, imageDuration = 0.28, forceImage = false) => {
    const indexChanged = activeIndexRef.current !== index;

    if (indexChanged) {
      activeIndexRef.current = index;
      setActiveIndex(index);
    }

    if (indexChanged || forceImage) {
      showCapabilityImage(index, imageDuration);
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
    const images = imageRefs.current.slice(0, capabilities.length).filter(Boolean);

    if (!section || !panel || images.length !== capabilities.length) {
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
          setActiveCapability(nextIndex);
        }
      };

      timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top+=81",
          end: () => `+=${Math.max(window.innerHeight * (capabilities.length - 1), 900)}`,
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

      capabilities.forEach((_, index) => {
        timeline.addLabel(`capability-${index}`, index);

        if (index < capabilities.length - 1) {
          timeline.to({}, { duration: 1 });
        }
      });

      timeline.to({}, { duration: 0.7 });
      labelTimes = capabilities.map((_, index) => timeline.labels[`capability-${index}`]);
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
  }, [capabilities.length]);

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
  }, [activeIndex, capabilities.length]);

  const scrollToCapability = (index) => {
    const timeline = timelineRef.current;
    const trigger = timeline?.scrollTrigger;

    setActiveCapability(index, 0, true);

    if (!trigger || window.innerWidth < 1024) {
      return;
    }

    const targetProgress = timeline.labels[`capability-${index}`] / timeline.duration();
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
        setActiveCapability(index);
        finishProgrammaticScroll(trigger);
      },
      onInterrupt: () => {
        finishProgrammaticScroll(trigger);
      },
    });
  };

  return (
    <section ref={sectionRef} className="relative hidden !bg-white px-4 py-0 lg:block lg:px-12 2xl:px-20">
      <img
        className="pointer-events-none absolute left-[-520px] top-[-260px] z-0 h-auto w-[1660px] max-w-none opacity-[0.12] lg:left-[-170px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <div ref={panelRef} className="relative z-10 mx-auto flex min-h-[calc(100svh-81px)] w-full max-w-[1120px] transform-gpu flex-col justify-center py-7 will-change-transform xl:py-9">
        <div className="mx-auto grid max-w-[980px] gap-4 text-center">
          <h2 className="m-0 transform-gpu text-center text-[3rem] font-extrabold leading-[1.05] tracking-[0] text-[#161821] will-change-transform xl:text-[3.25rem]">
            Strategic Technology Capabilities
          </h2>
          <p className="mx-auto m-0 max-w-[820px] text-base leading-7 text-[rgba(22,24,33,0.62)]">
            Future-ready enterprises need intelligent systems, scalable engineering, and automation-first execution to stay competitive in a rapidly evolving digital landscape.
          </p>
        </div>

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
              {capabilities.map((capability, index) => {
                const active = activeIndex === index;
                const inactiveDistance = Math.min(Math.abs(activeIndex - index), 2);
                const number = capability.number || String(index + 1).padStart(2, "0");
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
                    key={capability.title}
                    aria-current={active ? "step" : undefined}
                    ref={(node) => {
                      rowRefs.current[index] = node;
                    }}
                    style={inactiveRowStyle}
                  >
                    <span
                      className={`absolute bottom-0 left-[38px] top-[56px] w-px bg-[#161821]/75 transition-opacity duration-300 ${
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
                      onClick={() => scrollToCapability(index)}
                      aria-label={`Show capability ${number}`}
                      style={inactiveNumberStyle}
                    >
                      {number}
                    </button>

                    <div className="min-w-0">
                      <button
                        className={`block w-full cursor-pointer bg-transparent p-0 text-left font-medium leading-[1.08] tracking-[0] transition-[color,opacity,transform] duration-300 ease-out ${
                          active
                            ? "translate-y-0 text-[1.65rem] text-black opacity-100 xl:text-[1.9rem]"
                            : "translate-y-1"
                        }`}
                        type="button"
                        onClick={() => scrollToCapability(index)}
                        style={inactiveTitleStyle}
                      >
                        {capability.title}
                      </button>

                      {active ? (
                        <div className="mt-4 overflow-hidden">
                          <span className="inline-flex rounded-[3px] bg-[#ff7436] px-3 py-1.5 text-[11px] font-extrabold leading-none text-white xl:text-xs">
                            {capability.category || "Strategic Capability"}
                          </span>
                          <p className="m-0 mt-3 max-w-[500px] text-sm font-extrabold leading-[1.55] text-[#161821] xl:text-base xl:leading-6">
                            {capability.text}
                          </p>
                          <p className="m-0 mt-4 text-sm font-extrabold leading-none text-black xl:text-base">
                            Core Focus Areas
                          </p>
                          <CapabilityPills items={capability.tags || capability.outcomes} active={active} />
                          <a
                            className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#161821] pb-2 text-sm font-extrabold leading-none text-[#161821] no-underline hover:text-[#f37135] xl:mt-6"
                            href={capability.href || "/contact"}
                          >
                            <span>{capability.ctaLabel || "Discuss This Capability"}</span>
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
            {capabilities.map((capability, index) => (
              <img
                className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-200"
                src={asset(capability.image)}
                alt={capability.imageAlt || ""}
                key={`${capability.title}-image`}
                ref={(node) => {
                  imageRefs.current[index] = node;
                }}
                style={{ opacity: index === 0 ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,18,0)_54%,rgba(2,6,18,0.22)_100%),linear-gradient(90deg,rgba(243,113,53,0.12),transparent_48%,rgba(67,199,255,0.16))]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStrategicCapabilitiesList({ asset, capabilities }) {
  return (
    <section
      className="relative isolate overflow-hidden !bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:hidden"
    >
      <img
        className="pointer-events-none absolute left-[-520px] top-[-360px] z-0 h-auto w-[1660px] max-w-none opacity-[0.12]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <SectionIntro
        title="Strategic Technology Capabilities"
        text="Future-ready enterprises need intelligent systems, scalable engineering, and automation-first execution to stay competitive in a rapidly evolving digital landscape."
      />

      <div className="relative z-10 mx-auto grid max-w-[680px] gap-5">
        {capabilities.map((capability, index) => (
          <article
            className="service-reveal overflow-hidden rounded-xl border border-[rgba(22,24,33,0.16)] bg-white shadow-[0_14px_30px_rgba(22,24,33,0.07)]"
            data-service-reveal
            key={capability.title}
            style={{ "--service-reveal-delay": `${index * 70}ms` }}
          >
            <img className="h-56 w-full object-cover sm:h-72" src={asset(capability.image)} alt={capability.imageAlt || ""} />
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-medium leading-none text-[#9d9d9d]">
                  {capability.number || String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex rounded-[3px] bg-[#ff7436] px-3 py-1.5 text-[11px] font-extrabold leading-none text-white">
                  {capability.category || "Capability"}
                </span>
              </div>
              <h3 className="m-0 mt-4 text-2xl font-extrabold leading-[1.08] tracking-[0] text-black">
                {capability.title}
              </h3>
              <p className="m-0 mt-4 text-sm font-bold leading-6 text-[#161821]">
                {capability.text}
              </p>
              <p className="m-0 mt-5 text-sm font-extrabold leading-none text-black">
                Core Focus Areas
              </p>
              <CapabilityPills items={capability.tags || capability.outcomes} />
              <a
                className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#161821] pb-2 text-sm font-extrabold leading-none text-[#161821] no-underline hover:text-[#f37135]"
                href={capability.href || "/contact"}
              >
                <span>{capability.ctaLabel || "Discuss This Capability"}</span>
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StrategicCapabilitiesSection({ asset, capabilities }) {
  return (
    <div id="strategic-capabilities">
      <DesktopStrategicCapabilitiesScroller asset={asset} capabilities={capabilities} />
      <MobileStrategicCapabilitiesList asset={asset} capabilities={capabilities} />
    </div>
  );
}

export function AiTransformationSection({ cards }) {
  return (
    <section id="ai-transformation" className="relative isolate overflow-hidden !bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 2xl:px-20">
      <img
        className="pointer-events-none absolute right-[-620px] top-[-300px] z-0 h-auto w-[1640px] max-w-none rotate-180 opacity-[0.14] md:right-[-460px] lg:right-[-260px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <SectionIntro
        title="AI-Native Enterprise Transformation"
        text="Empowering enterprises with intelligent automation, AI-driven decision systems, and scalable digital capabilities built for the future of business."
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <a
            className="service-reveal group block min-h-[174px] rounded-lg border border-[rgba(22,24,33,0.34)] bg-white p-5 text-[#161821] shadow-[0_10px_24px_rgba(22,24,33,0.035)] hover:-translate-y-1 hover:border-[#f37135]/55 hover:shadow-[0_18px_34px_rgba(22,24,33,0.09)]"
            data-service-reveal
            href={card.href}
            key={card.title}
            style={{ "--service-reveal-delay": `${index * 55}ms` }}
          >
            <h3 className="m-0 text-lg font-extrabold leading-[1.12] tracking-[0] text-[#161821]">
              {card.title}
            </h3>
            <p className="m-0 mt-3 text-sm font-semibold leading-6 text-[rgba(22,24,33,0.58)]">
              {card.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function EngagementModelsSection({ models }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#f7f7f7] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 2xl:px-20">
      <img
        className="pointer-events-none absolute left-[-520px] bottom-[-420px] z-0 h-auto w-[1660px] max-w-none opacity-[0.13] md:left-[-360px] lg:left-[-220px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <SectionIntro title="ENGAGEMENT MODELS" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model, index) => {
          const Icon = model.icon;

          return (
            <article
              className="service-reveal rounded-lg border border-[rgba(22,24,33,0.14)] bg-white p-5 shadow-[0_10px_24px_rgba(22,24,33,0.06)] hover:-translate-y-1 hover:border-[#f37135]/45 hover:shadow-[0_18px_34px_rgba(22,24,33,0.1)]"
              data-service-reveal
              key={model.title}
              style={{ "--service-reveal-delay": `${index * 55}ms` }}
            >
              <Icon className="size-7 text-[#161821]" strokeWidth={2.2} />
              <h3 className="m-0 mt-4 text-lg font-extrabold uppercase leading-[1.1] tracking-[0] text-[#161821]">
                {model.title}
              </h3>
              <p className="m-0 mt-3 text-sm font-semibold leading-6 text-[rgba(22,24,33,0.58)]">
                {model.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ServicesFinalCta({ heroVideo }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#020612] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24 2xl:px-20">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-56"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,18,0.86),rgba(2,6,18,0.76)),linear-gradient(90deg,rgba(243,113,53,0.18),transparent_36%,rgba(67,199,255,0.16))]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-[920px] justify-items-center text-center">
        <h2 className="service-reveal m-0 mt-5 text-3xl font-extrabold leading-[1.08] tracking-[0] text-white sm:text-4xl md:text-5xl lg:text-[4rem]" data-service-reveal>
          Ready to Modernize Your Business with AI & Engineering Excellence?
        </h2>
        <p className="service-reveal m-0 mt-5 max-w-[760px] text-base font-medium leading-7 text-white/78 sm:text-lg sm:leading-8" data-service-reveal>
          Transform legacy systems, accelerate digital transformation, and build scalable enterprise solutions with AI-first engineering and intelligent automation.
        </p>
        <HeaderActionButton href="/contact" light size="compact" className="service-reveal mt-8 min-h-10 border border-transparent px-4 py-2 text-sm font-bold" data-service-reveal>
          Schedule a Strategy Call
        </HeaderActionButton>
      </div>
    </section>
  );
}
