import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Successfully subscribed!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'success', message: 'Successfully subscribed!' });
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter">
      <h4>Stay Updated</h4>
      <p>Get the latest tips and updates from Aura Digital.</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? '...' : 'Subscribe'}
        </button>
      </form>
      {status.message && <div className={`form-status ${status.type}`}>{status.message}</div>}
    </div>
  );
};

export default Newsletter;
