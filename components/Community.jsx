import {
  Landmark,
  Boxes,
  HeartPulse,
  ShoppingBag,
  Building2,
  Truck,
} from "lucide-react";

export default function Community() {
  const industries = [
    {
      icon: Landmark,
      title: "Fintech & Financial Services",
      desc: "Secure engineering for payments, lending, risk systems, and digital finance platforms.",
    },
    {
      icon: Boxes,
      title: "SaaS & Product Companies",
      desc: "Scalable product engineering for growing software businesses and internal platform teams.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Life Sciences",
      desc: "Reliable systems for regulated workflows, analytics, and digital healthcare experiences.",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Commerce",
      desc: "Commerce and operations platforms focused on performance, integration, and customer journeys.",
    },
    {
      icon: Building2,
      title: "Enterprise Transformation",
      desc: "Modernization programs, workflow automation, and engineering support for digital change initiatives.",
    },
    {
      icon: Truck,
      title: "Logistics & Operations",
      desc: "Operational visibility, process systems, and delivery platforms for distributed business environments.",
    },
  ];

  return (
    <section id="community" className="bg-slate-50 py-20 md:py-24">
      <div className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries We Serve</p>
            <h2 className="section-title mt-4">
              Delivery experience across product-led and enterprise environments.
            </h2>
            <p className="section-copy mt-5">
              Techvisr supports organizations with different operating models, compliance needs, and delivery pressures, while keeping the execution approach structured and practical.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="soft-card rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {industry.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
