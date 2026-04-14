export default function Testimonials() {
  const items = [
    {
      text: (
        <>
          "Techvisr took <strong>complete ownership</strong> of our platform - from architecture to deployment.
          Their structured execution, <strong>engineering discipline</strong>, and transparency made them feel
          like an extension of our internal team."
        </>
      ),
      role: "Head of Technology",
      org: "Enterprise Digital Platform",
      note: "(Client name confidential)",
    },
    {
      text: (
        <>
          "What stood out about Techvisr was their ability to translate AI concepts into{" "}
          <strong>real, working systems</strong>. The solution delivered <strong>measurable efficiency gains</strong>{" "}
          and integrated seamlessly with our existing workflows."
        </>
      ),
      role: "Product & Data Lead",
      org: "Fintech Organization",
    },
    {
      text: (
        <>
          "We partnered with Techvisr during a critical growth phase. Their <strong>full-stack expertise</strong>{" "}
          and proactive approach helped us launch faster while ensuring the platform was <strong>built to scale</strong>."
        </>
      ),
      role: "Founder & CEO",
      org: "SaaS Technology Company",
    },
    {
      text: (
        <>
          "Techvisr didn&apos;t just experiment with AI - they engineered a{" "}
          <strong>production-ready generative AI system</strong> that <strong>integrated seamlessly into our workflows</strong>.
          The <strong>impact was visible within weeks</strong>."
        </>
      ),
      role: "AI Program Lead",
      org: "Enterprise Operations Team",
    },
    {
      text: (
        <>
          "Their <strong>AI-driven automation solution</strong> reduced manual dependency significantly. What impressed us most
          was their <strong>structured approach</strong> - from data preparation to <strong>deployment governance</strong>."
        </>
      ),
      role: "Director - Digital Transformation",
      org: "Large-Scale Enterprise",
    },
    {
      text: (
        <>
          "Techvisr combined strong data engineering with <strong>applied machine learning</strong> to deliver insights we could
          actually act on. The system was <strong>scalable, explainable, and production-grade</strong>."
        </>
      ),
      role: "Head of Analytics",
      org: "Fintech Organization",
    },
    {
      text: (
        <>
          "They introduced <strong>intelligent automation</strong> into our testing lifecycle, improving coverage while reducing
          regression effort. Their <strong>understanding of both AI and engineering fundamentals</strong> is rare."
        </>
      ),
      role: "VP Engineering",
      org: "SaaS Platform Company",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Trusted by Teams Who Value Engineering Excellence
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-lg font-medium text-slate-600">
          Our clients choose Techvisr for reliability, technical depth, and outcomes that go beyond expectations.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={`${item.role}-${idx}`}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-2xl leading-none text-blue-600/40">&ldquo;</p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{item.text}</p>
              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{item.role}</p>
                <p className="text-sm text-slate-700">{item.org}</p>
                {item.note ? <p className="text-xs text-slate-500">{item.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
