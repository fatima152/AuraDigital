import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#" className="logo">
        Nexus<span>Lab</span>
      </a>
      
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <a href="#contact" className="nav-cta" style={{ textDecoration: 'none', display: 'inline-block' }}>
        Get Started
      </a>
    </motion.nav>
  );
};

export default Navbar;
