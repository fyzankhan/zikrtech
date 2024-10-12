import { Link } from "@inertiajs/react";
import NavBrandCategories from "./NavBrandCategories";

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
                    <li>
                      <Link href="/store">
                        <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                          <span>Home</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                        <span>Shop</span>
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
                      <div className="sub-menu w-full absolute left-0 top-[60px]">
                        <div
                          className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                          style={{
                            minHeight: 295,
                            boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                          }}
                        >
                          <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                            <div>
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  Shop List
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop Sidebar
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop Fullwidth
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop Category Icon
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop Category Icon
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop List View
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div>
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  Product Layouts
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Horizonral Thumbnail
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Vertical Thumbnail
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Gallery Thumbnail
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Sticky Summary
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div>
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  Polular Category
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Phone &amp; Tablet
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Gaming &amp; Sports
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Home Appliance
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Fashion Clothes
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="thumbnil w-[348px] h-full">
                            <div className="w-full h-[235px]">
                              <img
                                width=""
                                src="/assets/images/mega-menu-thumb.jpg"
                                alt=""
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="relative">
                      <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
                        <span>Pages</span>
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
                                        Privacy Policy
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/terms-condition">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Terms and Conditions
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/faq">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        FAQ
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop Category Icon
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/all-products">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">
                                        Shop List View
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
                          <span>Blog</span>
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
