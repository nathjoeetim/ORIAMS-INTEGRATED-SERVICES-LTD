import { CheckCircle } from "lucide-react";

const featuredServices = [
  {
    title: "Rapid Oil Spill Response",
    description:
      "Deploying specialized teams and equipment to contain and clean up oil spills quickly, minimizing environmental damage and restoring affected areas.",
    image:
      "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZzaG9yZSUyMG9pbCUyMHBsYXRmb3JtfGVufDF8fHx8MTc2NzI2Njk5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Emergency containment booms and barriers",
      "Skimming and recovery of spilled oil",
      "Rapid mobilization of cleanup teams",
      "Reduced environmental and economic impact",
    ],
    reverse: false,
  },
  {
    title: "Contaminated Site Remediation",
    description:
      "Comprehensive cleanup of industrial and commercial sites affected by oil and chemical spills, restoring soil and water quality to safe levels.",
    image:
      "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwY29udGFtaW5hdGlvbnxlbnwwfHx8fDE2NzcyNTA0NjV8&ixlib=rb-4.1.0&q=80&w=1080",
    benefits: [
      "Soil decontamination and treatment",
      "Groundwater purification systems",
      "Safe disposal of hazardous waste",
      "Compliance with environmental regulations",
    ],
    reverse: true,
  },
  {
    title: "Environmental Monitoring & Assessment",
    description:
      "Ongoing monitoring and analysis to ensure that cleanup operations are effective and ecosystems are restored safely.",
    image:
      "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NjcyNTA0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Water and soil quality testing",
      "Wildlife impact assessments",
      "Remote sensing and drone surveys",
      "Data-driven environmental reporting",
    ],
    reverse: false,
  },
];

export function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-14">
          Our Blog
        </div> */}
        <div className="space-y-20">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-100 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h2 className="text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* <button className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
