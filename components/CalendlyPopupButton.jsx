"use client";

export default function CalendlyPopupButton({
  className,
  label = "Book a Strategy Consultation",
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/admin-techvisr/30min",
}) {
  const openCalendly = (event) => {
    event.preventDefault();

    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" onClick={openCalendly} className={className}>
      {label}
    </button>
  );
}
