import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import Brands from "./Brands";

const StoreBanner = ({ banners }) => {
  const [banner1, setBanner1] = useState(banners.find((b) => b.id === 1));
  const [banner2, setBanner2] = useState(banners.find((b) => b.id === 2));
  const [banner3, setBanner3] = useState(banners.find((b) => b.id === 3));
  return (
    <>
      <div className="w-full banner-wrapper mb-[60px]">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
              <div
                data-aos="fade-right"
                className="xl:w-[740px] w-full h-full aos-init aos-animate banner-plain "
                style={{
                  backgroundImage: `url(${banner1?.banner})`,
                }}
              >
                <Brands></Brands>
              </div>
              <div
                data-aos="fade-left"
                className="flex-1 flex xl:flex-col flex-row xl:space-y-[30px] h-full aos-init aos-animate "
              >
                <div
                  className="w-full xl:h-1/2  banner-plain"
                  style={{
                    backgroundImage: `url(${banner2?.banner})`,
                  }}
                ></div>
                <div
                  className="w-full xl:h-1/2  banner-plain"
                  style={{
                    backgroundImage: `url(${banner3?.banner})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreBanner;
