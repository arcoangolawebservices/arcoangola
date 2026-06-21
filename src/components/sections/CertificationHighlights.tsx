"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const CARD_IMAGES = [
  { img: "/assets/corporate.webp",         imgAlt: "ISO Lead Auditor training session",       badge: "ISO 9001 · 14001 · 45001", titleKey: "card1Title" as const, descKey: "card1Desc" as const, tabKey: "iso" },
  { img: "/assets/engineer.webp",          imgAlt: "ISO 9712 certified NDT engineer",          badge: "ISO 9712",                  titleKey: "card2Title" as const, descKey: "card2Desc" as const, tabKey: "iso" },
  { img: "/assets/inspector.webp",         imgAlt: "Industrial NDT inspector on site",          badge: "ASNT-SNT-TC-1A",            titleKey: "card3Title" as const, descKey: "card3Desc" as const, tabKey: "ndt" },
  { img: "/assets/img-ndt-services.webp",  imgAlt: "Professional welder on pressure vessel",   badge: "TWI-CSWIP / BGAS",          titleKey: "card4Title" as const, descKey: "card4Desc" as const, tabKey: "welding" },
] as const;

function handleViewCourses(tabKey: string) {
  window.dispatchEvent(new CustomEvent("setCatalogTab", { detail: tabKey }));
  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
}

export default function CertificationHighlights() {
  const t = useTranslations("certHighlights");

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {CARD_IMAGES.map(({ img, imgAlt, badge, titleKey, descKey, tabKey }) => (
            <div key={titleKey} className="border border-gray-200 flex flex-col overflow-hidden">
              <div className="relative h-56 sm:h-64 shrink-0">
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                  {badge}
                </span>
                <h3 className="text-xl font-black text-navy leading-tight">
                  {t(titleKey)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {t(descKey)}
                </p>
                <button
                  onClick={() => handleViewCourses(tabKey)}
                  className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-black text-blue hover:text-navy uppercase tracking-widest transition-colors"
                >
                  {t("viewCourses")}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Individual QC Professional + Corporate Solutions */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">

          {/* Card 5: Individual QC Professional */}
          <div className="border border-gray-200 flex flex-col overflow-hidden">
            <div className="relative h-56 sm:h-64 shrink-0">
              <Image
                src="/assets/img-qc-professional.png"
                alt="Certified QC professional in the field"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 30%" }}
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                COGIP · CMQIP — Individual Track
              </span>
              <h3 className="text-xl font-black text-navy leading-tight">
                {t("card5Title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {t("card5Desc")}
              </p>
              <a
                href="#premium"
                className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-black text-blue hover:text-navy uppercase tracking-widest transition-colors"
              >
                {t("viewProgrammes")}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 5b: Corporate Solutions */}
          <div className="border border-gray-200 flex flex-col overflow-hidden">
            <div className="relative h-56 sm:h-64 shrink-0">
              <Image
                src="/assets/img-executive.webp"
                alt="Corporate training for businesses and organisations"
                fill
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1 bg-navy">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                {t("card5bBadge")}
              </span>
              <h3 className="text-xl font-black text-white leading-tight">
                {t("card5bTitle")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                {t("card5bDesc")}
              </p>
              <a
                href="#contact"
                className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-black text-blue hover:text-white uppercase tracking-widest transition-colors"
              >
                {t("requestProposal")}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
