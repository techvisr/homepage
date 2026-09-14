"use client";

import { trackEvent } from "../lib/analytics.mjs";

export default function CalendlyPopupButton({
  className,
  label = "Book a Consultation",
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/admin-techvisr/30min",
}) {
  const openCalendly = (event) => {
    event.preventDefault();

    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
      trackEvent("calendly_open", { display_mode: "popup" });
      return;
    }

    trackEvent("calendly_open", { display_mode: "new_tab" });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" onClick={openCalendly} className={className}>
      {label}
    </button>
  );
}
