import { Footer } from "@/component/fotter";
import { Header } from "@/component/Home/Header";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen scrollbar-hide">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
