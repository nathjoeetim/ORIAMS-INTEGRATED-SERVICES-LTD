import { Leaf, Recycle, Droplet, Target } from "lucide-react";

const initiatives = [
  {
    icon: Leaf,
    title: "Carbon Neutral Operations",
    description:
      "Committed to achieving net-zero carbon emissions across all remediation projects",
    progress: 60,
  },
  {
    icon: Recycle,
    title: "Waste & Contaminant Reduction",
    description:
      "Reducing hazardous waste and oil-contaminated materials through recycling and proper disposal",
    progress: 75,
  },
  {
    icon: Droplet,
    title: "Water Protection Programs",
    description:
      "Advanced water recovery and treatment systems to prevent contamination of rivers and seas",
    progress: 85,
  },
  {
    icon: Target,
    title: "Renewable & Sustainable Practices",
    description:
      "Integrating 40% renewable energy solutions into our operational processes",
    progress: 45,
  },
];

export function Sustainability() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-green-300 text-green-700 rounded-full mb-4">
              Sustainability & HSE Commitment
            </div>
            <h2 className="text-gray-900 mb-6">Protecting Our Environment</h2>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in cleaning oil spillage and hazardous site
              remediation. Our sustainability program ensures safe operations,
              reduces environmental impact, and restores ecosystems affected by
              oil and chemical spills.
            </p>
            <p className="text-gray-600 mb-8">
              Through innovation, partnerships, and responsible practices, we
              aim to lead in environmental protection while maintaining
              operational excellence. Our initiatives balance ecological
              restoration with sustainable energy operations.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <div className="text-2xl font-semibold text-green-700 mb-1">
                  80%
                </div>
                <div className="text-sm text-gray-700">
                  Oil Contamination Reduction
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-semibold text-blue-700 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-700">
                  Rivers & Sites Remediated
                </div>
              </div>
            </div>
          </div>

          {/* Initiatives */}
          <div className="space-y-6">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="text-green-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-gray-900">
                        {initiative.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
