import { Services } from "@/component/Home/Services";
import { FeaturedServices } from "@/component/Services/FeaturedService";
import { ProcessSection } from "@/component/Services/ProcessSelector";
import { ServicesHero } from "@/component/Services/ServiceHero";
import { ServiceOfferings } from "@/component/Services/ServiceOffer";

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceOfferings />
      <ProcessSection />
      <FeaturedServices />
      <Services />
    </>
  );
}
