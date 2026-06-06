const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="logo gradient-text" style={{ fontSize: '1.2rem' }}>Aura Digital.</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Aura Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
