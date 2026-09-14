"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function FaqConversationArt() {
  const artRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(artRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="faq-conversation-art" ref={artRef} data-visible={visible} aria-hidden="true">
      <svg viewBox="0 0 360 440" fill="none" focusable="false">
        <defs>
          <linearGradient id={`${id}-glass`} x1="60" y1="90" x2="310" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity=".95" />
            <stop offset=".55" stopColor="#fff" stopOpacity=".45" />
            <stop offset="1" stopColor="#e1ddf3" stopOpacity=".75" />
          </linearGradient>
          <linearGradient id={`${id}-accent`} x1="90" y1="130" x2="230" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eeaa8b" /><stop offset="1" stopColor="#ad9fce" />
          </linearGradient>
          <radialGradient id={`${id}-pearl`} cx=".3" cy=".2" r=".85">
            <stop stopColor="white" /><stop offset=".5" stopColor="#f8e5df" /><stop offset="1" stopColor="#c5bcdf" />
          </radialGradient>
          <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#6d5887" floodOpacity=".12" />
          </filter>
        </defs>

        <ellipse cx="180" cy="220" rx="132" ry="174" stroke="#b9accd" strokeOpacity=".3" />
        <ellipse cx="180" cy="220" rx="110" ry="150" stroke="white" strokeOpacity=".85" />
        <ellipse className="faq-art-orbit" cx="180" cy="220" rx="132" ry="174" stroke={`url(#${id}-accent)`} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 34" />
        <rect x="91" y="67" width="178" height="304" rx="89" fill={`url(#${id}-glass)`} stroke="white" />

        <g className="faq-art-question" filter={`url(#${id}-shadow)`}>
          <path d="M67 108H204C219 108 231 120 231 135V190C231 205 219 217 204 217H119L96 238V217H67C52 217 40 205 40 190V135C40 120 52 108 67 108Z" fill={`url(#${id}-glass)`} stroke="white" strokeWidth="1.5" />
          <circle cx="87" cy="153" r="23" fill="#f3e1dc" />
          <path d="M80 147C80 137 95 137 95 147C95 153 87 153 87 159M87 166V167" stroke="#b47463" strokeWidth="3" strokeLinecap="round" />
          <path d="M127 145H200M127 158H182M67 188H187" stroke="#bdb5c8" strokeOpacity=".65" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g className="faq-art-answer" filter={`url(#${id}-shadow)`}>
          <path d="M148 237H294C309 237 321 249 321 264V312C321 327 309 339 294 339H272V359L247 339H148C133 339 121 327 121 312V264C121 249 133 237 148 237Z" fill={`url(#${id}-glass)`} stroke="white" strokeWidth="1.5" />
          <circle cx="163" cy="277" r="21" fill="#e6e1f0" />
          <path d="M154 277L161 284L174 270" stroke="#8d7ba9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M200 267H289M200 280H273" stroke="#b7afc5" strokeWidth="5" strokeLinecap="round" />
          {[0, 1, 2].map((dot) => <circle key={dot} className={`faq-art-dot faq-art-dot-${dot}`} cx={203 + dot * 15} cy="307" r="3" fill="#aa91b5" />)}
        </g>

        <circle className="faq-art-pearl" cx="285" cy="125" r="18" fill={`url(#${id}-pearl)`} stroke="white" />
        <circle className="faq-art-pearl faq-art-pearl-small" cx="64" cy="306" r="11" fill={`url(#${id}-pearl)`} stroke="white" />
        <path d="M258 187V201M251 194H265M94 364V374M89 369H99" stroke="#c5afc4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
