export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover & Define",
      content:
        "We align on business goals, current-state constraints, delivery risk, and the outcomes that matter before execution begins.",
    },
    {
      number: "02",
      title: "Architect & Plan",
      content:
        "Architecture, scope framing, milestones, and governance are shaped into a roadmap that gives teams confidence before delivery ramps up.",
    },
    {
      number: "03",
      title: "Build & Integrate",
      content:
        "Engineering moves in disciplined iterations with close collaboration, high code standards, and practical feedback loops.",
    },
    {
      number: "04",
      title: "Validate & Optimize",
      content:
        "Testing, performance checks, and release controls run alongside development to reduce surprises near go-live.",
    },
    {
      number: "05",
      title: "Deploy & Scale",
      content:
        "We support launch readiness, observability, and operational improvements so teams can keep building after release.",
    },
  ];

  const principles = [
    {
      title: "Architecture-first thinking",
      content: "Every delivery decision is shaped around maintainability, scale, and long-term ownership.",
    },
    {
      title: "Security-conscious execution",
      content: "Platform resilience, validation, and governance are part of the operating model, not late additions.",
    },
    {
      title: "Continuous improvement",
      content: "We treat delivery as an evolving system and keep refining throughput, quality, and technical clarity.",
    },
  ];

  return (
    <section id="execution-framework" className="py-20 md:py-24">
      <div className="section-frame">
        <div className="max-w-4xl">
          <p className="eyebrow">Execution Framework</p>
          <h2 className="section-title mt-4">
            A structured delivery model built for reliability, speed, and stakeholder confidence.
          </h2>
          <p className="section-copy mt-4">
            We combine agile engineering habits with consulting-grade governance so delivery stays visible, risk-aware, and aligned with business outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="soft-card rounded-[28px] p-6"
            >
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-700">
                STEP {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.content}</p>
            </article>
          ))}
        </div>

        <div className="glass-panel mt-10 rounded-[30px] px-6 py-7 text-center">
          <p className="text-lg font-medium leading-8 text-slate-700">
            Transparent communication, milestone reporting, and measurable delivery controls help every project stay accountable from discovery through scale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="soft-card rounded-[28px] p-6"
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {principle.content}
              </p>
            </article>
          ))}
        </div>

        <div className="dark-card mt-10 rounded-[32px] px-6 py-9 text-white sm:px-8">
          <h3 className="text-2xl font-semibold tracking-[-0.04em]">
            Partner with a delivery team that brings structure without slowing momentum.
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
            From initial planning to post-launch scale, Techvisr is set up to move fast while keeping engineering standards high.
          </p>
          <a href="/contact" className="primary-button mt-7">
            Start Your Project With Techvisr
          </a>
        </div>
      </div>
    </section>
  );
}
