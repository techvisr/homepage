"use client";

import FigmaFooter from "./FigmaFooter";
import SiteHeader from "./SiteHeader";
import { asset } from "./figmaContent";
import { legalContact } from "./legalContent";

export default function FigmaLegalPage({ page }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#161821] [font-family:var(--font-figma-body),Roboto,sans-serif]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#f5f5f5] px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24">
          <img
            className="pointer-events-none absolute left-[-520px] top-[-300px] z-0 h-auto w-[1680px] max-w-none opacity-[0.12] md:left-[-320px] lg:left-[-180px]"
            src="/images/story-wave-pattern.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-[980px]">
            <p className="m-0 text-xs font-extrabold uppercase leading-none tracking-[0.22em] text-[#f37135]">
              {page.eyebrow}
            </p>
            <h1 className="m-0 mt-4 max-w-[860px] text-[2.35rem] font-extrabold leading-[1.02] tracking-[0] text-[#161821] sm:text-[3.2rem] lg:text-[4rem]">
              {page.title}
            </h1>
            <p className="m-0 mt-5 max-w-[820px] text-base font-semibold leading-7 text-[rgba(22,24,33,0.68)] sm:text-lg sm:leading-8">
              {page.description}
            </p>
            <p className="m-0 mt-6 text-sm font-extrabold leading-none text-[#161821]">
              Last updated: {page.lastUpdated}
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-[980px] gap-5">
            {page.sections.map((section) => (
              <article className="rounded-[8px] border border-[rgba(22,24,33,0.16)] bg-white p-5 shadow-[0_12px_28px_rgba(22,24,33,0.04)] sm:p-6 lg:p-7" key={section.title}>
                <h2 className="m-0 text-xl font-extrabold leading-tight tracking-[0] text-[#161821] sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-3 text-sm font-semibold leading-7 text-[rgba(22,24,33,0.72)] sm:text-base sm:leading-8">
                  {section.body.map((paragraph) => (
                    <p className="m-0" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-[8px] border-2 border-[#ff9b76] bg-[#fff8f4] p-5 sm:p-6 lg:p-7">
              <h2 className="m-0 text-xl font-extrabold leading-tight text-[#161821] sm:text-2xl">
                Contact Techvisr
              </h2>
              <div className="mt-4 grid gap-2 text-sm font-bold leading-7 text-[#161821] sm:text-base">
                <a className="w-fit text-[#f37135] no-underline hover:text-[#161821]" href={`mailto:${legalContact.email}`}>
                  {legalContact.email}
                </a>
                {legalContact.phones.map((phone) => (
                  <span key={phone}>{phone}</span>
                ))}
                <span>{legalContact.address}</span>
              </div>
            </article>
          </div>
        </section>
      </main>
      <FigmaFooter asset={asset} showDescription={false} showWatermark={false} />
    </div>
  );
}
