"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const [openCard, setOpenCard] = useState<string | null>(CARDS[0].key);

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
              style={{ objectFit: "cover", objectPosition: "center" }}
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

        {/* Disclaimer */}
        <p className="text-xs text-navy leading-relaxed max-w-3xl">
          {t("disclaimer")}
        </p>

      </div>
    </section>
  );
}
