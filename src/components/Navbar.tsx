import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, Fuel, X} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-surface-dark/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-xl" />
            </div>
            <span className="ml-2 text-xl font-bold text-text-primary dark:text-text-primary-dark">
              Servo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors text-sm font-semibold">
              Order Fuel
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-secondary dark:hover:bg-surface-secondary-dark transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-surface-dark border-t border-border dark:border-border-dark"
        >
          <div className="px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="block text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="block text-text-secondary dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <button className="w-full px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors text-sm font-semibold">
              Order Fuel
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
export default Navbar;