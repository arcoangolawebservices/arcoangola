import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">

      {/* Background image — replace src with real photo when available */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Fallback colour shown while image loads or if missing */}
        <div className="absolute inset-0 bg-navy" aria-hidden="true" />
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-3xl">

          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-8">
            {t("badge")}
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight text-white mb-6">
            {t("title")}
            <br />
            <span className="text-blue">{t("titleHighlight")}</span>
            <br />
            {t("titleSuffix")}
          </h1>

          <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
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
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 hover:border-white text-white font-bold text-sm transition-colors"
            >
              {t("ctaCorporate")}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 border-t border-white/15 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-blue">{s.value}</div>
                <div className="text-xs text-white/50 mt-0.5 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
