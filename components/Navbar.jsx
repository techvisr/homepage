import Image from "next/image";
import CalendlyPopupButton from "./CalendlyPopupButton";

export default function Navbar() {
  const navLinks = [
    { label: "Services", href: "/services" },
    // { label: "Case Studies", href: "/case-studies" },
    // { label: "Products", href: "/products" },
    // { label: "Industries", href: "/community" },
    { label: "Why Techvisr", href: "/why-techvisr" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" aria-label="TechVisr home" className="block">
          <Image
            src="/images/logo.png"
            alt="TechVisr"
            width={140}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </a>

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-red-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <CalendlyPopupButton
            label="Book a Consultation"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          />
        </div>

        <details className="relative ml-auto lg:hidden">
          <summary className="list-none cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
            <ul className="flex flex-col gap-1 text-sm text-gray-700">
              {navLinks.map((link) => (
                <li key={`mobile-${link.label}`}>
                  <a
                    className="block rounded px-2 py-2 hover:bg-red-50"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <CalendlyPopupButton
                  label="Book a Consultation"
                  className="w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                />
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
