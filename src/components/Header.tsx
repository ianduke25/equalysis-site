
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c3f6d3c6-3561-42f2-8551-b8b807c096de.png" 
              alt="Equalysis" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Services
            </a>
            <a href="#partners" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Partners
            </a>
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
