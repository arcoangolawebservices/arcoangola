"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const WHATSAPP_NUMBERS = [
  { number: "244927789106", label: "+244 927 789 106" },
  { number: "244930408008", label: "+244 930 408 008" },
  { number: "244926531906", label: "+244 926 531 906" },
];
const WHATSAPP_NUMBER = WHATSAPP_NUMBERS[0].number;

const EMAILS = [
  { addr: "info01@arcoangola.com", label: "Info" },
  { addr: "inspections01@arcoangola.com", label: "Inspections" },
  { addr: "operations01@arcoangola.com", label: "Operations" },
  { addr: "admin01@arcoangola.com", label: "Admin" },
];

const CERTS = ["TWI/CSWIP", "ASNT NDT", "API", "ISO Lead Auditor", "ISO 9712"];

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleWhatsApp(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = encodeURIComponent(`${name}: ${message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  const links = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/courses`, label: nav("courses") },
    { href: `/${locale}/corporate`, label: nav("corporate") },
  ];

  return (
    <footer id="contact" className="bg-navy">
      {/* Brand-colour top rule */}
      <div className="h-px bg-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">

          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image
                src="/assets/logo-dark.png"
                alt="Arco Angola"
                width={180}
                height={48}
                style={{ height: "40px", width: "auto" }}
              />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-bold px-2 py-0.5 border border-white/15 text-white/50 tracking-wide"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white/55 mb-6">
              {t("quickLinks")}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
                  >
                    <span className="w-3 h-px bg-blue opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white/55 mb-6">
              {t("contact")}
            </h4>

            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/55 mb-3">
                WhatsApp &amp; Direct
              </p>
              <div className="flex flex-col gap-2.5">
                {WHATSAPP_NUMBERS.map(({ number, label }) => (
                  <a
                    key={number}
                    href={`https://wa.me/${number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-medium text-[#25D366] hover:text-white transition-colors"
                  >
                    <WhatsAppIcon />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/55 mb-3">
                Email
              </p>
              <div className="flex flex-col gap-2.5">
                {EMAILS.map(({ addr, label }) => (
                  <a
                    key={addr}
                    href={`mailto:${addr}`}
                    className="group"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wide text-white/55 leading-none mb-0.5">
                      {label}
                    </span>
                    <span className="text-xs text-white/75 group-hover:text-white transition-colors">
                      {addr}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white/55 mb-6">
              {t("inquiry")}
            </h4>
            <form onSubmit={handleWhatsApp} className="flex flex-col gap-2.5">
              <input
                type="text"
                placeholder={t("inquiryName")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue/60 transition-colors"
              />
              <textarea
                placeholder={t("inquiryMessage")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-blue text-white font-bold text-sm tracking-wide hover:bg-white hover:text-navy transition-colors"
              >
                {t("inquirySend")} via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Arco Angola. {t("rights")}
          </p>
          <p className="text-[11px] font-black uppercase tracking-widest text-white/20 order-first sm:order-none">
            Quality&nbsp;·&nbsp;Integrity&nbsp;·&nbsp;Commitment
          </p>
          <div className="flex items-center gap-6">
            {(["pt", "en", "fr"] as const).map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`text-xs font-black transition-colors ${
                  l === locale ? "text-blue" : "text-white/50 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
