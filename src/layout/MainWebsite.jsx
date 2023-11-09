import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainWebsite = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-full px-5 mx-auto max-w-[1300px] my-[80px] mb-[50px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainWebsite;
