import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, ChartIcon, RestaurantIcon, BrandIcon, LearnIcon } from '../components/Icons';

const projects = [
  { title: 'E-Commerce Store', category: 'Web Development', desc: 'Full-featured online store with payment integration, product management, and admin dashboard.', image: ShoppingBagIcon, tags: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Brand Launch Campaign', category: 'Social Media', desc: 'Complete Instagram and TikTok campaign that grew followers from 0 to 12K in 3 months.', image: ChartIcon, tags: ['Instagram', 'TikTok', 'Meta Ads'] },
  { title: 'Restaurant Website', category: 'Web Development', desc: 'Modern responsive website with online ordering, menu management, and table booking system.', image: RestaurantIcon, tags: ['React', 'Responsive', 'SEO'] },
  { title: 'Brand Identity Package', category: 'Graphic Design', desc: 'Full brand identity including logo, color palette, typography, and social media templates.', image: BrandIcon, tags: ['Logo', 'Branding', 'Guidelines'] },
  { title: 'Meta Ad Campaign', category: 'Marketing', desc: 'Targeted ad campaign achieving 4.2x ROAS with optimized audience targeting and creative.', image: ChartIcon, tags: ['Meta Ads', 'ROI', 'Optimization'] },
  { title: 'Online Academy Portal', category: 'Web Development', desc: 'Learning management system with course creation, student enrollment, and progress tracking.', image: LearnIcon, tags: ['React', 'Node.js', 'Database'] },
];

const Portfolio = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">Our Portfolio</div>
            <h1>Projects We've <span className="highlight">Built</span></h1>
            <p>Real work for real clients — see what we can do for your brand.</p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-page">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, i) => {
              const Image = project.image;
              return (
              <motion.div
                key={i}
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="pc-image"><Image /></div>
                <div className="pc-body">
                  <div className="pc-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="pc-tags">
                    {project.tags.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Want a Project Like These?</h2>
            <p>Let's build something great for your brand.</p>
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
