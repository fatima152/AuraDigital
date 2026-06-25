import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitEnrollment } from '../api';

const EnrollmentModal = ({ isOpen, onClose, course }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [msg, setMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await submitEnrollment({ ...form, course });
      setMsg(res.message);
      setStatus(res.success ? 'success' : 'error');
      if (res.success) setForm({ name: '', email: '', phone: '' });
    } catch {
      setMsg('Network error — please check if the server is running.');
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>&times;</button>
            {status === 'success' ? (
              <div className="modal-success">
                <div className="modal-success-icon">&#10003;</div>
                <h3>Enrolled Successfully!</h3>
                <p>{msg}</p>
                <button className="btn-primary" onClick={onClose}>Done</button>
              </div>
            ) : (
              <>
                <h3>Enroll in <span style={{ color: 'var(--accent)' }}>{course}</span></h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                  Fill in your details to get started.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Fatima Anjum" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="fatima@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="0314 8708929" />
                  </div>
                  {status === 'error' && <p className="form-error">{msg}</p>}
                  <button className="btn-primary" type="submit" disabled={status === 'loading'} style={{ width: '100%', marginTop: '0.5rem' }}>
                    {status === 'loading' ? 'Submitting...' : 'Enroll Now — Free'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;
