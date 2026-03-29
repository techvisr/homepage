import {
  Landmark,
  Boxes,
  HeartPulse,
  ShoppingBag,
  Building2,
  Truck,
  Lightbulb,
  Clapperboard,
} from "lucide-react";

export default function Community() {
  const industries = [
    {
      icon: Landmark,
      title: "Fintech & Financial Services",
      desc: "Secure, compliant, and high-performance platforms for payments, lending, banking, risk management, and financial automation systems.",
    },
    {
      icon: Boxes,
      title: "SaaS & Technology Products",
      desc: "Scalable SaaS platforms, multi-tenant architectures, subscription systems, APIs, and product engineering tailored for high-growth technology companies.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Life Sciences",
      desc: "Reliable, secure, and data-driven healthcare systems including patient platforms, analytics solutions, compliance-ready applications, and digital health innovations.",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Retail",
      desc: "High-conversion e-commerce platforms, inventory systems, payment integrations, performance optimization, and personalized customer experience solutions.",
    },
    {
      icon: Building2,
      title: "Enterprise Digital Transformation",
      desc: "Modernization of legacy systems, cloud migration, process automation, data platforms, and enterprise-grade application engineering.",
    },
    {
      icon: Truck,
      title: "Manufacturing, Logistics & Supply Chain",
      desc: "Intelligent systems for operations management, supply chain visibility, analytics dashboards, automation, and predictive insights.",
    },
    {
      icon: Lightbulb,
      title: "AI-Driven Startups & Innovation Labs",
      desc: "Rapid prototyping, MVP development, AI model implementation, experimentation platforms, and innovation-focused engineering support.",
    },
    {
      icon: Clapperboard,
      title: "Media, Entertainment & Platforms",
      desc: "High-scale digital platforms, content systems, streaming architectures, user engagement analytics, and performance-optimized applications.",
    },
  ];

  return (
    <section id="community" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-[36px]">
          Engineering Solutions Across Industries and Business Models
        </h2>

        <p className="mt-4 max-w-4xl text-base font-medium text-slate-600 sm:text-[17px]">
          Our technology expertise spans industries, enabling organizations of all
          sizes to innovate, scale, and operate with confidence in a rapidly
          evolving digital landscape.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-7">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
              >
                <Icon className="mb-5 h-7 w-7 text-red-600 md:mb-6 md:h-8 md:w-8" />

                <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                  {industry.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  {industry.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
