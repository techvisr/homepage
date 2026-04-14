import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Why Techvisr", href: "/why-techvisr" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="section-frame">
        <div className="flex min-h-[78px] items-center justify-between gap-6">
          <a href="/" aria-label="TechVisr home" className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="TechVisr"
              width={150}
              height={38}
              className="h-8 w-auto sm:h-9"
              priority
            />
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-500 xl:inline-block">
              Software, AI & Quality Engineering
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="/contact" className="primary-button">
              Get in Touch
            </a>
          </div>

          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Menu
            </summary>
            <nav className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <ul className="flex flex-col gap-2 text-sm text-slate-700">
                {navLinks.map((link) => (
                  <li key={`mobile-${link.label}`}>
                    <a
                      className="block rounded-lg px-3 py-2.5 hover:bg-slate-50"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a href="/contact" className="primary-button w-full">
                    Get in Touch
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
