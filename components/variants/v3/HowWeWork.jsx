export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover & Define",
      pre: "We begin with deep discovery sessions to understand your business goals, technical landscape, constraints, and growth vision. Our team defines ",
      bold: "clear requirements and measurable success criteria",
      post: " before development begins.",
    },
    {
      number: "02",
      title: "Architect & Plan",
      pre: "Our architects design ",
      bold: "scalable architecture and risk-aware planning",
      post: " by defining technology stacks, security models, deployment strategies, milestones, sprint plans, and mitigation paths.",
    },
    {
      number: "03",
      title: "Build & Integrate",
      pre: "Using agile methodologies, our engineering teams maintain ",
      bold: "agile execution with engineering discipline",
      post: " through high coding standards, version control rigor, rapid iteration, and continuous collaboration.",
    },
    {
      number: "04",
      title: "Validate & Optimize",
      pre: "Quality engineering runs in parallel with development through automation, performance testing, and security validation, enabling ",
      bold: "continuous quality validation",
      post: " before every release.",
    },
    {
      number: "05",
      title: "Deploy, Scale & Support",
      pre: "We implement CI/CD pipelines, cloud deployments, monitoring systems, and post-launch optimization strategies focused on ",
      bold: "long-term scalability and operational excellence",
      post: ".",
    },
  ];

  const principles = [
    {
      title: "Engineering Excellence",
      content:
        "Clean architecture, best coding practices, and scalable design principles.",
    },
    {
      title: "Security & Compliance First",
      content:
        "Built-in security standards, data protection practices, and compliance alignment.",
    },
    {
      title: "Continuous Improvement",
      content:
        "Iterative optimization, performance monitoring, and long-term enhancement.",
    },
  ];

  return (
    <section id="execution-framework" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Our Execution Framework: Structured, Scalable, Reliable
        </h2>

        <h3 className="mt-4 max-w-5xl text-lg font-medium text-gray-600">
          At Techvisr, we combine agile engineering practices with strong
          governance, research-driven decision making, and continuous quality
          validation to ensure predictable and high-impact outcomes.
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-red-600">
                STEP {step.number}
              </span>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {step.pre}
                <strong className="text-gray-900">{step.bold}</strong>
                {step.post}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 px-6 py-7 text-center shadow-sm">
          <p className="text-lg font-semibold text-gray-900">
            Transparent communication, milestone-based tracking, and measurable
            KPIs ensure every project remains aligned with business objectives.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {principle.content}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-red-600 p-8 text-white md:p-10">
          <h3 className="text-2xl font-bold">
            Partner With a Technology Team That Delivers With Precision
          </h3>
          <p className="mt-3 text-base text-white/95">
            From idea to deployment, Techvisr ensures structured execution and
            measurable results.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            Start Your Project With Techvisr
          </a>
        </div>
      </div>
    </section>
  );
}
