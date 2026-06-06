import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
