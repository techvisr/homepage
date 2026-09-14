"use client";

import { Plus, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FaqConversationArt from "./FaqConversationArt";

function FaqItem({ faq, isGlass, initiallyOpen }) {
  const animationRef = useRef(null);
  const targetOpenRef = useRef(initiallyOpen);

  useEffect(() => () => animationRef.current?.cancel(), []);

  function toggleAnswer(event) {
    event.preventDefault();
    const summary = event.currentTarget;
    const details = summary.parentElement;
    const startHeight = details.getBoundingClientRect().height;
    const nextOpen = !(animationRef.current ? targetOpenRef.current : details.open);
    targetOpenRef.current = nextOpen;
    animationRef.current?.cancel();
    animationRef.current = null;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !details.animate) {
      details.open = nextOpen;
      details.style.overflow = "";
      return;
    }

    // Keep native details open during closing so the answer can animate out.
    details.open = true;
    const styles = getComputedStyle(details);
    const borderHeight = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
    const endHeight = nextOpen
      ? details.getBoundingClientRect().height
      : summary.getBoundingClientRect().height + borderHeight;
    details.style.overflow = "hidden";
    const animation = details.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
    animationRef.current = animation;
    animation.onfinish = () => {
      details.open = nextOpen;
      details.style.overflow = "";
      animationRef.current = null;
    };
  }

  return (
    <details className={isGlass ? "faq-glass-item group" : "group border-b border-[rgba(22,24,33,0.34)] bg-transparent"} open={initiallyOpen}>
      <summary onClick={toggleAnswer} className={isGlass ? "faq-glass-question" : "flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-base font-extrabold leading-[1.38] text-[#161821] marker:hidden md:gap-6 md:py-6 md:text-lg lg:text-[19px] [&::-webkit-details-marker]:hidden"}>
        <span>{faq.question}</span>
        <span className={isGlass ? "faq-glass-toggle" : "grid size-8 shrink-0 place-items-center rounded-md bg-[#161821] text-white group-open:bg-[#dedede]"} aria-hidden="true">
          <Plus className="block group-open:hidden" size={18} strokeWidth={3} />
          <span className="hidden text-[22px] font-extrabold leading-none text-[#777777] group-open:block">-</span>
        </span>
      </summary>
      {faq.answer ? <p className={isGlass ? "faq-glass-answer" : "m-0 max-w-[720px] pb-6 text-[15px] leading-7 text-[#858585] sm:text-base md:text-[17px]"}>{faq.answer}</p> : null}
    </details>
  );
}

export default function FaqSection({
  faqs,
  showLoadMore = false,
  loadMoreLabel = "Load more",
  initialVisibleCount = 4,
  loadMoreCount = 4,
  variant = "default",
}) {
  const isGlass = variant === "glass";
  const [visibleCount, setVisibleCount] = useState(showLoadMore ? initialVisibleCount : faqs.length);
  const visibleFaqs = showLoadMore ? faqs.slice(0, visibleCount) : faqs;
  const hasMoreFaqs = showLoadMore && visibleCount < faqs.length;

  return (
    <section className={`faq-section ${isGlass ? "faq-section--glass" : ""} relative grid justify-items-center px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20`} aria-label="Frequently asked questions">
      <div className="grid w-full max-w-[1260px] items-start gap-8 md:gap-10 lg:grid-cols-[minmax(260px,360px)_minmax(0,760px)] lg:justify-center lg:gap-14 xl:gap-[72px]">
        <div className={isGlass ? "faq-glass-intro" : undefined}>
          <h2 className={isGlass ? "faq-glass-title" : "m-0 max-w-full text-center text-4xl font-extrabold leading-[1.16] tracking-[0] text-[#161821] sm:text-5xl lg:text-left lg:text-[3.25rem] xl:text-[3.75rem]"}>
            Frequently Asked Questions
          </h2>
          {isGlass && <FaqConversationArt />}
        </div>
        <div className={`${isGlass ? "faq-glass-list" : ""} flex flex-col pt-1.5`}>
          {visibleFaqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} isGlass={isGlass} initiallyOpen={index === 0} />
          ))}
          {hasMoreFaqs ? (
            <button
              className="mt-8 inline-flex min-h-10 w-fit items-center justify-center gap-2 self-end rounded-lg border border-[#161821] bg-white px-4 text-sm font-extrabold leading-none text-[#161821] no-underline transition-colors duration-200 hover:bg-[#161821] hover:text-white"
              type="button"
              onClick={() => setVisibleCount((currentCount) => Math.min(currentCount + loadMoreCount, faqs.length))}
            >
              <span>{loadMoreLabel}</span>
              <RefreshCw size={15} strokeWidth={2.6} />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
