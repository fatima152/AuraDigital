import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'What services does Aura Digital offer?', a: 'We offer web development, social media setup & monetization, Meta Ads & marketing, graphic design, online courses, and technical training.' },
  { q: 'How much does a website cost?', a: 'Packages start from PKR 10,000 for a single-page site. Custom sites are quoted based on requirements.' },
  { q: 'How long does it take to build a website?', a: 'Standard websites take 1-2 weeks. Complex projects may take 3-6 weeks.' },
  { q: 'Do you offer free consultations?', a: 'Yes! We offer a free initial consultation to understand your needs and provide a proposal.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FAQ</div>
          <h2>Quick <span className="highlight">Answers</span></h2>
          <p>Common questions about our services</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="section-footer-link">
          <Link to="/faq" className="btn-outline">View All FAQs →</Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
