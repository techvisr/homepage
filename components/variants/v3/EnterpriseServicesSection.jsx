"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const highlightedTitle = "Digital Advantage";

export default function EnterpriseServicesSection({ asset, services }) {
  const whiteCanvasFilterId = useId();
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
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <filter id={whiteCanvasFilterId} colorInterpolationFilters="sRGB">
            {/* These black/blue icons have no red artwork: white becomes transparent. */}
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 0 0 1 0" />
          </filter>
        </defs>
      </svg>
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
            <article
              className="enterprise-service-card"
              key={service.title}
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <div className="enterprise-service-card-inner">
                <h4>{service.title}</h4>
                <span
                  className="service-icon-stage enterprise-service-icon"
                  data-opaque-background={service.opaqueBackground || undefined}
                  style={{
                    "--service-icon-delay": `${index * 180}ms`,
                    "--service-icon-filter": service.opaqueBackground ? `url(#${whiteCanvasFilterId})` : undefined,
                  }}
                >
                  <picture>
                    {service.animatedImage && (
                      <source
                        media="(prefers-reduced-motion: no-preference)"
                        srcSet={asset(service.animatedImage)}
                        type="image/gif"
                      />
                    )}
                    <img
                      className="service-icon-image"
                      src={asset(service.image)}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <a className="enterprise-services-button figma-secondary-button" href="/contact">
        <span>Talk to Our Experts</span>
        <ArrowRight aria-hidden="true" size={20} strokeWidth={1.6667} />
      </a>
    </section>
  );
}
