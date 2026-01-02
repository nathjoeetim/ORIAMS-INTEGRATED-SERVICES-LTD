import { AboutCTA } from "@/component/About/AboutCTA";
import { AboutHero } from "@/component/About/AboutHero";
import { Achievements } from "@/component/About/Achievement";
// import { CompanyHistory } from "@/component/About/CompanyHistory";
import { Leadership } from "@/component/About/Leadership";
import { MissionVision } from "@/component/About/MissionVision";
import { Sustainability } from "@/component/About/Sustainability";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <CompanyHistory /> */}
      <MissionVision />
      <Leadership />
      <Achievements />
      <Sustainability />
      <AboutCTA />
    </>
  );
}
