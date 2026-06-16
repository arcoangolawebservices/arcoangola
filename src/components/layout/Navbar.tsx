"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const locales = [
  { code: "pt", flag: "/assets/flag-pt.png", label: "PT" },
  { code: "en", flag: "/assets/flag-en.png", label: "EN" },
  { code: "fr", flag: "/assets/flag-fr.png", label: "FR" },
] as const;

const NAV_LINKS = [
  { href: "#programmes", labelKey: "nav.programmes" as const, label: "Programmes" },
  { href: "#courses",    labelKey: "nav.courses"    as const, label: "Courses" },
  { href: "#corporate",  labelKey: "nav.corporate"  as const, label: "Corporate" },
  { href: "#contact",    labelKey: "nav.contact"    as const, label: "Contact" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  function switchLocalePath(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  }

  const navLabels: Record<string, string> = {
    "#programmes": t("courses"),
    "#courses": t("courses"),
    "#corporate": t("corporate"),
    "#contact": t("contact"),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0">
            <span className="flex items-center justify-center w-9 h-9 bg-navy text-white font-black text-lg leading-none select-none">
              A
            </span>
            <span className="font-black text-xl tracking-tight text-navy">
              ARCO<span className="text-blue">ANGOLA</span>
            </span>
          </Link>

          {/* Desktop nav — anchor links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#programmes" className="text-sm font-semibold text-navy hover:text-blue transition-colors">
              {t("courses")}
            </a>
            <a href="#courses" className="text-sm font-semibold text-navy hover:text-blue transition-colors">
              {t("courses")} Catalogue
            </a>
            <a href="#corporate" className="text-sm font-semibold text-navy hover:text-blue transition-colors">
              {t("corporate")}
            </a>
            <a href="#contact" className="text-sm font-semibold text-navy hover:text-blue transition-colors">
              {t("contact")}
            </a>
          </div>

          {/* Desktop right — flags + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2">
              {locales.map(({ code, flag, label }) => (
                <Link
                  key={code}
                  href={switchLocalePath(code)}
                  title={label}
                  className={`transition-all duration-150 ${
                    code === locale
                      ? "opacity-100 ring-2 ring-blue ring-offset-1"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  style={{ borderRadius: "50%" }}
                >
                  <Image
                    src={flag}
                    alt={label}
                    width={32}
                    height={32}
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
              ))}
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-navy hover:bg-blue text-white text-sm font-bold transition-colors"
            >
              {t("requestTraining")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {[
              { href: "#programmes", label: "Programmes" },
              { href: "#courses",    label: t("courses") },
              { href: "#corporate",  label: t("corporate") },
              { href: "#contact",    label: t("contact") },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-semibold text-navy border-b border-gray-100 last:border-0 hover:text-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t("language")}
            </span>
            <div className="flex items-center gap-2">
              {locales.map(({ code, flag, label }) => (
                <Link
                  key={code}
                  href={switchLocalePath(code)}
                  title={label}
                  className={`transition-all duration-150 ${
                    code === locale
                      ? "opacity-100 ring-2 ring-blue ring-offset-1"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  style={{ borderRadius: "50%" }}
                >
                  <Image
                    src={flag}
                    alt={label}
                    width={30}
                    height={30}
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-4 py-3 bg-navy hover:bg-blue text-white font-bold transition-colors"
          >
            {t("requestTraining")}
          </a>
        </div>
      )}
    </header>
  );
}
