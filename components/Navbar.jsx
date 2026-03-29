import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/community" },
    { label: "Why Techvisr", href: "/why-techvisr" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
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

        <nav className="hidden gap-6 text-sm font-medium text-gray-600 lg:flex">
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

        <details className="relative lg:hidden">
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
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
