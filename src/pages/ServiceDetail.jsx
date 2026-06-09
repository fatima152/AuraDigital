import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebIcon, SocialIcon, AdsIcon, DesignIcon, CourseIcon, TrainingIcon } from '../components/Icons';

const servicesData = {
  'web-development': {
    icon: WebIcon, title: 'Web Development', tagline: 'Custom websites built to perform',
    desc: 'We build fast, mobile-friendly, and SEO-optimized websites using modern technologies like React, Next.js, and Node.js. Every site is designed to convert visitors into customers.',
    process: ['Discovery & Planning', 'UI/UX Design', 'Development', 'Testing & QA', 'Deployment', 'Maintenance'],
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Vite', 'Framer Motion'],
  },
  'social-media': {
    icon: SocialIcon, title: 'Social Media Setup & Monetization', tagline: 'Turn followers into income',
    desc: 'Complete social media management including account setup, content strategy, audience growth, and monetization through Instagram, TikTok, and YouTube.',
    process: ['Audit & Strategy', 'Account Optimization', 'Content Creation', 'Growth Hacks', 'Monetization Setup', 'Analytics'],
    tech: ['Instagram', 'TikTok', 'YouTube', 'Meta Business', 'Canva', 'Analytics'],
  },
  'meta-ads': {
    icon: AdsIcon, title: 'Meta Ads & Marketing', tagline: 'Targeted campaigns that deliver ROI',
    desc: 'Facebook and Instagram advertising campaigns designed to reach your ideal audience, generate leads, and maximize return on ad spend.',
    process: ['Goal Setting', 'Audience Research', 'Ad Creation', 'A/B Testing', 'Optimization', 'Reporting'],
    tech: ['Meta Ads Manager', 'Facebook Pixel', 'Lookalike Audiences', 'Retargeting', 'Analytics'],
  },
  'graphic-design': {
    icon: DesignIcon, title: 'Graphic Designing', tagline: 'Branding that stands out',
    desc: 'Professional graphic design services including logo creation, brand identity, social media graphics, banners, and complete brand kits.',
    process: ['Brief & Research', 'Concept Development', 'Design Creation', 'Revisions', 'Final Delivery', 'Brand Guidelines'],
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma', 'After Effects'],
  },
  'courses': {
    icon: CourseIcon, title: 'Online Courses & Training', tagline: 'Learn from industry professionals',
    desc: 'Structured online courses covering web development, digital marketing, graphic design, and social media monetization. Live sessions with recorded backups.',
    process: ['Curriculum Design', 'Content Creation', 'Live Sessions', 'Assignments', 'Projects', 'Certification'],
    tech: ['HTML/CSS', 'JavaScript', 'React', 'Marketing', 'Design Tools'],
  },
  'tech-training': {
    icon: TrainingIcon, title: 'Technical Training Program', tagline: 'From beginner to job-ready',
    desc: 'Comprehensive training program for students and professionals. Covers full-stack development, digital marketing, graphic design, and career preparation.',
    process: ['Skill Assessment', 'Learning Path', 'Hands-on Training', 'Real Projects', 'Portfolio Building', 'Job Support'],
    tech: ['Full Stack', 'Digital Marketing', 'Design', 'Soft Skills', 'Interview Prep'],
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>View All Services</Link>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="back-link">&larr; All Services</Link>
            <div className="sd-hero-icon"><Icon /></div>
            <h1>{service.title}</h1>
            <p className="sd-tagline">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="sd-desc">
        <div className="container">
          <motion.div
            className="sd-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{service.desc}</p>
          </motion.div>
        </div>
      </section>

      <section className="sd-process">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Process</div>
            <h2>How We <span className="highlight">Work</span></h2>
          </div>
          <div className="process-steps">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-tech">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Technologies</div>
            <h2>Tools & <span className="highlight">Tech Stack</span></h2>
          </div>
          <div className="tech-tags">
            {service.tech.map((t, i) => (
              <motion.span
                key={i}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >{t}</motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Need {service.title}?</h2>
            <p>Let's discuss your project and create something amazing together.</p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
