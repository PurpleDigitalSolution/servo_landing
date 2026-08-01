import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle,
  Building,
  TrendingUp,
  MapPin,
  BarChart3,
  Users,
  Fuel,
  Truck,
  Clock,
  Shield,
} from 'lucide-react';

const ForBusiness = () => {
  const features = [
    {
      icon: Clock,
      title: 'Recurring delivery scheduling',
      description: 'Set up automatic fuel deliveries on your schedule',
    },
    {
      icon: MapPin,
      title: 'Multi-location management',
      description: 'Manage fuel delivery across all your locations',
    },
    {
      icon: BarChart3,
      title: 'Usage analytics and reporting',
      description: 'Track fuel consumption and optimize costs',
    },
    {
      icon: Users,
      title: 'Dedicated account manager',
      description: 'Get personalized support for your business needs',
    },
  ];

  return (
    <section className="py-20 px-10 sm:px-6 lg:px-10 bg-surface-secondary dark:bg-surface-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">For Businesses</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
              Fuel Management for Your Business
            </h2>
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-6">
              Schedule recurring fuel deliveries, manage multiple locations, and track usage with our business dashboard.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary dark:text-text-primary-dark font-medium">
                      {feature.title}
                    </span>
                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors flex items-center gap-2"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: TrendingUp, label: 'Savings', value: '25%' },
              { icon: Fuel, label: 'Fuel', value: '30%' },
              { icon: Truck, label: 'Delivery', value: '40%' },
              { icon: Shield, label: 'Security', value: '50%' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-surface dark:bg-surface-dark p-6 rounded-2xl border border-border dark:border-border-dark text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">
                  {item.value}
                </div>
                <div className="text-xs text-text-secondary dark:text-text-secondary-dark">
                  {item.label} efficiency
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;