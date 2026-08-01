import { motion} from 'motion/react';
import {
  CheckCircle,

  Phone,
  Truck,
  Building,
} from 'lucide-react';

const Metrics = () => {
  const metrics = [
    { value: '10,000+', label: 'Deliveries', icon: Truck },
    { value: '500+', label: 'Partner Stations', icon: Building },
    { value: '99.9%', label: 'Delivery Success', icon: CheckCircle },
    { value: '24/7', label: 'Customer Support', icon: Phone },
  ];

  return (
    <section className="py-20 bg-surface-secondary dark:bg-surface-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-text-primary dark:text-text-primary-dark">
                {metric.value}
              </div>
              <div className="text-sm text-text-secondary dark:text-text-secondary-dark">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Metrics;