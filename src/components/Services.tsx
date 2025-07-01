
import { Cpu, FileText, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
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
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
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

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <FileText className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Data Services & Statistical Analysis
              </h3>
              
              <Tabs defaultValue="preprocessing" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="preprocessing" className="text-xs sm:text-sm">Data Preprocessing</TabsTrigger>
                  <TabsTrigger value="reports" className="text-xs sm:text-sm">Statistical Reports</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preprocessing" className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Case-Specific Data Preprocessing</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Real-world data is messy. We offer comprehensive data cleaning and preprocessing services to ensure our clients' data is ready for analysis. Our services cover a range of specialized tasks, including tabulation of unstructured data, conversion of textual location descriptions into geographic coordinates, and private transcription of sensitive audio.
                  </p>
                </TabsContent>
                
                <TabsContent value="reports" className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Statistical Reports and Declarations</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We believe that rigorously vetted, high-quality statistical evidence is essential to substantiating claims in litigation. Equalysis specializes in documenting systemic disparities, providing necessary support for class action lawsuits and claims introduced under the California Racial Justice Act (RJA).
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
