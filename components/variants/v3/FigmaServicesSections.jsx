"use client";

import { Code2 } from "lucide-react";
import HeaderActionButton from "./HeaderActionButton";

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

export function ServicesHeroSection({ heroVideo }) {
  return (
    <section className="relative isolate overflow-hidden !bg-[#020612] px-4 py-14 text-white sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 2xl:px-20">
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

      <div className="relative z-10 mx-auto grid min-h-[380px] max-w-[1100px] content-center justify-items-center text-center lg:min-h-[460px]">
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
