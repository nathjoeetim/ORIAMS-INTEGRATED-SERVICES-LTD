import { ClipboardList, Users, Cog, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Consultation & Planning",
    description:
      "We begin by understanding your energy needs, goals, and challenges to develop a customized solution strategy.",
  },
  {
    icon: Users,
    number: "02",
    title: "Design & Engineering",
    description:
      "Our expert team designs comprehensive solutions leveraging cutting-edge technology and industry best practices.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Implementation",
    description:
      "We execute the project with precision, managing all aspects from procurement to construction and commissioning.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Support & Optimization",
    description:
      "Continuous monitoring, maintenance, and optimization ensure peak performance and maximum value delivery.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
            Our Process
          </div>
          <h2 className="text-white mb-4">How We Deliver Excellence</h2>
          <p className="text-xl text-blue-100">
            A proven methodology that ensures successful project delivery from
            concept to completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-white/20"></div>
                )}

                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 relative z-10">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-white/30 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
