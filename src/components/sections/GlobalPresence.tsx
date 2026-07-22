import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function GlobalPresence() {
  const t = useTranslations("globalPresence");

  const countries = [
    t("country1"),
    t("country2"),
    t("country3"),
    t("country4"),
    t("country5"),
  ];

  const localPoints = [t("local1"), t("local2"), t("local3"), t("local4")];

  const partners = [
    t("partner1"),
    t("partner2"),
    t("partner3"),
    t("partner4"),
    t("partner5"),
    t("partner6"),
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16 max-w-2xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            {t("intro")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-gray-200">

          {/* Regional Focus */}
          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
            <h3 className="text-lg font-black text-navy mb-3">{t("regionalTitle")}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{t("regionalDesc")}</p>
            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <span key={country} className="border border-gray-200 px-3 py-1.5 text-xs font-bold text-navy">
                  {country}
                </span>
              ))}
              <span className="border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-400">
                {t("countryMore")}
              </span>
            </div>
          </div>

          {/* Local Strength */}
          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
            <h3 className="text-lg font-black text-navy mb-3">{t("localTitle")}</h3>
            <ul className="flex flex-col gap-3">
              {localPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-bold text-navy">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Partnerships */}
          <div className="p-8 lg:p-10">
            <h3 className="text-lg font-black text-navy mb-3">{t("partnersTitle")}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{t("partnersDesc")}</p>
            <div className="flex flex-wrap gap-2">
              {partners.map((partner) => (
                <span key={partner} className="border border-gray-200 px-3 py-1.5 text-xs font-black text-blue uppercase tracking-widest">
                  {partner}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
