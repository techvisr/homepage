import test from "node:test";
import assert from "node:assert/strict";
import { safeLabel, linkDetails, trackEvent, installInteractions } from "../lib/analytics.mjs";

test("contact details and query values are excluded from custom click data", () => {
  assert.equal(safeLabel("Email jane@example.com or +91 89043 61600"), "Email [email] or [phone]");
  assert.deepEqual(linkDetails("mailto:jane@example.com?body=private", "https://techvisr.com"), { link_type: "email" });
  assert.deepEqual(linkDetails("/contact?email=private#secret", "https://techvisr.com"), {
    link_type: "internal", link_domain: "techvisr.com", link_path: "/contact",
  });
});

test("analytics is safe during SSR and when the Google tag fails", () => {
  assert.doesNotThrow(() => trackEvent("generate_lead"));
  global.window = { location: { pathname: "/contact" }, gtag: () => { throw new Error("tag failed"); } };
  try { assert.doesNotThrow(() => trackEvent("generate_lead")); }
  finally { delete global.window; }
});

test("contact clicks, form starts, and trusted Calendly bookings produce safe, deduplicated events", () => {
  const listeners = new Map();
  const iframeWindow = {};
  global.window = { location: { pathname: "/contact", href: "https://techvisr.com/contact" },
    addEventListener: (name, fn) => listeners.set(name, fn), removeEventListener: (name) => listeners.delete(name) };
  global.document = { addEventListener: (name, fn) => listeners.set(name, fn), removeEventListener: (name) => listeners.delete(name),
    querySelectorAll: () => [{ contentWindow: iframeWindow }] };
  try {
    const cleanup = installInteractions();
    const emailLink = {
      hasAttribute: () => true, getAttribute: (key) => key === "href" ? "mailto:hello@example.test?body=private" : null,
      textContent: "hello@example.test", closest: (selector) => selector === "footer" ? {} : null,
    };
    listeners.get("click")({ target: { closest: () => emailLink } });
    const events = () => window.dataLayer.map((event) => ({ name: event[1], params: event[2] }));
    assert.deepEqual(events().map(e => e.name), ["site_click", "email_click"]);
    assert.equal(events()[0].params.placement, "footer");
    assert.equal(events()[0].params.element_text, "[email]");
    assert.ok(!JSON.stringify(events()).includes("hello@example.test"));
    const form = { dataset: { analyticsForm: "contact" } };
    const focus = { target: { closest: () => form } };
    listeners.get("focusin")(focus);
    listeners.get("focusin")(focus);
    assert.equal(events().filter(e => e.name === "contact_form_start").length, 1);
    const booking = { origin: "https://calendly.com", source: iframeWindow,
      data: { event: "calendly.event_scheduled", payload: { event: { uri: "private-booking-id" }, invitee: { email: "private@example.test" } } } };
    listeners.get("message")({ ...booking, source: {} });
    listeners.get("message")({ ...booking, origin: "https://calendly.com.evil.test" });
    assert.equal(events().filter(e => e.name === "generate_lead").length, 0);
    listeners.get("message")(booking);
    listeners.get("message")(booking);
    assert.equal(events().filter(e => e.name === "generate_lead").length, 1);
    assert.equal(events().filter(e => e.name === "calendly_booking_complete").length, 1);
    assert.ok(!JSON.stringify(events()).includes("private"));
    assert.equal(events().filter(e => e.name === "page_view").length, 0, "GA owns page views");
    cleanup();
    assert.equal(listeners.size, 0);
  } finally { delete global.window; delete global.document; }
});

test("events queue before Google loads; scroll milestones deduplicate and listeners clean up", () => {
  const listeners = new Map();
  const add = (name, fn) => listeners.set(name, fn);
  const remove = (name) => listeners.delete(name);
  global.window = { location: { pathname: "/contact" }, innerHeight: 100, scrollY: 500,
    addEventListener: add, removeEventListener: remove };
  global.document = { documentElement: { scrollHeight: 1100 }, addEventListener: add,
    removeEventListener: remove, querySelectorAll: () => [] };
  let callback;
  global.requestAnimationFrame = (fn) => { callback = fn; return 1; };
  global.cancelAnimationFrame = () => {};
  try {
    trackEvent("contact_form_attempt");
    assert.equal(window.dataLayer[0][1], "contact_form_attempt");
    const cleanup = installInteractions();
    listeners.get("scroll")(); callback();
    listeners.get("scroll")(); callback();
    assert.deepEqual(window.dataLayer.slice(1).map((event) => event[2].percent_scrolled), [25, 50]);
    listeners.get("message")({ origin: "https://evil.example", data: { event: "calendly.event_scheduled" } });
    assert.equal(window.dataLayer.length, 3);
    cleanup();
    assert.equal(listeners.size, 0);
  } finally {
    delete global.window; delete global.document;
    delete global.requestAnimationFrame; delete global.cancelAnimationFrame;
  }
});
