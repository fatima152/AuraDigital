import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'What services does Aura Digital offer?', a: 'We offer web development, social media setup & monetization, Meta Ads & marketing, graphic design, online courses, and technical training programs.' },
  { q: 'How much does a website cost?', a: 'Our website packages start from PKR 10,000 for a single-page site. For custom multi-page or e-commerce sites, prices vary based on requirements. Contact us for a free quote.' },
  { q: 'How long does it take to build a website?', a: 'A standard website takes 1-2 weeks. Complex e-commerce or custom web applications may take 3-6 weeks depending on the scope.' },
  { q: 'Do you offer social media management?', a: 'Yes! We handle Instagram and TikTok account setup, content creation, growth strategies, and monetization. Our Meta Ads service covers paid campaigns.' },
  { q: 'Are your courses online or in-person?', a: 'All our courses are conducted online with live sessions. Recordings are provided so you can learn at your own pace. Certificates are awarded upon completion.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, Easypaisa, JazzCash, and other digital payment methods in Pakistan. Contact us for details.' },
  { q: 'Do you offer free consultations?', a: 'Yes! We offer a free initial consultation to understand your project needs and provide a customized proposal. Book yours through our contact page.' },
  { q: 'Can you help me start freelancing?', a: 'Absolutely. Our technical training program is designed to take you from beginner to job-ready, including portfolio building and career support.' },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`faq-item ${open ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {open && (
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
  );
};

const FAQ = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">FAQ</div>
            <h1>Frequently Asked <span className="highlight">Questions</span></h1>
            <p>Everything you need to know before getting started.</p>
          </motion.div>
        </div>
      </section>

      <section className="faq-page">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Still Have Questions?</h2>
            <p>We're here to help. Reach out and we'll get back to you within 24 hours.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
