import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Robert Anderson",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjcyNTI1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "With over 25 years in the energy sector, Robert leads our global operations and strategic vision.",
  },
  {
    name: "Sarah Mitchell",
    position: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjcyNTI1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Sarah oversees operational excellence and efficiency across all our production facilities worldwide.",
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1635184551030-5802a699c71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyeSUyMHdvcmtlciUyMGVuZ2luZWVyfGVufDF8fHx8MTc2NzI1MjUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Michael drives innovation and technology strategy, focusing on clean energy and digital transformation.",
  },
  {
    name: "Jennifer Brown",
    position: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjcyMDEyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Jennifer manages financial strategy and investor relations, ensuring sustainable growth and value creation.",
  },
];

export function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Leadership
          </div>
          <h2 className="text-gray-900 mb-4">Meet Our Executive Team</h2>
          <p className="text-xl text-gray-600">
            Our experienced leadership team brings together decades of industry
            expertise and a shared commitment to innovation and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square w-full h-72.5 overflow-hidden bg-gray-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-72.5 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
