
import { Scale } from "lucide-react";

const partners = [
  {
    name: "Lawyers' Committee for Civil Rights",
    logo: "/lovable-uploads/aaab5316-1813-4487-bc6f-bb56eaec826f.png",
    alt: "Lawyers' Committee for Civil Rights of the San Francisco Bay Area",
    className: "h-16 sm:h-20 md:h-24"
  },
  {
    name: "ACLU",
    logo: "/lovable-uploads/d01e782b-981e-4693-a6ad-abe76a27a08c.png",
    alt: "ACLU",
    className: "h-12 sm:h-16 md:h-20"
  },
  {
    name: "Covington",
    logo: "/lovable-uploads/88eb02cd-82d1-4934-8107-6ad06a2eeddf.png",
    alt: "Covington",
    className: "h-16 sm:h-20 md:h-24"
  },
  {
    name: "Contra Costa Public Defenders",
    logo: "/lovable-uploads/13b77ab8-a3e2-4608-a2ca-7e33b7ddd543.png",
    alt: "Contra Costa Public Defenders",
    className: "h-16 sm:h-20 md:h-24"
  },
  {
    name: "Center for Policing Equity",
    logo: "/lovable-uploads/823b2fb9-2dc6-4984-b1f1-275f694048fa.png",
    alt: "Center for Policing Equity",
    className: "h-16 sm:h-20 md:h-24"
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
            <img 
              src="/lovable-uploads/361fc167-3a71-4a1d-a145-3eb8db8aec2e.png" 
              alt="Equalysis" 
              className="h-6 w-auto"
            />
            <span className="text-sm font-semibold tracking-wide uppercase">Our Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proud to support change makers at
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll space-x-8 sm:space-x-12 md:space-x-16 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className={`${partner.className} w-auto object-contain`}
                  style={{ maxWidth: '200px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
