import { useTranslations } from "next-intl";
import Image from "next/image";

const PILLARS = ["pillar1", "pillar2", "pillar3", "pillar4"] as const;

export default function PremiumTracks() {
  const t = useTranslations("ndtOverview");

  return (
    <section className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] flex items-center">

      {/* Background image */}
      <Image
        src="/assets/ndt-hero.png"
        alt="NDT inspector on offshore oil platform"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 w-full">
        <div className="max-w-2xl">

          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-5">
            {t("badge")}
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {t("headline")}{" "}
            <span className="text-blue">{t("headlineHighlight")}</span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            {t("subtitle")}
          </p>

          {/* Pillars */}
          <div className="flex flex-wrap gap-3 mb-10">
            {PILLARS.map((p) => (
              <span key={p} className="flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-black text-white uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                {t(p)}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#ndt-accordion"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue text-white font-black text-sm uppercase tracking-wider hover:bg-white hover:text-navy transition-colors duration-200"
          >
            {t("servicesTitle")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

        </div>
      </div>

    </section>
  );
}
