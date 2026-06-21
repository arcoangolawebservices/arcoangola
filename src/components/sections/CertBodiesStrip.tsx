import { useTranslations } from "next-intl";

export default function CertBodiesStrip() {
  const t = useTranslations("certStrip");

  const programs = [
    { name: t("cswip"),  body: t("cswipBody") },
    { name: t("bgas"),   body: t("bgasBody")  },
    { name: t("asnt"),   body: t("asntBody")  },
    { name: t("iso"),    body: t("isoBody")   },
    { name: t("api"),    body: t("apiBody")   },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">

        <p className="text-[10px] font-bold uppercase tracking-widest text-blue mb-4">
          {t("badge")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {programs.map((p, i) => (
            <div key={p.name} className={`flex items-start gap-3 border-l-2 border-blue pl-3 ${i === programs.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
              <div>
                <p className="text-xs font-black text-navy leading-snug">{p.name}</p>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5 leading-tight">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
