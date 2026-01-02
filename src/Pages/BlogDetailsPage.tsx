import { useParams } from "react-router-dom";
import { BlogPosts } from "../lib/blogData";
import { BlogHeroDetils } from "@/component/Blog/blogDetailsHero";
import { FeaturedBlogPost } from "@/component/Blog/FeaturedBlogPost";

const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = BlogPosts.find(p => p.id === parseInt(id || "0"));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <BlogHeroDetils />
      <FeaturedBlogPost id={post.id} />
    </>
  );
};

export default BlogDetailsPage;
