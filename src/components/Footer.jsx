import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Aura<span>Digital</span></div>
            <p>Your Digital Growth Partner — Pakistan.</p>
            <p className="footer-desc">Web development, social media monetization, branding, and training — all in one place.</p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 100 8 4 4 0 000-8z"/><path d="M15 8a4 4 0 01-4-4"/><path d="M15 12a4 4 0 01-4 4"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-links-col">
            <h4>Services</h4>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/social-media">Social Media</Link>
            <Link to="/services/meta-ads">Meta Ads</Link>
            <Link to="/services/graphic-design">Graphic Design</Link>
            <Link to="/services/courses">Online Courses</Link>
            <Link to="/services/tech-training">Tech Training</Link>
          </div>

          <div className="footer-links-col">
            <Newsletter />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Aura Digital. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
