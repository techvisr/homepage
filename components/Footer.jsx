const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Software development", href: "/services" },
      { label: "AI engineering", href: "/services" },
      { label: "Quality engineering", href: "/services" },
      { label: "Cloud modernization", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Techvisr", href: "/why-techvisr" },
      { label: "Contact", href: "/contact" },
      { label: "Industries", href: "/#community" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="about" className="relative overflow-hidden bg-[#0b0f19] text-slate-300">
      <div className="section-frame relative z-10 py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Techvisr
            </p>
            <h2 className="display-heading mt-4 text-3xl font-semibold text-white sm:text-[2.35rem]">
              Software, AI, and quality engineering for modern product and enterprise teams.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Techvisr Private Limited, 11th Floor, Innov8 Prestige Tech Platina 2, Outer Ring Road, Kadabisanahalli, Bangalore South, Bangalore, Karnataka - 560087.
            </p>
            <a
              href="mailto:admin@techvisr.com"
              className="mt-4 inline-flex text-sm font-semibold text-white hover:text-slate-300"
            >
              admin@techvisr.com
            </a>
          </div>

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

        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} TechVisr. All rights reserved.</p>
          <p>Built for sharper digital delivery.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-24px] z-0 select-none px-4 text-center">
        <p className="text-[clamp(5rem,20vw,18rem)] font-extrabold tracking-[-0.08em] text-white/[0.04]">
          Techvisr
        </p>
      </div>
    </footer>
  );
}
