const REASONS = [
  {
    title: "International Standard Training",
    desc: "All programmes are structured around globally recognised standards including TWI-CSWIP, ASNT, API and ISO — the same qualifications demanded on major projects worldwide.",
  },
  {
    title: "Competency-Based Certification",
    desc: "We measure what candidates can do, not just what they know. Every certification pathway is built around demonstrated competence and practical performance outcomes.",
  },
  {
    title: "Industry-Experienced Instructors",
    desc: "Our instructors bring real-world field experience from oil & gas, construction and industrial operations — not just classroom theory, but proven applied expertise.",
  },
  {
    title: "Project-Driven QA/QC Expertise",
    desc: "Our QA/QC and inspection training is developed directly from project requirements and client specifications, ensuring graduates are ready from day one on the job.",
  },
] as const;

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
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            Why Arco Angola
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-white/45 leading-relaxed">
            We are built from the ground up to meet the specific demands of Angola&apos;s industrial sector — with global standards, local delivery and measurable outcomes.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 gap-0 border border-white/10">
          {REASONS.map(({ title, desc }, i) => {
            const isBottomRow = i >= 2;
            const isRightCol = i % 2 === 1;
            return (
              <div
                key={title}
                className={[
                  "px-8 py-8 flex gap-4",
                  !isBottomRow ? "border-b border-white/10" : "",
                  !isRightCol ? "sm:border-r border-white/10" : "",
                ].join(" ")}
              >
                <CheckIcon />
                <div>
                  <h3 className="text-sm font-black text-white mb-2 leading-snug">{title}</h3>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
