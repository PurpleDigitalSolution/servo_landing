import { motion} from 'motion/react';
import {
  ArrowRight,
  Fuel,
  Droplets,
  Flame,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: 'Petrol Delivery',
      description: 'Premium quality petrol delivered to your doorstep. Perfect for cars, generators, and businesses.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Droplets,
      title: 'Diesel Delivery',
      description: 'Reliable diesel supply for industrial equipment, generators, and heavy machinery.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Fuel,
      title: 'Cooking Gas',
      description: 'Clean and safe cooking gas delivered to your home. Never run out of gas again.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Choose from our wide range of fuel delivery services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-surface dark:bg-surface-dark rounded-2xl p-8 border border-border dark:border-border-dark hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary dark:text-text-secondary-dark">
                {service.description}
              </p>
              <button className="mt-4 text-primary font-medium hover:text-primary-hover transition-colors flex items-center gap-1">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;