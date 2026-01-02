const timeline = [
  {
    year: "1985",
    title: "Company Founded",
    description:
      "PetroCore was established with a vision to revolutionize the energy sector through innovation and sustainability.",
  },
  {
    year: "1992",
    title: "Global Expansion",
    description:
      "Expanded operations to 25 countries, establishing a strong international presence in key energy markets.",
  },
  {
    year: "2005",
    title: "Sustainability Initiative",
    description:
      "Launched our first major sustainability program, committing to reduce carbon emissions by 30%.",
  },
  {
    year: "2015",
    title: "Technology Innovation",
    description:
      "Invested $2B in clean energy technology and advanced exploration techniques.",
  },
  {
    year: "2020",
    title: "Renewable Energy",
    description:
      "Diversified portfolio to include wind, solar, and hydrogen energy solutions.",
  },
  {
    year: "2026",
    title: "Carbon Neutral Goal",
    description:
      "Set ambitious target to achieve carbon neutrality across all operations by 2030.",
  },
];

export function CompanyHistory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Journey
          </div>
          <h2 className="text-gray-900 mb-4">Four Decades of Excellence</h2>
          <p className="text-xl text-gray-600">
            From a small regional operator to a global energy leader, our
            journey has been marked by innovation, growth, and commitment to
            sustainability.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}
                >
                  <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
