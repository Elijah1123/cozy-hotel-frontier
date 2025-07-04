
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
