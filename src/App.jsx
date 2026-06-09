import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

import './App.css';

const AnimatedPage = ({ children }) => <PageTransition>{children}</PageTransition>;

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>
      <div className="glow-blob glow-3"></div>
      
      <ScrollToTop />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/services/:serviceId" element={<AnimatedPage><ServiceDetail /></AnimatedPage>} />
            <Route path="/portfolio" element={<AnimatedPage><Portfolio /></AnimatedPage>} />
            <Route path="/blog" element={<AnimatedPage><Blog /></AnimatedPage>} />
            <Route path="/blog/:postId" element={<AnimatedPage><BlogPost /></AnimatedPage>} />
            <Route path="/faq" element={<AnimatedPage><FAQ /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
            <Route path="/terms" element={<AnimatedPage><Terms /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
