"use client";

import { useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";
import CarouselControls from "./CarouselControls";

const summaries = {
  Healthcare: "Connect patient experiences, clinical workflows, and healthcare data with secure digital systems.",
  BFSI: "Build trusted financial experiences with smarter operations, stronger risk controls, and modern infrastructure.",
  "Retail & Ecommerce": "Connect shopping experiences, inventory, and commerce operations across every customer touchpoint.",
  EdTech: "Create engaging learning experiences with personalized platforms and actionable student insights.",
  "Government IT Services": "Make public services more accessible with secure platforms and streamlined citizen workflows.",
  "SaaS & Technology Startups": "Bring products to market faster with cloud-native engineering and foundations built to scale.",
  Manufacturing: "Improve production visibility and operational efficiency through connected systems and intelligent automation.",
  Logistics: "Connect supply chains with real-time visibility, smarter warehouse workflows, and delivery optimization.",
  "Real Estate": "Simplify property operations with connected customer experiences and automated document workflows.",
};

function IndustryDetail({ industry, asset }) {
  return (
    <div className="industry-explorer-detail">
      <div className="industry-explorer-photo">
        <img src={asset(industry.image)} alt="" loading="lazy" decoding="async" />
        <div className="industry-explorer-photo-caption">
          <span>Industry focus</span>
          <h3>{industry.title}</h3>
        </div>
      </div>
      <div className="industry-explorer-copy">
        <p className="industry-explorer-description">{summaries[industry.title] || industry.text}</p>
        <p className="industry-explorer-eyebrow">Where we make a difference</p>
        <ul>{industry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        <HeaderActionButton variant="secondary" size="compact" href="/services" icon="up-right" className="industry-explorer-cta">
          Explore solutions
        </HeaderActionButton>
      </div>
    </div>
  );
}

export default function IndustryExplorer({ asset, industries }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  if (!industries.length) return null;
  return (
    <section id="industries" className="industry-explorer" aria-labelledby="industry-explorer-heading">
      <header className="industry-explorer-header">
        <p className="industry-explorer-eyebrow">Industry expertise</p>
        <h2 id="industry-explorer-heading">Industries We Serve</h2>
        <p>Different industries. A shared ambition to move forward.</p>
      </header>

      <div className="industry-explorer-desktop">
        <aside className="industry-explorer-sidebar">
        <div className="industry-explorer-nav-heading">Explore industries</div>
        <div className="industry-explorer-nav" role="group" aria-label="Choose an industry" style={{ "--industry-active-index": activeIndex }}>
          <span className="industry-explorer-selection" aria-hidden="true" />
          {industries.map((industry, index) => (
            <button key={industry.title} type="button" aria-pressed={activeIndex === index} aria-controls="industry-explorer-panel"
              onPointerEnter={(event) => { if (event.pointerType !== "touch") setActiveIndex(index); }}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}>
              <span className="industry-explorer-placeholder" aria-hidden="true" />
              <span>{industry.title}</span>
            </button>
          ))}
        </div>
        </aside>
        <div id="industry-explorer-panel" className="industry-explorer-panel" aria-live="polite" aria-atomic="true">
          <IndustryDetail key={activeIndex} industry={industries[activeIndex]} asset={asset} />
        </div>
      </div>

      <div className="industry-explorer-mobile">
        <div className="industry-explorer-carousel" id="industries-carousel" ref={carouselRef} aria-label="Industries carousel">
        {industries.map((industry, index) => (
          <article className="industry-explorer-slide" key={industry.title} aria-label={`${index + 1} of ${industries.length}: ${industry.title}`}>
            <IndustryDetail industry={industry} asset={asset} />
          </article>
        ))}
        </div>
        {industries.length > 1 && <CarouselControls carouselRef={carouselRef} carouselId="industries-carousel" itemLabel="industry" />}
      </div>
    </section>
  );
}
