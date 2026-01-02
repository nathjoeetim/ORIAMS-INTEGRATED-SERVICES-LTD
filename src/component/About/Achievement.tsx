import { Award, Trophy, Users, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Employees Nationally",
    description: "Talented professionals across 37 states",
  },
  {
    icon: Target,
    value: "5+",
    label: "Global Projects",
    description: "Successfully completed Oil projects",
  },
  {
    icon: Award,
    value: "",
    label: "Industry Awards",
    description: "Recognition for excellence and innovation",
  },
  {
    icon: Trophy,
    value: "₦1B",
    label: "Annual Revenue",
    description: "Consistent financial performance and growth",
  },
];
const achievements = [
  {
    year: "2025",
    title: "Excellence in Environmental Remediation",
    organization: "International Oil & Gas Environmental Association",
  },
  {
    year: "2024",
    title: "Sustainability Leadership Award",
    organization: "Global Environmental Forum",
  },
  {
    year: "2023",
    title: "Innovation in Oil Spill Response",
    organization: "Clean Oceans & Energy Summit",
  },
  {
    year: "2022",
    title: "Top Employer in Environmental Services",
    organization: "Green HR Excellence Awards",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Awards Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Recognition & Awards
          </div>
          <h2 className="text-gray-900 mb-4">Industry Recognition</h2>
          <p className="text-xl text-gray-600">
            Our commitment to excellence has been recognized by leading
            organizations worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                <Award className="text-yellow-600" size={24} />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-lg text-gray-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
