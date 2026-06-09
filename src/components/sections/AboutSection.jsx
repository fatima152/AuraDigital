import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="about-home-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="about-home-content">
            <div className="section-tag">About Us</div>
            <h2>Our <span className="highlight">Mission</span></h2>
            <p>
              Started by two visionary friends, Aura Digital was born out of a passion to help startups and local brands 
              establish a powerful digital identity. Whether it's crafting a high-performance custom website, building a 
              monetization strategy for social channels, or training the next generation of tech talent, we are dedicated 
              to driving real, measurable growth.
            </p>
            <Link to="/about" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Learn More About Us →
            </Link>
          </div>
          <div className="about-home-stats">
            <div className="stat-item"><div className="snum">50+</div><div className="slbl">Projects Done</div></div>
            <div className="stat-item"><div className="snum">100%</div><div className="slbl">Client Satisfaction</div></div>
            <div className="stat-item"><div className="snum">8</div><div className="slbl">Services</div></div>
            <div className="stat-item"><div className="snum">2</div><div className="slbl">Founders</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
