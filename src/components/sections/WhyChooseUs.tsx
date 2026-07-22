"use client";

import { useTranslations } from "next-intl";

function CertificateIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="8" r="5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="7" width="18" height="12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
    </svg>
  );
}

function InstructorIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="7" r="3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h17M12 3.5c2.5 2.5 2.5 15 0 17M12 3.5c-2.5 2.5-2.5 15 0 17" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15a8 8 0 0014.5 3.5M19.5 9A8 8 0 005 5.5" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 15a8 8 0 0116 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 15h19" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v2" />
    </svg>
  );
}

const ICONS = [
  CertificateIcon,
  BriefcaseIcon,
  InstructorIcon,
  GlobeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  RefreshIcon,
  HardHatIcon,
];

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");

  const reasons = [
    { title: t("reason1Title"), desc: t("reason1Desc") },
    { title: t("reason2Title"), desc: t("reason2Desc") },
    { title: t("reason3Title"), desc: t("reason3Desc") },
    { title: t("reason4Title"), desc: t("reason4Desc") },
    { title: t("reason5Title"), desc: t("reason5Desc") },
    { title: t("reason6Title"), desc: t("reason6Desc") },
    { title: t("reason7Title"), desc: t("reason7Desc") },
    { title: t("reason8Title"), desc: t("reason8Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <span className="block text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 gap-0 border border-white/15">
          {reasons.map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            const isRightCol = i % 2 === 1;
            const isBottomRow = i >= reasons.length - 2;
            return (
              <div
                key={title}
                className={[
                  "px-8 py-8 flex gap-5",
                  !isBottomRow ? "border-b border-white/15" : "",
                  !isRightCol ? "sm:border-r border-white/15" : "",
                ].join(" ")}
              >
                <span className="flex items-center justify-center w-11 h-11 border border-white/20 text-yellow-400 shrink-0">
                  <Icon />
                </span>
                <div>
                  <h3 className="text-base font-black text-white mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
