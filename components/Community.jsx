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
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Engineering Solutions Across Industries and Business Models
        </h2>

        <h3 className="mt-4 max-w-5xl text-lg font-medium text-slate-600">
          Our technology expertise spans industries, enabling organizations of all
          sizes to innovate, scale, and operate with confidence in a rapidly
          evolving digital landscape.
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-4 h-7 w-7 text-red-600" />

                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {industry.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {industry.desc}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-5xl text-center text-lg font-semibold text-gray-900 md:text-xl">
          No matter the industry, our focus remains the same: build secure,
          scalable, and future-ready technology that delivers real business
          value.
        </p>
      </div>
    </section>
  );
}
