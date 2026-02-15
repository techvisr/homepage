import { Mail } from "lucide-react";

export default function MailToCta() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 p-8 md:p-12">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Make the move to Microsoft Fabric
          </h2>

          <p className="mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
            Let&apos;s accelerate your delivery and optimize your operations.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-lg border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-700 md:text-base">
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
    </section>
  );
}
