
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Users, Wifi, Coffee, Tv } from 'lucide-react';
import { cn } from '@/lib/utils';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious and elegantly furnished room with modern amenities for a comfortable stay.',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1920&auto=format&fit=crop',
    size: '32 sq m',
    capacity: '2 Guests',
    amenities: ['Free Wifi', 'Breakfast', 'Smart TV', 'Air Conditioning']
  },
  {
    id: 2,
    name: 'Premier Suite',
    description: 'Luxurious suite with a separate living area, premium furnishings, and panoramic views.',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop',
    size: '48 sq m',
    capacity: '2-3 Guests',
    amenities: ['Free Wifi', 'Breakfast', 'Smart TV', 'Private Balcony']
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Our most exclusive accommodation with exceptional space, luxury furnishings, and premium services.',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1619641832816-c383431a36f8?q=80&w=1920&auto=format&fit=crop',
    size: '65 sq m',
    capacity: '2-4 Guests',
    amenities: ['Free Wifi', 'Breakfast', 'Smart TV', 'Private Terrace']
  },
];

const Rooms = () => {
  const [activeRoom, setActiveRoom] = useState(0);
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

  const nextRoom = () => {
    setActiveRoom((prev) => (prev + 1) % rooms.length);
  };

  const prevRoom = () => {
    setActiveRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('Wifi')) return <Wifi size={16} />;
    if (amenity.includes('Breakfast')) return <Coffee size={16} />;
    if (amenity.includes('TV')) return <Tv size={16} />;
    return null;
  };

  return (
    <section 
      id="rooms" 
      ref={sectionRef}
      className="py-24 px-6 bg-hotel-beige relative overflow-hidden"
    >
      <div 
        className={cn(
          "container mx-auto reveal",
          isVisible && "active"
        )}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-hotel-tan/30 text-hotel-charcoal rounded-full">
            Luxurious Accommodations
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Rooms & Suites
          </h2>
          <p className="text-hotel-taupe max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the perfect blend of comfort, luxury, and functionality for an unforgettable stay.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Room Image */}
          <div className="w-full lg:w-3/5 h-[400px] md:h-[500px] overflow-hidden rounded-lg relative">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  activeRoom === index ? "opacity-100" : "opacity-0"
                )}
                style={{
                  backgroundImage: `url(${room.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
            
            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={prevRoom}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-hotel-charcoal hover:bg-white hotel-transition"
                aria-label="Previous room"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextRoom}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-hotel-charcoal hover:bg-white hotel-transition"
                aria-label="Next room"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Room Details */}
          <div className="w-full lg:w-2/5">
            {rooms.map((room, index) => (
              <div 
                key={room.id} 
                className={cn(
                  "transition-all duration-500",
                  activeRoom === index ? "block opacity-100" : "hidden opacity-0"
                )}
              >
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">
                  {room.name}
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xl font-semibold text-hotel-accent">
                    {room.price}
                  </span>
                  <span className="text-sm text-hotel-taupe">per night</span>
                </div>
                <p className="text-hotel-charcoal mb-6">
                  {room.description}
                </p>
                
                <div className="flex items-center mb-6 space-x-8">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-hotel-accent rounded-full mr-2"></span>
                    <span className="text-sm text-hotel-charcoal">{room.size}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-hotel-taupe" />
                    <span className="text-sm text-hotel-charcoal">{room.capacity}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-hotel-taupe">
                    Room Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center">
                        <span className="mr-2 text-hotel-accent">
                          {getAmenityIcon(amenity)}
                        </span>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-3 bg-hotel-accent text-white rounded-md font-medium hover:bg-hotel-accent/90 hotel-transition"
                >
                  Book This Room
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
