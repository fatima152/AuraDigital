import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContact } from '../api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const data = await submitContact(form);
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
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">Contact Us</div>
            <h1>Let's Build Your <span className="highlight">Digital Presence</span></h1>
            <p>Tell us about your project and we'll create a custom plan for your brand.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Get in Touch</h2>
              <p className="contact-desc">Reach out and let's discuss how we can help your brand grow.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div><strong>Email</strong><br />skillora836@gmail.com</div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div><strong>Phone / WhatsApp</strong><br />+92 314 8708929</div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div><strong>Location</strong><br />Pakistan — Online Worldwide</div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div><strong>Working Hours</strong><br />Mon to Sun — Always Open</div>
                </div>
              </div>

              <div className="contact-social">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">TikTok</a>
                <a href="#" className="social-link">YouTube</a>
                <a href="#" className="social-link">Facebook</a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                {status.message && (
                  <div className={`form-status ${status.type}`}>{status.message}</div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+92 314 8708929" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="social-media">Social Media Setup & Monetization</option>
                    <option value="meta-ads">Meta Ads & Marketing</option>
                    <option value="graphic-design">Graphic Designing</option>
                    <option value="courses">Online Courses & Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Describe your project or what you need..."></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
