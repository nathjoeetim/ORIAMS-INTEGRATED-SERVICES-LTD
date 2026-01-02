import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { NavLink } from "react-router-dom";

const headerVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              ORIAMS INTEGRATED SERVICES LTD
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {["Home", "Services", "About", "Projects", "Blog"].map(item => {
              const path =
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={path}
                  className={({ isActive }) =>
                    `transition text-gray-700 hover:text-blue-600 ${
                      isActive ? "text-blue-600 font-semibold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          {/* <button className="hidden md:block px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button> */}

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(p => !p)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {["Home", "Services", "About", "Projects"].map(item => {
                const path =
                  item.toLowerCase() === "home"
                    ? "/"
                    : `/${item.toLowerCase()}`;
                return (
                  <NavLink
                    key={item}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition py-2"
                  >
                    {item}
                  </NavLink>
                );
              })}

              {/* <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-left"
              >
                Get Started
              </motion.button> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
