
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/c3f6d3c6-3561-42f2-8551-b8b807c096de.png" 
                alt="Equalysis" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A data science consulting firm dedicated to advancing equity and realizing justice 
              through innovative analytical approaches and cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 text-teal-400">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">Justice Through Data</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Data Analysis</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Statistical Reports</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Database Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span>contact@equalysis.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Equalysis. All rights reserved. | Advancing equity through data science.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
