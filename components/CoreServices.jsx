export default function CoreServices() {
  const services = [
    {
      title: "Product Engineering & Development",
      sectionHeadline: "Build it with the right architecture from day one.",
      content:
        "We shape web, mobile, SaaS, and internal platforms with a focus on maintainability, operating clarity, and product velocity that lasts beyond launch.",
      bullets: [
        "Custom web and mobile application development",
        "SaaS product engineering and multi-tenant platforms",
        "Enterprise portals and internal tooling",
        "API development and systems integration",
        "Legacy modernization and re-architecture",
        "Cloud-native application delivery",
      ],
      audience:
        "Startups launching their first serious product, scale-ups replacing fragile platforms, and enterprises modernizing core systems.",
      outcome:
        "A tested, understandable, and scalable product foundation that supports growth instead of slowing it down.",
      cta: "Talk to our engineering team",
      href: "/contact",
    },
    {
      title: "AI & Data Engineering",
      sectionHeadline: "Practical AI systems that fit real operations.",
      content:
        "We build the pipelines, integrations, interfaces, and governance around AI so the solution is usable, explainable, and sustainable in production.",
      bullets: [
        "LLM and generative AI applications",
        "AI workflow automation",
        "Data engineering and analytics platforms",
        "Model deployment and experimentation support",
        "Intelligent document and decision systems",
        "Microsoft Azure AI and Fabric-aligned implementations",
      ],
      highlightLabel: "Where we add value:",
      highlightText:
        "We focus on the engineering layer that determines whether AI becomes part of daily operations or remains a one-time demo.",
      outcome:
        "Operational AI systems teams can trust and extend, backed by production-ready delivery discipline.",
      cta: "Explore our AI capabilities",
      href: "/contact",
    },
    {
      title: "Microsoft Fabric & Cloud Migration",
      sectionHeadline: "Modernization without unnecessary platform disruption.",
      content:
        "Our migration approach balances speed, continuity, and platform readiness so cloud and Fabric transformation efforts move forward with less risk.",
      bullets: [
        "Microsoft Fabric migration planning",
        "Power BI estate migration and optimization",
        "Azure architecture and migration support",
        "DevOps transformation and CI/CD enablement",
        "Infrastructure as Code and platform automation",
        "Migration acceleration using repeatable tooling",
      ],
      highlightLabel: "Why this matters:",
      highlightText:
        "Complex migration work needs a structured engineering model, not just generic cloud consulting language.",
      outcome:
        "A cleaner, scalable, and better-governed cloud data platform with minimal disruption to business operations.",
      cta: "Book a migration assessment",
      href: "/contact",
    },
    {
      title: "Quality Engineering & Testing",
      sectionHeadline: "Release quality engineered into the process.",
      content:
        "We embed automation, quality controls, and validation workflows directly into delivery so teams can ship faster with fewer production surprises.",
      bullets: [
        "Test strategy and quality consulting",
        "Automated UI, API, and mobile testing",
        "Performance and load testing",
        "Security and compliance validation",
        "Continuous testing in CI/CD",
        "AI-assisted testing workflows",
      ],
      outcome:
        "Higher release confidence, fewer production issues, and a quality model your internal team can keep scaling.",
      cta: "Talk to our QA team",
      href: "/contact",
    },
    {
      title: "Technology Consulting & CTO Advisory",
      sectionHeadline: "Senior technical guidance without adding permanent overhead.",
      content:
        "For teams navigating growth, transformation, or uncertain architecture choices, we provide strategic engineering direction grounded in delivery reality.",
      bullets: [
        "Architecture reviews and technology assessment",
        "Transformation roadmaps and prioritization",
        "Fractional CTO and technical leadership support",
        "Vendor and stack selection",
        "Engineering process and team design",
        "Build-versus-buy and due diligence support",
      ],
      outcome:
        "Clearer technical direction, better governance, and decisions leadership teams can stand behind.",
      cta: "Schedule a strategy session",
      href: "/contact",
    },
  ];

  return (
    <section id="core-services" className="pb-20 md:pb-24">
      <div className="section-frame">
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="soft-card rounded-[32px] p-7 sm:p-8 lg:p-10"
            >
              <div className="max-w-4xl">
                <p className="eyebrow">{service.title}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {service.sectionHeadline}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {service.content}
                </p>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[28px] bg-slate-950 p-6 text-white">
                  {service.audience ? (
                    <p className="text-sm leading-7 text-slate-300">
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Who this is for
                      </span>
                      <span className="mt-3 block">{service.audience}</span>
                    </p>
                  ) : null}

                  {service.highlightLabel && service.highlightText ? (
                    <p className="mt-6 text-sm leading-7 text-slate-300">
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                        {service.highlightLabel}
                      </span>
                      <span className="mt-3 block">{service.highlightText}</span>
                    </p>
                  ) : null}

                  <p className="mt-6 text-sm leading-7 text-slate-300">
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                      Outcome
                    </span>
                    <span className="mt-3 block">{service.outcome}</span>
                  </p>

                  <a
                    href={service.href}
                    className="mt-7 inline-flex text-sm font-semibold text-white hover:text-sky-300"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
