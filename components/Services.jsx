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

  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-[36px]">
          Services built for speed and scale.
        </h2>

        <p className="mt-4 max-w-3xl text-base font-medium text-slate-600 sm:text-[17px]">
          One engineering partner for product, AI, quality, and cloud delivery.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
              >
                <Icon className="mb-5 h-7 w-7 text-red-600 md:mb-6 md:h-8 md:w-8" />

                <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  {pillar.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
