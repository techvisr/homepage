"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function FigmaFooter({ asset }) {
  const logoSrc = asset("58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png");

  return (
    <footer id="footer" className="relative bg-[linear-gradient(90deg,#ff7436_0%,#f33a74_100%)] text-[#171a27]">
      <div className="relative z-10 grid min-h-[318px] grid-cols-1 gap-12 bg-white px-8 py-12 shadow-[0_18px_42px_rgba(0,0,0,0.12)] md:grid-cols-[1fr_0.7fr_1fr] md:px-[11vw] md:py-[45px]">
        <div className="grid content-start gap-7 md:max-w-[310px]">
          <img className="w-[159px]" src={logoSrc} alt="Techvisr" />
          <p className="m-0 max-w-[300px] text-[17px] font-semibold leading-[1.55] text-[#8d8d8d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <span className="mt-8 text-[16px] font-semibold leading-none text-[#8d8d8d]">Copyright © 2026 Techvisr</span>
        </div>

        <nav className="grid content-start gap-[19px] pt-1 text-[16px] font-semibold leading-none text-[#181b27] md:justify-self-center">
          <a className="text-current no-underline" href="/services">Services</a>
          <a className="text-current no-underline" href="/case-studies">Case Studies</a>
          <a className="text-current no-underline" href="/why-techvisr">Why Techvisr?</a>
          <a className="text-current no-underline" href="/blogs">Blogs</a>
          <a className="text-current no-underline" href="/contact">Contact Us</a>
        </nav>

        <div className="grid content-start gap-8 md:justify-items-end md:text-right">
          <h3 className="m-0 text-[18px] font-bold leading-none text-[#181b27]">Get in touch</h3>
          <a className="text-[25px] font-extrabold leading-none text-[#ff7436] no-underline" href="mailto:techvisr@gmail.com">
            techvisr@gmail.com
          </a>
          <div className="mt-8 flex flex-wrap gap-3 md:justify-end">
            {[
              [Linkedin, "LinkedIn"],
              [Instagram, "Instagram"],
              [Facebook, "Facebook"],
              [Youtube, "YouTube"],
              [Twitter, "Twitter"],
            ].map(([Icon, label]) => (
              <a
                className="grid size-[49px] place-items-center rounded-full bg-[#ff7436] text-white transition-transform duration-200 hover:-translate-y-1"
                href="/"
                aria-label={label}
                key={label}
              >
                <Icon size={18} fill="currentColor" strokeWidth={label === "YouTube" ? 0 : 2.2} />
              </a>
            ))}
          </div>
          <span className="text-[13px] font-semibold leading-none text-[#181b27]">Terms And Condition | Privacy Policy</span>
        </div>
      </div>

      {/* <div className="relative z-10 grid min-h-[90px] grid-cols-1 items-center gap-4 bg-white px-8 py-5 text-[17px] font-semibold md:grid-cols-2 md:px-[11vw]">
        <span className="text-[#8d8d8d]">Copyright © 2026 Techvisr</span>
        <span className="text-[#181b27] md:justify-self-end">Terms And Condition | Privacy Policy</span>
      </div> */}

      <div className="sticky bottom-0 z-0 isolate grid min-h-[340px] place-items-center overflow-hidden bg-[#fff1e8] px-8 py-14 md:min-h-[430px] md:px-14 md:py-20 lg:px-[9vw]">
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
          className="pointer-events-none absolute -left-[10%] bottom-[-36%] h-[420px] w-[420px] rounded-full bg-[#ff7436]/35 blur-[74px] md:h-[560px] md:w-[560px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-[9%] top-[-34%] h-[430px] w-[430px] rounded-full bg-[#ef4169]/32 blur-[82px] md:h-[580px] md:w-[580px]"
          aria-hidden="true"
        />

        <div className="relative aspect-[3508/882] w-full max-w-[1280px]">
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
