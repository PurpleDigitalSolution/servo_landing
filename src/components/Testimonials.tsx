import { motion } from 'motion/react';
import {
  Star,
  User,
  Briefcase,
  Home,
  Wrench,
  Quote,
} from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Ogunlesi',
      role: 'Business Owner',
      icon: Briefcase,
      rating: 5,
      quote: 'Servo has completely transformed how I manage fuel for my fleet. The delivery is always on time and the quality is excellent.',
    },
    {
      name: 'Chioma Eze',
      role: 'Homeowner',
      icon: Home,
      rating: 5,
      quote: 'I love how easy it is to order cooking gas from Servo. They deliver to my doorstep and I never have to worry about running out.',
    },
    {
      name: 'Emeka Nwosu',
      role: 'Generator Operator',
      icon: Wrench,
      rating: 5,
      quote: 'The real-time tracking feature is amazing. I know exactly when my diesel will arrive, which helps me plan my operations better.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-10 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Real stories from real customers who trust Servo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-surface dark:bg-surface-dark rounded-2xl p-6 border border-border dark:border-border-dark hover:shadow-lg transition-all"
            >
              {/* Quote Icon */}
              <div className="text-primary/20 mb-3">
                <Quote className="w-8 h-8" />
              </div>

              {/* Testimonial Content */}
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm italic mb-4">
                "{testimonial.quote}"
              </p>

              {/* Rating Stars */}
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-border dark:border-border-dark">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <testimonial.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary dark:text-text-primary-dark text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;