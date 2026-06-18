const IDENTITY = [
  {
    label: "International Training & Certification Provider",
    desc: "Delivering globally recognised certification programmes across NDT, Welding, API and ISO disciplines.",
  },
  {
    label: "QA/QC & NDT Inspection Authority",
    desc: "Field inspection services carried out by qualified, accredited personnel to international standards.",
  },
  {
    label: "Asset Integrity & Engineering Support",
    desc: "Supporting operators and EPC contractors with structured quality assurance and integrity solutions.",
  },
] as const;

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">

          {/* Left: text */}
          <div>
            <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
              About Arco Angola
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-8 leading-tight">
              Who We Are
            </h2>

            <div className="flex flex-col gap-5 text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>
                Arco Angola is a competency-driven training and inspection organisation specialising in QA/QC Engineering, Non-Destructive Testing, Asset Integrity and International Certification Programmes. Based in Angola, we serve the oil &amp; gas, construction and industrial sectors across the region.
              </p>
              <p>
                We deliver structured training and certified competence aligned with global engineering requirements — the same standards demanded on international worksites and recognised by operators and employers worldwide. As Angola&apos;s first globally accredited industrial certification centre, we exist to close the gap between local workforce capability and international industry expectations.
              </p>
            </div>
          </div>

          {/* Right: identity pillars */}
          <div className="mt-12 lg:mt-2 flex flex-col gap-0 border border-gray-200">
            <div className="px-6 py-4 bg-navy border-b border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                Our Identity
              </span>
            </div>
            {IDENTITY.map(({ label, desc }, i) => (
              <div
                key={label}
                className={`px-6 py-6 flex gap-4 items-start ${i < IDENTITY.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="w-1 shrink-0 h-full self-stretch bg-blue mt-1 min-h-[1.5rem]" />
                <div>
                  <p className="text-sm font-black text-navy leading-snug mb-1">{label}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
