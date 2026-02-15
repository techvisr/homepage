export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="grid gap-10 border-b border-gray-800 pb-10
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4"
        >
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/services" className="hover:text-white">Software development</a></li>
              <li><a href="/services" className="hover:text-white">AI engineering</a></li>
              <li><a href="/services" className="hover:text-white">Quality engineering</a></li>
              <li><a href="/services" className="hover:text-white">Cloud & DevOps</a></li>
              <li><a href="/services" className="hover:text-white">Technology consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/#products" className="hover:text-white">AI-DataLens</a></li>
              <li><a href="/#products" className="hover:text-white">EmbedFAST</a></li>
              <li><a href="/#products" className="hover:text-white">CertyFAST</a></li>
              <li><a href="/#products" className="hover:text-white">LoadFAST</a></li>
              <li><a href="/#products" className="hover:text-white">MigrateFAST</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/case-studies" className="hover:text-white">Case studies</a></li>
              <li><a href="/services" className="hover:text-white">Service playbooks</a></li>
              <li><a href="/contact" className="hover:text-white">Consultation offers</a></li>
              <li><a href="/#community" className="hover:text-white">Industry insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">About us</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/#why-techvisr" className="hover:text-white">Who we are</a></li>
              <li><a href="/services" className="hover:text-white">How we work</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
              <li><a href="mailto:admin@techvisr.com" className="hover:text-white">admin@techvisr.com</a></li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} TechVisr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
