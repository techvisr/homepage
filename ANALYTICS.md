# Techvisr GA4

Measurement ID: `G-W4JTQHQV5D`. The root layout loads Google once; Analytics attaches site interaction listeners and resets scroll milestones on pathname changes.

## GA4 setup after deployment

1. Admin > Data streams > Web > Enhanced measurement: enable page views and browser-history page changes for Next.js navigation. No manual page_view events are sent, avoiding double counting.
2. Enable desired automatic outbound clicks, downloads, supported video and form interactions. These are separate from custom events below; do not add their counts together as unique actions.
3. Mark `generate_lead` as a key event. It fires after the contact service returns success or an embedded Calendly booking completes, not when someone merely clicks a CTA.
4. Add event-scoped custom dimensions for `element_text`, `placement`, `link_type`, `link_domain`, `link_path`, `form_id`, `lead_source`, and `display_mode` if needed in explorations. Add `percent_scrolled` as a custom metric for custom scroll reports.
5. Use Realtime and DebugView/Tag Assistant to verify initial load, Next.js navigation, clicks, contact success/error and a test Calendly booking. Confirm one page_view per navigation. Filter internal traffic after verifying the filter in testing mode.

## Custom events

| Event | Trigger |
| --- | --- |
| site_click | Links and buttons, including header/footer, internal links and CTAs |
| email_click / phone_click | Mail or telephone link clicks |
| scroll_depth | 25, 50, 75, 90, 100 percent of scrollable distance, once per page visit |
| contact_form_start | First focus in contact form per page visit |
| contact_form_attempt | Valid form submission attempt |
| contact_form_error | Request failure or service rejection |
| generate_lead | Contact API confirms success or Calendly embed confirms booking |
| calendly_open | Popup opens or new-tab fallback is requested |
| calendly_profile_view / calendly_event_view / calendly_time_selected / calendly_booking_complete | Trusted Calendly iframe notifications |

GA supplies visitor/session/engagement, acquisition, approximate location and device reports. Visitor counts represent measured browser identities, not a verified list of people. Blocking, consent settings and different devices affect counts. This does not add session replay or collect form contents. Custom click URLs omit queries/fragments, and email/phone targets are excluded. Google automatic URL collection is separate; keep personal data out of site URLs and configure GA data redaction as appropriate.

Bookings completed in the separate Calendly tab cannot notify this site's listener; use Calendly's own analytics integration for that case. No backend credentials or GA reporting access are configured here. Dashboard settings and live delivery require verification in the actual GA property.

Run local checks: `npm test` and `npm run build`. Tests mock contact requests; they do not send real enquiries. They cover accepted/rejected responses, network errors, event deduplication, trusted Calendly messages, and analytics failures without interrupting the site.
