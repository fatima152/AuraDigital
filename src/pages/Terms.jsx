import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Terms = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-tag">Legal</div>
          <h1>Terms of <span className="highlight">Service</span></h1>
        </motion.div>
      </div>
    </section>
    <section className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h2>Agreement to Terms</h2>
          <p>By using our website and services, you agree to these terms. If you do not agree, please do not use our services.</p>
          <h2>Services</h2>
          <p>Aura Digital provides web development, social media management, digital marketing, graphic design, and educational services. Specific terms for each service will be outlined in your service agreement.</p>
          <h2>Payment</h2>
          <p>Payment terms are specified in each project proposal or invoice. Late payments may result in service suspension until all outstanding amounts are cleared.</p>
          <h2>Intellectual Property</h2>
          <p>Upon full payment, you own the final deliverables. Aura Digital retains the right to display completed work in our portfolio unless otherwise agreed.</p>
          <h2>Limitation of Liability</h2>
          <p>Aura Digital is not liable for any indirect damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, please <Link to="/contact">contact us</Link>.</p>
        </div>
      </div>
    </section>
  </>
);

export default Terms;
