import { Eye, Lightbulb, Target, HeartHandshake } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-blue-600" size={32} />
            </div>
            <h2 className="text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To protect ecosystems and communities from the devastating effects
              of oil spills by delivering rapid, effective, and sustainable
              cleanup solutions. We are committed to minimizing environmental
              damage, advancing safety standards, and promoting ecological
              restoration through innovation, expertise, and operational
              excellence.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">
                  Respond swiftly to oil spills and environmental emergencies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">
                  Implement eco-friendly and scientifically proven cleanup
                  techniques
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">
                  Foster community awareness and environmental stewardship
                </span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h2 className="text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be the global leader in oil spill response and environmental
              restoration, setting the benchmark for innovation, efficiency, and
              ecological responsibility. We aim to ensure that every oil spill
              is managed swiftly and safely, leaving minimal impact on
              ecosystems and fostering a sustainable balance between industry
              operations and environmental protection.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">
                  Achieve zero environmental contamination in all response
                  operations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">
                  Lead research in innovative spill remediation technologies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">
                  Build global partnerships for sustainable marine and coastal
                  conservation
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 bg-linear-to-br from-blue-600 to-blue-700 p-10 rounded-2xl text-white">
          <div className="text-center mb-10">
            <h2 className="text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100">
              The principles that guide every decision and action we take in
              protecting the environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-2">Excellence</h3>
              <p className="text-blue-100">
                Ensuring the highest standards in spill response and
                environmental safety
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-2">Innovation</h3>
              <p className="text-blue-100">
                Developing cutting-edge technologies to accelerate cleanup and
                restoration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-2">Integrity</h3>
              <p className="text-blue-100">
                Upholding transparency, ethics, and accountability in all
                operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-2">Responsibility</h3>
              <p className="text-blue-100">
                Protecting ecosystems, communities, and employees through every
                project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
