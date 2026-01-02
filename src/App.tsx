import { Routes, Route } from "react-router-dom";
import HomePageComponent from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import NotFoundPage from "./Pages/Error";
import { AboutPage } from "./Pages/About";
import { ServicesPage } from "./Pages/Services";
import ScrollToTop from "./component/ScrollToTop";
import ProjectPageComponent from "./Pages/Project";
import BlogPage from "./Pages/Blog";
import BlogDetailsPage from "./Pages/BlogDetailsPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<HomePageComponent />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectPageComponent />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
