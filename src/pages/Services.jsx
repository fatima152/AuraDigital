import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { id: 'web-development', icon: '🌐', title: 'Web Development', desc: 'Custom websites built with modern tech — fast, responsive, and designed to convert.', features: ['Responsive Design', 'React / Next.js', 'E-Commerce', 'SEO Optimized', 'Fast Loading'] },
  { id: 'social-media', icon: '📱', title: 'Social Media Setup & Monetization', desc: 'Complete social media management — from account creation to full monetization strategy.', features: ['Instagram & TikTok Setup', 'Content Strategy', 'Monetization', 'Analytics', 'Growth Hacks'] },
  { id: 'meta-ads', icon: '🎯', title: 'Meta Ads & Marketing', desc: 'Targeted Facebook and Instagram ad campaigns that deliver real ROI for your business.', features: ['Ad Campaign Setup', 'Audience Targeting', 'A/B Testing', 'Retargeting', 'Monthly Reports'] },
  { id: 'graphic-design', icon: '🎨', title: 'Graphic Designing', desc: 'Professional branding and design that makes your business stand out from the competition.', features: ['Logo Design', 'Brand Identity', 'Social Media Posts', 'Banners & Flyers', 'Brand Guidelines'] },
  { id: 'courses', icon: '🎓', title: 'Online Courses & Training', desc: 'Structured courses taught by industry professionals — from beginner to advanced levels.', features: ['Live Sessions', 'Recorded Content', 'Certificate', 'Project-Based', 'Job Ready'] },
  { id: 'tech-training', icon: '⚙️', title: 'Technical Training Program', desc: 'End-to-end tech training for students and professionals — job-ready in weeks.', features: ['Full Stack Web', 'Digital Marketing', 'Graphic Design', 'Social Media', 'Career Support'] },
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">Our Services</div>
            <h1>Complete Digital Services<br />for <span className="highlight">Your Business</span></h1>
            <p>Everything you need to build, grow, and scale your brand online.</p>
          </motion.div>
        </div>
      </section>

      <section className="services-page">
        <div className="container">
          <motion.div
            className="services-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {services.map((svc, i) => (
              <motion.div key={i} className="service-detailed-card" variants={cardVariants}>
                <div className="sdc-icon">{svc.icon}</div>
                <div className="sdc-body">
                  <h2>{svc.title}</h2>
                  <p>{svc.desc}</p>
                  <div className="sdc-features">
                    {svc.features.map((f, j) => <span key={j} className="feature-tag">{f}</span>)}
                  </div>
                  <Link to={`/services/${svc.id}`} className="btn-outline">Learn More</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
