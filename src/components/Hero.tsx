import { Scale, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Main Branding Section (Left) */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/361fc167-3a71-4a1d-a145-3eb8db8aec2e.png" 
                alt="Equalysis" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A data science consulting firm dedicated to advancing equity and realizing justice.
            </p>
          </div>

          {/* Empty div to push Contact to far right */}
          <div></div>

          {/* Contact Section (Far Right) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span>ian@equalysis.org</span>
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

