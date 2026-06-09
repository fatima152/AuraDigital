import { motion } from 'framer-motion';
import { StarIcon } from '../Icons';

const testimonials = [
  { name: 'Ahmed R.', role: 'Startup Founder', text: 'Aura Digital built our entire online presence from scratch. Website, social media, branding — everything exceeded our expectations. Highly recommended!', rating: 5 },
  { name: 'Fatima K.', role: 'Course Student', text: 'The web development bootcamp was amazing. I went from zero knowledge to building my own website in just 8 weeks. The instructors are incredibly supportive.', rating: 5 },
  { name: 'Usman A.', role: 'Business Owner', text: 'Their Meta Ads service transformed our business. We went from barely any leads to a consistent flow of customers. The ROI has been incredible.', rating: 5 },
  { name: 'Sana M.', role: 'Creative Entrepreneur', text: 'The graphic design team understood exactly what I wanted. My brand identity now looks professional and polished. Couldn\'t be happier!', rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2>What Our <span className="highlight">Clients Say</span></h2>
          <p>Real feedback from real people we've worked with</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stars">
                {Array.from({ length: t.rating }, (_, j) => <StarIcon key={j} />)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="ta-avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="ta-name">{t.name}</div>
                  <div className="ta-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
