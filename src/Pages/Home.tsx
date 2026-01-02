import { About } from "@/component/Home/About";
import { Contact } from "@/component/Home/contacts";
import { Hero } from "@/component/Home/Hero";
import { Projects } from "@/component/Home/Projects";
import { Services } from "@/component/Home/Services";
import { motion } from "framer-motion";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const HomePageComponent = () => {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
};

export default HomePageComponent;
