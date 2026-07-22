"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { whatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
    { value: t("stat5Value"), label: t("stat5Label") },
  ];

  return (
    <section className="relative flex items-center overflow-hidden pt-24 lg:pt-28 pb-10 lg:pb-14">

        {/* Background — full section */}
        <div className="absolute inset-0 bg-black" aria-hidden="true" />
        <Image
          src="/assets/hero-bg.webp"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pl-6 sm:pl-10 lg:pl-14 xl:pl-20 pr-4 sm:pr-6 lg:pr-8">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl">

          <span className="block text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-5">
            {t("title")}
            <br />
            <span className="text-yellow-400">{t("titleHighlight")}</span>
            <br />
            {t("titleSuffix")}
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
            >
              {t("ctaExplore")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={whatsAppLink(t("waCorporateMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors"
            >
              {t("ctaCorporate")}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-x-8 lg:gap-x-10 gap-y-4 border-t border-white/10 pt-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-none tracking-tight whitespace-nowrap">
                {s.value}
              </span>
              <span className="text-[9px] sm:text-[10px] text-white/65 uppercase tracking-widest font-bold leading-tight max-w-[68px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        </div>

    </section>
  );
}
