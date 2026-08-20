// Download.tsx
import { motion } from "motion/react";
import { Smartphone, CheckCircle,} from "lucide-react";
import DownloadButton from "../components/DownloadButton";

const DownloadPage = () => {
  const handleDownloadClick = () => {
    window.open("https://mega.nz/file/X4hSDA7J#7gvPVwpY0HzAgQvnii6LskKawJ3pL36YpjKmHGWVKDA", "_blank");
  };

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
              Android APK
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            Download the Servo App
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Download the Servo Android APK directly and start ordering fuel
            delivery instantly. Fast, secure, and easy to install.
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-16"
        >
          <DownloadButton
            onClick={handleDownloadClick}
            size="lg"
            variant="primary"
            className="min-w-[280px] justify-center"
          >
            <div className="flex items-center gap-3">
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Download</div>
                <div className="text-lg font-semibold">Servo APK</div>
              </div>
            </div>
          </DownloadButton>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Android APK - Direct Download</span>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-70">
              <span>Version 1.0.0</span>
              <span className="w-1 h-1 rounded-full bg-text-secondary" />
              <span>Requires Android 7.0+</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Installation Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark text-center mb-6">
            How to Install
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 text-center border border-border dark:border-border-dark">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                Download APK
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                Click the download button above to get the APK file
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 text-center border border-border dark:border-border-dark">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                Enable Unknown Sources
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                Go to Settings &gt; Security &gt; Enable "Install from Unknown Sources"
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 text-center border border-border dark:border-border-dark">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                Install & Launch
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                Open the downloaded APK and tap "Install" to get started
              </p>
            </div>
          </div>
        </motion.div>



        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-xl p-4 text-center">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              ⚠️ This app is not available on Google Play Store. Please ensure you
              trust the source before installing.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadPage;