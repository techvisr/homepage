import Image from "next/image";
import CalendlyPopupButton from "./CalendlyPopupButton";

const quickStats = [
  { value: "Advisory-led", label: "Discovery, architecture, and roadmap planning" },
  { value: "AI-ready", label: "Applied intelligence and automation systems" },
  { value: "Release-safe", label: "Quality engineering and validation at scale" },
  { value: "Cloud-fit", label: "Platform modernization and delivery operations" },
];

const trustLabels = [
  "Marketplace platforms",
  "SaaS businesses",
  "Fintech teams",
  "Enterprise programs",
  "Product organizations",
  "Digital operations teams",
];

export default function Hero() {
  return (
    <section className="bg-white pb-14 pt-8 sm:pb-18 lg:pt-10">
      <div className="section-frame">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)]">
          <div className="max-w-2xl">
            <p className="eyebrow">Grow Faster. Reduce Risk. Deliver Better.</p>
            <h1 className="display-heading mt-4 text-[2.25rem] font-semibold leading-[1.02] text-slate-950 sm:text-[3rem] lg:text-[3.8rem]">
              One engineering partner for software, AI, quality, and cloud execution.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-slate-600 sm:text-base">
              Techvisr helps businesses build digital products, modernize platforms, and launch intelligent systems with a sharper delivery model and a more enterprise-ready operating style.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CalendlyPopupButton
                label="Book a Demo"
                className="primary-button"
              />
              <a href="/services" className="secondary-button">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="soft-panel relative overflow-hidden rounded-[34px] px-4 py-4 sm:px-5 sm:py-5">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_200px]">
                <div className="relative min-h-[340px] overflow-hidden rounded-[30px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:min-h-[420px]">
                  <Image
                    src="/images/hero-team-collaboration.jpg"
                    alt="Professional team collaborating in a modern office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="grid gap-4">
                  <div className="soft-card rounded-[26px] p-4">
                    <div className="relative h-32 overflow-hidden rounded-[22px]">
                      <Image
                        src="/images/platform-review.jpg"
                        alt="Platform review in progress"
                        fill
                        sizes="(max-width: 1024px) 100vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                      Platform Review
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Architecture, product, and modernization conversations that move decisions forward.
                    </p>
                  </div>

                  <div className="soft-card rounded-[26px] p-4">
                    <div className="relative h-32 overflow-hidden rounded-[22px]">
                      <Image
                        src="/images/meeting-presentation.jpg"
                        alt="Business meeting and presentation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5bd3]">
                      Stakeholder Alignment
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Business-first workshops, priorities, and execution planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                Innovative . Professional . Modern
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#fbfcfe] px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:px-6">
          <div className="grid gap-4 border-b border-slate-200 pb-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((stat) => (
              <div key={stat.value}>
                <p className="text-base font-semibold tracking-[-0.03em] text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-400">
            {trustLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
