import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  { name: 'Fatima Anjum', role: 'CEO & Founder', bio: 'Visionary entrepreneur passionate about digital transformation and helping brands grow online.' },
  { name: 'Rehab Tahir', role: 'COO & Co-Founder', bio: 'Operations expert ensuring every project delivers excellence and measurable results.' },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Team</div>
          <h2>Meet the <span className="highlight">Founders</span></h2>
          <p>Two passionate entrepreneurs building Pakistan's next big digital agency</p>
        </div>
        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
        <div className="section-footer-link">
          <Link to="/about" className="btn-outline">Full Story →</Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
