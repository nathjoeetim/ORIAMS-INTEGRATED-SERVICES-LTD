import { BlogHeroDetils } from "@/component/Blog/blogDetailsHero";
import { BlogGrid } from "@/component/Blog/BlogGrid";
// import { BlogHero } from "@/component/Blog/BlogHero";
import { Contact } from "@/component/Home/contacts";

const BlogPage = () => {
  return (
    <>
      {/* <BlogHero /> */}
      <BlogHeroDetils />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default BlogPage;
