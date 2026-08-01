import { motion } from "motion/react";
import { CheckCircle, Star, Zap, Smartphone, Fuel, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Apple SVG Icon
const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

// Google Play SVG Icon
const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

// Hero Section
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-10 pt-16 sm:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4 mx-auto lg:mx-0"
            >
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-primary">
                #1 Fuel Delivery Service
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary dark:text-text-primary-dark leading-tight mb-4">
              Fuel Delivered to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Doorstep
              </span>
            </h1>

            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark mb-6 max-w-lg mx-auto lg:mx-0">
              Never queue at a filling station again. Order petrol, diesel, or
              cooking gas through our mobile app and have it delivered safely
              and quickly.
            </p>

            {/* Mobile App Download Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark rounded-xl hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark transition-colors"
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[9px] font-medium opacity-80">
                    Download on the
                  </div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.button
                onClick={() => navigate("/download")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark rounded-xl hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark transition-colors"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-[9px] font-medium opacity-80">
                    Get it on
                  </div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-primary/20 border-2 border-white dark:border-surface-dark flex items-center justify-center text-[10px] font-bold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-text-secondary dark:text-text-secondary-dark">
                  Trusted by 10,000+ customers
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Mobile App Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative aspect-[9/16] max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] w-full">
              {/* Phone Frame */}
              <div className="w-full h-full bg-gradient-to-b from-primary to-accent rounded-3xl p-4 shadow-2xl">
                <div className="bg-white dark:bg-surface-dark rounded-2xl h-full p-3 sm:p-4 flex flex-col">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <Fuel className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-text-primary dark:text-text-primary-dark">
                        Servo
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-text-secondary" />
                      <div className="w-1 h-1 rounded-full bg-text-secondary" />
                      <div className="w-1 h-1 rounded-full bg-text-secondary" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    {/* Search Bar */}
                    <div className="h-6 sm:h-7 w-full bg-surface-secondary rounded-lg flex items-center px-2 sm:px-3">
                      <div className="w-2 h-2 rounded-full bg-text-secondary/30" />
                      <div className="ml-1.5 sm:ml-2 h-1.5 w-12 sm:w-16 bg-text-secondary/20 rounded" />
                    </div>

                    {/* Order Card */}
                    <div className="bg-primary/5 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-text-secondary/20 rounded" />
                          <div className="h-2 sm:h-2.5 w-16 sm:w-24 bg-text-secondary/30 rounded mt-0.5 sm:mt-1" />
                        </div>
                        <div className="h-4 sm:h-5 w-10 sm:w-14 bg-primary rounded-lg" />
                      </div>
                    </div>

                    {/* Fuel Options */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex-1 h-8 sm:h-10 bg-surface-secondary rounded-lg" />
                      ))}
                    </div>

                    {/* Order Button */}
                    <div className="h-8 sm:h-10 w-full bg-primary rounded-lg" />
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex justify-around pt-2 sm:pt-3 border-t border-border dark:border-border-dark">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/20" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/20" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/20" />
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-100 dark:bg-green-900/30 rounded-xl shadow-lg px-2 py-1 sm:px-3 sm:py-1.5 border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-400" />
                  <span className="text-[8px] sm:text-[10px] font-semibold text-green-700 dark:text-green-300">
                    Available
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Left */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-white dark:bg-surface-dark rounded-xl shadow-lg px-2 py-1 sm:px-3 sm:py-1.5 border border-border dark:border-border-dark"
              >
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  <span className="text-[8px] sm:text-[10px] font-semibold text-text-primary dark:text-text-primary-dark">
                    Order Now
                  </span>
                </div>
              </motion.div>

              {/* Delivery Truck Badge - Bottom Right */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-1/3 -right-2 sm:bottom-1/3 sm:-right-3 bg-white dark:bg-surface-dark rounded-xl shadow-lg px-2 py-1 sm:px-3 sm:py-1.5 border border-border dark:border-border-dark hidden sm:block"
              >
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Truck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  <span className="text-[8px] sm:text-[10px] font-semibold text-text-primary dark:text-text-primary-dark">
                    Fast Delivery
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;