
import { motion } from "motion/react";
import {
  Smartphone,
} from "lucide-react";

// Apple SVG Icon
const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

// Google Play SVG Icon
const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const Download = () => {


  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Download App
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            Get the Servo App
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Download our app from the App Store or Google Play Store to get
            started with Servo. Enjoy seamless fuel delivery and more at your
            fingertips.
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-6 py-4 bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark rounded-2xl hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark transition-colors shadow-lg min-w-[200px]"
          >
            <AppleIcon />
            <div className="text-left">
              <div className="text-xs font-medium opacity-80">
                Download on the
              </div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-6 py-4 bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark rounded-2xl hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark transition-colors shadow-lg min-w-[200px]"
          >
            <GooglePlayIcon />
            <div className="text-left">
              <div className="text-xs font-medium opacity-80">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </motion.a>
        </motion.div>


      </div>
    </div>
  );
};

export default Download;
