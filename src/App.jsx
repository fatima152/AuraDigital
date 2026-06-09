import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Plans from './components/Plans';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Decorative Glow Blobs for Premium Aesthetic */}
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>
      <div className="glow-blob glow-3"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Courses />
        
        {/* Sleek CTA section from the design mockup */}
        <section className="cta-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Launch Your<br /><span className="highlight">Digital Business?</span></h2>
            <p>Let's build your brand together — from website to social media to full monetization.</p>
            <div className="cta-btns">
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                Book a Free Consultation
              </a>
              <a href="#services" className="btn-outline" style={{ textDecoration: 'none' }}>
                View Our Work
              </a>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
