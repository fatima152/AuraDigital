import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting NexusLab! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>Ready to <span className="highlight">Start?</span></h2>
          <p>
            Tell us about your brand or ask about our training programs. Let's build your digital presence together.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required placeholder="name@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help you?</label>
              <textarea id="message" rows="4" required placeholder="Describe your project or select a course..."></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
