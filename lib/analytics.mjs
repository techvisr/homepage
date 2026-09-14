export function trackEvent(name, parameters = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("event", name, { page_path: window.location.pathname, ...parameters });
  } catch {
    // Analytics must never prevent navigation, booking, or contact submission.
  }
}

export function safeLabel(value = "") {
  return value.replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi, "[email]")
    .replace(/\+?\d[\d\s().-]{6,}\d/g, "[phone]").replace(/\s+/g, " ").trim().slice(0, 100);
}

export function linkDetails(href, base) {
  try {
    const url = new URL(href, base);
    if (url.protocol === "mailto:") return { link_type: "email" };
    if (url.protocol === "tel:") return { link_type: "phone" };
    if (!["http:", "https:"].includes(url.protocol)) return { link_type: "other" };
    return {
      link_type: url.origin === new URL(base).origin ? "internal" : "outbound",
      link_domain: url.hostname,
      link_path: url.pathname,
    };
  } catch { return { link_type: "other" }; }
}

export function installInteractions() {
  const milestones = new Set();
  const startedForms = new WeakSet();
  const bookings = new Set();
  let frame;
  const click = (event) => {
    const element = event.target.closest?.("a, button, [role='button'], input[type='submit']");
    if (!element || element.disabled || element.closest("[data-analytics-ignore]")) return;
    const details = element.hasAttribute("href") ? linkDetails(element.getAttribute("href"), window.location.href) : { link_type: "button" };
    trackEvent("site_click", {
      ...details,
      element_text: safeLabel(element.getAttribute("aria-label") || element.textContent || element.getAttribute("type") || "control"),
      placement: element.closest("header") ? "header" : element.closest("footer") ? "footer" : "content",
    });
    if (["email", "phone"].includes(details.link_type)) trackEvent(`${details.link_type}_click`);
  };
  const scroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = undefined;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const percent = Math.min(100, Math.round(window.scrollY / height * 100));
      for (const milestone of [25, 50, 75, 90, 100]) {
        if (percent >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          trackEvent("scroll_depth", { percent_scrolled: milestone });
        }
      }
    });
  };
  const focus = (event) => {
    const form = event.target.closest?.("form[data-analytics-form]");
    if (!form || startedForms.has(form)) return;
    startedForms.add(form);
    trackEvent("contact_form_start", { form_id: form.dataset.analyticsForm });
  };
  const message = (event) => {
    if (event.origin !== "https://calendly.com") return;
    if (![...document.querySelectorAll("iframe")].some((iframe) => iframe.contentWindow === event.source)) return;
    const names = {
      "calendly.profile_page_viewed": "calendly_profile_view",
      "calendly.event_type_viewed": "calendly_event_view",
      "calendly.date_and_time_selected": "calendly_time_selected",
      "calendly.event_scheduled": "calendly_booking_complete",
    };
    const name = names[event.data?.event];
    if (!name) return;
    if (name === "calendly_booking_complete") {
      // Use the booking URI locally for deduplication; never send the payload to GA.
      const key = event.data.payload?.event?.uri || "scheduled";
      if (bookings.has(key)) return;
      bookings.add(key);
      trackEvent("generate_lead", { lead_source: "calendly" });
    }
    trackEvent(name);
  };
  document.addEventListener("click", click, true);
  document.addEventListener("focusin", focus);
  window.addEventListener("scroll", scroll, { passive: true });
  window.addEventListener("message", message);
  return () => {
    document.removeEventListener("click", click, true);
    document.removeEventListener("focusin", focus);
    window.removeEventListener("scroll", scroll);
    window.removeEventListener("message", message);
    if (frame) cancelAnimationFrame(frame);
  };
}
