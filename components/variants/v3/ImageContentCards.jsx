import Image from "next/image";
import { ArrowRight } from "lucide-react";

const compactCards = [
  {
    title: "Architecture strategy",
    desc: "Guide platform decisions with a clearer operating model and delivery structure.",
  },
  {
    title: "Release quality",
    desc: "Improve confidence with QA systems, automation, and validation built into delivery.",
  },
  {
    title: "AI acceleration",
    desc: "Turn opportunities into working systems with the engineering needed for production use.",
  },
];

export default function ImageContentCards() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-frame">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Success Stories With Real Impact</p>
          <h2 className="section-title mt-4">
            Proof blocks that feel closer to product and consulting leaders.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <article className="soft-card overflow-hidden rounded-[28px] lg:col-span-7">
            <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
              <div className="relative min-h-[240px]">
                <Image
                  src="/images/meeting-presentation.jpg"
                  alt="Business strategy session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 26vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                  Delivery Story
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  From early alignment to release readiness, every step stays tied to business outcomes.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We work with teams to clarify priorities, shape architecture, align stakeholders, and keep execution clean as the product or platform grows.
                </p>
              </div>
            </div>
          </article>

          <article className="soft-card rounded-[28px] p-6 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
              Outcome Focus
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">01</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Discovery and scope clarity</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">02</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Build and integrate with discipline</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">03</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Validate, release, and optimize</p>
              </div>
            </div>
          </article>

          <article className="soft-card overflow-hidden rounded-[28px] lg:col-span-5">
            <div className="relative h-72">
              <Image
                src="/images/platform-review.jpg"
                alt="Reviewing a platform on a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-950">
                Platform modernization with a stronger decision-making rhythm.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Modernization programs move faster when product, cloud, and delivery decisions are made together.
              </p>
            </div>
          </article>

          <div className="grid gap-4 lg:col-span-7 sm:grid-cols-3">
            {compactCards.map((card) => (
              <article key={card.title} className="soft-card rounded-[28px] p-6">
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="lg:col-span-12 flex justify-center pt-2">
            <a
              href="/case-studies"
              className="secondary-button"
            >
              View more stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
