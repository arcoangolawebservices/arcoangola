import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PremiumTracks() {
  const t = useTranslations("premium");

  const tracks = [
    { key: "cogip", icon: "⚙️", img: "/assets/welder.webp", imgW: 1200, imgH: 801, imgAlt: "Professional welder in training" },
    { key: "cmqip", icon: "🔩", img: "/assets/inspector.webp", imgW: 1200, imgH: 800, imgAlt: "Industrial inspector on site" },
  ] as const;



  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-3">
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-xl">{t("subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tracks.map(({ key, icon, img, imgW, imgH, imgAlt }, i) => (
            <div
              key={key}
              className={`border-l-4 border border-gray-200 flex flex-col overflow-hidden ${
                i === 0 ? "border-l-navy" : "border-l-blue"
              }`}
            >
              {/* Full photo — no crop */}
              <Image
                src={img}
                alt={imgAlt}
                width={imgW}
                height={imgH}
                style={{ width: "100%", height: "auto" }}
              />

              <div className="p-6 lg:p-10 flex flex-col gap-5 flex-1">
                {/* Tag */}
                <span className="self-start text-xs font-bold uppercase tracking-widest text-gray-400">
                  {t(`${key}.tag` as Parameters<typeof t>[0])}
                </span>

                <div>
                  <div className="text-4xl mb-3">{icon}</div>
                  <div className="text-xs font-black text-blue uppercase tracking-widest mb-1">
                    {t(`${key}.title` as Parameters<typeof t>[0])}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-navy leading-tight">
                    {t(`${key}.fullName` as Parameters<typeof t>[0])}
                  </h3>
                </div>

                <p className="text-gray-500 leading-relaxed flex-1">
                  {t(`${key}.description` as Parameters<typeof t>[0])}
                </p>

                <a
                  href="#courses"
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-blue text-white text-sm font-bold transition-colors"
                >
                  {t(`${key}.cta` as Parameters<typeof t>[0])}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
