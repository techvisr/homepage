import { Mail } from "lucide-react";
import CalendlyPopupButton from "./CalendlyPopupButton";

export default function MailToCta() {
  return (
    <section className="py-20 md:py-24">
      <div className="section-frame">
        <div className="dark-card rounded-[24px] px-6 py-10 text-white sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Start the Conversation
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                Looking for a technology partner with a more professional delivery approach?
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:text-base">
                Let&apos;s discuss your product roadmap, modernization plan, or AI initiative and define the right engineering path.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CalendlyPopupButton
                label="Book a Consultation"
                className="primary-button"
              />
              <a
                href="mailto:admin@techvisr.com"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/14 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                admin@techvisr.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
