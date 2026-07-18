"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AdvancedNdtPrograms() {
  const t = useTranslations("advancedNdt");

  const programs = [
    t("program1"),
    t("program2"),
    t("program3"),
    t("program4"),
    t("program5"),
    t("program6"),
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            {t("intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <div className="relative w-full h-44 mb-6 overflow-hidden rounded-md">
              <Image src="/assets/img-ndt-services.webp" alt="Advanced NDT lab and equipment" fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 className="text-xl font-black text-navy mb-4">{t("title")}</h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
              {t("body")}
            </p>
            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-navy p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue mb-4">
              {t("valueTitle")}
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              {t("valueBody")}
            </p>
            <div className="space-y-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-black text-white">{t("value1")}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-black text-white">{t("value2")}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-black text-white">{t("value3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
