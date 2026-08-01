import {  useState } from 'react';
import { motion} from 'motion/react';
import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Which areas do you deliver to?',
      answer: 'We currently deliver to all major cities and urban areas across Nigeria. We\'re expanding our coverage area every month.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery typically takes 24-48 hours depending on your location. We offer express delivery options for urgent orders.',
    },
    {
      question: 'How do I pay?',
      answer: 'We accept payments via Paystack, Flutterwave, bank transfer, and mobile money. All transactions are secure and encrypted.',
    },
    {
      question: 'Is the fuel quality guaranteed?',
      answer: 'Yes, all our fuel comes from verified and trusted partner stations. We guarantee the quality and authenticity of every delivery.',
    },
    {
      question: 'Can I schedule deliveries?',
      answer: 'Yes, you can schedule recurring deliveries for your business or home. Our platform allows you to set up automatic orders.',
    },
    {
      question: 'What if my payment fails?',
      answer: 'If your payment fails, you\'ll receive an error message. You can retry with a different payment method or contact our support team for assistance.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-surface-secondary dark:bg-surface-secondary-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark">
            Find answers to common questions about our service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-surface dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-secondary dark:hover:bg-surface-secondary-dark transition-colors"
              >
                <span className="text-text-primary dark:text-text-primary-dark font-medium text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-text-secondary dark:text-text-secondary-dark">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;