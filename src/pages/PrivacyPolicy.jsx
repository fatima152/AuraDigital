import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-tag">Legal</div>
          <h1>Privacy <span className="highlight">Policy</span></h1>
        </motion.div>
      </div>
    </section>
    <section className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and message when you fill out our contact form or subscribe to our newsletter.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to respond to your inquiries, provide our services, send updates and marketing materials (with your consent), and improve our website.</p>
          <h2>Data Protection</h2>
          <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          <h2>Third Parties</h2>
          <p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law.</p>
          <h2>Contact</h2>
          <p>If you have questions about this policy, please <Link to="/contact">contact us</Link>.</p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
