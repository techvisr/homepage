export default function CaseStudiesProof() {
  const studies = [
    {
      title: "END-TO-END ENTERPRISE PLATFORM",
      industry: "Enterprise Digital Transformation",
      challenge:
        "An enterprise organization struggled with fragmented legacy applications, slow deployments, and limited scalability, impacting operational efficiency.",
      solution:
        "Techvisr delivered end-to-end platform modernization, including architecture redesign, full-stack development, cloud migration, DevOps automation, and integrated quality engineering.",
      impact: [
        "45% faster release cycles",
        "60% improvement in system scalability",
        "Near-zero production defects",
      ],
      capabilities:
        "Full-Stack Development, Cloud Engineering, DevOps, Quality Automation",
    },
    {
      title: "SAAS PRODUCT ENGINEERING (END-TO-END)",
      industry: "SaaS Product & Technology Platforms",
      challenge:
        "A SaaS startup needed to launch a scalable product quickly while ensuring long-term extensibility and performance.",
      solution:
        "Techvisr provided complete product engineering ownership - architecture design, frontend and backend development, cloud deployment, CI/CD pipelines, and testing automation.",
      impact: [
        "MVP launched in under 12 weeks",
        "Architecture supporting 10x user growth",
        "Reduced future rework through modular design",
      ],
      capabilities:
        "Product Engineering, Cloud Infrastructure, CI/CD, Automated Testing",
    },
    {
      title: "AI-DRIVEN PROCESS AUTOMATION (AI-LED)",
      industry: "Enterprise Operations | Applied AI",
      challenge:
        "Manual document processing and internal knowledge retrieval caused delays and inefficiencies across business operations.",
      solution:
        "Techvisr implemented an AI-powered automation solution using large language models to process documents, extract insights, and enable natural-language search across enterprise data.",
      impact: [
        "65% reduction in manual effort",
        "Faster access to business insights",
        "Improved operational turnaround time",
      ],
      capabilities: "Generative AI, NLP, Workflow Automation",
      capabilitiesLabel: "AI Capabilities Used",
    },
    {
      title: "AI-ENABLED DATA & DECISION PLATFORM",
      industry: "Fintech & Data Intelligence",
      challenge:
        "A fintech organization lacked real-time insights, impacting decision-making and operational efficiency.",
      solution:
        "Techvisr built an AI-driven analytics and decision intelligence platform combining data pipelines, predictive models, and real-time dashboards.",
      impact: [
        "30% operational cost reduction",
        "Improved forecasting accuracy",
        "Faster, data-driven decisions",
      ],
      capabilities: "Machine Learning, Predictive Analytics, Data Engineering",
      capabilitiesLabel: "AI Capabilities Used",
    },
  ];

  const metrics = [
    "50+ Projects Delivered",
    "End-to-End Ownership",
    "AI Solutions in Production",
    "Up to 65% Efficiency Gains",
  ];

  return (
    <section id="case-studies" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-[38px]">
          Real-World Solutions. Proven Business Impact.
        </h2>

        <h3 className="mt-4 max-w-5xl text-lg font-medium text-slate-600">
          From full-scale digital platforms to AI-powered intelligence systems,
          we deliver technology solutions that drive measurable outcomes.
        </h3>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {metrics.map((metric) => (
            <p
              key={metric}
              className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-center text-sm font-semibold text-red-700"
            >
              {metric}
            </p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {studies.map((study) => (
            <article
              key={study.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-red-600">
                {study.title}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-800">
                Industry: <span className="font-medium">{study.industry}</span>
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <strong>Challenge:</strong> {study.challenge}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Solution:</strong> {study.solution}
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-slate-900">Impact</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {study.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-3 text-sm text-slate-700">
                <strong>{study.capabilitiesLabel || "Capabilities Used"}:</strong>{" "}
                {study.capabilities}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-red-600 p-8 text-white md:p-10">
          <h3 className="text-2xl font-bold">
            Looking for a Technology Partner Who Can Deliver End-to-End - and
            Go Further with AI?
          </h3>
          <p className="mt-3 text-base text-white/95">
            Let&apos;s discuss how Techvisr can help you build, modernize, or
            intelligently transform your technology.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
