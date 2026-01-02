import {
  Droplet,
  Factory,
  ShieldCheck,
  Users,
  MapPin,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Oil Spill Response",
    description:
      "Rapid and effective cleanup of oil spills in Rivers State and beyond, minimizing environmental impact and restoring ecosystems.",
    features: [
      "Emergency spill containment",
      "Oil skimming & recovery",
      "Bioremediation techniques",
      "Environmental impact assessment",
    ],
    color: "blue",
  },
  {
    icon: Factory,
    title: "Site Remediation",
    description:
      "Comprehensive cleanup and restoration of contaminated industrial and commercial sites, ensuring safety and compliance.",
    features: [
      "Soil decontamination",
      "Groundwater treatment",
      "Waste management",
      "Regulatory compliance",
    ],
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Health & Safety Management",
    description:
      "Implementing best practices in health, safety, and environmental protection to safeguard personnel and communities.",
    features: [
      "Workplace safety audits",
      "Risk assessment",
      "Safety training programs",
      "Emergency preparedness",
    ],
    color: "orange",
  },
  {
    icon: Users,
    title: "Environmental Consulting",
    description:
      "Expert advice on environmental policies, compliance, and sustainability strategies for companies in the oil and gas sector.",
    features: [
      "Regulatory guidance",
      "Sustainability planning",
      "Impact studies",
      "Community engagement",
    ],
    color: "purple",
  },
  {
    icon: MapPin,
    title: "Shell Partnership Projects",
    description:
      "Specialized collaboration with Shell in Rivers State to maintain clean, safe, and sustainable operational sites.",
    features: [
      "Joint site cleanup initiatives",
      "Monitoring & reporting",
      "Training & capacity building",
      "Sustainability programs",
    ],
    color: "red",
  },
  {
    icon: Zap,
    title: "Technology & Innovation",
    description:
      "Using cutting-edge tools and methods to enhance efficiency, safety, and environmental impact in all projects.",
    features: [
      "Remote monitoring solutions",
      "IoT-enabled cleanup devices",
      "Data-driven analysis",
      "Advanced remediation technology",
    ],
    color: "indigo",
  },
];
const colorClasses = {
  blue: {
    bg: "bg-blue-200",
    text: "text-blue-600",
    hover: "group-hover:bg-blue-600",
  },
  purple: {
    bg: "bg-purple-200",
    text: "text-purple-600",
    hover: "group-hover:bg-purple-600",
  },
  green: {
    bg: "bg-green-200",
    text: "text-green-600",
    hover: "group-hover:bg-green-600",
  },
  orange: {
    bg: "bg-orange-200",
    text: "text-orange-600",
    hover: "group-hover:bg-orange-600",
  },
  red: {
    bg: "bg-red-200",
    text: "text-red-600",
    hover: "group-hover:bg-red-600",
  },
  indigo: {
    bg: "bg-indigo-200",
    text: "text-indigo-600",
    hover: "group-hover:bg-indigo-600",
  },
};

export function ServiceOfferings() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="text-gray-900 mb-4">
            Comprehensive Environmental Solutions
          </h2>
          <p className="text-xl text-gray-600">
            We provide complete environmental services from oil spill response
            and site cleanup to ecosystem restoration, ensuring safety,
            compliance, and sustainability in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors =
              colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center mb-6 transition-colors`}
                >
                  <Icon
                    className={`${colors.text} group-hover:text-white transition-colors`}
                    size={28}
                  />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
