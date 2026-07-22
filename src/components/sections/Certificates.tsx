"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const CERT_IMAGES = [
  { src: "/assets/cert-qms.webp",   label: "ISO 9001:2015", subKey: "cert1Sub" as const },
  { src: "/assets/cert-ems.webp",   label: "ISO 14001:2015", subKey: "cert2Sub" as const },
  { src: "/assets/cert-ohsms.webp", label: "ISO 45001:2018", subKey: "cert3Sub" as const },
];

const ACCREDITATIONS = [
  { labelKey: "accredBody1Label" as const, subKey: "accredBody1Sub" as const },
  { labelKey: "accredBody2Label" as const, subKey: "accredBody2Sub" as const },
];

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

export default function Certificates() {
  const t = useTranslations("certificates");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
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

          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {CERT_IMAGES.map(({ src, label, subKey }) => (
              <button
                key={src}
                onClick={() => setLightbox(src)}
                className="group flex flex-col overflow-hidden border border-gray-200 hover:border-blue transition-colors duration-200 text-left"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={src}
                    alt={label}
                    width={1131}
                    height={1600}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-gray-100">
                  <p className="text-[11px] font-black text-blue uppercase tracking-widest leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-tight hidden sm:block">{t(subKey)}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
            {ACCREDITATIONS.map(({ labelKey, subKey }) => (
              <div key={labelKey} className="flex items-center gap-3 border border-gray-200 px-5 py-3">
                <ShieldIcon />
                <div>
                  <p className="text-[11px] font-black text-blue uppercase tracking-widest leading-tight">{t(labelKey)}</p>
                  <p className="text-[10px] text-gray-400 leading-tight">{t(subKey)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-9 right-0 text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              {t("close")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={lightbox}
              alt="Certificate"
              width={1131}
              height={1600}
              style={{ maxHeight: "90vh", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
