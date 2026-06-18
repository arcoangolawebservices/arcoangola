"use client";

import Image from "next/image";
import { useState } from "react";

const CERTS = [
  { src: "/assets/cert-qms.webp",   label: "ISO 9001:2015", sub: "Quality Management System" },
  { src: "/assets/cert-ems.webp",   label: "ISO 14001:2015", sub: "Environmental Management System" },
  { src: "/assets/cert-ohsms.webp", label: "ISO 45001:2018", sub: "Occupational Health & Safety" },
] as const;

export default function Certificates() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
              Internationally Accredited
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
              Our ISO Accreditations
            </h2>
            <p className="text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed">
              Arco Angola holds three internationally recognised ISO management system certifications — independently audited and verified, the same standards required by global operators and clients across the energy and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {CERTS.map(({ src, label, sub }) => (
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
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-tight hidden sm:block">{sub}</p>
                </div>
              </button>
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
              Close
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
