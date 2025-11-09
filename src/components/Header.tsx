import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img 
                src="/lovable-uploads/c3f6d3c6-3561-42f2-8551-b8b807c096de.png" 
                alt="Equalysis" 
                className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-sm lg:text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-sm lg:text-base"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-sm lg:text-base"
            >
              Partners
            </button>
            <ContactForm />
          </nav>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-base text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-base text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-base text-left"
              >
                Partners
              </button>
              <div className="pt-2">
                <ContactForm />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
