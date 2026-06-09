const Footer = () => {
  return (
    <footer>
      <div>
        <div className="logo">Nexus<span>Lab</span></div>
        <p style={{ marginTop: '4px' }}>Your Digital Growth Partner — Pakistan</p>
      </div>
      
      <ul className="footer-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <p>&copy; {new Date().getFullYear()} NexusLab. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
