const highlights = [
  {
    image: "/images/insight-playbooks.svg",
    alt: "Engineering playbooks visual",
    title: "Engineering Playbooks",
    desc: "Actionable guides on architecture, delivery workflows, quality, and scaling practices for modern teams.",
    href: "/services",
    cta: "View Services",
  },
  {
    image: "/images/insight-case-study.svg",
    alt: "Case study metrics and impact visual",
    title: "Case Study Insights",
    desc: "How we solved platform modernization, AI automation, and enterprise engineering challenges with measurable outcomes.",
    href: "/case-studies",
    cta: "Read Case Studies",
  },
  {
    image: "/images/insight-discovery.svg",
    alt: "Consultation and discovery planning visual",
    title: "Consultation & Discovery",
    desc: "Book a discovery call to map scope, architecture, timelines, and delivery plans with our engineering team.",
    href: "/contact",
    cta: "Book a Consultation",
  },
];

export default function ImageContentCards() {
  return (
    <section className="bg-gray-100 py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-[34px]">
          Insights, Proof, and Next Steps
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-[17px]">
          Explore focused content and resources to evaluate how we can support your product, platform, and AI roadmap.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 w-full overflow-hidden bg-slate-200 md:h-40">
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-bold text-gray-900 md:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <a
                  href={item.href}
                  className="mt-3 inline-flex text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  {item.cta} &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
