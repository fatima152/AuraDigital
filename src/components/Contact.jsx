import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Ready to <span className="gradient-text">Start?</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Tell us about your new business or enroll in our next learning cohort. Let's create something amazing together.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)', color: 'white', width: '100%', outline: 'none' }} 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)', color: 'white', width: '100%', outline: 'none' }} 
            />
            <textarea 
              placeholder="How can we help?" 
              rows="4" 
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)', color: 'white', width: '100%', outline: 'none', resize: 'vertical' }}
            ></textarea>
            <button className="btn-primary" type="submit" style={{ width: '100%' }}>Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
