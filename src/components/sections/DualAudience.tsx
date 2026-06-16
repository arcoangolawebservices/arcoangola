import { useTranslations } from "next-intl";
import Image from "next/image";

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CheckIconWhite = () => (
  <svg className="w-4 h-4 shrink-0 text-white/60 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function DualAudience() {
  const t = useTranslations("dualAudience");

  const individualPoints = [
    t("individual.point1"),
    t("individual.point2"),
    t("individual.point3"),
    t("individual.point4"),
  ];

  const corporatePoints = [
    t("corporate.point1"),
    t("corporate.point2"),
    t("corporate.point3"),
    t("corporate.point4"),
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy">
            {t("title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-gray-200">
          {/* Individual — white panel */}
          <div className="flex flex-col overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200">
            <Image
              src="/assets/inspector.webp"
              alt="Certified industrial professional"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="p-8 lg:p-12 flex flex-col gap-6 flex-1">
            <span className="self-start text-xs font-black uppercase tracking-widest text-blue">
              {t("individual.tag")}
            </span>
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-navy mb-3">
                {t("individual.title")}
              </h3>
              <p className="text-gray-500 leading-relaxed">{t("individual.description")}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {individualPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-navy">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#courses"
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-blue text-white text-sm font-bold transition-colors"
            >
              {t("individual.cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            </div>
          </div>

          {/* Corporate — navy panel */}
          <div className="flex flex-col overflow-hidden">
            <Image
              src="/assets/corporate.webp"
              alt="Corporate training session"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          <div className="p-8 lg:p-12 flex flex-col gap-6 bg-navy flex-1">
            <span className="self-start text-xs font-black uppercase tracking-widest text-white/50">
              {t("corporate.tag")}
            </span>
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
                {t("corporate.title")}
              </h3>
              <p className="text-white/60 leading-relaxed">{t("corporate.description")}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {corporatePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white">
                  <CheckIconWhite />
                  {point}
                </li>
              ))}
            </ul>

            {/* ISO Highlight */}
            <div className="border-l-4 border-blue bg-white/5 p-4 text-sm text-white/80 leading-relaxed">
              <span className="font-black text-white block mb-1">★ ISO Lead Auditor</span>
              {t("corporate.isoHighlight")}
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-white hover:text-navy text-white text-sm font-black transition-colors"
            >
              {t("corporate.cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
