import {
  Droplet,
  Factory,
  Fuel,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const services = [
  {
    icon: Droplet,
    title: "Oil Spill Response & Cleanup",
    description:
      "Rapid and effective response to oil spills, including containment, recovery, and site cleanup to minimize environmental impact.",
  },
  {
    icon: Factory,
    title: "Environmental Remediation",
    description:
      "Comprehensive remediation of contaminated land and water using approved techniques to restore affected environments.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Regulatory Compliance",
    description:
      "Strict adherence to industry safety standards and environmental regulations in all cleanup and remediation operations.",
  },
  {
    icon: Globe,
    title: "Onshore & Offshore Operations",
    description:
      "Specialized cleanup and remediation services for both onshore and offshore spill sites across the Niger Delta region.",
  },
  {
    icon: Users,
    title: "Technical Support & Consulting",
    description:
      "Professional advisory and technical support for spill prevention planning, risk assessment, and environmental management.",
  },
  {
    icon: Fuel,
    title: "Waste Management & Disposal",
    description:
      "Safe handling, treatment, and disposal of oil-contaminated waste in line with environmental best practices.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4"
          >
            Our Services
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-gray-900 mb-4">
            Comprehensive Environmental & Spill Response Solutions{" "}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            We deliver complete oil spill cleanup and environmental remediation
            services with a strong focus on safety and sustainability.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon
                    className="text-blue-600 group-hover:text-white transition-colors"
                    size={28}
                  />
                </div>

                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
