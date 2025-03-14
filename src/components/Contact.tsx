
import { useRef, useState, useEffect, FormEvent } from 'react';
import { MapPin, Phone, Mail, Calendar, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [guests, setGuests] = useState(2);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-white"
    >
      <div className="container mx-auto">
        <div 
          className={cn(
            "text-center mb-16 reveal",
            isVisible && "active"
          )}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-hotel-tan/30 text-hotel-charcoal rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Book Your Stay
          </h2>
          <p className="text-hotel-taupe max-w-2xl mx-auto">
            Reserve your perfect getaway with us. Fill out the form below and our team will get back to you promptly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div 
            className={cn(
              "w-full lg:w-1/3 reveal",
              isVisible && "active"
            )}
          >
            <div className="bg-hotel-beige p-8 rounded-lg">
              <h3 className="text-xl font-display mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-hotel-accent shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-hotel-taupe text-sm">
                      123 Serenity Lane<br />
                      Luxury District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 text-hotel-accent shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-hotel-taupe text-sm">
                      Reservations: +1 (555) 123-4567<br />
                      Front Desk: +1 (555) 765-4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-hotel-accent shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-hotel-taupe text-sm">
                      reservations@serenehaven.com<br />
                      info@serenehaven.com
                    </p>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-hotel-tan/50" />
              
              <h3 className="text-xl font-display mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-hotel-charcoal hover:bg-hotel-accent hover:text-white hotel-transition">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-hotel-charcoal hover:bg-hotel-accent hover:text-white hotel-transition">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4Zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-hotel-charcoal hover:bg-hotel-accent hover:text-white hotel-transition">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.988 6.731a3.896 3.896 0 0 0-3.917-3.931h-.05A3.893 3.893 0 0 0 10.113 6.8l-.013.152a1.23 1.23 0 0 1-.319.687 1.249 1.249 0 0 1-.693.299h-.09a1.282 1.282 0 0 1-.717-.27 1.26 1.26 0 0 1-.333-.635 7.911 7.911 0 0 0-3.747 1.65 7.72 7.72 0 0 0-2.62 3.551 7.577 7.577 0 0 0 1.574 8.067 7.99 7.99 0 0 0 3.185 2.17c1.2.469 2.486.643 3.752.511a8.588 8.588 0 0 0 3.599-1.215 8.134 8.134 0 0 0 2.728-3.164 7.935 7.935 0 0 0 .956-3.778v-.002c.002-.7.277-1.372.77-1.867a3.726 3.726 0 0 0 .724-2.12 3.733 3.733 0 0 0-.726-2.228l-.005-.005a.652.652 0 0 1-.15-.872Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div 
            className={cn(
              "w-full lg:w-2/3 reveal",
              isVisible && "active"
            )}
          >
            <div className="bg-white border border-hotel-tan/30 p-8 rounded-lg shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-medium mb-2">Booking Request Submitted</h3>
                  <p className="text-hotel-taupe">Thank you for your interest! Our team will contact you soon to confirm your reservation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-medium mb-2">
                        Check-in Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="checkIn"
                          className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                          required
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hotel-taupe" size={18} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-medium mb-2">
                        Check-out Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="checkOut"
                          className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                          required
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hotel-taupe" size={18} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-2">
                        Guests
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 text-left flex items-center justify-between"
                          onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                        >
                          <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                          <ChevronDown size={18} className="text-hotel-taupe" />
                        </button>
                        
                        {showGuestDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-hotel-tan/50">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <button
                                key={num}
                                type="button"
                                className={cn(
                                  "w-full px-4 py-2 text-left hover:bg-hotel-beige hotel-transition",
                                  guests === num && "bg-hotel-beige"
                                )}
                                onClick={() => {
                                  setGuests(num);
                                  setShowGuestDropdown(false);
                                }}
                              >
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium mb-2">
                      Room Type
                    </label>
                    <select
                      id="roomType"
                      className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                      required
                    >
                      <option value="">Select Room Type</option>
                      <option value="deluxe">Deluxe Room</option>
                      <option value="premier">Premier Suite</option>
                      <option value="executive">Executive Suite</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-hotel-tan/50 focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-hotel-accent text-white py-3 rounded-md font-medium hover:bg-hotel-accent/90 hotel-transition"
                  >
                    Request Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
