import Image from "next/image";
import CalendlyPopupButton from "./CalendlyPopupButton";

export default function Navbar() {
  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Why Techvisr", href: "/why-techvisr" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#0b0f19] text-[11px] text-white">
        <div className="section-frame flex items-center justify-between gap-4 py-2">
          <p className="truncate uppercase tracking-[0.14em] text-white/70">
            Advisory-led software, AI, and quality engineering
          </p>
          <a href="mailto:admin@techvisr.com" className="hidden text-white/80 hover:text-white sm:inline-flex">
            admin@techvisr.com
          </a>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="section-frame flex min-h-[74px] items-center justify-between gap-6">
          <a href="/" aria-label="TechVisr home" className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="TechVisr"
              width={146}
              height={36}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CalendlyPopupButton
              label="Book a Demo"
              className="primary-button px-4 py-2.5"
            />
          </div>

          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Menu
            </summary>
            <nav className="soft-card absolute right-0 mt-3 w-64 rounded-[24px] p-4">
              <ul className="flex flex-col gap-2 text-sm text-slate-700">
                {navLinks.map((link) => (
                  <li key={`mobile-${link.label}`}>
                    <a className="block rounded-xl px-3 py-2.5 hover:bg-slate-50" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <CalendlyPopupButton
                    label="Book a Demo"
                    className="primary-button w-full"
                  />
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
