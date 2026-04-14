export default function Testimonials() {
  const items = [
    {
      text: (
        <>
          Techvisr took <strong>complete ownership</strong> of our platform, from architecture to deployment. Their structured execution and <strong>engineering discipline</strong> made them feel like an extension of our internal team.
        </>
      ),
      role: "Head of Technology",
      org: "Enterprise Digital Platform",
      note: "Client name confidential",
    },
    {
      text: (
        <>
          They translated AI concepts into <strong>real, working systems</strong> with measurable efficiency gains and strong integration into existing workflows.
        </>
      ),
      role: "Product & Data Lead",
      org: "Fintech Organization",
    },
    {
      text: (
        <>
          Their <strong>full-stack expertise</strong> and proactive delivery approach helped us launch faster while ensuring the platform was <strong>built to scale</strong>.
        </>
      ),
      role: "Founder & CEO",
      org: "SaaS Technology Company",
    },
    {
      text: (
        <>
          Techvisr engineered a <strong>production-ready generative AI system</strong> that fit seamlessly into our workflows, and the impact was visible within weeks.
        </>
      ),
      role: "AI Program Lead",
      org: "Enterprise Operations Team",
    },
    {
      text: (
        <>
          What impressed us most was their <strong>structured approach</strong>, from data preparation through deployment governance and rollout readiness.
        </>
      ),
      role: "Director, Digital Transformation",
      org: "Large-scale Enterprise",
    },
    {
      text: (
        <>
          They combined strong data engineering with <strong>applied machine learning</strong> to deliver a system that was scalable, explainable, and production-grade.
        </>
      ),
      role: "Head of Analytics",
      org: "Fintech Organization",
    },
  ];

  return (
    <section id="testimonials" className="pb-20 md:pb-24">
      <div className="section-frame">
        <div className="max-w-4xl">
          <p className="eyebrow">Client Perspective</p>
          <h2 className="section-title mt-4">
            Trusted by teams that care about engineering quality and delivery maturity.
          </h2>
          <p className="section-copy mt-4">
            The positioning is now more executive and enterprise-friendly, and these testimonials reinforce that same tone through delivery outcomes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={`${item.role}-${idx}`}
              className="soft-card rounded-[28px] p-7"
            >
              <p className="text-4xl leading-none text-blue-200">&ldquo;</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.text}</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-950">{item.role}</p>
                <p className="mt-1 text-sm text-slate-600">{item.org}</p>
                {item.note ? <p className="mt-1 text-xs text-slate-500">{item.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
