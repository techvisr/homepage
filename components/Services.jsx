import { Cpu, FlaskConical, BadgeCheck, CloudCog } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      icon: Cpu,
      title: "Product Engineering",
      desc: "We design and build web, mobile, and SaaS products from idea to launch.",
    },
    {
      icon: FlaskConical,
      title: "AI & Data",
      desc: "Production-ready AI, automation, and data platforms that create real business impact.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Engineering",
      desc: "Automated testing and quality systems that catch issues before release.",
    },
    {
      icon: CloudCog,
      title: "Cloud & DevOps",
      desc: "Cloud migration and CI/CD pipelines for faster, more reliable delivery.",
    },
  ];

  const metrics = [
    "50+ Projects",
    "Agile Delivery",
    "24/7 Engineering Support",
    "Multi-Industry Teams",
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-[36px]">
          Services built for speed and scale.
        </h2>

        <p className="mt-4 max-w-4xl text-[18px] font-medium text-slate-600">
          One engineering partner for product, AI, quality, and cloud delivery.
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
