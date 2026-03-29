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

  const metrics = [
    "8+ Industries",
    "Enterprise to Startup",
    "Scalable Architectures",
    "Future-Ready Delivery",
  ];

  return (
    <section id="community" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-[36px]">
          Engineering Solutions Across Industries and Business Models
        </h2>

        <p className="mt-4 max-w-4xl text-[18px] font-medium text-slate-600">
          Our technology expertise spans industries, enabling organizations of all
          sizes to innovate, scale, and operate with confidence in a rapidly
          evolving digital landscape.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-6 h-8 w-8 text-red-600" />

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {industry.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-600">
                  {industry.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* <div className="mt-12 bg-[#0F172A] py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center text-sm font-semibold text-white sm:px-6 md:grid-cols-4 md:text-base">
          {metrics.map((metric) => (
            <p key={metric}>{metric}</p>
          ))}
        </div>
      </div> */}
    </section>
  );
}
