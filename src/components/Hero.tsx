// Hero.tsx
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadButton from "./DownloadButton";

const previewSlides = [
  {
    src: "/images/previews/ss-portrait.png",
    alt: "Servo app home screen in portrait orientation",
    label: "Find nearby stations",
  },
  {
    src: "/images/previews/s-portrait.png",
    alt: "Servo app splash screen in portrait orientation",
    label: "A smoother fuel run",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % previewSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide - 1 + previewSlides.length) % previewSlides.length,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % previewSlides.length);
  };

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


              <DownloadButton
                onClick={() => navigate("/download")}
                size="md"
                variant="dark"
              >
                Download App
              </DownloadButton>
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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-x-10 top-10 bottom-8 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-4 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-surface-dark/40">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={previewSlides[activeSlide].src}
                    src={previewSlides[activeSlide].src}
                    alt={previewSlides[activeSlide].alt}
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full w-full object-contain"
                  />
                </AnimatePresence>

                <button
                  type="button"
                  aria-label="Previous app preview"
                  onClick={showPreviousSlide}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-text-primary shadow-lg transition-transform hover:scale-105 dark:border-white/10 dark:bg-surface-dark/85 dark:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next app preview"
                  onClick={showNextSlide}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-text-primary shadow-lg transition-transform hover:scale-105 dark:border-white/10 dark:bg-surface-dark/85 dark:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/80 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-surface-dark/80">
                  {previewSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show preview ${index + 1}: ${slide.label}`}
                      aria-current={activeSlide === index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === index ? "w-6 bg-primary" : "w-2 bg-text-secondary/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-text-secondary dark:text-text-secondary-dark">
                {previewSlides[activeSlide].label}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;