import { motion} from 'motion/react';
import {
  MapPin,
  Truck,
  Fuel,
  CreditCard,
} from 'lucide-react';


const HowItWorks = () => {
  const steps = [
    {
      icon: Fuel,
      title: 'Choose Fuel',
      description: 'Select the type of fuel you need - petrol, diesel, or cooking gas.',
    },
    {
      icon: MapPin,
      title: 'Select Quantity & Location',
      description: 'Specify the amount needed and your delivery address.',
    },
    {
      icon: CreditCard,
      title: 'Secure Online Payment',
      description: 'Pay securely using Paystack, Flutterwave, or bank transfer.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your fuel delivered quickly to your doorstep.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-10 bg-surface-secondary dark:bg-surface-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            How Servo Works
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Get your fuel delivered in four simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div className="bg-surface dark:bg-surface-dark rounded-2xl p-6 border border-border dark:border-border-dark shadow-sm">
                    <div className="flex items-center gap-3 md:justify-end">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary dark:text-text-secondary-dark text-sm">
                          {step.description}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 md:text-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;