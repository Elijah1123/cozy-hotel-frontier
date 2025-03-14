
import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Campus', href: '#campus' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const InstitutionNavbar = () => {
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-primary flex items-center gap-2 font-display text-2xl font-semibold tracking-tight"
        >
          <GraduationCap className="h-8 w-8" />
          <span>Achiever's Academy</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Apply Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Apply Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 pt-24 px-6 md:hidden transition-transform duration-300',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-center py-3 rounded-md font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default InstitutionNavbar;
