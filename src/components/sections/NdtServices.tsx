"use client";

import Image from "next/image";
import { useState } from "react";

const NDT = [
  {
    abbr: "VT", name: "Visual Testing", tag: "Conventional",
    desc: "Systematic direct examination of surfaces, welds and structural components for discontinuities, dimensional non-conformances and workmanship defects. Applied pre-weld, inter-pass and post-weld to AWS D1.1, ASME Section V, ISO 17637 and API standards. The first and most fundamental inspection method on every project.",
  },
  {
    abbr: "UT", name: "Ultrasonic Testing", tag: "Conventional",
    desc: "Pulse-echo and through-transmission techniques for detecting internal flaws, measuring wall thickness and evaluating corrosion in welds, plates, pipes and forgings. Effective across a broad range of materials and thicknesses. Conducted to ASME Section V, EN ISO 17640 and API requirements.",
  },
  {
    abbr: "MT", name: "Magnetic Particle Testing", tag: "Conventional",
    desc: "Detection of surface and near-surface discontinuities in ferromagnetic materials using induced magnetic fields and fine iron particle indicators. Reliably identifies cracks, laps, seams and linear defects in welds, castings and forgings. Performed to ASTM E709, ISO 17638 and ASME Section V.",
  },
  {
    abbr: "PT", name: "Penetrant Testing", tag: "Conventional",
    desc: "Capillary action draws liquid penetrant into surface-open defects, enabling detection on any non-porous material regardless of geometry or alloy. Widely applied to welds, castings, forgings and machined components. Conducted to ASTM E165, ISO 3452 and ASME Section V acceptance criteria.",
  },
  {
    abbr: "RT", name: "Radiographic Testing", tag: "Conventional",
    desc: "X-ray or gamma-ray radiation produces shadow images on film or digital detectors, revealing volumetric internal defects including porosity, slag inclusions and lack of fusion in welds. Provides a permanent traceable record of component integrity. Conducted to ASME Section V, EN ISO 17636 and API standards.",
  },
  {
    abbr: "PAUT", name: "Phased Array UT", tag: "Advanced",
    desc: "Multi-element probes generate electronically steered and focused beams for comprehensive weld inspection and corrosion mapping. Delivers faster, more accurate coverage than conventional UT with full imaging, data recording and reporting capability. Performed to ASME Section V, ISO 13588 and project-specific procedures.",
  },
  {
    abbr: "TOFD", name: "Time of Flight Diffraction", tag: "Advanced",
    desc: "High-sensitivity ultrasonic technique using diffracted signals from defect tips for accurate sizing, location and imaging of weld flaws. Widely used for code-compliant weld acceptance under ASME and ISO standards, frequently deployed alongside PAUT for full-volume coverage.",
  },
  {
    abbr: "ACFM", name: "AC Field Measurement", tag: "Advanced",
    desc: "Electromagnetic technique for detecting and sizing surface-breaking cracks through coatings and paint without removal or surface preparation. Extensively used on offshore structures, subsea pipelines and lifting equipment. Effective on both ferromagnetic and non-ferromagnetic materials.",
  },
  {
    abbr: "ECT", name: "Eddy Current Testing", tag: "Advanced",
    desc: "Electromagnetic induction technique for detecting surface and near-surface defects in conductive materials without direct contact. Primary application is heat exchanger tube inspection, with additional use in weld scanning and coating thickness measurement. Detects cracks through coatings in a single scan pass.",
  },
] as const;

const WELDING = [
  {
    abbr: "VWI", name: "Visual Welding Inspection", tag: "TWI-CSWIP",
    desc: "Systematic examination of welds and base material at all fabrication phases — fit-up, pre-heat, inter-pass temperature and completed welds. Identifies surface discontinuities including cracks, undercut, overlap and porosity against WPS requirements. Conducted to AWS D1.1, ASME IX, ISO 5817 and project ITP requirements.",
  },
  {
    abbr: "WPQ", name: "Welder Qualification Witnessing", tag: "TWI-CSWIP",
    desc: "Independent witnessing of welder performance qualification tests and procedure qualification records to verify compliance with applicable codes. Documents test conditions and destructive/non-destructive examination outcomes. Conducted to ASME Section IX, EN ISO 15614, AWS D1.1 and project welding specifications.",
  },
  {
    abbr: "WQA", name: "Weld Quality Assessment", tag: "TWI-CSWIP",
    desc: "Comprehensive evaluation of completed welds against acceptance criteria in project specifications and applicable codes. Covers weld profile measurement, defect type and severity classification, and fitness-for-service recommendations. Reported to ASME, AWS, EN ISO and API standards with full documentation.",
  },
  {
    abbr: "CI", name: "Coating & Painting Inspection", tag: "BGAS",
    desc: "Full inspection of surface preparation and protective coating application through all stages to verify compliance with approved paint specifications. Covers blast cleaning standards, surface profile, ambient conditions and application through all coats to final DFT. Conducted to SSPC, NACE International and ISO 12944.",
  },
  {
    abbr: "HT", name: "Holiday / Continuity Testing", tag: "BGAS",
    desc: "Electrical continuity testing of applied coatings and linings to detect pinholes, voids and bare areas invisible to visual inspection. Performed using low-voltage wet sponge or high-voltage DC spark testers depending on coating thickness and specification. Conducted to NACE SP0188 and ASTM G62 requirements.",
  },
  {
    abbr: "DFT", name: "Film Thickness Measurement", tag: "BGAS",
    desc: "Measurement of dry film thickness (DFT) and wet film thickness (WFT) across all applied coating layers to verify conformance with specification requirements. Performed using calibrated gauges with statistical sampling in accordance with SSPC-PA 2 and ISO 19840 acceptance criteria.",
  },
  {
    abbr: "PSI", name: "Paint System Inspection", tag: "BGAS",
    desc: "Pre-application checks covering material batch approval, component mixing ratios, induction times, pot life monitoring and environmental conditions including temperature, dew point and relative humidity. Ensures the coating system is applied in strict compliance with manufacturer data sheets and the project paint specification.",
  },
] as const;

const API = [
  {
    abbr: "API 510", name: "Pressure Vessel Inspection", tag: "API 510",
    desc: "In-service inspection and fitness-for-service assessment of pressure vessels in accordance with API 510. Covers corrosion assessment, thickness measurement, weld condition inspection and remaining life documentation. Applied to process vessels, columns, heat exchangers and reactors across refining, petrochemical and upstream facilities.",
  },
  {
    abbr: "API 570", name: "Piping Inspection", tag: "API 570",
    desc: "In-service inspection, corrosion monitoring and integrity assessment of process piping systems per API 570. Includes CML-based thickness measurement campaigns and fitness-for-service evaluation. Supports risk-based inspection planning under API 580/581 and integration with plant CMMS systems.",
  },
  {
    abbr: "API 653", name: "Storage Tank Inspection", tag: "API 653",
    desc: "Comprehensive inspection of aboveground storage tanks including foundation, shell plates, roof structure, nozzles and appurtenances per API 653. Identifies corrosion, deformation, settlement and structural deficiencies with remaining life calculation and suitability-for-service determination.",
  },
  {
    abbr: "RBI", name: "Risk-Based Inspection", tag: "API 580/581",
    desc: "Structured methodology to prioritise inspection resources based on the probability and consequence of equipment failure. Develops optimised inspection plans and intervals based on identified damage mechanisms and risk targets. Conducted in accordance with API 580/581 and integrated with facility integrity management systems.",
  },
  {
    abbr: "CML", name: "Corrosion Monitoring", tag: "API 570/653",
    desc: "Systematic management of corrosion monitoring locations through regular ultrasonic thickness measurement campaigns across piping and fixed equipment. Tracks corrosion rates, calculates retirement dates and identifies areas of accelerated degradation. Supports API 570/653 programmes and ongoing fitness-for-service assessments.",
  },
] as const;

type Tab = "ndt" | "welding" | "api";
type AnyService = (typeof NDT | typeof WELDING | typeof API)[number];

const TABS: { key: Tab; label: string; std: string; services: readonly AnyService[] }[] = [
  { key: "ndt",     label: "NDT Inspection",     std: "ISO 9712 · ASNT",              services: NDT },
  { key: "welding", label: "Welding & Painting",  std: "TWI-CSWIP · BGAS",            services: WELDING },
  { key: "api",     label: "API Inspection",      std: "API 510 · 570 · 653",         services: API },
];

const STATS = [
  { value: String(NDT.length),     label: "NDT Methods" },
  { value: String(WELDING.length), label: "Welding Services" },
  { value: String(API.length),     label: "API Inspections" },
];

function AccordionRow({
  service,
  isOpen,
  onToggle,
}: {
  service: AnyService;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isAdvanced = service.tag === "Advanced";
  return (
    <div className={`border-b border-white/8 last:border-0 transition-colors duration-150 ${isOpen ? "bg-white/5" : "hover:bg-white/3"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
      >
        {/* Abbr badge */}
        <span className={[
          "shrink-0 w-14 sm:w-16 text-center text-[10px] font-black uppercase tracking-widest py-1 px-1",
          isAdvanced ? "bg-blue text-white" : "border border-white/20 text-white/50",
        ].join(" ")}>
          {service.abbr}
        </span>

        {/* Name */}
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-black text-white leading-snug">
            {service.name}
          </span>
          <span className="block text-[10px] text-white/35 uppercase tracking-widest mt-0.5 sm:hidden">
            {service.tag}
          </span>
        </span>

        {/* Tag (desktop only) */}
        <span className="hidden sm:block text-[10px] text-white/35 uppercase tracking-widest shrink-0 mr-4">
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
          <p className="text-white/60 text-sm leading-relaxed">
            {service.desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default function NdtServices() {
  const [activeTab, setActiveTab] = useState<Tab>("ndt");
  const [openRow, setOpenRow] = useState<string | null>(null);

  const currentTab = TABS.find((t) => t.key === activeTab)!;

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
              Field Inspection Services
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              Inspection &amp;<br />
              <span className="text-blue">Field Services</span>
            </h2>

            <p className="text-white/55 leading-relaxed text-sm sm:text-base max-w-prose mb-8">
              Beyond training, Arco Angola deploys certified inspectors for field inspection services across three disciplines — NDT, Welding &amp; Painting and API inspection. All work is conducted to international standards by qualified, accredited personnel.
            </p>

            <div className="flex gap-6 sm:gap-10 mb-10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">{value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2.5 px-7 py-4 bg-blue text-white font-black text-sm uppercase tracking-wider hover:bg-white hover:text-navy transition-colors duration-200"
            >
              Request an Inspection
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
              <div className="text-[10px] font-black uppercase tracking-widest text-blue mb-0.5">Certified To</div>
              <div className="text-white font-bold text-sm">ISO 9712 · ASNT · TWI-CSWIP · API</div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/8" />

      {/* ── Tabs + Accordion ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Tab bar — horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto scrollbar-none border-b border-white/8 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {TABS.map(({ key, label, services }) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={[
                "shrink-0 flex items-center gap-2.5 px-5 py-3.5 text-[11px] font-black uppercase tracking-wider border-b-2 -mb-px transition-colors duration-150 whitespace-nowrap",
                activeTab === key
                  ? "border-blue text-white"
                  : "border-transparent text-white/40 hover:text-white/65",
              ].join(" ")}
            >
              {label}
              <span className={[
                "text-[10px] font-bold px-1.5 py-0.5 leading-none",
                activeTab === key ? "bg-blue text-white" : "bg-white/10 text-white/40",
              ].join(" ")}>{services.length}</span>
            </button>
          ))}
          <span className="ml-auto pl-6 self-center text-[10px] text-white/25 uppercase tracking-widest shrink-0 hidden sm:block">
            {currentTab.std}
          </span>
        </div>

        {/* Standard tag on mobile */}
        <div className="sm:hidden text-[10px] text-white/30 uppercase tracking-widest mb-5">
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
          <p className="text-white/40 text-xs leading-relaxed">
            All inspections are performed by accredited personnel to applicable international standards (ISO 9712, ASNT SNT-TC-1A, TWI-CSWIP, BGAS, API 510/570/653). Procedures are client-specified and documented to full traceability requirements.
          </p>
        </div>

      </div>
    </section>
  );
}
