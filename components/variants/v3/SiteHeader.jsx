"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const navItems = ["Services", "Case Studies", "Why Techvisr?", "Blogs"];

const toSectionHref = (item) => `/#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="figma-site-header sticky top-0 z-50 w-full bg-black text-white">
      <div className="figma-site-header__container mx-auto flex min-h-11 w-full max-w-screen-2xl items-center justify-between gap-4 px-3 sm:px-5 md:min-h-[52px] md:px-8 xl:px-12">
        <a
          className="figma-site-header__logo flex w-[82px] flex-none items-center self-center sm:w-24 lg:w-[104px]"
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
          className="figma-site-header__nav hidden items-center gap-7 text-[11px] font-medium leading-none text-white xl:flex 2xl:gap-10 2xl:text-xs"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a className="figma-site-header__nav-link text-white transition-opacity duration-200 hover:opacity-80" href={toSectionHref(item)} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <HeaderActionButton href="/contact" light compact className="figma-site-header__button hidden min-h-7 rounded-md px-3 py-1.5 text-[11px] xl:inline-flex xl:self-center 2xl:text-xs">
          Contact Us
        </HeaderActionButton>

        <div className="figma-site-header__mobile relative ml-auto grid xl:hidden" ref={menuRef}>
          <button
            className="grid size-8 cursor-pointer place-items-center rounded-lg border border-white/90 bg-white text-black"
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {isMenuOpen ? (
            <nav className="absolute right-0 top-11 grid w-[min(260px,calc(100vw-24px))] gap-2 rounded-2xl border border-white/15 bg-black/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  className="rounded-[10px] px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/5"
                  href={toSectionHref(item)}
                  key={item}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <HeaderActionButton href="/contact" light compact className="mt-1 w-full min-h-9 rounded-lg text-sm" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </HeaderActionButton>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
