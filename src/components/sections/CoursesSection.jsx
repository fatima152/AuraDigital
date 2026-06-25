import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getEnrollCount } from '../../api';
import { CodeIcon, ChartIcon, DesignIcon, SocialIcon } from '../Icons';
import EnrollmentModal from '../EnrollmentModal';

const coursesData = [
  { icon: CodeIcon, level: 'Beginner → Advanced', levelColor: 'var(--accent)', title: 'Web Development Bootcamp', description: 'HTML, CSS, JavaScript, and React — build real websites from scratch and deploy them live.', duration: '8 Weeks · Certificate', bg: 'rgba(124,111,255,0.08)' },
  { icon: ChartIcon, level: 'All Levels', levelColor: 'var(--accent2)', title: 'Digital Marketing Mastery', description: 'Learn Meta Ads, content strategy, and analytics to grow any brand online with real results.', duration: '6 Weeks · Certificate', bg: 'rgba(255,107,157,0.08)' },
  { icon: DesignIcon, level: 'Beginner', levelColor: 'var(--accent3)', title: 'Graphic Design for Business', description: 'Canva, Adobe basics, logo design, and social media graphics — build a stunning brand presence.', duration: '4 Weeks · Certificate', bg: 'rgba(0,212,170,0.08)' },
  { icon: SocialIcon, level: 'Intermediate', levelColor: '#EF9F27', title: 'Social Media Monetization', description: 'TikTok, Instagram, and YouTube monetization strategies — turn followers into real income.', duration: '5 Weeks · Certificate', bg: 'rgba(255,180,50,0.08)' },
];

const CoursesSection = () => {
  const [enrollCount, setEnrollCount] = useState(20);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    getEnrollCount().then(setEnrollCount);
  }, []);

  const openEnroll = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

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
          className="enroll-counter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="enroll-counter-number">{enrollCount}+</span>
          <span className="enroll-counter-label">Students Enrolled</span>
        </motion.div>

        <motion.div
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {coursesData.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div key={index} className="course-card" variants={cardVariants}>
                <div className="course-thumb" style={{ backgroundColor: course.bg, color: course.levelColor }}><Icon /></div>
                <div className="course-body">
                  <div className="course-level" style={{ color: course.levelColor }}>{course.level}</div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <button className="course-enroll" onClick={() => openEnroll(course.title)}>Enroll Now</button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <EnrollmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} course={selectedCourse} />
    </section>
  );
};

export default CoursesSection;
