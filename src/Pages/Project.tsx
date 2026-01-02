import { ProjectHero } from "@/component/Project/ProjectHero";
import { FeaturedServices } from "@/component/Services/FeaturedService";
import { ProcessSection } from "@/component/Services/ProcessSelector";

const ProjectPageComponent = () => {
  return (
    <>
      <ProjectHero />
      <FeaturedServices />
      <ProcessSection />
    </>
  );
};

export default ProjectPageComponent;
