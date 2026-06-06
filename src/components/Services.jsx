import { motion } from 'framer-motion';
import { MonitorSmartphone, TrendingUp, Sparkles } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const servicesData = [
  {
    title: "Web Development",
    description: "Custom, responsive websites built from scratch to elevate your brand and drive conversions.",
    icon: <MonitorSmartphone size={24} />
  },
  {
    title: "Account Monetization",
    description: "Strategies to grow and monetize your Instagram, TikTok, and other social media accounts effectively.",
    icon: <Instagram size={24} />
  },
  {
    title: "Meta Marketing",
    description: "Data-driven ad campaigns on Facebook and Instagram targeting your ideal audience for maximum block.",
    icon: <TrendingUp size={24} />
  },
  {
    title: "Graphic Design",
    description: "Stunning visual identities, logos, and digital assets that capture your brand's unique essence.",
    icon: <Sparkles size={24} />
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <h2>What We <span className="gradient-text">Do</span></h2>
        <p className="section-subtitle">Comprehensive digital solutions to build, grow, and scale your newly started business.</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-card service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
