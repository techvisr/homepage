"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CarouselControls({ carouselRef, carouselId, itemLabel, compact = true }) {
  function scrollCarousel(direction) {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !firstCard) return;

    const styles = getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const startOffset = Number.parseFloat(styles.paddingLeft) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const atEnd = carousel.scrollLeft >= maxScroll - 2;
    const atStart = carousel.scrollLeft <= startOffset + 2;
    const left = direction > 0
      ? (atEnd ? 0 : Math.min(carousel.scrollLeft + step, maxScroll))
      : (atStart ? maxScroll : Math.max(carousel.scrollLeft - step, 0));

    carousel.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div className={`resources-carousel-controls ${compact ? "resources-carousel-controls--compact" : ""}`}>
      <button type="button" onClick={() => scrollCarousel(-1)} aria-label={`Previous ${itemLabel}`} aria-controls={carouselId}>
        <ArrowLeft size={19} aria-hidden="true" />
      </button>
      <button type="button" onClick={() => scrollCarousel(1)} aria-label={`Next ${itemLabel}`} aria-controls={carouselId}>
        <ArrowRight size={19} aria-hidden="true" />
      </button>
    </div>
  );
}
