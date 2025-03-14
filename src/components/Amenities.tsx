
import { useRef, useState, useEffect } from 'react';
import { 
  Wifi, Coffee, Utensils, Dumbbell, 
  Waves, Car, Headphones, ShieldCheck 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const amenities = [
  {
    icon: <Wifi size={24} />,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet access throughout the property.'
  },
  {
    icon: <Coffee size={24} />,
    title: 'Gourmet Breakfast',
    description: 'Start your day with our chef-prepared breakfast featuring local ingredients.'
  },
  {
    icon: <Utensils size={24} />,
    title: 'Fine Dining',
    description: 'Experience exceptional cuisine at our award-winning restaurant.'
  },
  {
    icon: <Dumbbell size={24} />,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and facilities available 24/7.'
  },
  {
    icon: <Waves size={24} />,
    title: 'Spa & Wellness',
    description: 'Rejuvenate with our range of therapeutic treatments and services.'
  },
  {
    icon: <Car size={24} />,
    title: 'Valet Parking',
    description: 'Convenient valet parking service with secure facilities.'
  },
  {
    icon: <Headphones size={24} />,
    title: 'Concierge Service',
    description: 'Our knowledgeable staff is available to assist with all requests.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: '24/7 Security',
    description: 'Your safety and security are our top priorities.'
  }
];

const Amenities = () => {
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
      id="amenities"
      ref={sectionRef}
      className="py-24 px-6 bg-white relative"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1920&auto=format&fit=crop')] bg-fixed bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div 
          className={cn(
            "text-center mb-16 reveal",
            isVisible && "active"
          )}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-hotel-tan/30 text-hotel-charcoal rounded-full">
            Hotel Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Exclusive Amenities
          </h2>
          <p className="text-hotel-taupe max-w-2xl mx-auto">
            Discover a wide range of services and facilities designed to enhance your stay and provide an exceptional experience.
          </p>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animate",
            isVisible && "active"
          )}
        >
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md hover:translate-y-[-5px] hotel-transition"
            >
              <div className="text-hotel-accent mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-medium mb-2">{amenity.title}</h3>
              <p className="text-hotel-taupe text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
