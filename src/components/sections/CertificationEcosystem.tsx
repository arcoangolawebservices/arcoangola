import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CertificationEcosystem() {
  const t = useTranslations("certEcosystem");

  const items = [
    { title: t("item1Title"), desc: t("item1Desc"), anchor: "#advanced-ndt", image: "/assets/img-cert-engineering-excellence.png" },
    { title: t("item2Title"), desc: t("item2Desc"), anchor: "#programmes", image: "/assets/img-cert-welding-coating.png" },
    { title: t("item3Title"), desc: t("item3Desc"), anchor: "#programmes", image: "/assets/img-cert-iso-management.png" },
    { title: t("item4Title"), desc: t("item4Desc"), anchor: "#hse-training", image: "/assets/img-cert-hse-professional.png" },
    { title: t("item5Title"), desc: t("item5Desc"), anchor: "#courses", image: "/assets/img-cert-asset-integrity.png" },
    { title: t("item6Title"), desc: t("item6Desc"), anchor: "#corporate", image: "/assets/img-cert-workforce-development.png" },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-gray-50 border-b border-gray-100">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ title, desc, anchor, image }, i) => (
            <a
              key={title}
              href={anchor}
              className="group flex flex-col border border-gray-200 bg-white overflow-hidden hover:border-blue transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 bg-white text-blue font-black text-sm group-hover:bg-blue group-hover:text-white transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div>
                  <h3 className="text-base font-black text-navy mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-black text-blue uppercase tracking-widest">
                  {t("learnMore")}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
