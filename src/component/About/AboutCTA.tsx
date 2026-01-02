// import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AboutCTA() {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate("/"); // Navigate to home first
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to ensure home page has rendered
  };
  return (
    <section className="py-20 bg-linear-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-6">
            Join Us in Shaping the Future of Energy
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Whether you're looking to partner with us, explore career
            opportunities, or learn more about our sustainable energy solutions,
            we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2">
              Explore Careers
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button> */}
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors">
              Download Company Safety Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
