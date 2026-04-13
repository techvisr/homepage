import { Boxes, ShieldCheck, Cpu, CloudCog, Workflow, Gauge } from "lucide-react";
import CalendlyPopupButton from "./CalendlyPopupButton";

const features = [
  {
    icon: Boxes,
    title: "One platform mindset",
    desc: "Think in systems, journeys, and long-term maintainability instead of isolated project tasks.",
  },
  {
    icon: Gauge,
    title: "Enterprise-grade scalability",
    desc: "Build foundations that support performance, growth, and operational stability.",
  },
  {
    icon: Cpu,
    title: "AI-ready delivery",
    desc: "Bring AI into workflows with the engineering needed for production usage.",
  },
  {
    icon: Workflow,
    title: "Integrated delivery",
    desc: "Coordinate product, engineering, cloud, and quality instead of fragmented handoffs.",
  },
  {
    icon: CloudCog,
    title: "Platform modernization",
    desc: "Move systems, processes, and delivery operations toward a cleaner operating model.",
  },
  {
    icon: ShieldCheck,
    title: "Quality confidence",
    desc: "Embed validation and reliability throughout the release lifecycle.",
  },
];

export default function MailToCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">Built For The Demands Of Modern Teams</p>
          <h2 className="section-title mt-4">
            A cleaner capability grid that feels closer to modern product and commerce sites.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="soft-card rounded-[28px] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.desc}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <h3 className="display-heading text-3xl font-semibold text-slate-950 sm:text-[2.35rem]">
            Ready to try it out?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
            Let&apos;s discuss your roadmap, modernization priorities, or AI opportunity and define the right next step.
          </p>
          <CalendlyPopupButton
            label="Book a demo"
            className="primary-button mt-6"
          />
        </div>
      </div>
    </section>
  );
}
