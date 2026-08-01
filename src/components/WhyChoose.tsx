import { motion} from 'motion/react';
import {
  Shield,
  Truck,
  CreditCard,
  Users,
} from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Fuel Stations',
      description: 'All our partner stations are vetted for quality and reliability.',
      image: '🏪',
    },
    {
      icon: Truck,
      title: 'Real-time Order Tracking',
      description: 'Track your delivery in real-time from dispatch to arrival.',
      image: '📍',
    },
    {
      icon: CreditCard,
      title: 'Secure Online Payments',
      description: 'Pay with confidence using Paystack and Flutterwave integration.',
      image: '💳',
    },
    {
      icon: Users,
      title: 'Professional Delivery Team',
      description: 'Our trained delivery personnel handle your fuel with care.',
      image: '👥',
    },
  ];

  return (
    <section id="why-choose" className="py-20 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            Why Choose Servo?
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            We're redefining fuel delivery with technology and trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-surface dark:bg-surface-dark rounded-2xl border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;