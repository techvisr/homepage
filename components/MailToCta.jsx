import { Mail } from "lucide-react";
import CalendlyPopupButton from "./CalendlyPopupButton";

export default function MailToCta() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 p-7 sm:p-8 md:p-10">
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            Need a team that can build and scale with you?
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            Let&apos;s accelerate your delivery and optimize your operations.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CalendlyPopupButton
              label="Book a Strategy Consultation"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 md:text-base"
            />

            <div className="inline-flex items-center gap-3 rounded-lg border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-700 md:text-base">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:admin@techvisr.com"
                className="break-all hover:underline"
              >
                admin@techvisr.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
