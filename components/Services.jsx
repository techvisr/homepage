import { Cpu, FlaskConical, BadgeCheck, CloudCog, ArrowRight } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      icon: Cpu,
      title: "Software Development",
      desc: "Custom web, mobile, and platform engineering for products and business-critical systems.",
    },
    {
      icon: FlaskConical,
      title: "AI & Data Engineering",
      desc: "Applied AI solutions, workflow automation, and data platforms built for real operations.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Engineering",
      desc: "Automation, release validation, and testing systems that improve delivery confidence.",
    },
    {
      icon: CloudCog,
      title: "Cloud & DevOps",
      desc: "Modern cloud architecture, migration support, and scalable CI/CD operating foundations.",
    },
  ];

  const outcomes = [
    "Single partner across build, quality, AI, and platform modernization",
    "Structured delivery model with clear reporting and accountability",
    "Engineering decisions made for long-term maintainability and scale",
  ];

  return (
    <section id="services" className="bg-slate-50 py-20 md:py-24">
      <div className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div className="max-w-2xl">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title mt-4">
              Services built for companies that need professionalism and delivery clarity.
            </h2>
            <p className="section-copy mt-5">
              We support product launches, modernization programs, AI initiatives, and release quality improvements with a service model designed for business-critical work.
            </p>

            <div className="mt-8 space-y-3">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5bd3] hover:text-[#0947a5]"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="soft-card rounded-2xl p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0b5bd3]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {pillar.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
