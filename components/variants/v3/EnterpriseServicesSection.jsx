"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const highlightedTitle = "Digital Advantage";

export default function EnterpriseServicesSection({ asset, services }) {
  const titleRef = useRef(null);
  const [typedLength, setTypedLength] = useState(highlightedTitle.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setTypedLength(0);
    let timer;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let length = 0;
      const typeNextCharacter = () => {
        length = length === highlightedTitle.length ? 0 : length + 1;
        setTypedLength(length);
        timer = window.setTimeout(
          typeNextCharacter,
          length === highlightedTitle.length ? 1800 : length === 0 ? 350 : 90,
        );
      };
      timer = window.setTimeout(typeNextCharacter, 90);
    }, { threshold: 0.5 });
    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section id="enterprise-services" className="enterprise-services-section">
      <header className="enterprise-services-header">
        <h2 ref={titleRef} aria-label="Turning Operational Complexity into Digital Advantage">
          <span aria-hidden="true">Turning Operational Complexity into</span>
          <span className="enterprise-title-highlight" aria-hidden="true">
            <span className="enterprise-title-placeholder">{highlightedTitle}</span>
            <span className="enterprise-title-typed" data-typing={typedLength < highlightedTitle.length}>
              {highlightedTitle.slice(0, typedLength)}
            </span>
          </span>
        </h2>
        <p>
          Modernizing enterprises with AI-powered automation and next-generation digital engineering.
        </p>
      </header>

      <div className="enterprise-services-content">
        <h3>
          Enterprise Services Built for Scale
        </h3>

        <div className="enterprise-services-grid">
          {services.map((service, index) => (
            <a
              className="enterprise-service-card"
              href="/services#core-services"
              key={service.title}
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <div className="enterprise-service-card-inner">
                <h4>{service.title}</h4>
                <span
                  className="service-icon-stage enterprise-service-icon"
                  style={{ "--service-icon-delay": `${index * 180}ms` }}
                >
                  <img className="service-icon-image" src={asset(service.image)} alt="" />
                </span>
              </div>
              <span className="enterprise-card-action" aria-hidden="true"><ArrowRight size={18} /></span>
            </a>
          ))}
        </div>
      </div>

      <a className="enterprise-services-button" href="/contact">
        <span>Talk to Our Experts</span>
        <ArrowRight aria-hidden="true" size={20} strokeWidth={1.6667} />
      </a>
    </section>
  );
}
