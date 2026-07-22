"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";

type CardDef = {
  key: string;
  img: string;
  imgAlt: string;
  titleKey: string;
  descKey: string;
  listLabelKey: "programsLabel" | "prepAreasLabel";
  listKeys: string[];
  suitableKeys: string[];
};

const CARDS: CardDef[] = [
  {
    key: "nebosh",
    img: "/assets/img-hse-nebosh.png",
    imgAlt: "NEBOSH occupational health and safety training",
    titleKey: "card1Title",
    descKey: "card1Desc",
    listLabelKey: "programsLabel",
    listKeys: ["card1Program1", "card1Program2", "card1Program3", "card1Program4", "card1Program5", "card1Program6"],
    suitableKeys: ["card1Suitable1", "card1Suitable2", "card1Suitable3", "card1Suitable4", "card1Suitable5", "card1Suitable6"],
  },
  {
    key: "iosh",
    img: "/assets/img-hse-iosh.png",
    imgAlt: "IOSH workplace safety training",
    titleKey: "card2Title",
    descKey: "card2Desc",
    listLabelKey: "programsLabel",
    listKeys: ["card2Program1", "card2Program2", "card2Program3", "card2Program4"],
    suitableKeys: ["card2Suitable1", "card2Suitable2", "card2Suitable3", "card2Suitable4", "card2Suitable5", "card2Suitable6"],
  },
  {
    key: "osha",
    img: "/assets/img-hse-osha.png",
    imgAlt: "OSHA industrial and construction safety training",
    titleKey: "card3Title",
    descKey: "card3Desc",
    listLabelKey: "programsLabel",
    listKeys: ["card3Program1", "card3Program2", "card3Program3", "card3Program4", "card3Program5", "card3Program6", "card3Program7", "card3Program8"],
    suitableKeys: ["card3Suitable1", "card3Suitable2", "card3Suitable3", "card3Suitable4", "card3Suitable5", "card3Suitable6"],
  },
  {
    key: "csp",
    img: "/assets/img-hse-csp.png",
    imgAlt: "CSP certified safety professional preparation",
    titleKey: "card4Title",
    descKey: "card4Desc",
    listLabelKey: "prepAreasLabel",
    listKeys: ["card4Program1", "card4Program2", "card4Program3", "card4Program4", "card4Program5", "card4Program6", "card4Program7", "card4Program8", "card4Program9"],
    suitableKeys: ["card4Suitable1", "card4Suitable2", "card4Suitable3", "card4Suitable4", "card4Suitable5"],
  },
];

const WHY_KEYS = ["why1", "why2", "why3", "why4", "why5", "why6", "why7", "why8"];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type Labels = {
  t: ReturnType<typeof useTranslations<"hseTraining">>;
};

function HseAccordionCard({ card, isOpen, onToggle, t }: { card: CardDef; isOpen: boolean; onToggle: () => void } & Labels) {
  const panelId = `hse-panel-${card.key}`;

  return (
    <div className="border border-gray-200 bg-white flex flex-col overflow-hidden">
      <div className="relative h-48 sm:h-56 shrink-0">
        <Image src={card.img} alt={card.imgAlt} fill style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full text-left p-6 lg:p-8 flex items-start justify-between gap-4"
      >
        <div>
          <h3 className="text-xl font-black text-navy leading-tight">{t(card.titleKey as Parameters<typeof t>[0])}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mt-2">{t(card.descKey as Parameters<typeof t>[0])}</p>
        </div>
        <svg
          className={`w-4 h-4 text-blue shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div id={panelId} className="px-6 lg:px-8 pb-6 lg:pb-8 pt-6 border-t border-gray-100 grid sm:grid-cols-2 gap-6">
          <div>
            <span className="block text-xs font-black uppercase tracking-widest text-blue mb-3">
              {t(card.listLabelKey)}
            </span>
            <ul className="space-y-2">
              {card.listKeys.map((key) => (
                <li key={key} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                  <CheckIcon />
                  {t(key as Parameters<typeof t>[0])}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block text-xs font-black uppercase tracking-widest text-blue mb-3">
              {t("suitableLabel")}
            </span>
            <ul className="space-y-2">
              {card.suitableKeys.map((key) => (
                <li key={key} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                  <CheckIcon />
                  {t(key as Parameters<typeof t>[0])}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HseTraining() {
  const t = useTranslations("hseTraining");
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="relative h-56 sm:h-72 lg:h-80 overflow-hidden mb-6 sm:mb-8 lg:mt-20">
            <Image
              src="/assets/img-hse-hero.png"
              alt="HSE training session for industrial safety professionals"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Accordion grid — desktop 2x2, mobile single column */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-14 lg:mb-20">
          {CARDS.map((card) => (
            <HseAccordionCard
              key={card.key}
              card={card}
              t={t}
              isOpen={openCard === card.key}
              onToggle={() => setOpenCard((prev) => (prev === card.key ? null : card.key))}
            />
          ))}
        </div>

        {/* Why Choose ARCO ANGOLA — feature grid */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-black text-navy mb-8 lg:mb-10">
            {t("whyHeading")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {WHY_KEYS.map((key) => (
              <div key={key} className="border border-gray-200 px-5 py-5 flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm font-black text-navy leading-snug">
                  {t(key as Parameters<typeof t>[0])}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <a
            href={whatsAppLink(t("waMessage"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy hover:bg-blue text-white font-bold text-sm transition-colors"
          >
            <WhatsAppIcon />
            {t("cta")}
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-navy leading-relaxed max-w-3xl">
          {t("disclaimer")}
        </p>

      </div>
    </section>
  );
}
