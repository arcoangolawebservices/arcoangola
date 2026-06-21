import { useTranslations } from "next-intl";

export default function ClosingBanner() {
  const t = useTranslations("closing");

  return (
    <section className="bg-navy py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-black text-white uppercase tracking-widest mb-5">
          {t("headline")}
        </p>
        <p className="text-lg font-bold text-white/80 leading-relaxed mb-5 max-w-2xl">
          {t("body")}
        </p>
        <p className="text-lg font-black text-white uppercase tracking-widest">
          {t("tagline")}
        </p>
      </div>
    </section>
  );
}
