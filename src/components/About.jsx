import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Our <span className="gradient-text">Mission</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Started by two visionary friends, Aura Digital was born out of a desire to help new businesses establish a powerful online presence. Whether it's building a custom website from scratch, monetizing your social media, or teaching you the skills to do it yourself, we are here to support your journey every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
