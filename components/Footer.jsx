export default function Footer() {
  return (
    <footer id="about" className="relative mt-14 overflow-hidden bg-gray-900 py-16 text-gray-300 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 md:pb-32 lg:pb-36">
        <div
          className="grid gap-10  
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4"
        >
          <div>
            <h3 className="mb-5 text-base font-semibold text-white md:text-lg">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/services" className="hover:text-white">Software development</a></li>
              <li><a href="/services" className="hover:text-white">AI engineering</a></li>
              <li><a href="/services" className="hover:text-white">Quality engineering</a></li>
              <li><a href="/services" className="hover:text-white">Cloud & DevOps</a></li>
              <li><a href="/services" className="hover:text-white">Technology consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-white md:text-lg">Products</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/#products" className="hover:text-white">AI-DataLens</a></li>
              <li><a href="/#products" className="hover:text-white">EmbedFAST</a></li>
              <li><a href="/#products" className="hover:text-white">CertyFAST</a></li>
              <li><a href="/#products" className="hover:text-white">LoadFAST</a></li>
              <li><a href="/#products" className="hover:text-white">MigrateFAST</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-white md:text-lg">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/case-studies" className="hover:text-white">Case studies</a></li>
              <li><a href="/services" className="hover:text-white">Service playbooks</a></li>
              <li><a href="/contact" className="hover:text-white">Consultation offers</a></li>
              <li><a href="/#community" className="hover:text-white">Industry insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-white md:text-lg">About us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/#why-techvisr" className="hover:text-white">Who we are</a></li>
              <li><a href="/services" className="hover:text-white">How we work</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
              <li><a href="mailto:admin@techvisr.com" className="hover:text-white">admin@techvisr.com</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 pt-6 text-xs text-gray-400 border-t border-gray-800 ">
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
