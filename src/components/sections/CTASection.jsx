import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Launch Your<br /><span className="highlight">Digital Business?</span></h2>
          <p>Let's build your brand together — from website to social media to full monetization.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              Book a Free Consultation
            </Link>
            <Link to="/services" className="btn-outline" style={{ textDecoration: 'none' }}>
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
