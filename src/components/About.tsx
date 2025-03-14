
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-hotel-cream"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div 
              className={cn(
                "relative h-[500px] reveal",
                isVisible && "active"
              )}
            >
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 z-10">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop"
                  alt="Hotel exterior"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 z-0">
                <img
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1374&auto=format&fit=crop"
                  alt="Hotel interior"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 bg-hotel-accent rounded-full z-20 flex items-center justify-center">
                <span className="font-display text-white text-lg lg:text-xl">Since<br/>1995</span>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div 
            className={cn(
              "w-full lg:w-1/2 order-1 lg:order-2 reveal",
              isVisible && "active"
            )}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-hotel-tan/30 text-hotel-charcoal rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              A Legacy of Luxury &<br />Exceptional Hospitality
            </h2>
            
            <div className="space-y-6 text-hotel-charcoal">
              <p>
                Established in 1995, Serene Haven has been a landmark of luxury and excellence for over two decades. What began as a boutique hotel with just 15 rooms has evolved into a world-renowned destination that blends timeless elegance with contemporary comfort.
              </p>
              <p>
                Our philosophy is simple: to create an environment where every detail contributes to a seamless experience of luxury, comfort, and genuine hospitality. From the architecture to the service, every aspect of Serene Haven is designed with our guests in mind.
              </p>
              <p>
                Today, we continue to uphold our tradition of excellence while embracing innovation to meet the evolving needs of our discerning guests.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="block text-3xl font-display font-semibold text-hotel-accent">120</span>
                <span className="text-sm text-hotel-taupe">Luxury Rooms</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-semibold text-hotel-accent">25+</span>
                <span className="text-sm text-hotel-taupe">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-semibold text-hotel-accent">4.9</span>
                <span className="text-sm text-hotel-taupe">Guest Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
