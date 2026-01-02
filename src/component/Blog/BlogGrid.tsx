import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BlogPosts } from "../../lib/blogData";

export function BlogGrid() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredPosts = BlogPosts.filter(
    post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map(post => (
        <article
          key={post.id}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          onClick={() => navigate(`/blog/${post.id}`)}
        >
          {/* Image */}
          <div className="relative aspect-16/10 overflow-hidden bg-gray-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl text-gray-900 mb-3 h-14 group-hover:text-blue-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Read More */}
            <button
              className="inline-flex items-center gap-1 text-blue-600 hover:gap-2 transition-all cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              Read More
              <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
