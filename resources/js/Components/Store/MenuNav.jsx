import { Link } from "@inertiajs/react";
import NavBrandCategories from "./NavBrandCategories";
import HardwareMenuList from "./Hardware";

const MenuNav = () => {
  return (
    <>
      <div className="nav-widget-wrapper w-full  h-[60px] relative z-30 bg-qyellow  quomodo-shop-nav-bar lg:block hidden">
        <div className="container-x mx-auto h-full">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-between items-center">
              <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
                <NavBrandCategories></NavBrandCategories>
                <div className="nav">
                  <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                    <li className="relative">
                      <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                        <span>Products</span>
                        <span className="ml-1.5 ">
                          <svg
                            width={10}
                            height={5}
                            viewBox="0 0 10 5"
                            fill="none"
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="9.18359"
                              y="0.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 9.18359 0.90918)"
                            />
                            <rect
                              x="5.08984"
                              y={5}
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(-135 5.08984 5)"
                            />
                          </svg>
                        </span>
                      </span>
                      <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                        <div
                          className="w-full bg-white flex justify-between items-center "
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                          }}
                        >
                          <div className="categories-wrapper w-full h-full p-5">
                            <div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a href="/privacy-policy">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        By Categories
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/terms-condition">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        By Brands
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <HardwareMenuList></HardwareMenuList>
                    <li>
                      <a href="/about">
                        <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                          <span>Government</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                          <span>Contact</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                          <span>About</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/blogs">
                        <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                          <span>Return Policy</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="become-seller-btn">
                <a href="/get-a-quote">
                  <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                    <div className="flex space-x-2 items-center">
                      <span className="text-sm font-600">Get A Quote</span>
                      <span>
                        <svg
                          className="fill-current"
                          width={6}
                          height={10}
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.08984"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(45 1.08984 0)"
                            fill="white"
                          />
                          <rect
                            x={6}
                            y="4.9082"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(135 6 4.9082)"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuNav;
