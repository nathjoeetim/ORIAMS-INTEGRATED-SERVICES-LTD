import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Rivers State Oil Spill Response",
    category: "Onshore Cleanup",
    location: "Rivers State, Nigeria",
    image:
      "https://images.unsplash.com/photo-1758797849151-1725021be42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoil%20spill%20cleanup%7Coffshore%7Cpetroleum&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Shell Partnership Spill Remediation",
    category: "Offshore Response",
    location: "Bonny Island, Nigeria",
    image:
      "https://images.unsplash.com/photo-1680970422424-f63d2355adb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoil%20spill%20cleanup%7Coffshore%7Cpetroleum&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Community Site Restoration",
    category: "Environmental Remediation",
    location: "Ogoni Region, Nigeria",
    image:
      "https://images.unsplash.com/photo-1758797899821-46e9aa667409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoil%20spill%20cleanup%7Cenvironment%7Cremediation&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Projects
          </div>
          <h2 className="text-gray-900 mb-4">
            Featured Environmental Cleanup Projects Nationwide
          </h2>
          <p className="text-xl text-gray-600">
            View our portfolio of environmental remediation projects,
            highlighting our proven track record, technical expertise, and
            dedication to restoring affected sites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.location}</p>
                <button className="group/btn text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  View Project
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
