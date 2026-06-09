import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { title: 'E-Commerce Store', category: 'Web Development', image: '🛒', tags: ['React', 'Node.js'] },
  { title: 'Brand Launch Campaign', category: 'Social Media', image: '📈', tags: ['Instagram', 'TikTok'] },
  { title: 'Restaurant Website', category: 'Web Development', image: '🍽️', tags: ['React', 'SEO'] },
  { title: 'Brand Identity Package', category: 'Graphic Design', image: '🎨', tags: ['Logo', 'Branding'] },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Work</div>
          <h2>Recent <span className="highlight">Projects</span></h2>
          <p>Real results for real clients — see what we can do for your brand</p>
        </div>
        <div className="portfolio-grid-home">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pc-image">{project.image}</div>
              <div className="pc-body">
                <div className="pc-category">{project.category}</div>
                <h3>{project.title}</h3>
                <div className="pc-tags">
                  {project.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="section-footer-link">
          <Link to="/portfolio" className="btn-outline">View All Projects →</Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
