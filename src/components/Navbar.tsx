
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 hotel-transition px-6 py-4 md:px-12',
        isScrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-hotel-charcoal font-display text-2xl font-semibold tracking-tight"
        >
          Serene Haven
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'relative font-medium hover:text-hotel-accent hotel-transition after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-hotel-accent after:transition-all after:duration-300 hover:after:w-full',
                isScrolled ? 'text-hotel-charcoal' : 'text-hotel-charcoal'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Book Now Button */}
        <a
          href="#contact"
          className={cn(
            'hidden md:block px-6 py-2 font-medium rounded-md hotel-transition',
            isScrolled
              ? 'bg-hotel-accent text-white hover:bg-hotel-accent/90'
              : 'bg-hotel-accent text-white hover:bg-hotel-accent/90'
          )}
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-hotel-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden hotel-transition',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-hotel-charcoal text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-hotel-accent text-white hover:bg-hotel-accent/90 text-center py-3 rounded-md font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
