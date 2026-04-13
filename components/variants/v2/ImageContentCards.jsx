const engagementSteps = [
  {
    number: "01",
    title: "Discover and Align",
    desc: "We understand business goals, current technical challenges, and delivery expectations before implementation begins.",
  },
  {
    number: "02",
    title: "Build with Governance",
    desc: "Engineering execution is supported by defined milestones, communication structure, and quality controls.",
  },
  {
    number: "03",
    title: "Scale with Confidence",
    desc: "We support release readiness, optimization, and long-term maintainability as systems grow.",
  },
];

const strengths = [
  "Business-focused engineering communication",
  "Cross-functional delivery ownership",
  "Architecture and quality discipline",
  "Scalable approach for startups and enterprises",
];

export default function ImageContentCards() {
  return (
    <section className="py-20 md:py-24">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title mt-4">
            A service delivery model designed to feel structured, reliable, and business-ready.
          </h2>
          <p className="section-copy mt-5">
            Our approach combines business alignment, disciplined execution, and long-term engineering thinking to support high-stakes technology initiatives.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {engagementSteps.map((step) => (
            <article key={step.number} className="soft-card rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                Step {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="soft-card rounded-2xl p-7">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
              What makes the experience feel more professional
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="dark-card rounded-2xl p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              Engagement Style
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
              Built to support clear decisions and confident delivery.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We focus on strong communication, accountable execution, and delivery practices that help technical and business stakeholders stay aligned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
