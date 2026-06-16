import { useTranslations } from "next-intl";

const isoSystems = [
  { code: "ISO 9001:2015", name: "Quality Management System", key: "iso9001" },
  { code: "ISO 14001:2015", name: "Environmental Management System", key: "iso14001" },
  { code: "ISO 45001:2018", name: "Occupational Health & Safety Management System", key: "iso45001" },
] as const;

export default function IsoHighlight() {
  const t = useTranslations("dualAudience");

  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left — text */}
          <div className="mb-12 lg:mb-0">
            <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
              ISO Lead Auditor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6">
              Compliance for Individuals &amp; Organisations
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              {t("corporate.isoHighlight")}
            </p>
            <div className="flex flex-col gap-3">
              {(["point1","point2","point3","point4"] as const).map((p) => (
                <div key={p} className="flex items-start gap-3 text-sm text-navy">
                  <svg className="w-4 h-4 shrink-0 text-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t(`corporate.${p}`)}
                </div>
              ))}
            </div>
          </div>

          {/* Right — ISO cards */}
          <div className="flex flex-col gap-0 border border-gray-200">
            {isoSystems.map(({ code, name }, i) => (
              <div
                key={code}
                className={`p-6 lg:p-8 flex flex-col gap-2 border-l-4 border-l-blue ${
                  i < isoSystems.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="text-xs font-black text-blue uppercase tracking-widest">
                  Lead Auditor
                </span>
                <h3 className="text-xl font-black text-navy">{code}</h3>
                <p className="text-sm text-gray-500">{name}</p>
                <div className="flex gap-4 mt-1">
                  <span className="text-[11px] font-bold text-blue uppercase tracking-wide">Individual</span>
                  <span className="text-[11px] font-bold text-navy uppercase tracking-wide">Corporate</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
