import {
  Layers,
  Wrench,
  FlaskConical,
  Shield,
  TrendingUp,
  Handshake,
} from "lucide-react";

export default function WhyChooseTechvisr() {
  const points = [
    {
      icon: Layers,
      title: "Full-Stack Engineering Ownership",
      content:
        "From architecture and development to quality engineering, deployment, and optimization, we take complete ownership of your technology - eliminating fragmentation and execution gaps.",
    },
    {
      icon: Wrench,
      title: "Engineering-First, Not Sales-First",
      content:
        "Our teams are led by experienced engineers and architects who prioritize technical excellence, long-term scalability, and real-world performance over short-term delivery shortcuts.",
    },
    {
      icon: FlaskConical,
      title: "Research-Driven Innovation",
      content:
        "We integrate applied research, experimentation, and emerging technologies into our solutions - helping clients stay ahead of market and technology shifts.",
    },
    {
      icon: Shield,
      title: "Quality & Security by Design",
      content:
        "Quality assurance, performance optimization, and security validation are embedded into every stage of our delivery lifecycle - not added as an afterthought.",
    },
    {
      icon: TrendingUp,
      title: "Scalable & Future-Ready Solutions",
      content:
        "We design systems that grow with your business, ensuring adaptability, maintainability, and readiness for future technological evolution.",
    },
    {
      icon: Handshake,
      title: "Transparent Collaboration & Governance",
      content:
        "Clear communication, structured processes, milestone-based tracking, and accountability ensure predictability and trust throughout the engagement.",
    },
  ];

  return (
    <section id="why-techvisr" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-[38px]">
          Why Organizations Choose Techvisr
        </h2>

        <h3 className="mx-auto mt-4 max-w-[900px] text-center text-lg font-medium text-slate-600">
          Because we combine deep engineering expertise, research-driven
          innovation, and disciplined execution to deliver technology that works
          - today and at scale.
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-4 h-7 w-7 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {point.content}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-5xl text-center">
          <p className="text-xl font-semibold text-slate-800">
            Techvisr is not just a technology vendor - we are your
            <strong> long-term engineering and innovation partner</strong>.
          </p>
        </div>

        <div className="mt-10 rounded-xl bg-slate-100 px-6 py-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to Work With a Technology Partner You Can Trust?
          </h3>
          <p className="mx-auto mt-3 max-w-4xl text-base text-slate-600">
            Let&apos;s discuss how Techvisr can help you build, scale, or transform
            your technology initiatives.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
