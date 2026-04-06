import {
  Layers,
  Wrench,
  FlaskConical,
  Shield,
  TrendingUp,
  Handshake,
} from "lucide-react";
import CalendlyPopupButton from "./CalendlyPopupButton";

export default function WhyChooseTechvisr() {
  const points = [
    {
      icon: Layers,
      title: "Full-stack ownership",
      content:
        "Architecture, engineering, quality, release readiness, and optimization handled as one delivery system rather than fragmented vendor work.",
    },
    {
      icon: Wrench,
      title: "Engineering-led decision making",
      content:
        "We prioritize maintainability, platform resilience, and real delivery constraints instead of surface-level sales narratives.",
    },
    {
      icon: FlaskConical,
      title: "Innovation grounded in execution",
      content:
        "Applied research and emerging technology are folded into practical implementation plans your teams can actually adopt.",
    },
    {
      icon: Shield,
      title: "Quality and security by design",
      content:
        "Performance, reliability, and validation are integrated from the start so production quality does not depend on end-stage fixes.",
    },
    {
      icon: TrendingUp,
      title: "Built for growth",
      content:
        "We design for future scale, team evolution, and operating maturity so systems stay useful after launch momentum fades.",
    },
    {
      icon: Handshake,
      title: "Transparent collaboration",
      content:
        "Structured reporting, milestone clarity, and accountable communication help stakeholders stay aligned without unnecessary noise.",
    },
  ];

  return (
    <main>
      <section className="page-shell py-10 md:py-14">
        <div className="section-frame">
          <div className="glass-panel rounded-[40px] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
            <p className="eyebrow">Why Techvisr</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              A technology partner that feels credible, structured, and built for serious delivery.
            </h1>
            <p className="section-copy mt-5 max-w-3xl">
              We combine engineering depth, executive-ready communication, and reliable execution across product, AI, platform modernization, and quality transformation.
            </p>
          </div>
        </div>
      </section>

      <section id="why-techvisr" className="pb-20 md:pb-24">
        <div className="section-frame">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="soft-card rounded-[28px] p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {point.content}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="dark-card mt-10 rounded-[32px] px-6 py-8 text-center sm:px-8">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-300 sm:text-xl">
              Techvisr is positioned as a long-term engineering and transformation partner, not just a delivery vendor filling short-term capacity gaps.
            </p>
            <CalendlyPopupButton
              label="Book a Consultation"
              className="primary-button mt-8"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
