
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              A data science consulting firm dedicated to{" "}
              <span className="text-teal-600">advancing equity</span> and{" "}
              <span className="text-teal-600">realizing justice</span>.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We blend traditional investigative approaches with contemporary data science methods to support equity-driven litigation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/testimonials">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 w-full">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/37f21012-544f-412b-be74-5930075c95b3.png"
                alt="Golden Gate Bridge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
