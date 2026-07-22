"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Course = {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  category: string;
};

type Props = {
  courses: Course[];
  labels: {
    filterAll: string;
    filterWelding: string;
    filterNdt: string;
    filterApi: string;
    filterIso: string;
    coursesLabel: string;
    isoSubgroup1: string;
    isoSubgroup2: string;
    isoSubgroup3: string;
    isoSubgroup4: string;
    level: string;
    learnMore: string;
    badge: string;
    title: string;
    subtitle: string;
    signatureFocusLabel: string;
    signatureFocus1: string;
    signatureFocus2: string;
    signatureFocus3: string;
  };
};

const CATEGORY_GROUPS: Record<string, string> = {
  welding:        "welding",
  ndt:            "ndt",
  api:            "api",
  isoSystems:     "iso",
  isoNdt2:        "iso",
  isoNdt3:        "iso",
  isoSpecialized: "iso",
};

// ISO_SUBGROUPS labels are passed via props (translated at the server level)

// Certification body names shown in the sidebar / mobile grid
const SECTION_BODIES: Record<string, string> = {
  iso:     "15 ISO Standards · 9712",
  welding: "TWI-CSWIP / BGAS",
  ndt:     "ASNT-SNT-TC-1A",
  api:     "API 653 · 570 · 510",
};

function CourseRow({ course }: { course: Course }) {
  return (
    <div className="flex items-start justify-between gap-3 px-5 py-4 hover:bg-gray-50 transition-colors">
      <div className="flex-1 min-w-0">
        <p className="font-bold text-navy text-base leading-snug">{course.title}</p>
        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{course.subtitle}</p>
      </div>
      <span className="text-xs font-black text-blue shrink-0 mt-1 uppercase tracking-wide">
        {course.level}
      </span>
    </div>
  );
}

function IsoCoursePanel({ courses, subgroups }: { courses: Course[]; subgroups: { key: string; label: string }[] }) {
  return (
    <div>
      {subgroups.map(({ key, label }) => {
        const sub = courses.filter((c) => c.category === key);
        if (sub.length === 0) return null;
        return (
          <div key={key} className="border-b border-gray-100 last:border-0">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-100">
              <span className="text-sm font-black uppercase tracking-widest text-blue">
                {label}
              </span>
            </div>
            <div className="grid lg:grid-cols-2 divide-y divide-gray-100 lg:divide-y-0">
              {sub.map((course) => (
                <div key={course.id} className="border-b border-gray-100 lg:odd:border-r lg:border-b-0 last:border-b-0">
                  <CourseRow course={course} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CatalogTabs({ courses, labels }: Props) {
  const [active, setActive] = useState<string | null>(null);

  // Listen for tab-change events fired by CertificationHighlights cards
  useEffect(() => {
    const handler = (e: Event) => setActive((e as CustomEvent<string>).detail);
    window.addEventListener("setCatalogTab", handler);
    return () => window.removeEventListener("setCatalogTab", handler);
  }, []);

  const isoSubgroups = [
    { key: "isoSystems",     label: labels.isoSubgroup1 },
    { key: "isoNdt2",        label: labels.isoSubgroup2 },
    { key: "isoNdt3",        label: labels.isoSubgroup3 },
    { key: "isoSpecialized", label: labels.isoSubgroup4 },
  ];

  const sections = [
    { key: "iso",     label: labels.filterIso },
    { key: "welding", label: labels.filterWelding },
    { key: "ndt",     label: labels.filterNdt },
    { key: "api",     label: labels.filterApi },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">

          {/* Image — full-width strip on all sizes */}
          <div className="relative h-56 sm:h-72 lg:h-80 overflow-hidden mb-6 sm:mb-8">
            <Image
              src="/assets/img-engineer.jpg"
              alt="Certified professional in a training environment"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>

          {/* Text */}
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {labels.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy mb-3">
            {labels.title}
          </h2>
          <p className="text-gray-500 max-w-xl text-sm sm:text-base">{labels.subtitle}</p>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2 border border-blue/15 bg-white px-3 py-2 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue">{labels.signatureFocusLabel}</span>
            <span className="h-1 w-1 bg-blue/70" />
            <span className="text-sm font-semibold text-navy">{labels.signatureFocus1}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm font-semibold text-navy">{labels.signatureFocus2}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm font-semibold text-navy">{labels.signatureFocus3}</span>
          </div>

        </div>

        {/* Accordion — all categories closed by default, expand on click */}
        <div className="border border-gray-200 bg-white divide-y divide-gray-100">
          {sections.map(({ key, label }) => {
            const count = courses.filter((c) => CATEGORY_GROUPS[c.category] === key).length;
            const isOpen = active === key;
            return (
              <div key={key}>
                <button
                  onClick={() => setActive(isOpen ? null : key)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between gap-4 px-5 py-5 text-left transition-colors ${
                    isOpen ? "bg-navy" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div>
                    <span className={`block text-[10px] font-black uppercase tracking-widest mb-1.5 leading-tight ${isOpen ? "text-yellow-400" : "text-gray-400"}`}>
                      {SECTION_BODIES[key]}
                    </span>
                    <span className={`block font-black text-base sm:text-lg leading-tight ${isOpen ? "text-white" : "text-navy"}`}>
                      {label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-[11px] font-semibold ${isOpen ? "text-white/50" : "text-gray-400"}`}>
                      {count} {labels.coursesLabel}
                    </span>
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-yellow-400" : "text-blue"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="bg-gray-50/60">
                    {key === "iso"
                      ? <IsoCoursePanel courses={courses} subgroups={isoSubgroups} />
                      : <div className="divide-y divide-gray-100 bg-white">
                          {courses.filter((c) => CATEGORY_GROUPS[c.category] === key).map((c) => <CourseRow key={c.id} course={c} />)}
                        </div>
                    }
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
