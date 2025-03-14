
import { useEffect } from 'react';
import InstitutionNavbar from '../components/InstitutionNavbar';
import Hero from '../components/InstitutionHero';
import Programs from '../components/Programs';
import Faculty from '../components/Faculty';
import Campus from '../components/Campus';
import About from '../components/InstitutionAbout';
import Contact from '../components/InstitutionContact';
import Footer from '../components/InstitutionFooter';

const Index = () => {
  useEffect(() => {
    // Animation on scroll handler
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const staggers = document.querySelectorAll('.stagger-animate');
      
      const scrollElements = [...reveals, ...staggers];
      
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - elementHeight / 4) {
          el.classList.add('active');
        }
      });
    };
    
    // Initial check on load
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <InstitutionNavbar />
      <Hero />
      <Programs />
      <Faculty />
      <Campus />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
