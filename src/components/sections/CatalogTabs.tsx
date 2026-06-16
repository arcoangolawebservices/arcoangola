"use client";

import { useState } from "react";

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
    level: string;
    learnMore: string;
    badge: string;
    title: string;
    subtitle: string;
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

const ISO_SUBGROUPS = [
  { key: "isoSystems",     label: "ISO Lead Auditor Training & Certification Courses" },
  { key: "isoNdt2",        label: "ISO 9712 NDT Level 2" },
  { key: "isoNdt3",        label: "ISO 9712 NDT Level 3" },
  { key: "isoSpecialized", label: "Additional ISO 9712 Courses" },
];

function CourseRow({ course }: { course: Course }) {
  return (
    <div className="flex items-start justify-between gap-3 px-4 py-4 hover:bg-gray-50 transition-colors">
      <div className="flex-1 min-w-0">
        <p className="font-bold text-navy text-sm leading-snug">{course.title}</p>
        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{course.subtitle}</p>
      </div>
      <span className="text-xs font-black text-blue shrink-0 mt-0.5 uppercase tracking-wide">
        {course.level}
      </span>
    </div>
  );
}

function MobileIsoAccordion({ courses }: { courses: Course[] }) {
  const [open, setOpen] = useState<string>("isoSystems");

  return (
    <div>
      {ISO_SUBGROUPS.map(({ key, label }) => {
        const sub = courses.filter((c) => c.category === key);
        if (sub.length === 0) return null;
        const isOpen = open === key;
        return (
          <div key={key} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => setOpen(isOpen ? "" : key)}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 text-left"
            >
              <span className="text-xs font-black uppercase tracking-widest text-navy">
                {label}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-bold text-gray-400">{sub.length}</span>
                <svg
                  className={`w-4 h-4 text-blue transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="divide-y divide-gray-100">
                {sub.map((course) => <CourseRow key={course.id} course={course} />)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function IsoCoursePanel({ courses }: { courses: Course[] }) {
  return (
    <div>
      {ISO_SUBGROUPS.map(({ key, label }) => {
        const sub = courses.filter((c) => c.category === key);
        if (sub.length === 0) return null;
        return (
          <div key={key} className="border-b border-gray-100 last:border-0">
            <div className="px-4 sm:px-5 py-2 bg-gray-50 border-b border-gray-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
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
  const [active, setActive] = useState<string>("iso");

  const sections = [
    { key: "iso",     label: labels.filterIso },
    { key: "welding", label: labels.filterWelding },
    { key: "ndt",     label: labels.filterNdt },
    { key: "api",     label: labels.filterApi },
  ];

  const visible = courses.filter((c) => CATEGORY_GROUPS[c.category] === active);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-3">
            {labels.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-2">
            {labels.title}
          </h2>
          <p className="text-gray-500 max-w-xl text-sm sm:text-base">{labels.subtitle}</p>
        </div>

        {/* ── MOBILE: 2×2 grid tabs + accordion for ISO ── */}
        <div className="lg:hidden">
          {/* 2×2 category grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {sections.map(({ key, label }) => {
              const count = courses.filter((c) => CATEGORY_GROUPS[c.category] === key).length;
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex flex-col items-start px-4 py-4 border transition-colors text-left ${
                    isActive
                      ? "bg-navy border-navy text-white"
                      : "bg-white border-gray-200 text-navy"
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isActive ? "text-blue" : "text-gray-400"}`}>
                    {count} courses
                  </span>
                  <span className={`font-black text-sm leading-tight ${isActive ? "text-white" : "text-navy"}`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Course list */}
          <div className="border border-gray-200 bg-white">
            {active === "iso"
              ? <MobileIsoAccordion courses={courses} />
              : <div className="divide-y divide-gray-100">{visible.map((c) => <CourseRow key={c.id} course={c} />)}</div>
            }
          </div>
        </div>

        {/* ── DESKTOP: sidebar on left, courses on right ── */}
        <div className="hidden lg:flex border border-gray-200">

          {/* Sidebar */}
          <div className="w-52 shrink-0 border-r border-gray-200 divide-y divide-gray-100">
            {sections.map(({ key, label }) => {
              const count = courses.filter((c) => CATEGORY_GROUPS[c.category] === key).length;
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full text-left px-5 py-5 transition-colors border-l-4 ${
                    isActive
                      ? "bg-navy border-l-blue"
                      : "bg-white hover:bg-gray-50 border-l-transparent"
                  }`}
                >
                  <span className={`block font-black text-sm leading-tight ${isActive ? "text-white" : "text-navy"}`}>
                    {label}
                  </span>
                  <span className={`block text-[11px] mt-1 font-semibold ${isActive ? "text-white/50" : "text-gray-400"}`}>
                    {count} courses
                  </span>
                </button>
              );
            })}
          </div>

          {/* Course panel */}
          <div className="flex-1 bg-white min-h-[320px]">
            {active === "iso"
              ? <IsoCoursePanel courses={courses} />
              : <div className="divide-y divide-gray-100">{visible.map((c) => <CourseRow key={c.id} course={c} />)}</div>
            }
          </div>
        </div>

      </div>
    </section>
  );
}
