import Image from "next/image";
import {
  Boxes,
  Cpu,
  CloudCog,
  BadgeCheck,
  ArrowRight,
  Workflow,
} from "lucide-react";

const tabs = [
  "For product teams",
  "For platform modernization",
  "For AI adoption",
  "For release quality",
];

const cards = [
  {
    icon: Boxes,
    title: "Product delivery systems",
    desc: "Launch web platforms, internal tools, and customer experiences with clearer architecture and faster delivery alignment.",
  },
  {
    icon: Cpu,
    title: "AI-native workflows",
    desc: "Operationalize LLM and automation use cases with the engineering needed to move beyond pilots.",
  },
  {
    icon: CloudCog,
    title: "Cloud execution models",
    desc: "Modernize infrastructure, CI/CD, and operating foundations without introducing avoidable complexity.",
  },
  {
    icon: BadgeCheck,
    title: "Quality at every stage",
    desc: "Strengthen release confidence with automation, validation systems, and quality engineering discipline.",
  },
  {
    icon: Workflow,
    title: "Cross-functional delivery",
    desc: "Bring strategy, product, engineering, cloud, and QA under one coordinated execution model.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fbfcfe] py-14 md:py-18 xl:py-16">
      <div className="section-frame">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Power Every Step Of Your Delivery Journey</p>
          <h2 className="section-title mt-4">
            A cleaner, more modular service experience built for modern technology teams.
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                index === 0
                  ? "bg-[#0b5bd3] text-white"
                  : "border border-slate-200 bg-white text-slate-600"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 xl:gap-5">
          <article className="soft-card overflow-hidden rounded-[28px] lg:col-span-2">
            <div className="grid h-full gap-0 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)]">
              <div className="p-6 sm:p-7 xl:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                  Engineering Partner Model
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[1.5rem] xl:text-[1.58rem]">
                  Build software, ship AI systems, and modernize platforms through one accountable team.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Instead of stitching together multiple vendors, Techvisr combines discovery, architecture, engineering, QA, and cloud execution into a single delivery model built around outcomes.
                </p>
                <a
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5bd3] hover:text-[#093f92]"
                >
                  Explore all services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative min-h-[260px]">
                <Image
                  src="/images/team-work-session.jpg"
                  alt="Technology team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover"
                />
              </div>
            </div>
          </article>

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="soft-card rounded-[28px] p-6 xl:p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0b5bd3]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
