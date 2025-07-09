
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&h=1080&auto=format&fit=crop',
    title: 'Luxury Redefined',
    description: 'Experience unparalleled comfort and elegance in our meticulously designed spaces.',
  },
  {
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1920&h=1080&auto=format&fit=crop',
    title: 'Culinary Excellence',
    description: 'Indulge in exquisite dining experiences crafted by our world-class chefs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560200353-ce0a76b1d438?q=80&w=1920&h=1080&auto=format&fit=crop',
    title: 'Serene Escapes',
    description: 'Discover peaceful retreats designed for relaxation and rejuvenation.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
   
    const preloadImages = async () => {
      const promises = slides.map((slide) => {
        return new Promise<string>((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve(slide.image);
        });
      });

      const loaded = await Promise.all(promises);
      setLoadedImages(loaded);
      setIsLoading(false);
    };

    preloadImages();

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <section id="home" className="w-full h-screen flex items-center justify-center bg-hotel-beige">
        <div className="animate-pulse w-32 h-32 rounded-full bg-hotel-tan"></div>
      </section>
    );
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <div className="stagger-animate active">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md text-white rounded-full">
                Welcome to Serene Haven
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-4 text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#rooms"
                  className="px-8 py-3 bg-white text-hotel-charcoal rounded-md font-medium hover:bg-opacity-90 hotel-transition flex items-center justify-center group"
                >
                  Explore Rooms
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 hotel-transition" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-hotel-accent text-white rounded-md font-medium hover:bg-opacity-90 hotel-transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-3 h-3 rounded-full hotel-transition',
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
