export default function CoreServices() {
  const services = [
    {
      title: "Software Development & Product Engineering",
      authority: "Building reliable, scalable, and future-ready digital products.",
      content:
        "We design and develop robust software solutions tailored to your business needs - from early-stage MVPs to large-scale enterprise platforms.",
      bullets: [
        "Custom web and mobile application development",
        "SaaS product engineering and multi-tenant platforms",
        "Enterprise software and internal systems",
        "API development and system integrations",
        "Legacy system modernization and re-architecture",
      ],
      outcome:
        "Outcome: Faster time-to-market, scalable architecture, and long-term maintainability.",
      cta: "Talk to Our Engineering Team",
      href: "/contact",
    },
    {
      title: "AI, Data & Advanced Research",
      authority:
        "Turning data and intelligence into measurable business advantage.",
      content:
        "Our research-driven approach enables organizations to leverage artificial intelligence, machine learning, and data engineering to solve complex problems and unlock new growth opportunities.",
      bullets: [
        "AI/ML model development and deployment",
        "Intelligent automation and workflow optimization",
        "Data engineering and analytics platforms",
        "Predictive modeling and decision intelligence",
        "Research, experimentation, and proof-of-concepts",
      ],
      outcome:
        "Outcome: Smarter systems, automation at scale, and data-driven decision making.",
      cta: "Explore AI Capabilities",
      href: "#services",
    },
    {
      title: "Quality Engineering & Testing",
      authority:
        "Engineering quality into every stage of the product lifecycle.",
      content:
        "We ensure your software performs flawlessly through comprehensive quality assurance strategies, combining automation, performance, and security testing.",
      bullets: [
        "Test strategy and quality consulting",
        "Automated testing frameworks (UI, API, mobile)",
        "Performance, load, and scalability testing",
        "Security and compliance validation",
        "Continuous testing in CI/CD pipelines",
      ],
      outcome:
        "Outcome: Reduced production defects, improved reliability, and superior user experience.",
      cta: "Strengthen Product Quality",
      href: "#services",
    },
    {
      title: "Cloud, DevOps & Platform Engineering",
      authority:
        "Scalable infrastructure engineered for performance and reliability.",
      content:
        "We help organizations adopt cloud-native technologies, automate deployments, and build resilient infrastructure that supports growth and innovation.",
      bullets: [
        "Cloud architecture and migration services",
        "DevOps transformation and CI/CD pipelines",
        "Infrastructure as Code (IaC)",
        "Containerization and orchestration",
        "Monitoring, optimization, and reliability engineering",
      ],
      outcome:
        "Outcome: Faster releases, lower operational costs, and high system availability.",
      cta: "Optimize Your Infrastructure",
      href: "#services",
    },
    {
      title: "Technology Consulting & Digital Strategy",
      authority: "Aligning technology decisions with business goals.",
      content:
        "Our consulting services help organizations make informed technology choices, define roadmaps, and execute transformation initiatives with clarity and confidence.",
      bullets: [
        "Technology assessment and roadmap planning",
        "Architecture reviews and solution design",
        "Digital transformation consulting",
        "Process optimization and automation strategy",
        "CTO advisory and technical leadership support",
      ],
      outcome:
        "Outcome: Clear direction, reduced risk, and optimized technology investments.",
      cta: "Schedule a Strategy Session",
      href: "/contact",
    },
  ];

  return (
    <section id="core-services" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          End-to-End Technology Services Under One Roof
        </h2>

        <h3 className="mt-4 max-w-5xl text-lg font-medium text-slate-600">
          From strategy and research to development, deployment, and quality
          engineering - Techvisr delivers comprehensive technology services that
          help organizations build, scale, and innovate with confidence.
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>

              <p className="mt-1.5 text-sm italic text-slate-700">
                {service.authority}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.content}
              </p>

              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-600">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-bold text-gray-900">
                {service.outcome}
              </p>

              <a
                href={service.href}
                className="mt-3 inline-flex text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                {service.cta} &rarr;
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-red-600 p-8 text-white md:p-10">
          <h3 className="text-2xl font-bold">
            Ready to Build, Scale, or Transform Your Technology?
          </h3>
          <p className="mt-3 max-w-4xl text-base text-white/95">
            Partner with Techvisr to turn your ideas, systems, and challenges
            into high-impact digital solutions.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
