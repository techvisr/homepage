const highlights = [
  {
    image: "/images/hero-banner.png",
    alt: "Product engineering workshop",
    title: "Engineering Playbooks",
    desc: "Actionable guides on architecture, delivery workflows, quality, and scaling practices for modern teams.",
    href: "/services",
    cta: "View Services",
  },
  {
    image: "/images/techvisr.png",
    alt: "AI and cloud delivery insights",
    title: "Case Study Insights",
    desc: "How we solved platform modernization, AI automation, and enterprise engineering challenges with measurable outcomes.",
    href: "/case-studies",
    cta: "Read Case Studies",
  },
  {
    image: "/images/logo.png",
    alt: "Talk to Techvisr team",
    title: "Consultation & Discovery",
    desc: "Book a discovery call to map scope, architecture, timelines, and delivery plans with our engineering team.",
    href: "/contact",
    cta: "Book a Consultation",
  },
];

export default function ImageContentCards() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-[36px]">
          Insights, Proof, and Next Steps
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Explore focused content and resources to evaluate how we can support your product, platform, and AI roadmap.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden bg-slate-200">
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
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
