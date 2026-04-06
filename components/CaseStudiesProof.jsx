export default function CaseStudiesProof() {
  const studies = [
    {
      title: "Enterprise Platform Modernization",
      industry: "Enterprise Digital Transformation",
      challenge:
        "A large organization was limited by fragmented legacy systems, slow releases, and weak scalability across core workflows.",
      solution:
        "Techvisr led modernization across architecture, full-stack engineering, cloud migration, DevOps enablement, and integrated quality delivery.",
      impact: [
        "45% faster release cycles",
        "60% improvement in system scalability",
        "Near-zero production defects",
      ],
      capabilities:
        "Full-stack development, cloud engineering, DevOps, quality automation",
    },
    {
      title: "SaaS Product Acceleration",
      industry: "SaaS Product & Technology Platforms",
      challenge:
        "A scaling SaaS business needed to launch quickly without locking itself into short-term architecture tradeoffs.",
      solution:
        "We took ownership across product engineering, architecture design, cloud deployment, CI/CD setup, and testing automation.",
      impact: [
        "MVP launched in under 12 weeks",
        "Architecture supporting 10x user growth",
        "Reduced future rework through modular design",
      ],
      capabilities:
        "Product engineering, cloud infrastructure, CI/CD, automated testing",
    },
    {
      title: "AI-driven Process Automation",
      industry: "Enterprise Operations",
      challenge:
        "Manual document processing and knowledge retrieval created delays, inconsistencies, and operational drag.",
      solution:
        "Techvisr built an AI-enabled workflow using LLMs, document intelligence, and natural-language access across enterprise information sources.",
      impact: [
        "65% reduction in manual effort",
        "Faster access to business insights",
        "Improved operational turnaround time",
      ],
      capabilities: "Generative AI, NLP, workflow automation",
    },
    {
      title: "Decision Intelligence Platform",
      industry: "Fintech & Data Intelligence",
      challenge:
        "A fintech team lacked timely insights for operational and strategic decision-making.",
      solution:
        "We delivered a decision platform combining data pipelines, predictive models, and real-time analytics experiences.",
      impact: [
        "30% operational cost reduction",
        "Improved forecasting accuracy",
        "Faster data-driven decisions",
      ],
      capabilities: "Machine learning, predictive analytics, data engineering",
    },
  ];

  const metrics = [
    "50+ projects delivered",
    "End-to-end ownership",
    "AI systems in production",
    "Up to 65% efficiency gains",
  ];

  return (
    <section id="case-studies" className="pb-20 md:pb-24">
      <div className="section-frame">
        <div className="glass-panel rounded-[36px] px-6 py-10 sm:px-8">
          <div className="max-w-4xl">
            <p className="eyebrow">Delivery Impact</p>
            <h2 className="section-title mt-4">
              Real delivery outcomes across platform, product, and AI transformation work.
            </h2>
            <p className="section-copy mt-4">
              These examples illustrate how we translate technical complexity into clearer execution paths and measurable business results.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metrics.map((metric) => (
              <p
                key={metric}
                className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-center text-sm font-semibold text-blue-800"
              >
                {metric}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {studies.map((study) => (
              <article
                key={study.title}
                className="soft-card rounded-[28px] p-7"
              >
                <p className="eyebrow">{study.title}</p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  {study.industry}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  <strong className="text-slate-950">Challenge:</strong> {study.challenge}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <strong className="text-slate-950">Solution:</strong> {study.solution}
                </p>
                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Impact
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                    {study.impact.map((item) => (
                      <li key={item} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-700">
                  <strong className="text-slate-950">Capabilities:</strong> {study.capabilities}
                </p>
              </article>
            ))}
          </div>

          <div className="dark-card mt-10 rounded-[30px] px-6 py-8 text-white">
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Looking for a delivery partner who can modernize platforms and push further with AI?
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
              We help teams move beyond fragmented execution and into a more scalable, accountable delivery model.
            </p>
            <a href="/contact" className="primary-button mt-7">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
