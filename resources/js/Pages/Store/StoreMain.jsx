import AOS from "aos";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import StoreLayout from "@/Layouts/StoreLayout";
import StoreBanner from "@/Components/Store/StoreBanner";
import Brands from "@/Components/Store/Brands";
import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/Store/AboutUs";
import TechSolution from "@/Components/Store/TechSolution";
import HomeFeatured from "@/Components/Store/HomeFeatured";

const StoreMain = ({ sliders }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <StoreLayout>
        <Head title="Premium IT Hardware & Electronics for Every Need " />
        <div className="w-full  pt-[30px] pb-[60px]">
          <div className="btn w-5 h-5 " />
          <StoreBanner banners={sliders}></StoreBanner>

          <Brands></Brands>
          <div>
            <AboutUs></AboutUs>
          </div>
          <HomeFeatured></HomeFeatured>
          <TechSolution></TechSolution>
          <div className="w-full products-ads-section mb-[60px]">
            <div className="container-x mx-auto">
              <div className="sm:h-[295px] h-full sm:flex xl:space-x-[30px] sm:space-x-5 items-center w-full  overflow-hidden">
                <div
                  data-aos="fade-right"
                  className="h-full sm:mb-0 mb-5 sm:w-1/2 w-full aos-init"
                >
                  <a href="/single-product">
                    <img
                      src="/assets/images/ads-1.png"
                      alt=""
                      className="w-full sm:h-full h-auto"
                    />
                  </a>
                </div>
                <div data-aos="fade-left" className="flex-1 h-full aos-init">
                  <a href="/single-product">
                    <img
                      src="/assets/images/ads-2.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full products-ads-section mb-[60px]">
            <div className="container-x mx-auto">
              <div className="undefined  items-center w-full  overflow-hidden">
                <div
                  data-aos="fade-right"
                  className="h-full sm:mb-0 mb-5 w-full aos-init"
                >
                  <a href="/single-product">
                    <img
                      src="/assets/images/ads-3.png"
                      alt=""
                      className="w-full sm:h-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoreLayout>
    </div>
  );
};

export default StoreMain;
