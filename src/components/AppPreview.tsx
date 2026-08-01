import { motion } from 'motion/react';
import {
  CheckCircle,
  Fuel,
} from 'lucide-react';

// Apple SVG Icon
const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

// Google Play SVG Icon
const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

const MobileApp = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
              Get the Servo App
            </h2>
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-6">
              Order fuel on the go with our mobile app. Available for iOS and Android.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">Easy order placement</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">Real-time delivery tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">Secure in-app payments</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">Order history and receipts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {/* App Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-5 py-2.5 bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark rounded-xl hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark transition-colors"
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-5 py-2.5 bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark rounded-xl hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark transition-colors"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="aspect-[9/16] max-w-[280px] w-full bg-gradient-to-b from-primary to-accent rounded-3xl p-5 shadow-2xl">
              <div className="bg-white dark:bg-surface-dark rounded-2xl h-full p-4 flex flex-col">
                {/* App Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Fuel className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                  </div>
                </div>

                {/* App Content */}
                <div className="flex-1 space-y-3">
                  <div className="h-4 w-3/4 bg-surface-secondary rounded" />
                  <div className="h-20 w-full bg-surface-secondary rounded-lg" />
                  <div className="h-12 w-full bg-surface-secondary rounded-lg" />
                  <div className="h-12 w-full bg-surface-secondary rounded-lg" />
                  <div className="h-12 w-2/3 bg-primary rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;