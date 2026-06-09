import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PlansSection from '../components/sections/PlansSection';
import CoursesSection from '../components/sections/CoursesSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PlansSection />
      <CoursesSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
