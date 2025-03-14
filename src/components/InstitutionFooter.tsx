
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const InstitutionFooter = () => {
  return (
    <footer className="bg-secondary text-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-display font-bold">Achiever's Academy</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering students with knowledge and skills for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Admissions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Campus Life</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Library</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Alumni</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <address className="not-italic text-muted-foreground space-y-4">
              <p>123 Education Street,<br />Academic District,<br />Knowledge City, 12345</p>
              <p>Email: info@achieversacademy.edu</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Achiever's Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InstitutionFooter;
