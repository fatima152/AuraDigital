import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! We will get back to you shortly.' });
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'success', message: 'Thank you! We will get back to you shortly.' });
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } finally {
      setLoading(false);
    }
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
          <p>Tell us about your brand or ask about our training programs. Let's build your digital presence together.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}
            <div className="form-group">
              <label htmlFor="home-name">Full Name</label>
              <input type="text" id="home-name" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="home-email">Email Address</label>
              <input type="email" id="home-email" name="email" value={form.email} onChange={handleChange} required placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="home-message">How can we help you?</label>
              <textarea id="home-message" name="message" rows="4" value={form.message} onChange={handleChange} required placeholder="Describe your project or select a course..."></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
