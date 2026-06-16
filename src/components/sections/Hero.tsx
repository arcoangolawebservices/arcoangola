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

      {/* Background: navy fallback first, image on top, then dark overlay */}
      <div className="absolute inset-0 bg-navy" aria-hidden="true" />
      <Image
        src="/assets/hero-bg.webp"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-navy/65" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-3xl">

          <span className="block text-white text-xs font-bold uppercase tracking-widest mb-8">
            {t("badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
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
          <div className="flex flex-wrap gap-x-8 gap-y-5 border-t border-white/15 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <span className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
                  {s.value}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold leading-tight max-w-[52px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
