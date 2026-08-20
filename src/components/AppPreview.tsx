// MobileApp.tsx
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import DownloadButton from "./DownloadButton";

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
              Order fuel on the go with our mobile app. Available for iOS and
              Android.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">
                  Easy order placement
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">
                  Real-time delivery tracking
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">
                  Secure in-app payments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-primary dark:text-text-primary-dark">
                  Order history and receipts
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <DownloadButton href="/download" size="md" variant="primary">
                Download App
              </DownloadButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className=" w-full rounded-3xl p-5 shadow-2xl">
              <img
                src="/images/servo-app-preview.png"
                alt="Servo App Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
