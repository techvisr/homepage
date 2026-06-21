"use client";

import { Plus, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function FaqSection({
  faqs,
  showLoadMore = false,
  loadMoreLabel = "Load more",
  initialVisibleCount = 4,
  loadMoreCount = 4,
}) {
  const [visibleCount, setVisibleCount] = useState(showLoadMore ? initialVisibleCount : faqs.length);
  const visibleFaqs = showLoadMore ? faqs.slice(0, visibleCount) : faqs;
  const hasMoreFaqs = showLoadMore && visibleCount < faqs.length;

  return (
    <section className="relative grid justify-items-center bg-[#f7f7f7] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20">
      <div className="grid w-full max-w-[1260px] items-start gap-8 md:gap-10 lg:grid-cols-[minmax(260px,360px)_minmax(0,760px)] lg:justify-center lg:gap-14 xl:gap-[72px]">
        <h2 className="m-0 max-w-full text-center text-4xl font-extrabold leading-[1.16] tracking-[0] text-[#161821] sm:text-5xl lg:text-left lg:text-[3.25rem] xl:text-[3.75rem]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col pt-1.5">
          {visibleFaqs.map((faq, index) => (
            <details className="group border-b border-[rgba(22,24,33,0.34)] bg-transparent" key={faq.question} open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-base font-extrabold leading-[1.38] text-[#161821] marker:hidden md:gap-6 md:py-6 md:text-lg lg:text-[19px] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#161821] text-white group-open:bg-[#dedede]" aria-hidden="true">
                  <Plus className="block group-open:hidden" size={18} strokeWidth={3} />
                  <span className="hidden text-[22px] font-extrabold leading-none text-[#777777] group-open:block">-</span>
                </span>
              </summary>
              {faq.answer ? <p className="m-0 max-w-[720px] pb-6 text-[15px] leading-7 text-[#858585] sm:text-base md:text-[17px]">{faq.answer}</p> : null}
            </details>
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
