"use client";

import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0 text-blue mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");

  const reasons = [
    { title: t("reason1Title"), desc: t("reason1Desc") },
    { title: t("reason2Title"), desc: t("reason2Desc") },
    { title: t("reason3Title"), desc: t("reason3Desc") },
    { title: t("reason4Title"), desc: t("reason4Desc") },
    { title: t("reason5Title"), desc: t("reason5Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
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
            const isLast = i === reasons.length - 1;
            const isRightCol = i % 2 === 1;
            return (
              <div
                key={title}
                className={[
                  "px-5 py-6 sm:px-8 sm:py-8 flex gap-4",
                  !isLast ? "border-b border-white/15" : "",
                  !isRightCol && !isLast ? "sm:border-r border-white/15" : "",
                  isLast ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <CheckIcon />
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
