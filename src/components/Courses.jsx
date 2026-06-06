import { motion } from 'framer-motion';
import { Terminal, Rocket, Layers } from 'lucide-react';

const coursesData = [
  {
    title: "Master Frontend Web Design",
    description: "Learn HTML, CSS, JavaScript, and React to build beautiful websites for yourself or clients.",
    icon: <Terminal size={24} />
  },
  {
    title: "Social Media Masterclass",
    description: "Understand the algorithms. Learn marketing tricks and Meta services to scale your brand.",
    icon: <Rocket size={24} />
  },
  {
    title: "Graphic Design Fundamentals",
    description: "Master modern design principles and tools to create stunning visuals.",
    icon: <Layers size={24} />
  }
];

const Courses = () => {
  return (
    <section id="courses" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2>Online <span className="gradient-text">Courses</span></h2>
        <p className="section-subtitle">Learn the exact skills we use to start and scale modern businesses.</p>
        
        <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {coursesData.map((course, index) => (
            <motion.div 
              key={index}
              className="glass-card course-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="service-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-secondary)' }}>
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>Enroll Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
