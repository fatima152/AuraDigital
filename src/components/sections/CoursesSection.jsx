import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const coursesData = [
  { emoji: '💻', level: 'Beginner → Advanced', levelColor: 'var(--accent)', title: 'Web Development Bootcamp', description: 'HTML, CSS, JavaScript, and React — build real websites from scratch and deploy them live.', duration: '8 Weeks · Certificate', bg: 'rgba(124,111,255,0.08)' },
  { emoji: '📊', level: 'All Levels', levelColor: 'var(--accent2)', title: 'Digital Marketing Mastery', description: 'Learn Meta Ads, content strategy, and analytics to grow any brand online.', duration: '6 Weeks · Certificate', bg: 'rgba(255,107,157,0.08)' },
  { emoji: '🎨', level: 'Beginner', levelColor: 'var(--accent3)', title: 'Graphic Design for Business', description: 'Canva, Adobe basics, logo design, and social media graphics — build a stunning brand presence.', duration: '4 Weeks · Certificate', bg: 'rgba(0,212,170,0.08)' },
  { emoji: '📱', level: 'Intermediate', levelColor: '#EF9F27', title: 'Social Media Monetization', description: 'TikTok, Instagram, and YouTube monetization strategies — turn followers into real income.', duration: '5 Weeks · Certificate', bg: 'rgba(255,180,50,0.08)' },
];

const CoursesSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Online Courses</div>
          <h2>Learn the Skills That<br />Build Real Businesses</h2>
          <p>Practical, hands-on courses taught by real professionals</p>
        </div>

        <motion.div
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {coursesData.map((course, index) => (
            <motion.div key={index} className="course-card" variants={cardVariants}>
              <div className="course-thumb" style={{ backgroundColor: course.bg }}>{course.emoji}</div>
              <div className="course-body">
                <div className="course-level" style={{ color: course.levelColor }}>{course.level}</div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span>{course.duration}</span>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <button className="course-enroll">Enroll Now</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
