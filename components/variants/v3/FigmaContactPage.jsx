"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FiCheckCircle, FiGlobe, FiShield } from "react-icons/fi";
import FigmaFooter from "./FigmaFooter";
import HeaderActionButton from "./HeaderActionButton";
import IndustriesSection from "./IndustriesSection";
import SiteHeader from "./SiteHeader";
import { asset, industries } from "./figmaContent";

const contactVideo = "/videos/contact-hero-background.mp4";
const consultationImage = "/images/contact/consultation-code.png";
const contactEmail = "connect@techvisr.com";
const contactEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;
const contactFallbackEndpoint = `https://formsubmit.co/${contactEmail}`;
const primaryPhone = "+91 89043 61600";
const secondaryPhone = "+91 9438433644";
const primaryPhoneHref = "tel:+918904361600";
const companyAddressLines = [
  "Techvisr Private Limited",
  "11th Floor, Innov8 Prestige Tech Platina 2",
  "Outer Ring Road, Kadabisanahalli",
  "Bangalore South, Bangalore",
  "Karnataka - 560087",
];

const certificationBadges = [
  { src: "/images/contact/iso-9001.png", alt: "ISO 9001:2015 certified company" },
  { src: "/images/contact/iso-27001.png", alt: "ISO 27001 certified" },
  { src: "/images/contact/iso-27018.png", alt: "ISO 27018 certified" },
  { src: "/images/contact/iso-27701.png", alt: "ISO 27701 certified" },
];

const engagementModels = [
  {
    icon: FiCheckCircle,
    title: "Project-Based Delivery",
    text: "End-to-end ownership for product development and transformation initiatives.",
  },
  {
    icon: FiShield,
    title: "Dedicated Engineering Teams",
    text: "Scale your delivery capacity with specialized engineering talent.",
  },
  {
    icon: FiGlobe,
    title: "Strategic Technology Consulting",
    text: "Expert guidance for AI adoption, modernization, and platform strategy.",
  },
];

const workReasons = [
  "AI-Native Engineering",
  "Enterprise-Grade Security",
  "Industry-Specific Solutions",
  "Cloud & DevOps Expertise",
  "Full-Stack Product Development",
  "Scalable Engagement Models",
];

const contactCards = [
  {
    icon: Mail,
    title: "Email Address",
    lines: [{ label: contactEmail, href: `mailto:${contactEmail}` }],
  },
  {
    icon: Clock3,
    title: "Service Availability",
    lines: ["24/7 Premium Response"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: companyAddressLines,
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [
      { label: primaryPhone, href: primaryPhoneHref },
      { label: secondaryPhone, href: "tel:+919438433644" },
    ],
  },
];

const inputClass =
  "mt-2 h-10 w-full rounded-[4px] border border-transparent bg-[#eeeeee] px-3 text-sm font-medium text-[#161821] outline-none transition focus:border-[#f37135] focus:bg-white focus:ring-2 focus:ring-[#f37135]/20";

export function useContactReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-contact-reveal]")];

    if (!elements.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.72] saturate-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src={contactVideo}
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.24),rgba(0,0,0,0.32))]" aria-hidden="true" />
      <div className="relative z-20 mx-auto grid min-h-[340px] max-w-5xl content-center justify-items-center px-4 py-16 text-center sm:min-h-[420px] sm:px-6 lg:min-h-[500px] lg:py-20">
        <h1 className="m-0 text-[2rem] font-semibold leading-[1.1] tracking-[0] text-white motion-safe:animate-[heroReveal_800ms_ease_both] sm:text-[3rem] lg:text-[3.55rem]">
          Let&apos;s Build <span className="font-extrabold text-[#ff7436]">What&apos;s Next</span>
        </h1>
        <p className="m-0 mt-5 max-w-3xl text-sm font-medium leading-6 text-white/90 motion-safe:animate-[heroReveal_800ms_120ms_ease_both] sm:text-lg sm:leading-8">
          Whether you&apos;re modernizing legacy systems, exploring AI opportunities, or launching a new digital product, our experts are ready to help.
        </p>
        <HeaderActionButton
          href="#contact-form"
          light
          compact
          className="contact-button-lift mt-7 min-h-11 rounded-lg px-5 py-3 text-sm font-bold motion-safe:animate-[heroReveal_800ms_220ms_ease_both] sm:text-base"
        >
          Book a Strategy Call
        </HeaderActionButton>
      </div>
    </section>
  );
}

export function JourneySection() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleContactSubmit(event) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to submit contact form");
      }

      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <section id="contact-form" className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24">
      <img
        className="pointer-events-none absolute left-[-440px] top-[-260px] z-0 h-auto w-[1680px] max-w-none opacity-[0.13] md:left-[-280px] lg:left-[-160px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-[1080px] justify-items-center">
        <h2 className="contact-reveal m-0 max-w-[760px] text-center text-[2.05rem] font-extrabold leading-[1.12] tracking-[0] text-[#161821] sm:text-5xl lg:text-[3.9rem]" data-contact-reveal>
          Start Your Digital Transformation Journey
        </h2>

        <div className="mt-10 grid w-full gap-4 lg:grid-cols-2 lg:gap-5">
          <article className="contact-card-lift contact-reveal overflow-hidden rounded-[18px] bg-black text-white shadow-[0_18px_42px_rgba(22,24,33,0.16)]" data-contact-reveal style={{ "--contact-reveal-delay": "80ms" }}>
            <div className="p-5 sm:p-7">
              <span className="inline-flex w-fit rounded-[3px] bg-[#ff7436] px-3 py-1.5 text-xs font-bold leading-none text-white">
                Start a Conversation
              </span>
              <h3 className="m-0 mt-4 max-w-[560px] text-[1.55rem] font-medium leading-[1.08] tracking-[0] text-white sm:text-[2rem] lg:text-[2.15rem]">
                Tell Us What You Need, &amp; We&apos;ll Help You Find The Right Solution.
              </h3>
              <p className="m-0 mt-2 text-[1.35rem] font-extrabold leading-tight text-[#ff7436] sm:text-[1.65rem]">
                No Pressure, No Obligation.
              </p>
            </div>
            <img
              className="contact-image-float h-[230px] w-full object-cover sm:h-[305px] lg:h-[336px]"
              src={consultationImage}
              alt="Engineer working with application code during a technology consultation"
            />
          </article>

          <form
            className="contact-card-lift contact-reveal grid content-start rounded-[18px] border border-[#d8d8d8] bg-white p-5 shadow-[0_14px_32px_rgba(22,24,33,0.05)] sm:p-7 lg:p-9"
            data-contact-reveal
            style={{ "--contact-reveal-delay": "160ms" }}
            action={contactFallbackEndpoint}
            method="POST"
            onSubmit={handleContactSubmit}
          >
            <input type="hidden" name="_subject" value="New Techvisr contact form submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input className="hidden" name="_honey" tabIndex={-1} autoComplete="off" />
            <label className="text-xs font-bold leading-none text-[#8d8d8d]">
              Name<span className="text-[#ff7436]">*</span>
              <input className={inputClass} name="Name" type="text" required />
            </label>
            <label className="mt-5 text-xs font-bold leading-none text-[#8d8d8d]">
              Company
              <input className={inputClass} name="Company" type="text" />
            </label>
            <label className="mt-5 text-xs font-bold leading-none text-[#8d8d8d]">
              Email<span className="text-[#ff7436]">*</span>
              <input className={inputClass} name="Email" type="email" required />
            </label>
            <label className="mt-5 text-xs font-bold leading-none text-[#8d8d8d]">
              Phone number<span className="text-[#ff7436]">*</span>
              <input className={inputClass} name="Phone number" type="tel" required />
            </label>
            <label className="mt-5 text-xs font-bold leading-none text-[#8d8d8d]">
              How can we help?<span className="text-[#ff7436]">*</span>
              <textarea
                className={`${inputClass} h-24 resize-none py-3`}
                name="How can we help?"
                required
              />
            </label>
            <button
              className="contact-button-lift mt-7 inline-flex min-h-11 w-fit items-center justify-center gap-3 rounded-[8px] border-2 border-[#161821] bg-white px-5 py-3 text-sm font-extrabold uppercase leading-none text-[#161821] transition hover:bg-[#161821] hover:text-white"
              type="submit"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Schedule a Call"}
              <Send size={17} strokeWidth={2.2} />
            </button>
            <div aria-live="polite" className="mt-4 min-h-6">
              {formStatus === "sent" ? (
                <p className="m-0 rounded-md bg-[#edf8f1] px-3 py-2 text-sm font-bold leading-5 text-[#176032]">
                  Thanks. Your message has been sent to Techvisr.
                </p>
              ) : null}
              {formStatus === "error" ? (
                <p className="m-0 rounded-md bg-[#fff0ed] px-3 py-2 text-sm font-bold leading-5 text-[#8f2f1e]">
                  The form could not be sent right now. Please email{" "}
                  <a className="underline" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="contact-reveal m-0 text-center text-[2rem] font-extrabold leading-[1.1] tracking-[0] text-[#161821] sm:text-5xl lg:text-[3.5rem]" data-contact-reveal>
          Our Engagement Models
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {engagementModels.map((model, index) => {
            const Icon = model.icon;

            return (
              <article
                className="contact-card-lift contact-reveal grid min-h-[176px] justify-items-center rounded-[8px] bg-[#ff7436] px-5 py-7 text-center text-white shadow-[0_14px_24px_rgba(243,113,53,0.16)]"
                data-contact-reveal
                key={model.title}
                style={{ "--contact-reveal-delay": `${index * 90}ms` }}
              >
                <Icon className="contact-icon-breathe" size={44} strokeWidth={2.55} aria-hidden="true" />
                <h3 className="m-0 mt-5 text-base font-extrabold leading-tight">{model.title}</h3>
                <p className="m-0 mt-2 max-w-[260px] text-xs font-bold leading-5 text-white/95">{model.text}</p>
              </article>
            );
          })}
        </div>
        <div className="contact-reveal mt-5 rounded-[8px] border-2 border-[#ff7436] bg-[#ededed] px-5 py-5 text-center text-base font-extrabold leading-6 text-[#161821]" data-contact-reveal style={{ "--contact-reveal-delay": "220ms" }}>
          Experience the pinnacle of personalized service.
          <br className="hidden sm:block" />
          Contact Techvisr today.
        </div>
      </div>
    </section>
  );
}

function WhyWorkSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <img
        className="pointer-events-none absolute left-[-520px] top-[-260px] z-0 h-auto w-[1740px] max-w-none opacity-[0.12] md:left-[-300px] lg:left-[-120px]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1080px]">
        <h2 className="contact-reveal m-0 text-center text-[2rem] font-extrabold leading-[1.1] tracking-[0] text-black sm:text-5xl lg:text-[3.45rem]" data-contact-reveal>
          Why Work With Techvisr?
        </h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workReasons.map((reason, index) => (
            <div
              className="contact-card-lift contact-reveal grid min-h-[92px] place-items-center rounded-[8px] border-2 border-[#ff9b76] bg-white px-4 py-5 text-center text-xl font-extrabold leading-tight text-[#ff7436] shadow-[0_10px_22px_rgba(22,24,33,0.03)]"
              data-contact-reveal
              key={reason}
              style={{ "--contact-reveal-delay": `${index * 55}ms` }}
            >
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <img
        className="pointer-events-none absolute right-[-660px] top-[-300px] z-0 h-auto w-[1680px] max-w-none opacity-[0.12]"
        src="/images/story-wave-pattern.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-[1080px] gap-9 lg:grid-cols-[0.76fr_1fr] lg:items-start">
        <div className="contact-reveal" data-contact-reveal>
          <p className="m-0 text-base font-medium leading-none text-[#464646]">Contact Info</p>
          <h2 className="m-0 mt-6 max-w-[380px] text-[2rem] font-extrabold leading-[1.03] tracking-[0] text-black sm:text-5xl lg:text-[3.45rem]">
            We are always happy to assist you
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="flex items-center gap-3">
                  <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                  <h3 className="m-0 text-sm font-extrabold leading-none text-[#161821]">{card.title}</h3>
                </div>
                <div className="mt-5 h-[2px] w-7 bg-[#161821]" />
                <div className="mt-5 grid gap-1 text-base font-bold leading-6 text-[#161821]">
                  {card.lines.map((line, index) => {
                    const lineLabel = typeof line === "string" ? line : line.label;

                    return typeof line === "string" ? (
                      <span key={`${card.title}-${lineLabel}-${index}`}>{lineLabel}</span>
                    ) : (
                      <a className="text-current no-underline hover:text-[#f37135]" href={line.href} key={`${card.title}-${lineLabel}-${index}`}>
                        {lineLabel}
                      </a>
                    );
                  })}
                </div>
              </>
            );

            return (
              <article
                className="contact-card-lift contact-reveal min-h-[150px] rounded-[8px] border-2 border-[#ff9b76] bg-white p-6 text-[#161821]"
                data-contact-reveal
                key={card.title}
                style={{ "--contact-reveal-delay": `${index * 80}ms` }}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechnologyCta() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-14 text-white sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.86] saturate-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src={contactVideo}
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.24))]" aria-hidden="true" />
      <div className="contact-reveal relative z-20 mx-auto grid max-w-[840px] justify-items-center text-center" data-contact-reveal>
        <h2 className="m-0 max-w-[720px] text-[2.1rem] font-extrabold leading-[1.04] tracking-[0] text-white sm:text-5xl lg:text-[3.6rem]">
          Have a Technology Challenge to Solve?
        </h2>
        <p className="m-0 mt-5 text-base font-medium leading-7 text-white/86 sm:text-xl">
          Let&apos;s discuss your goals, timelines, and technology requirements.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
          <HeaderActionButton
            href="#contact-form"
            light
            compact
            className="contact-button-lift min-h-11 rounded-lg px-5 py-3 text-sm font-bold"
          >
            Schedule a Free Consultation
          </HeaderActionButton>
          <a
            href="/case-studies"
            className="contact-button-lift inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-white/80 bg-transparent px-5 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
          >
            <span>Explore Case Studies</span>
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function FigmaContactPage() {
  useContactReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#161821] [font-family:var(--font-figma-body),Roboto,sans-serif]">
      <SiteHeader />
      <main>
        <ContactHero />
        <JourneySection />
        <EngagementModels />
        <IndustriesSection asset={asset} industries={industries} />
        <WhyWorkSection />
        <ContactInfoSection />
        <TechnologyCta />
      </main>
      <FigmaFooter asset={asset} certificationBadges={certificationBadges} showDescription={false} />
    </div>
  );
}
