import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MissionStatement() {
  const t = useTranslations("mission");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left — content block, same ratio as the flag */}
          <div className="aspect-[3/2] border border-gray-100 bg-gray-50 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">

            <div className="w-10 h-0.5 bg-blue" />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy leading-tight">
              {t("tagline1")}
              {" "}<span className="text-blue">{t("tagline2")}</span>
              {" "}{t("tagline3")}
            </h2>

            <div className="space-y-3 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 leading-relaxed">
                {t("statement")}
              </p>
              <p className="text-sm font-bold text-navy leading-relaxed">
                <span className="text-blue">ARCO ANGOLA</span>{" "}{t("body")}
              </p>
            </div>

          </div>

          {/* Right — flag, no shadow */}
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/assets/flag-angola.png"
              alt="Flag of Angola"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
