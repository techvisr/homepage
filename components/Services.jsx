import { Cpu, FlaskConical, BadgeCheck, CloudCog } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      icon: Cpu,
      title: "Product Engineering & Development",
      desc: "Custom software development, web and mobile applications, SaaS platforms, enterprise systems, and cloud-native architectures built with modern frameworks and scalable infrastructure.",
    },
    {
      icon: FlaskConical,
      title: "AI & Advanced Research",
      desc: "Applied AI solutions, machine learning models, automation systems, data intelligence platforms, and innovation research to transform complex business challenges into competitive advantages.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Engineering & Testing",
      desc: "End-to-end quality assurance, automated testing frameworks, performance engineering, security validation, and continuous testing strategies to ensure flawless digital experiences.",
    },
    {
      icon: CloudCog,
      title: "Cloud, DevOps & Scalability",
      desc: "Cloud migration, DevOps transformation, CI/CD pipelines, infrastructure automation, containerization, and enterprise-grade deployment architectures.",
    },
  ];

  const metrics = [
    "50+ Projects Delivered",
    "100% Agile Execution",
    "24/7 Engineering Support",
    "Multi-Industry Expertise",
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-[36px]">
          A Full-Stack Technology Powerhouse Built for Scale
        </h2>

        <p className="mt-4 max-w-4xl text-[18px] font-medium text-slate-600">
          From research and architecture to development, DevOps, and quality
          engineering - we deliver secure, scalable, and high-performance
          technology ecosystems.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-6 h-8 w-8 text-red-600" />

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {pillar.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-600">
                  {pillar.desc}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-5xl text-center text-xl font-semibold text-slate-900">
          We don&apos;t just build software. We engineer digital ecosystems that
          drive measurable business growth.
        </p>
      </div>

      <div className="mt-12 bg-[#0F172A] py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center text-sm font-semibold text-white sm:px-6 md:grid-cols-4 md:text-base">
          {metrics.map((metric) => (
            <p key={metric}>{metric}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
