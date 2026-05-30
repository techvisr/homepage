"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useEffect, useRef } from "react";

export default function FigmaFooter({ asset }) {
  const logoSrc = asset("58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png");
  const watermarkRef = useRef(null);

  useEffect(() => {
    const node = watermarkRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateWatermarkOffset = () => {
      frame = 0;

      if (reduceMotion.matches) {
        node.style.setProperty("--footer-logo-y", "0px");
        return;
      }

      const footer = node.closest("footer");
      const rect = footer?.getBoundingClientRect() ?? node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 1;
      let progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

      if (footer && viewportWidth < 1024) {
        const scrollRoot = document.scrollingElement || document.documentElement;
        const start = footer.offsetTop - viewportHeight;
        const end = scrollRoot.scrollHeight - viewportHeight;
        progress = Math.min(1, Math.max(0, (scrollRoot.scrollTop - start) / Math.max(1, end - start)));
      }

      const easedProgress = progress * progress * (3 - 2 * progress);
      const travel = Math.min(72, Math.max(30, viewportHeight * 0.075));
      const offset = (0.5 - easedProgress) * travel;

      node.style.setProperty("--footer-logo-y", `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateWatermarkOffset);
    };

    updateWatermarkOffset();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener?.("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener?.("change", requestUpdate);
    };
  }, []);

  return (
    <footer id="footer" className="relative bg-[linear-gradient(90deg,#ff7436_0%,#f33a74_100%)] text-[#171a27]">
      <div className="relative z-10 grid grid-cols-1 justify-items-center gap-10 bg-white px-4 py-10 text-center shadow-[0_18px_42px_rgba(0,0,0,0.12)] sm:px-6 md:grid-cols-[1fr_0.7fr_1fr] md:justify-items-stretch md:px-8 md:py-11 md:text-left lg:px-12 xl:px-[9vw]">
        <div className="grid max-w-[340px] content-start justify-items-center gap-5 md:max-w-[320px] md:justify-items-start lg:gap-7">
          <img className="w-36 sm:w-[150px] lg:w-[159px]" src={logoSrc} alt="Techvisr" />
          <p className="m-0 max-w-[320px] text-base font-semibold leading-7 text-[#8d8d8d] lg:text-[17px] lg:leading-[1.55]">
            Building scalable software, intelligent automation, and cloud-driven ecosystems for modern enterprises.
          </p>
          <span className="text-sm font-semibold leading-6 text-[#8d8d8d] sm:text-base md:mt-6">Copyright © 2026 Techvisr</span>
        </div>

        <nav className="grid grid-cols-2 content-start gap-x-8 gap-y-4 pt-1 text-base font-semibold leading-none text-[#181b27] md:grid-cols-1 md:justify-self-center lg:gap-[19px]">
          <a className="text-current no-underline" href="/services">Services</a>
          <a className="text-current no-underline" href="/case-studies">Case Studies</a>
          <a className="text-current no-underline" href="/why-techvisr">Why Techvisr?</a>
          <a className="text-current no-underline" href="/blogs">Blogs</a>
          <a className="text-current no-underline" href="/contact">Contact Us</a>
        </nav>

        <div className="grid max-w-[340px] content-start justify-items-center gap-6 md:max-w-none md:justify-items-end md:text-right lg:gap-8">
          <h3 className="m-0 text-lg font-bold leading-none text-[#181b27]">Get in touch</h3>
          <a className="break-all text-xl font-extrabold leading-tight text-[#ff7436] no-underline sm:text-2xl lg:text-[25px]" href="mailto:techvisr@gmail.com">
            techvisr@gmail.com
          </a>
          <div className="flex flex-wrap gap-3 md:justify-end lg:mt-4">
            {[
              [Linkedin, "LinkedIn"],
              [Instagram, "Instagram"],
              [Facebook, "Facebook"],
              [Youtube, "YouTube"],
              [Twitter, "Twitter"],
            ].map(([Icon, label]) => (
              <a
                className="grid size-11 place-items-center rounded-full bg-[#ff7436] text-white transition-transform duration-200 hover:-translate-y-1 lg:size-[49px]"
                href="/"
                aria-label={label}
                key={label}
              >
                <Icon size={18} fill="currentColor" strokeWidth={label === "YouTube" ? 0 : 2.2} />
              </a>
            ))}
          </div>
          <span className="text-sm font-semibold leading-6 text-[#181b27] md:text-right">Terms and Conditions | Privacy Policy</span>
        </div>
      </div>

      {/* <div className="relative z-10 grid min-h-[90px] grid-cols-1 items-center gap-4 bg-white px-8 py-5 text-[17px] font-semibold md:grid-cols-2 md:px-[11vw]">
        <span className="text-[#8d8d8d]">Copyright © 2026 Techvisr</span>
        <span className="text-[#181b27] md:justify-self-end">Terms And Condition | Privacy Policy</span>
      </div> */}

      <div
        ref={watermarkRef}
        className="sticky bottom-0 z-0 isolate grid min-h-[190px] place-items-center overflow-hidden bg-[#fff1e8] px-4 py-10 [--footer-logo-y:0px] sm:px-6 md:min-h-[300px] md:px-10 md:py-16 lg:min-h-[430px] lg:px-[9vw] lg:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_30%),radial-gradient(circle_at_22%_76%,rgba(255,116,54,0.72)_0%,rgba(255,116,54,0)_42%),radial-gradient(circle_at_78%_26%,rgba(243,58,116,0.62)_0%,rgba(243,58,116,0)_46%),radial-gradient(circle_at_58%_88%,rgba(255,199,127,0.36)_0%,rgba(255,199,127,0)_38%),linear-gradient(120deg,#fff6ef_0%,#ffb07b_38%,#f65a72_72%,#f33a74_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply [background-image:linear-gradient(90deg,rgba(22,24,33,0.28)_1px,transparent_1px),linear-gradient(0deg,rgba(22,24,33,0.22)_1px,transparent_1px)] [background-size:64px_64px]"
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute left-[-18vw] top-[-170px] h-auto w-[150vw] max-w-none opacity-[0.18] mix-blend-screen"
          src="/images/story-wave-pattern.svg"
          alt=""
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-[28%] bottom-[-46%] h-[300px] w-[300px] rounded-full bg-[#ff7436]/35 blur-[64px] md:-left-[10%] md:bottom-[-36%] md:h-[560px] md:w-[560px] md:blur-[74px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-[30%] top-[-42%] h-[320px] w-[320px] rounded-full bg-[#ef4169]/32 blur-[72px] md:-right-[9%] md:top-[-34%] md:h-[580px] md:w-[580px] md:blur-[82px]"
          aria-hidden="true"
        />

        <div
          className="relative aspect-[3508/882] w-full max-w-[1040px] transform-gpu will-change-transform lg:max-w-[1280px]"
          style={{ transform: "translate3d(0, var(--footer-logo-y), 0)" }}
        >
          <img
            className="absolute inset-0 h-full w-full object-contain opacity-[0.34] brightness-0 mix-blend-multiply drop-shadow-[0_18px_42px_rgba(22,24,33,0.14)]"
            src={logoSrc}
            alt=""
            aria-hidden="true"
          />
          <img
            className="absolute inset-0 h-full w-full object-contain opacity-[0.12] brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.42)]"
            src={logoSrc}
            alt=""
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.58] mix-blend-multiply [mask-image:url('/images/figma-raw/58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/figma-raw/58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
            aria-hidden="true"
          >
            <span className="absolute inset-y-[-22%] left-[-30%] w-[30%] rotate-[12deg] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.56)_50%,rgba(0,0,0,0.08)_72%,transparent_100%)] blur-[3px] animate-[footerLogoShine_4.6s_linear_infinite]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
