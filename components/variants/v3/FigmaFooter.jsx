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

      <div className="sticky bottom-0 z-0 grid min-h-[320px] place-items-center overflow-hidden px-8 py-12 md:min-h-[410px] md:px-14 md:py-16 lg:px-[9vw]">
        <div className="relative aspect-[3508/882] w-full max-w-[1320px]">
          <img
            className="absolute inset-0 h-full w-full object-contain opacity-[0.32] brightness-0 mix-blend-multiply"
            src={logoSrc}
            alt=""
            aria-hidden="true"
          />
          <img
            className="absolute inset-0 h-full w-full object-contain opacity-[0.18] brightness-0 invert drop-shadow-[0_0_26px_rgba(255,255,255,0.46)]"
            src={logoSrc}
            alt=""
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.52] mix-blend-screen [mask-image:url('/images/figma-raw/58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/figma-raw/58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
            aria-hidden="true"
          >
            <span className="absolute inset-y-[-20%] left-[-35%] w-[24%] rotate-[12deg] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_20%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.05)_80%,transparent_100%)] blur-[2px] animate-[footerLogoShine_4.8s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
