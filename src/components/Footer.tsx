
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hotel-charcoal text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-semibold mb-4">Serene Haven</div>
            <p className="text-white/70 mb-6 text-sm">
              Where luxury meets comfort. Experience unparalleled hospitality in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hotel-transition">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hotel-transition">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4Zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hotel-transition">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.988 6.731a3.896 3.896 0 0 0-3.917-3.931h-.05A3.893 3.893 0 0 0 10.113 6.8l-.013.152a1.23 1.23 0 0 1-.319.687 1.249 1.249 0 0 1-.693.299h-.09a1.282 1.282 0 0 1-.717-.27 1.26 1.26 0 0 1-.333-.635 7.911 7.911 0 0 0-3.747 1.65 7.72 7.72 0 0 0-2.62 3.551 7.577 7.577 0 0 0 1.574 8.067 7.99 7.99 0 0 0 3.185 2.17c1.2.469 2.486.643 3.752.511a8.588 8.588 0 0 0 3.599-1.215 8.134 8.134 0 0 0 2.728-3.164 7.935 7.935 0 0 0 .956-3.778v-.002c.002-.7.277-1.372.77-1.867a3.726 3.726 0 0 0 .724-2.12 3.733 3.733 0 0 0-.726-2.228l-.005-.005a.652.652 0 0 1-.15-.872Z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Rooms & Suites', 'Amenities', 'Dining', 'Spa & Wellness'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white flex items-center group hotel-transition">
                    <span>{link}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 hotel-transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-6">Support</h3>
            <ul className="space-y-4">
              {['FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white flex items-center group hotel-transition">
                    <span>{link}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 hotel-transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4 text-sm">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-md w-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-hotel-accent/50"
                />
                <button
                  type="submit"
                  className="bg-hotel-accent text-white px-4 py-2 rounded-r-md hover:bg-hotel-accent/90 hotel-transition"
                >
                  Send
                </button>
              </div>
            </form>
            <p className="text-white/50 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm">
            &copy; {currentYear} Serene Haven. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm hotel-transition">Privacy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm hotel-transition">Terms</a>
            <a href="#" className="text-white/50 hover:text-white text-sm hotel-transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
