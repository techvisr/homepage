"use client";

import { Plus, RefreshCw } from "lucide-react";

export default function FaqSection({ faqs }) {
  return (
    <section className="relative grid justify-items-center bg-[#f7f7f7] px-6 py-20 md:px-10 md:py-[96px] lg:px-20 lg:py-[112px]">
      <div className="grid w-full max-w-[1260px] items-start gap-[42px] lg:grid-cols-[380px_minmax(0,720px)] lg:justify-center lg:gap-[72px]">
        <h2 className="m-0 max-w-full text-center text-[46px] font-extrabold leading-[1.18] tracking-[-0.035em] text-[#161821] md:text-[54px] lg:max-w-[360px] lg:text-left lg:text-[60px]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col pt-1.5">
          {faqs.slice(0, 4).map((faq, index) => (
            <details className="group border-b border-[rgba(22,24,33,0.34)] bg-transparent" key={faq.question} open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[17px] font-extrabold leading-[1.35] text-[#161821] marker:hidden md:py-[25px] md:text-[19px] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="grid size-[31px] shrink-0 place-items-center rounded-md bg-[#161821] text-white group-open:bg-[#dedede]" aria-hidden="true">
                  <Plus className="block group-open:hidden" size={18} strokeWidth={3} />
                  <span className="hidden text-[22px] font-extrabold leading-none text-[#777777] group-open:block">-</span>
                </span>
              </summary>
              {faq.answer ? <p className="m-0 max-w-[690px] pb-6 text-[16px] leading-[1.58] text-[#858585] md:text-[17px]">{faq.answer}</p> : null}
            </details>
          ))}
          <button className="mt-10 inline-flex min-h-[54px] items-center justify-center gap-[22px] self-stretch rounded-[10px] border-2 border-[#161821] bg-transparent px-[22px] text-[17px] font-extrabold leading-none text-[#161821] md:self-end" type="button">
            Load more
            <RefreshCw size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
