// MobileApp.tsx
import { motion } from 'motion/react';
import { CheckCircle, Fuel } from 'lucide-react';
import DownloadButton from './DownloadButton';


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
              <DownloadButton
                href="/download"
                size="md"
                variant="primary"
              >
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
                  <DownloadButton
                    size="sm"
                    variant="primary"
                    className="w-2/3 justify-center"
                  >
                    Order Now
                  </DownloadButton>
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