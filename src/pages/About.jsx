import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const timeline = [
  { year: '2022', event: 'Aura Digital founded by two passionate entrepreneurs' },
  { year: '2023', event: 'Completed 20+ projects and launched first online course' },
  { year: '2024', event: 'Expanded team and reached 50+ successful projects' },
  { year: '2025', event: 'Launched advanced training programs and Meta Ads services' },
  { year: '2026', event: 'Trusted partner for 50+ brands across Pakistan' },
];

const team = [
  { name: 'Fatima Anjum', role: 'CEO & Founder', bio: 'Visionary entrepreneur passionate about digital transformation and helping brands grow online.' },
  { name: 'Rehab Tahir', role: 'COO & Co-Founder', bio: 'Operations expert ensuring every project delivers excellence and measurable results.' },
];

const About = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">About Us</div>
            <h1>We Build <span className="highlight">Digital Brands</span></h1>
            <p>From zero to online — we help startups and businesses establish a powerful digital presence.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <motion.div
            className="story-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-content">
              <h2>Our <span className="highlight">Mission</span></h2>
              <p>
                Started by two visionary friends, Aura Digital was born out of a passion to help startups and local brands 
                establish a powerful digital identity. Whether it's crafting a high-performance custom website, building a 
                monetization strategy for social channels, or training the next generation of tech talent — we are dedicated 
                to driving real, measurable growth.
              </p>
              <p>
                We believe every business deserves a strong online presence. Our team combines creativity with technical 
                expertise to deliver solutions that don't just look good — they perform.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card"><div className="snum">50+</div><div className="slbl">Projects Done</div></div>
              <div className="stat-card"><div className="snum">8</div><div className="slbl">Services</div></div>
              <div className="stat-card"><div className="snum">100%</div><div className="slbl">Satisfaction</div></div>
              <div className="stat-card"><div className="snum">2</div><div className="slbl">Founders</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Team</div>
            <h2>Meet the <span className="highlight">Founders</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Journey</div>
            <h2>How We <span className="highlight">Grew</span></h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content"><p>{item.event}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Want to Work With Us?</h2>
            <p>Let's discuss how we can help your brand grow digitally.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
