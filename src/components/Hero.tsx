
import { ArrowRight, Scale, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-teal-600">
              <Scale className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-wide uppercase">Data Science • Legal Excellence</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              A data science consulting firm dedicated to{" "}
              <span className="text-teal-600">advancing equity</span> and{" "}
              <span className="text-teal-600">realizing justice</span>.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We blend traditional investigative approaches with contemporary data science methods to support equity-driven litigation and create meaningful change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Data visualization and legal research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-teal-600" />
                <div>
                  <p className="font-semibold text-gray-900">Data-Driven Results</p>
                  <p className="text-sm text-gray-600">Precision in every analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
