import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Certificates from "@/components/sections/Certificates";
import CertificationHighlights from "@/components/sections/CertificationHighlights";
import CatalogTabs from "@/components/sections/CatalogTabs";
import NdtServices from "@/components/sections/NdtServices";
import DualAudience from "@/components/sections/DualAudience";
import PremiumTracks from "@/components/sections/PremiumTracks";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CertBodiesStrip from "@/components/sections/CertBodiesStrip";

type Props = { params: Promise<{ locale: string }> };

const COURSE_KEYS = [
  "cswip30","cswip31","cswip32","bgasGrade2","bgasGrade1",
  "asntVt","asntMt","asntPt","asntUt","asntRt","asntRtfi",
  "api653","api570","api510",
  "iso9001","iso14001","iso45001",
  "iso9712WiL2","iso9712MtL2","iso9712VtL2","iso9712RtfiL2",
  "iso9712PtL2","iso9712UtL2","iso9712RtL2","iso9712PautL2","iso9712TofdL2",
  "iso9712WiL3","iso9712BasicL3","iso9712MtL3","iso9712VtL3",
  "iso9712RtfiL3","iso9712PtL3","iso9712UtL3","iso9712RtL3",
  "iso9712PautL3","iso9712TofdL3",
  "autData","pautData","tofdData","eddyCurrentWelds",
  "eddyCurrentTube","acfm","vtSpecialized",
] as const;

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });

  const courses = COURSE_KEYS.map((key) => ({
    id: key,
    title: t(`courses.${key}.title` as Parameters<typeof t>[0]),
    subtitle: t(`courses.${key}.subtitle` as Parameters<typeof t>[0]),
    level: t(`courses.${key}.level` as Parameters<typeof t>[0]),
    category: t(`courses.${key}.category` as Parameters<typeof t>[0]),
  }));

  const catalogLabels = {
    filterAll: t("filterAll"),
    filterWelding: t("filterWelding"),
    filterNdt: t("filterNdt"),
    filterApi: t("filterApi"),
    filterIso: t("filterIso"),
    coursesLabel: t("coursesLabel"),
    isoSubgroup1: t("isoSubgroup1"),
    isoSubgroup2: t("isoSubgroup2"),
    isoSubgroup3: t("isoSubgroup3"),
    isoSubgroup4: t("isoSubgroup4"),
    level: t("level"),
    learnMore: t("learnMore"),
    badge: t("badge"),
    title: t("title"),
    subtitle: t("subtitle"),
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CertBodiesStrip />

        <section id="accreditations">
          <Certificates />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="programmes">
          <CertificationHighlights />
        </section>

        <section id="courses">
          <CatalogTabs courses={courses} labels={catalogLabels} />
        </section>

        <section id="ndt-services">
          <NdtServices />
        </section>

        <section id="corporate">
          <DualAudience />
        </section>

        <section id="premium">
          <PremiumTracks />
        </section>

        <section id="why-us">
          <WhyChooseUs />
        </section>
      </main>

      <Footer />
    </>
  );
}
