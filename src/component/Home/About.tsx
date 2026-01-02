import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  "Safe and effective oil spill cleanup",
  "Modern remediation techniques",
  "Strong safety and compliance standards",
  "Environmental protection focus",
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

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758797849151-1725021be42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Oil platform"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-10 -right-4 bg-blue-600 text-white p-6 rounded-xl shadow-2xl max-w-xs"
            >
              <div className="text-4xl font-semibold mb-1">98%</div>
              <div className="text-blue-100">Client Satisfaction Rate</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4"
            >
              About Us
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-gray-900 mb-6">
              Leading Environmental Cleanup & Spill Response for Over 8 Years
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6"
            >
              For over 8 years, ORIAMS INTEGRATED has been a trusted provider of
              oil spill response and environmental remediation services,
              supporting safe operations and environmental protection across the
              Niger Delta. Our commitment to safety, innovation, and
              environmental responsibility defines our work.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 mb-8">
              We operate across the full lifecycle of oil spill response and
              environmental remediation, from emergency containment and cleanup
              to site restoration and monitoring. Our strong local expertise and
              trusted partnerships enable us to deliver real value to our
              clients and host communities.
            </motion.p>

            {/* Features */}
            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Learn More
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
