import React from "react";
import { Link } from "@inertiajs/react";
import RightArrow from "../Icon/RightArrow";

const items = [
  {
    title: "GSA Advantage",
    description:
      "Extensive catalog of products and services tailored for federal agencies.",
    image: "/assets/images/banner-2.png",
    link: "/gsa",
  },
  {
    title: "GSA Bidding",
    description:
      "Stay updated with our latest offerings and bid opportunities for federal contracts.",
    image: "/assets/images/banner-1.png",
    link: "/bidding",
  },

  {
    title: "IT Services",
    description:
      "Discover our range of IT services including system integrations, support, and consulting.",
    image: "/assets/images/banner-1.1.png",
    link: "/its",
  },
];

const Website = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="section-style-one category-products mb-[60px] aos-init aos-animate mt-20"
      >
        <div className="section-wrapper w-full ">
          <div className="container-x mx-auto">
            <div className="section-content">
              <div>
                <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-4">
                  EXPLORE OUR EXPERTISE
                </h1>
                <p className="mb-10">
                  Ziker Tech LLC delivers technology transformation through our
                  four practice areas, each dedicated to driving innovation and
                  delivering excellence
                </p>
              </div>
              <div className="w-full products-ads-section mb-[60px]">
                <div className="container-x mx-auto">
                  <Link href="/store">
                    <div className="  items-center w-full  overflow-hidden">
                      <div
                        data-aos=""
                        className="h-full sm:mb-0 mb-5 w-full aos-init"
                      >
                        <img
                          src="/assets/images/ads-3.png"
                          alt="store"
                          className="w-full sm:h-full h-auto"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="products-section w-full">
                <div className="container-x mx-auto">
                  <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                    {items.map((item, index) => (
                      <div className="item" key={index}>
                        <div
                          className=" w-fullrelative group overflow-hidden"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px",
                          }}
                        >
                          <div className="" />
                          <div className="pb-[25px] relative">
                            <img
                              src={item.image}
                              alt=""
                              className="w-full h-full max-h-[260px]"
                            />
                            <p className="px-[30px] pt-[15px]  title mb-2 text-[15px] font-600 text-qblack leading-[24px]">
                              {item.description}
                            </p>
                            <div className="absolute w-full h-10 px-[30px] left-0 top-[390px] group-hover:top-[290px] transition-all duration-300 ease-in-out">
                              <Link href={item.link}>
                                <button type="button" className="yellow-btn">
                                  <div className="flex items-center space-x-3">
                                    <span className="animate-right-dir">
                                      <RightArrow></RightArrow>
                                    </span>
                                    <span>Visit {item.title}</span>
                                  </div>
                                </button>
                              </Link>
                            </div>
                          </div>
                          <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Website;
