"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FlagshipSolutions() {
  const t = useTranslations("flagship");

  const enterprisePoints = [
    t("enterprisePoint1"),
    t("enterprisePoint2"),
    t("enterprisePoint3"),
    t("enterprisePoint4"),
  ];

  const personnelPoints = [
    t("personnelPoint1"),
    t("personnelPoint2"),
    t("personnelPoint3"),
    t("personnelPoint4"),
  ];

  const supportItems = [
    t("supportItem1"),
    t("supportItem2"),
    t("supportItem3"),
    t("supportItem4"),
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="inline-flex items-center justify-center bg-blue/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.25em] text-blue mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-4">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
            {t("intro")}
          </p>
        </div>

        <div className="space-y-6">
          <article className="overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative h-80 sm:h-[28rem]">
              <Image
                src="/assets/img-iso-managemnet-system.png"
                alt="Enterprise team reviewing management systems"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
              />
            </div>
            <div className="p-8">
              <span className="inline-flex bg-blue/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-blue mb-4">
                {t("enterpriseBadge")}
              </span>
              <h3 className="text-2xl font-black text-navy mb-4">
                {t("enterpriseTitle")}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                {t("enterpriseBody")}
              </p>
              <ul className="space-y-3 mb-8">
                {enterprisePoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#corporate"
                className="inline-flex items-center text-sm font-black text-navy hover:text-blue transition-colors"
              >
                {t("enterpriseCta")}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </article>
          <article className="overflow-hidden border border-gray-200 bg-navy text-white shadow-sm">
            <div className="relative h-96 sm:h-[34rem]">
              <Image
                src="/assets/img-personnel-cert.png"
                alt="NDT professional at work"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              />
            </div>
            <div className="p-8">
              <span className="inline-flex bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-blue mb-4">
                {t("personnelBadge")}
              </span>
              <h3 className="text-2xl font-black mb-4">
                {t("personnelTitle")}
              </h3>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                {t("personnelBody")}
              </p>
              <ul className="space-y-3 mb-8">
                {personnelPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#courses"
                className="inline-flex items-center text-sm font-black text-white hover:text-blue transition-colors"
              >
                {t("personnelCta")}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </article>
          <div className="border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue mb-4">
              {t("supportTitle")}
            </p>
            <div className="flex flex-wrap gap-2">
              {supportItems.map((item) => (
                <span key={item} className="rounded-full border border-gray-200 px-3 py-2 text-sm text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
