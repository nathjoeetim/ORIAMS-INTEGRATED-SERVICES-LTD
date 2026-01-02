import { BlogPosts } from "@/lib/blogData";
import { Calendar, Clock } from "lucide-react";
import { BlogGrid } from "./BlogGrid";

export function FeaturedBlogPost({ id }: { id: number }) {
  const featuredPost = BlogPosts.find(post => post.id === id);
  if (!featuredPost) return null;
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Featured Article
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {featuredPost.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> <span>{featuredPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> <span>{featuredPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-lg">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-100 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-gray-800">
          {featuredPost.content.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="text-2xl text-gray-900 font-semibold mb-2">
                {section.heading}
              </h2>
              <p className="text-justify">{section.text}</p>
            </div>
          ))}

          {/* Quote
          {featuredPost..map((quote, idx) => (
            <blockquote
              key={idx}
              className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-8"
            >
              “{quote.text}” —{" "}
              <span className="font-semibold">{quote.author}</span>
            </blockquote>
          ))} */}
        </article>

        {/* Author */}
        <div className="flex items-center gap-4 mt-12 mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {featuredPost.author.name
              .split(" ")
              .map(n => n[0])
              .join("")}
          </div>
          <div>
            <div className="text-gray-900 font-semibold">
              {featuredPost.author.name}
            </div>
            <div className="text-gray-500">{featuredPost.author.role}</div>
          </div>
        </div>

        {/* Related Posts */}
      </div>
      <div className="mt-16 ">
        <h3 className="text-2xl font-TinosSemibold mb-6 h-12.5 flex flex-row items-center justify-center">
          Other Articles
        </h3>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid />
        </div>
      </div>
    </section>
  );
}
