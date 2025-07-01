
import { Cpu, FileText, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
            <img 
              src="/lovable-uploads/361fc167-3a71-4a1d-a145-3eb8db8aec2e.png" 
              alt="Equalysis" 
              className="h-6 w-auto"
            />
            <span className="text-sm font-semibold tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We support equity-driven litigation by offering
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`} style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <Cpu className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Machine Learning Training and Deployment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Focusing on reliability and a unique commitment to data privacy, we leverage case-specific data to train custom machine learning models, complemented by the use of secure, private pretrained models.
              </p>
            </CardContent>
          </Card>

          <Card className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`} style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <FileText className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Case-Specific Data Preprocessing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world data is messy. We offer comprehensive data cleaning and preprocessing services to ensure our clients' data is ready for analysis. Our services cover a range of specialized tasks, including tabulation of unstructured data, conversion of textual location descriptions into geographic coordinates, and private transcription of sensitive audio.
              </p>
            </CardContent>
          </Card>

          <Card className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 md:col-span-2 lg:col-span-1 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`} style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <BarChart3 className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Statistical Reports and Declarations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that rigorously vetted, high-quality statistical evidence is essential to substantiating claims in litigation. Equalysis specializes in documenting systemic disparities, providing necessary support for class action lawsuits and claims introduced under the California Racial Justice Act (RJA).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
