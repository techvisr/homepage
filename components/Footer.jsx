export default function Footer() {
  return (
    <footer id="about" className="relative mt-14 overflow-hidden bg-gray-900 py-16 text-gray-300 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-2xl">
          <h3 className="mb-4 text-base font-semibold text-white md:text-lg">Office</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Techvisr Private Limited, 11th Floor, Innov8 Prestige Tech Platina 2, Outer Ring Road, Kadabisanahalli, Bangalore South, Bangalore, Karnataka - 560087.
            <br />
            <a href="mailto:admin@techvisr.com" className="hover:text-white">
              admin@techvisr.com
            </a>
          </p>
        </div>

        <p className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} TechVisr. All rights reserved.
        </p>
      </div>

      <div className="footer-watermark-wrap pointer-events-none absolute inset-x-0 bottom-1 z-0 select-none px-4 text-center sm:bottom-0 md:bottom-[-4px]">
        <p
          data-text="TECHVISR"
          className="techvisr-watermark text-[clamp(4rem,16vw,14rem)] font-extrabold uppercase tracking-[0.03em]"
        >
          TECHVISR
        </p>
      </div>
    </footer>
  );
}
