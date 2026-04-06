import Image from "next/image";

const aiCards = [
  {
    title: "Automation assistants for daily operations",
    desc: "Use AI to support repetitive workflows, review queues, and internal delivery operations.",
    image: "/images/insight-discovery.svg",
    light: true,
  },
  {
    title: "Search and retrieval experiences",
    desc: "Connect business documents, knowledge sources, and workflows into faster answers for teams.",
    image: "/images/platform-review.jpg",
  },
  {
    title: "Product copilots and workflow layers",
    desc: "Create AI-powered support experiences that fit real user journeys instead of isolated demos.",
    image: "/images/insight-case-study.svg",
    light: true,
  },
  {
    title: "Release-ready quality insights",
    desc: "Use AI and automation to support validation, prioritization, and release confidence.",
    image: "/images/meeting-presentation.jpg",
  },
  {
    title: "Platform monitoring and decision support",
    desc: "Improve operational visibility through analytics, alerts, and intelligence-backed workflows.",
    image: "/images/insight-playbooks.svg",
    light: true,
  },
  {
    title: "Experience-led system design",
    desc: "Build tools that feel useful to operators, analysts, product teams, and business stakeholders.",
    image: "/images/hero-team-collaboration.jpg",
  },
];

export default function Community() {
  return (
    <section id="community" className="bg-[#fbfcfe] py-16 md:py-20">
      <div className="section-frame">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Intelligent AI Tools Designed For Speed, Accuracy And Scale</p>
          <h2 className="section-title mt-4">
            Applied AI cards arranged like a product-led capability showcase.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiCards.map((card) => (
            <article key={card.title} className="soft-card overflow-hidden rounded-[28px]">
              <div className={`relative h-56 ${card.light ? "bg-[#f7f9fe]" : ""}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={card.light ? "object-contain p-5" : "object-cover"}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
