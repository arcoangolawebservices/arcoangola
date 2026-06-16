"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const WHATSAPP_NUMBER = "244900000000";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`${name}: ${message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  const links = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/courses`, label: nav("courses") },
    { href: `/${locale}/corporate`, label: nav("corporate") },
  ];

  const certs = ["TWI/CSWIP", "ASNT NDT", "API", "ISO Lead Auditor", "ISO 9712"];

  return (
    <footer id="contact" className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-5">
              <span className="flex items-center justify-center w-8 h-8 bg-blue text-white font-black text-sm">
                A
              </span>
              <span className="font-black text-lg text-white">
                ARCO<span className="text-blue">ANGOLA</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {certs.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-bold px-2 py-0.5 bg-white/5 border border-white/10 text-white/40"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-5">
              {t("quickLinks")}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-5">
              {t("contact")}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-white/10 hover:border-blue/60 hover:bg-white/5 transition-colors group"
              >
                <span className="text-xl">📱</span>
                <div>
                  <div className="text-sm font-bold text-white">{t("whatsapp")}</div>
                  <div className="text-xs text-white/40">{t("whatsappSubtext")}</div>
                </div>
              </a>
              <a
                href="mailto:info@arcoangola.com"
                className="flex items-center gap-3 p-3 border border-white/10 hover:border-blue/60 hover:bg-white/5 transition-colors"
              >
                <span className="text-xl">✉️</span>
                <div>
                  <div className="text-sm font-bold text-white">{t("email")}</div>
                  <div className="text-xs text-white/40">info@arcoangola.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Inquiry form */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-5">
              {t("inquiry")}
            </h4>
            <form onSubmit={handleWhatsApp} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder={t("inquiryName")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue transition-colors"
              />
              <textarea
                placeholder={t("inquiryMessage")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
              >
                {t("inquirySend")} via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Arco Angola. {t("rights")}
          </p>
          <div className="flex gap-4">
            {(["pt", "en", "fr"] as const).map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`text-xs font-black transition-colors ${
                  l === locale ? "text-blue" : "text-white/30 hover:text-white"
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
