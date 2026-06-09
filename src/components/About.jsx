import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>Our <span className="highlight">Mission</span></h2>
          <p>
            Started by two visionary friends, NexusLab was born out of a passion to help startups and local brands establish a powerful digital identity. Whether it's crafting a high-performance custom website, building a monetization strategy for social channels, or training the next generation of tech talent, we are dedicated to driving real, measurable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
