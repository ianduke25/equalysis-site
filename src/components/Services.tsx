
import { Database, Cpu, FileText, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Cpu,
    title: "Machine Learning Training and Deployment",
    description: "Focusing on reliability and a unique commitment to data privacy, we leverage case-specific data to train custom machine learning models, complemented by the use of secure, private pretrained models."
  },
  {
    icon: Database,
    title: "Thoughtfully Designed Tools and Databases",
    description: "Prioritizing accessibility, Equalysis provides all community partners with complementary access to regularly updated investigative tools and databases."
  },
  {
    icon: FileText,
    title: "Case-Specific Data Preprocessing and Statistical Reports",
    description: "Real-world data is messy. We offer comprehensive data cleaning and preprocessing services to ensure our clients' data is ready for rigorous statistical analysis. Our services cover a range of specialized tasks, including tabulation of unstructured data, conversion of textual location descriptions into geographic coordinates, and private transcription of sensitive audio."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We support equity-driven litigation by offering
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
