
import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-2 text-teal-600">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">Data Science • Legal Excellence</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            A data science consulting firm dedicated to{" "}
            <span className="text-teal-600">advancing equity</span> and{" "}
            <span className="text-teal-600">realizing justice</span>.
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We blend traditional investigative approaches with contemporary data science methods to support equity-driven litigation and create meaningful change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
