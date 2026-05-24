import Image from "next/image";
import { Menu } from "lucide-react";
import HeaderActionButton from "./HeaderActionButton";

const navItems = ["Services", "Case Studies", "Why Techvisr?", "Blogs"];

const toSectionHref = (item) => `#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex min-h-[81px] w-full max-w-[1640px] items-center justify-between gap-6 px-6 md:px-8 xl:px-12">
        <a
          className="flex w-[146px] flex-none items-center self-center sm:w-[152px] lg:w-[156px] xl:w-[159px]"
          href="/"
          aria-label="Techvisr home"
        >
          <Image
            src="/images/techvisr-header-logo.png"
            alt="Techvisr"
            width={439}
            height={111}
            priority
            className="h-auto w-full"
          />
        </a>

        <nav
          className="hidden items-center gap-10 text-[15px] font-medium leading-none text-white xl:flex xl:gap-[52px]"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a className="text-white transition-opacity duration-200 hover:opacity-80" href={toSectionHref(item)} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <HeaderActionButton href="/contact" light compact className="hidden xl:inline-flex xl:self-center">
          Contact Us
        </HeaderActionButton>

        <details className="relative ml-auto grid xl:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer place-items-center list-none rounded-[12px] border border-white/90 bg-white text-black"
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </summary>
          <nav className="absolute right-0 top-14 grid w-[min(270px,calc(100vw-32px))] gap-2 rounded-2xl border border-white/15 bg-black p-3">
            {navItems.map((item) => (
              <a
                className="rounded-[10px] px-3 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/5"
                href={toSectionHref(item)}
                key={item}
              >
                {item}
              </a>
            ))}
            <HeaderActionButton href="/contact" light compact className="mt-1 w-full">
              Contact Us
            </HeaderActionButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
