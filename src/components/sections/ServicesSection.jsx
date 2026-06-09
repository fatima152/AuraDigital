import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WebIcon, SocialIcon, AdsIcon, DesignIcon, CourseIcon, TrainingIcon, ArrowRight } from '../Icons';

const servicesData = [
  { icon: WebIcon, title: 'Web Development', description: 'Custom websites for your brand — fast, mobile-friendly, and built to convert visitors into customers.', tag: 'HTML · CSS · React', bg: 'rgba(124,111,255,0.1)', color: 'var(--accent)' },
  { icon: SocialIcon, title: 'Social Media Setup & Monetization', description: 'Instagram, TikTok account creation, optimization, and monetization strategy for your new brand.', tag: 'Instagram · TikTok · Meta', bg: 'rgba(255,107,157,0.1)', color: 'var(--accent2)' },
  { icon: AdsIcon, title: 'Meta Ads & Marketing', description: 'Run targeted ads on Facebook and Instagram to grow your business fast with proven strategies.', tag: 'Meta Ads · ROI Focus', bg: 'rgba(0,212,170,0.1)', color: 'var(--accent3)' },
  { icon: DesignIcon, title: 'Graphic Designing', description: 'Logos, brand kits, social media posts, banners — all designed to make your brand unforgettable.', tag: 'Branding · Social Posts', bg: 'rgba(255,180,50,0.1)', color: '#EF9F27' },
  { icon: CourseIcon, title: 'Online Courses & Training', description: 'Learn web development languages, marketing, and technical skills through our structured online courses.', tag: 'Live + Recorded', bg: 'rgba(124,111,255,0.1)', color: 'var(--accent)' },
  { icon: TrainingIcon, title: 'Technical Training Program', description: 'End-to-end tech training for students and professionals — from beginner to job-ready in weeks.', tag: 'Beginner Friendly', bg: 'rgba(0,212,170,0.1)', color: 'var(--accent3)' },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2>Complete Digital Services<br />for New Businesses</h2>
          <p>From your first website to full social media monetization — we handle everything</p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {servicesData.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <motion.div key={index} className="svc-card" variants={cardVariants}>
                <div className="svc-icon" style={{ backgroundColor: svc.bg, color: svc.color }}><Icon /></div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <span className="svc-tag">{svc.tag}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="section-footer-link">
          <Link to="/services" className="btn-outline">View All Services <ArrowRight /></Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
