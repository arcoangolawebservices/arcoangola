"use client";

import { useState } from "react";

type Course = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
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
    duration: string;
    level: string;
    learnMore: string;
    badge: string;
    title: string;
    subtitle: string;
  };
};

const FILTERS = [
  { key: "all",     labelKey: "filterAll" },
  { key: "iso",     labelKey: "filterIso" },
  { key: "welding", labelKey: "filterWelding" },
  { key: "ndt",     labelKey: "filterNdt" },
  { key: "api",     labelKey: "filterApi" },
] as const;

const CATEGORY_GROUPS: Record<string, string> = {
  welding:        "welding",
  ndt:            "ndt",
  api:            "api",
  isoSystems:     "iso",
  isoNdt2:        "iso",
  isoNdt3:        "iso",
  isoSpecialized: "iso",
};

export default function CatalogTabs({ courses, labels }: Props) {
  const [active, setActive] = useState<string>("all");

  const visible = courses.filter((c) =>
    active === "all" ? true : CATEGORY_GROUPS[c.category] === active
  );

  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {labels.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-3">
            {labels.title}
          </h2>
          <p className="text-gray-500 max-w-xl">{labels.subtitle}</p>
        </div>

        {/* Filter tabs — ISO first */}
        <div className="flex items-center overflow-x-auto pb-0 mb-10 border-b border-gray-200">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`shrink-0 px-5 py-3 text-sm font-bold border-b-2 transition-all duration-150 -mb-px ${
                active === key
                  ? "border-blue text-blue bg-white"
                  : "border-transparent text-gray-500 hover:text-navy bg-transparent"
              }`}
            >
              {labels[labelKey as keyof typeof labels]}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visible.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 border-l-4 border-l-blue p-5 flex flex-col gap-3 hover:border-blue hover:shadow-md transition-all duration-150"
            >
              <div className="flex-1">
                <h3 className="font-black text-navy text-base leading-tight mb-1">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500">{course.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[11px] font-bold text-navy">{course.level}</span>
                <span className="text-[11px] text-gray-400">&nbsp;·&nbsp;{course.duration}</span>
              </div>
              <a
                href="#contact"
                className="text-xs font-bold text-blue hover:text-navy transition-colors inline-flex items-center gap-1"
              >
                {labels.learnMore}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
