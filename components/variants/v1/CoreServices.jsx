export default function CoreServices() {
  const services = [
    {
      title: "Product Engineering & Development",
      sectionHeadline: "Build it right the first time.",
      content:
        "Great software starts with great architecture. We don't just write code to spec - we question the spec, challenge the assumptions, and design systems that will still be maintainable and scalable two years after launch.",
      bullets: [
        "Custom web and mobile application development",
        "SaaS product engineering and multi-tenant platforms",
        "Enterprise software, portals, and internal tooling",
        "API design, development, and third-party integrations",
        "Legacy system modernisation and re-architecture",
        "Cloud-native applications on AWS, Azure, and GCP",
      ],
      audience:
        "Startups shipping their first product. Scale-ups replacing a fragile MVP. Enterprises modernising a legacy core system.",
      outcome:
        "You get working, tested, documented software - with architecture decisions you can explain to your board and a codebase your next engineer can understand.",
      cta: "Talk to our engineering team",
      href: "/contact",
    },
    {
      title: "AI & Data Engineering",
      sectionHeadline: "AI that works in the real world, not just in demos.",
      content:
        "Most AI projects fail not because the models are wrong, but because the engineering around them is weak. Data pipelines break. Integrations don't scale. Outputs aren't explainable. We build AI systems end-to-end - from data infrastructure to deployed model to user-facing interface.",
      bullets: [
        "AI/ML model development, training, and deployment",
        "Generative AI applications and LLM integrations",
        "Intelligent document processing and workflow automation",
        "Data engineering and analytics platform builds",
        "Predictive modelling and decision intelligence systems",
        "Research, experimentation, and proof-of-concept validation",
      ],
      highlightLabel: "Microsoft ecosystem specialisation:",
      highlightText:
        "We have deep expertise in Microsoft Azure AI, Azure Machine Learning, and Microsoft Fabric for organisations running on the Microsoft data stack.",
      outcome:
        "Production-ready AI that your operations team uses every day - not a demo that sits in a Confluence page.",
      cta: "Explore our AI capabilities",
      href: "/contact",
    },
    {
      title: "Microsoft Fabric & Cloud Migration",
      sectionHeadline: "Migrate to Microsoft Fabric. Faster than you think.",
      content:
        "Microsoft Fabric is the future of enterprise data infrastructure - but most migration projects take longer and cost more than planned. We've built proprietary tooling (MigrateFAST) specifically to solve this, cutting migration time by up to 50% without compromising data integrity or business continuity.",
      bullets: [
        "Microsoft Fabric migration assessment and planning",
        "Data platform migration with MigrateFAST tooling",
        "Power BI estate migration and optimisation",
        "Azure cloud architecture and migration",
        "DevOps transformation and CI/CD pipeline setup",
        "Infrastructure as Code and containerisation",
      ],
      highlightLabel: "Why we're different:",
      highlightText:
        "Unlike general cloud consultancies, we're a Microsoft-specialist engineering firm with proprietary tools in the ecosystem. We've done this before - on real enterprise estates, not just sandbox environments.",
      outcome:
        "A fully migrated, optimised data platform on Microsoft Fabric - with zero data loss, minimal downtime, and a team that understands Power BI at the code level.",
      cta: "Book a migration assessment",
      href: "/contact",
    },
    {
      title: "Quality Engineering & Testing",
      sectionHeadline: "Quality is not a phase. It's a discipline.",
      content:
        "Bolting testing on at the end of a project is how you get last-minute delays, go-live incidents, and post-launch fire drills. We embed quality engineering into every sprint from day one - building the test frameworks, automation pipelines, and quality gates that mean your releases are boring, in the best possible way.",
      bullets: [
        "Test strategy design and quality consulting",
        "Automated UI, API, and mobile testing frameworks",
        "Performance, load, and stress testing",
        "Security and compliance validation (OWASP, GDPR)",
        "Continuous testing integration in CI/CD pipelines",
        "AI-assisted test generation and maintenance",
      ],
      outcome:
        "Faster release cycles. Near-zero production defects. A quality system your team can maintain and extend without us.",
      cta: "Talk to our QA team",
      href: "/contact",
    },
    {
      title: "Technology Consulting & CTO Advisory",
      sectionHeadline: "Engineering leadership, without the permanent hire.",
      content:
        "Sometimes what you need isn't more developers - it's someone who can tell you whether your architecture will survive the next 18 months, evaluate a technology decision before you're locked in, or lead an engineering transformation your internal team can't drive alone.",
      bullets: [
        "Technology assessment and architecture review",
        "Digital transformation strategy and roadmapping",
        "CTO advisory and fractional technical leadership",
        "Vendor and technology selection support",
        "Engineering team structure and process design",
        "Build vs buy analysis and M&A technical due diligence",
      ],
      outcome:
        "Clear direction, reduced technology risk, and decisions you can stand behind - made by engineers who've built and scaled real systems.",
      cta: "Schedule a strategy session",
      href: "/contact",
    },
  ];

  return (
    <section id="core-services" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-red-600">
                {service.title}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                {service.sectionHeadline}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {service.content}
              </p>

              <h3 className="mt-5 text-base font-semibold text-gray-900">
                What's included:
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {service.audience ? (
                <p className="mt-5 text-base text-slate-700">
                  <span className="font-semibold text-gray-900">
                    Who this is for:
                  </span>{" "}
                  {service.audience}
                </p>
              ) : null}

              {service.highlightLabel && service.highlightText ? (
                <p className="mt-5 text-base text-slate-700">
                  <span className="font-semibold text-gray-900">
                    {service.highlightLabel}
                  </span>{" "}
                  {service.highlightText}
                </p>
              ) : null}

              <p className="mt-5 text-base text-slate-700">
                <span className="font-semibold text-gray-900">
                  Outcome statement:
                </span>{" "}
                {service.outcome}
              </p>

              <a
                href={service.href}
                className="mt-5 inline-flex text-base font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                {service.cta} &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
