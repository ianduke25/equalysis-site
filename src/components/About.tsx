
import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Legal professionals collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How we help
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Grounded by a unique mission to improve the modernity, efficacy, and reliability 
                of legal investigations, we blend traditional investigative approaches with 
                contemporary data science methods to support equity-driven litigation. We're 
                here to analyze data and employ artificial intelligence in ways that civil rights 
                lawyers, criminal defense investigators, and all those fighting for a more equal 
                world can trust.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Target,
                  title: "Precision & Accuracy",
                  description: "Every analysis is conducted with meticulous attention to detail and scientific rigor."
                },
                {
                  icon: Users,
                  title: "Collaborative Approach",
                  description: "We work closely with legal teams to ensure our insights align with case strategy."
                },
                {
                  icon: Award,
                  title: "Trusted Expertise",
                  description: "Recognized by leading civil rights organizations for our commitment to justice."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
