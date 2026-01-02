import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      ease: [0.16, 1, 0.3, 1], // ✔ Type-safe easing
    },
  },
};

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1680970422424-f63d2355adb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Oil refinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-900/80 to-blue-900/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">Leading Energy Solutions Worldwide</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-[14px] md:text-[20px] text-white mb-6 max-w-2xl"
          >
            Powering the Future with Sustainable Energy Solutions
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[12px] md:text-[17px] text-blue-100 mb-10 max-w-2xl"
          >
            Backed by over 8 years of industry experience, we specialize in oil
            spill cleanup and environmental remediation, delivering sustainable
            solutions that ensure safe, clean, and restored environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
              onClick={() => navigate("/services")}
            >
              Explore Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
              <Play size={20} />
              Watch Video
            </button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
          >
            {[
              { value: "8+", label: "Years of Experience" },
              { value: "Shell", label: "Strategic Partner (Rivers State)" },
              { value: "10+", label: "Sites Successfully Cleaned" },
            ].map(stat => (
              <motion.div key={stat.label} variants={itemVariants}>
                <div className="text-3xl font-semibold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[13px] md:text-[18px] text-blue-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
