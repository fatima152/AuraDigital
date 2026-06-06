import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Empowering Your Brand in the <span className="gradient-text">Digital Era</span></h1>
          <p>
            We are Aura Digital. From premium web development to social media monetization and tech training, we build the foundations for your online success.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Start Your Project <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Courses <Code size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
