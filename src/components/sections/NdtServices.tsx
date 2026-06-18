"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

// Static metadata only — names/descriptions come from translations
const NDT_META = [
  { abbr: "VT",   key: "vt",   tag: "Conventional", isAdvanced: false },
  { abbr: "UT",   key: "ut",   tag: "Conventional", isAdvanced: false },
  { abbr: "MT",   key: "mt",   tag: "Conventional", isAdvanced: false },
  { abbr: "PT",   key: "pt",   tag: "Conventional", isAdvanced: false },
  { abbr: "RT",   key: "rt",   tag: "Conventional", isAdvanced: false },
  { abbr: "PAUT", key: "paut", tag: "Advanced",      isAdvanced: true  },
  { abbr: "TOFD", key: "tofd", tag: "Advanced",      isAdvanced: true  },
  { abbr: "ACFM", key: "acfm", tag: "Advanced",      isAdvanced: true  },
  { abbr: "ECT",  key: "ect",  tag: "Advanced",      isAdvanced: true  },
] as const;

const WELDING_META = [
  { abbr: "VWI", key: "vwi", tag: "TWI-CSWIP", isAdvanced: false },
  { abbr: "WPQ", key: "wpq", tag: "TWI-CSWIP", isAdvanced: false },
  { abbr: "WQA", key: "wqa", tag: "TWI-CSWIP", isAdvanced: false },
  { abbr: "CI",  key: "ci",  tag: "BGAS",      isAdvanced: false },
  { abbr: "HT",  key: "ht",  tag: "BGAS",      isAdvanced: false },
  { abbr: "DFT", key: "dft", tag: "BGAS",      isAdvanced: false },
  { abbr: "PSI", key: "psi", tag: "BGAS",      isAdvanced: false },
] as const;

const API_META = [
  { abbr: "API 510", key: "api510", tag: "API 510",     isAdvanced: false },
  { abbr: "API 570", key: "api570", tag: "API 570",     isAdvanced: false },
  { abbr: "API 653", key: "api653", tag: "API 653",     isAdvanced: false },
  { abbr: "RBI",     key: "rbi",    tag: "API 580/581", isAdvanced: false },
  { abbr: "CML",     key: "cml",    tag: "API 570/653", isAdvanced: false },
] as const;

type Tab = "ndt" | "welding" | "api";

type Service = {
  abbr: string;
  name: string;
  tag: string;
  desc: string;
  isAdvanced: boolean;
};

function AccordionRow({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border-b border-white/8 last:border-0 transition-colors duration-150 ${isOpen ? "bg-white/5" : "hover:bg-white/3"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
      >
        {/* Abbr badge */}
        <span className={[
          "shrink-0 w-14 sm:w-16 text-center text-[10px] font-black uppercase tracking-widest py-1 px-1",
          service.isAdvanced ? "bg-blue text-white" : "border border-white/30 text-white/70",
        ].join(" ")}>
          {service.abbr}
        </span>

        {/* Name */}
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-black text-white leading-snug">
            {service.name}
          </span>
          <span className="block text-[10px] text-white/60 uppercase tracking-widest mt-0.5 sm:hidden">
            {service.tag}
          </span>
        </span>

        {/* Tag (desktop only) */}
        <span className="hidden sm:block text-[10px] text-white/60 uppercase tracking-widest shrink-0 mr-4">
          {service.tag}
        </span>

        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-blue shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded description */}
      {isOpen && (
        <div className="px-5 sm:px-6 pb-5 pt-1 flex gap-4">
          <div className="w-0.5 bg-blue shrink-0 self-stretch" />
          <p className="text-white/80 text-sm leading-relaxed">
            {service.desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default function NdtServices() {
  const t = useTranslations("ndtServices");
  const [activeTab, setActiveTab] = useState<Tab>("ndt");
  const [openRow, setOpenRow] = useState<string | null>(null);

  const tagConventional = t("tagConventional");
  const tagAdvanced = t("tagAdvanced");

  function buildTag(meta: { tag: string; isAdvanced: boolean }) {
    if (meta.tag === "Conventional") return tagConventional;
    if (meta.tag === "Advanced") return tagAdvanced;
    return meta.tag; // TWI-CSWIP, BGAS, API XXX — stay unchanged
  }

  const NDT: Service[] = NDT_META.map((m) => ({
    abbr: m.abbr,
    isAdvanced: m.isAdvanced,
    tag: buildTag(m),
    name: t(`ndt_${m.key}_name` as Parameters<typeof t>[0]),
    desc: t(`ndt_${m.key}_desc` as Parameters<typeof t>[0]),
  }));

  const WELDING: Service[] = WELDING_META.map((m) => ({
    abbr: m.abbr,
    isAdvanced: m.isAdvanced,
    tag: buildTag(m),
    name: t(`welding_${m.key}_name` as Parameters<typeof t>[0]),
    desc: t(`welding_${m.key}_desc` as Parameters<typeof t>[0]),
  }));

  const API: Service[] = API_META.map((m) => ({
    abbr: m.abbr,
    isAdvanced: m.isAdvanced,
    tag: buildTag(m),
    name: t(`api_${m.key}_name` as Parameters<typeof t>[0]),
    desc: t(`api_${m.key}_desc` as Parameters<typeof t>[0]),
  }));

  const TABS_TRANSLATED: { key: Tab; label: string; std: string; services: Service[] }[] = [
    { key: "ndt",     label: t("tab1"), std: "ISO 9712 · ASNT",     services: NDT },
    { key: "welding", label: t("tab2"), std: "TWI-CSWIP · BGAS",    services: WELDING },
    { key: "api",     label: t("tab3"), std: "API 510 · 570 · 653", services: API },
  ];

  const STATS = [
    { value: String(NDT.length),     label: t("statNdt") },
    { value: String(WELDING.length), label: t("statWelding") },
    { value: String(API.length),     label: t("statApi") },
  ];

  const currentTab = TABS_TRANSLATED.find((tab) => tab.key === activeTab)!;

  function handleTabChange(key: Tab) {
    setActiveTab(key);
    setOpenRow(null);
  }

  function toggleRow(abbr: string) {
    setOpenRow((prev) => (prev === abbr ? null : abbr));
  }

  return (
    <section className="bg-navy overflow-hidden">

      {/* ── Hero split ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0 lg:min-h-[520px] items-stretch">

          {/* Left */}
          <div className="py-16 sm:py-20 lg:py-24 lg:pr-16 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-blue text-[11px] font-black uppercase tracking-widest mb-5">
              <span className="block w-6 h-px bg-blue" />
              {t("sectionBadge")}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              {t("heading")}<br />
              <span className="text-blue">{t("headingHighlight")}</span>
            </h2>

            <p className="text-white/80 leading-relaxed text-sm sm:text-base max-w-prose mb-8">
              {t("intro")}
            </p>

            <div className="flex gap-6 sm:gap-10 mb-10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">{value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/65">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2.5 px-7 py-4 bg-blue text-white font-black text-sm uppercase tracking-wider hover:bg-white hover:text-navy transition-colors duration-200"
            >
              {t("cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right image */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0" style={{ clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <Image
                src="/assets/img-ndt-services.webp"
                alt="Field inspection on industrial asset"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              <div className="absolute inset-0 bg-navy/30" />
            </div>
            <div className="absolute bottom-8 left-12 z-10 bg-navy/80 backdrop-blur-sm border border-white/10 px-4 py-3">
              <div className="text-[10px] font-black uppercase tracking-widest text-blue mb-0.5">{t("certifiedTo")}</div>
              <div className="text-white font-bold text-sm">ISO 9712 · ASNT · TWI-CSWIP · API</div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/8" />

      {/* ── Tabs + Accordion ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Tab bar */}
        <div className="flex overflow-x-auto scrollbar-none border-b border-white/8 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {TABS_TRANSLATED.map(({ key, label, services }) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={[
                "shrink-0 flex items-center gap-2.5 px-5 py-3.5 text-[11px] font-black uppercase tracking-wider border-b-2 -mb-px transition-colors duration-150 whitespace-nowrap",
                activeTab === key
                  ? "border-blue text-white"
                  : "border-transparent text-white/60 hover:text-white/85",
              ].join(" ")}
            >
              {label}
              <span className={[
                "text-[10px] font-bold px-1.5 py-0.5 leading-none",
                activeTab === key ? "bg-blue text-white" : "bg-white/10 text-white/65",
              ].join(" ")}>{services.length}</span>
            </button>
          ))}
          <span className="ml-auto pl-6 self-center text-[10px] text-white/55 uppercase tracking-widest shrink-0 hidden sm:block">
            {currentTab.std}
          </span>
        </div>

        {/* Standard tag on mobile */}
        <div className="sm:hidden text-[10px] text-white/60 uppercase tracking-widest mb-5">
          {currentTab.std}
        </div>

        {/* Accordion list */}
        <div className="border border-white/8">
          {currentTab.services.map((s) => (
            <AccordionRow
              key={s.abbr}
              service={s}
              isOpen={openRow === s.abbr}
              onToggle={() => toggleRow(s.abbr)}
            />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-start gap-3">
          <div className="w-0.5 h-8 bg-blue shrink-0 mt-0.5" />
          <p className="text-white/65 text-xs leading-relaxed">
            {t("footerNote")}
          </p>
        </div>

      </div>
    </section>
  );
}
