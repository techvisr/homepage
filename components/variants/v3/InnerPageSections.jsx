import { ArrowRight, Check } from "lucide-react";
import CalendlyPopupButton from "./CalendlyPopupButton";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Book a Consultation",
  secondaryLabel,
  secondaryHref,
  stats = [],
}) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,rgba(11,91,211,0.1),transparent_42%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_32%)]" />
      <div className="section-frame relative z-10">
        <div className="soft-panel overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
            <div className="max-w-3xl">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="display-heading mt-4 text-[2rem] font-semibold leading-[1.04] text-slate-950 sm:text-[2.55rem] lg:text-[3.25rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-slate-600 sm:text-[1.05rem]">
                {description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CalendlyPopupButton label={primaryLabel} className="primary-button" />
                {secondaryLabel && secondaryHref ? (
                  <a href={secondaryHref} className="secondary-button">
                    {secondaryLabel}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="dark-card rounded-[30px] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                Delivery Signals
              </p>
              <div className="mt-5 space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsightGrid({ eyebrow, title, description, items = [] }) {
  return (
    <section className="bg-[#fbfcfe] py-16 md:py-20">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          {description ? <p className="section-copy mt-4 max-w-3xl">{description}</p> : null}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="soft-card rounded-[28px] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0b5bd3]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceShowcase({ eyebrow, title, description, services = [] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-4 max-w-3xl">{description}</p>
        </div>

        <div className="mt-8 space-y-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="soft-card overflow-hidden rounded-[32px] border border-slate-200"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
                <div className="bg-[#0b0f19] px-6 py-6 text-white sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.045em] text-white sm:text-[1.6rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.content}</p>
                  {service.outcome ? (
                    <p className="mt-5 text-sm leading-7 text-slate-200">
                      <span className="font-semibold text-white">Outcome:</span> {service.outcome}
                    </p>
                  ) : null}
                </div>

                <div className="bg-white px-6 py-6 sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                    What we cover
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="font-medium text-slate-950">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  {service.highlight ? (
                    <div className="mt-5 rounded-[24px] border border-blue-100 bg-blue-50/70 p-4 text-sm leading-7 text-slate-700">
                      <span className="font-semibold text-slate-950">{service.highlight.label}</span>{" "}
                      {service.highlight.text}
                    </div>
                  ) : null}
                  {service.audience ? (
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      <span className="font-semibold text-slate-950">Best fit:</span> {service.audience}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection({ eyebrow, title, description, steps = [] }) {
  return (
    <section className="bg-[#fbfcfe] py-16 md:py-20">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-4 max-w-3xl">{description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <article key={step.number} className="soft-card rounded-[28px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                Step {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.04em] text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofGrid({ eyebrow, title, description, metrics = [], studies = [] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-4 max-w-3xl">{description}</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5"
            >
              <p className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {studies.map((study) => (
            <article key={study.title} className="soft-card rounded-[30px] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                {study.title}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                {study.industry}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Challenge:</span> {study.challenge}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Solution:</span> {study.solution}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {study.impact.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">
                  {study.capabilitiesLabel || "Capabilities"}:
                </span>{" "}
                {study.capabilities}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialGrid({ eyebrow, title, description, items = [] }) {
  return (
    <section className="bg-[#fbfcfe] py-16 md:py-20">
      <div className="section-frame">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-4">{description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article key={`${item.role}-${index}`} className="soft-card rounded-[28px] p-6">
              <p className="text-3xl leading-none text-[#0b5bd3]/35">&ldquo;</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.text}</p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-950">{item.role}</p>
                <p className="mt-1 text-sm text-slate-600">{item.org}</p>
                {item.note ? <p className="mt-1 text-xs text-slate-500">{item.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCards({ items = [] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-frame">
        <div className="grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="soft-card rounded-[28px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                {item.kicker}
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              {item.lines ? (
                <div className="mt-5 space-y-2 text-sm text-slate-700">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : null}
              {item.href && item.cta ? (
                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5bd3] hover:text-[#093f92]"
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HighlightPanel({ eyebrow, title, description, bullets = [], ctaLabel }) {
  return (
    <section className="bg-[#fbfcfe] py-16 md:py-20">
      <div className="section-frame">
        <div className="dark-card rounded-[34px] p-7 text-white sm:p-9 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                {eyebrow}
              </p>
              <h2 className="display-heading mt-4 text-[1.8rem] font-semibold tracking-[-0.045em] text-white sm:text-[2rem] lg:text-[2.2rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {description}
              </p>
            </div>

            <div className="space-y-3">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-slate-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" />
                  <span>{bullet}</span>
                </div>
              ))}

              <CalendlyPopupButton label={ctaLabel} className="primary-button mt-4 w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
