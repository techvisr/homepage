import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CalendlyPopupButton from "./CalendlyPopupButton";

const stats = [
  { value: "End-to-end", label: "Ownership across build, quality, AI, and cloud" },
  { value: "Architecture-led", label: "Delivery shaped for maintainability and scale" },
  { value: "Enterprise-ready", label: "Execution discipline for governance and reliability" },
];

const deliveryPoints = [
  "Architecture-first planning and delivery",
  "Software development, AI, QA, and cloud under one team",
  "Clear communication, reporting, and milestone visibility",
];

const serviceTags = [
  "Software Development",
  "AI Engineering",
  "Quality Engineering",
  "Cloud Modernization",
];

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="section-frame py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start">
          <div className="max-w-4xl">
            <p className="eyebrow">Engineering Services for Modern Businesses</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-slate-950 sm:text-[2.65rem] lg:text-[3.15rem] lg:leading-[1.05]">
              Professional software, AI, and platform engineering for teams that need reliable execution.
            </h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">
              Techvisr helps startups, scale-ups, and enterprise teams build digital products, modernize platforms, and improve delivery quality with a structured engineering approach.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CalendlyPopupButton
                label="Book a Consultation"
                className="primary-button"
              />
              <a href="/services" className="secondary-button">
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 text-white shadow-[0_20px_40px_rgba(15,23,42,0.14)]">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/hero-banner.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover opacity-20"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.76)_0%,rgba(15,23,42,0.92)_100%)]" />
              </div>

              <div className="relative p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Why Businesses Choose Techvisr
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white sm:text-[1.7rem]">
                  One accountable partner from project planning to production scale.
                </h2>

                <div className="mt-6 space-y-4">
                  {deliveryPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-sky-300" />
                      <p className="text-sm leading-7 text-slate-200">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm font-semibold text-white">Delivery Model</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Structured execution with clear governance and milestone tracking.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm font-semibold text-white">Business Focus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Engineering aligned to outcomes, scale, and operational reliability.
                    </p>
                  </div>
                </div>

                <a
                  href="/why-techvisr"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 hover:text-white"
                >
                  Learn more about Techvisr
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Service Focus
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {serviceTags.map((tag) => (
              <div
                key={tag}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
