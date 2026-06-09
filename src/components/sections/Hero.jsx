import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const rightVisualVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1, x: 0, scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 }
    }
  };

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span> Pakistan's Digital Growth Partner
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Grow Your Brand <span className="highlight">Digitally</span> — We Build It All
          </motion.h1>

          <motion.p variants={itemVariants}>
            Web development, social media monetization, graphic design, online courses, and complete digital marketing — everything your business needs to grow, in one place.
          </motion.p>

          <motion.div className="hero-btns" variants={itemVariants}>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              Start Your Project
            </Link>
            <Link to="/services" className="btn-outline" style={{ textDecoration: 'none' }}>
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={rightVisualVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-card-main">
            <div className="hc-top">
              <div className="hc-avatar">AD</div>
              <div>
                <div className="hc-name">Client Dashboard</div>
                <div className="hc-sub">Brand Growth Tracker</div>
              </div>
            </div>
            <div className="hc-stat">
              <div className="hc-stat-item">
                <div className="num">12K</div>
                <div className="lbl">Followers</div>
              </div>
              <div className="hc-stat-item">
                <div className="num">84%</div>
                <div className="lbl">Reach</div>
              </div>
              <div className="hc-stat-item">
                <div className="num">3.2x</div>
                <div className="lbl">Growth</div>
              </div>
            </div>
            <div className="hc-bar">
              <motion.div
                className="hc-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ duration: 1.2, delay: 1, ease: 'easeInOut' }}
              />
            </div>
            <div className="hc-label">Monthly brand performance</div>
          </div>

          <div className="floating-badge fb1">
            <span className="fnum">+240%</span>Instagram Growth
          </div>
          <div className="floating-badge fb2">
            <span className="dot"></span>Website Live ✓
          </div>
        </motion.div>
      </section>

      <motion.div
        className="stats-bar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="stat-item">
          <div className="snum">50+</div>
          <div className="slbl">Projects Done</div>
        </div>
        <div className="stat-item">
          <div className="snum">8</div>
          <div className="slbl">Services Offered</div>
        </div>
        <div className="stat-item">
          <div className="snum">100%</div>
          <div className="slbl">Client Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="snum">2</div>
          <div className="slbl">Expert Founders</div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
