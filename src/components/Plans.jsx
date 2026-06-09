import { motion } from 'framer-motion';

const plansData = [
  {
    name: 'Starter',
    desc: 'For businesses just getting started',
    price: 'PKR 15K',
    period: '/one-time',
    features: [
      '1-Page Website',
      'Instagram Profile Setup',
      'Basic Logo Design',
      'Social Media Starter Kit',
      '1 Month Support'
    ],
    btnText: 'Get Started',
    featured: false
  },
  {
    name: 'Growth',
    desc: 'Full brand launch package',
    price: 'PKR 45K',
    period: '/month',
    features: [
      '5-Page Custom Website',
      'Instagram + TikTok Setup',
      'Meta Ads Management',
      'Full Brand Identity',
      'Monthly Reports',
      'Priority Support'
    ],
    btnText: 'Choose Growth',
    featured: true
  },
  {
    name: 'Elite',
    desc: 'Complete digital transformation',
    price: 'Custom',
    period: '/quote',
    features: [
      'Full E-Commerce Website',
      'All Platforms Managed',
      'Advanced Meta Campaigns',
      'Video + Motion Graphics',
      'Dedicated Account Manager',
      'Team Training Included'
    ],
    btnText: 'Contact Us',
    featured: false
  }
];

const Plans = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <section id="plans" className="plans-section">
      <div className="section-header">
        <div className="section-tag">Pricing Plans</div>
        <h2>Simple Plans for Every Business</h2>
        <p>Choose a package that fits your stage — starter to full brand suite</p>
      </div>

      <motion.div 
        className="plans-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {plansData.map((plan, index) => (
          <motion.div 
            key={index} 
            className={`plan-card ${plan.featured ? 'featured' : ''}`}
            variants={cardVariants}
          >
            {plan.featured && <div className="plan-badge">Most Popular</div>}
            <div className="plan-name">{plan.name}</div>
            <div className="plan-desc">{plan.desc}</div>
            <div className="plan-price">
              {plan.price} <span>{plan.period}</span>
            </div>
            
            <ul className="plan-features">
              {plan.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
            
            <a href="#contact" style={{ textDecoration: 'none', display: 'block' }}>
              <button className="plan-btn">{plan.btnText}</button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Plans;
