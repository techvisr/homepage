const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Software development", href: "/services" },
      { label: "AI engineering", href: "/services" },
      { label: "Quality engineering", href: "/services" },
      { label: "Cloud & DevOps", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Techvisr", href: "/why-techvisr" },
      { label: "Contact us", href: "/contact" },
      { label: "Industry focus", href: "/#community" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "admin@techvisr.com", href: "mailto:admin@techvisr.com" },
      { label: "Book a consultation", href: "/contact" },
      { label: "Explore services", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-[#0f172a] py-14 text-slate-300">
      <div className="section-frame">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              Techvisr
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              Software, AI, and quality engineering for modern businesses.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-400 sm:text-base">
              We help organizations build products, improve delivery quality, modernize platforms, and bring more structure to technology execution.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} TechVisr. All rights reserved.</p>
          <p>Professional engineering services for product and enterprise teams.</p>
        </div>
      </div>
    </footer>
  );
}
