import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import StoreLayout from "@/Layouts/StoreLayout";
import StoreBanner from "@/Components/Store/StoreBanner";
import Brands from "@/Components/Store/Brands";
import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/Store/AboutUs";
import TechSolution from "@/Components/Store/TechSolution";

const StoreMain = ({ auth, sliders }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <StoreLayout auth={auth}>
        <Head title="Premium IT Hardware & Electronics for Every Need " />
        <div className="w-full  pt-[30px] pb-[60px]">
          <div className="btn w-5 h-5 " />
          <StoreBanner banners={sliders}></StoreBanner>

          <TechSolution></TechSolution>
        </div>
      </StoreLayout>
    </div>
  );
};

export default StoreMain;
