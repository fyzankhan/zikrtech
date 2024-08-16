import { useEffect } from "react";

import GuestLayout from "@/Layouts/GuestLayout";
import ListItem from "@/Components/Landing/ListItem";
import Navbar from "@/Components/Landing/Navbar";
import Website from "@/Components/Landing/Website";
import Footer from "@/Components/Landing/Footer";

export default function Landing() {
  return (
    <GuestLayout>
      <div
        className="w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed left-0 top-0 z-50-left-[280px]"
        style={{ display: "none" }}
      >
        <div className="w-full px-5 mt-5 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-5 items-center">
              <div className="compaire relative">
                <a href="/products-compaire">
                  <span>
                    <svg
                      width={20}
                      height={22}
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33556 0.70842C8.33556 1.09592 8.32306 1.41675 8.31056 1.41675C8.29806 1.41675 8.09389 1.45425 7.86473 1.50425C3.90639 2.30425 0.952225 5.43342 0.402225 9.40843C0.273058 10.3168 0.327225 11.7001 0.523058 12.6251C1.01889 14.9918 2.55639 17.2126 4.58973 18.5126L4.82722 18.6626L5.41472 18.2209C5.73556 17.9793 6.00222 17.7709 6.00222 17.7543C6.00222 17.7418 5.89806 17.6751 5.77306 17.6084C5.13556 17.2751 4.30639 16.6084 3.74389 15.9793C2.67722 14.7834 1.99389 13.3251 1.77306 11.7918C1.69389 11.2251 1.69389 10.1001 1.77306 9.56259C1.94389 8.42509 2.34389 7.35009 2.94389 6.40842C3.69389 5.23759 4.83556 4.21259 6.08556 3.58342C6.71889 3.26676 7.59806 2.96675 8.20223 2.85842L8.33556 2.83342V3.41675C8.33556 3.73759 8.34389 4.00009 8.35639 4.00009C8.39806 4.00009 11.0022 2.02925 11.0022 2.00009C11.0022 1.97092 8.39806 8.58307e-05 8.35639 8.58307e-05C8.34389 8.58307e-05 8.33556 0.316753 8.33556 0.70842Z"
                        fill="black"
                      />
                      <path
                        d="M13.9234 3.11266C13.6026 3.35432 13.3443 3.56682 13.3568 3.58349C13.3693 3.60432 13.4943 3.68349 13.6401 3.76266C14.8609 4.45432 15.9984 5.62099 16.7026 6.91683C17.1276 7.69599 17.4859 8.82933 17.5859 9.71266C17.6693 10.4085 17.6193 11.6043 17.4859 12.2377C16.9109 14.9627 15.0151 17.1585 12.3984 18.1335C12.0693 18.2543 11.1776 18.5002 11.0609 18.5002C11.0151 18.5002 11.0026 18.396 11.0026 17.9168C11.0026 17.596 10.9943 17.3335 10.9818 17.3335C10.9401 17.3335 8.33594 19.3043 8.33594 19.3335C8.33594 19.3627 10.9401 21.3335 10.9818 21.3335C10.9943 21.3335 11.0026 21.0168 11.0026 20.6252V19.921L11.1609 19.896C11.5484 19.8335 12.6443 19.5377 13.0026 19.396C16.2526 18.1252 18.4776 15.3085 18.9401 11.8752C19.0609 10.9918 19.0068 9.60849 18.8151 8.70849C18.3193 6.34183 16.7818 4.12099 14.7484 2.82099L14.5109 2.67099L13.9234 3.11266Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </a>
                <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  2
                </span>
              </div>
              <div className="favorite relative">
                <a href="/wishlist">
                  <span>
                    <svg
                      width={21}
                      height={18}
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </a>
                <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  1
                </span>
              </div>
            </div>
            <button type="button">
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0363 33.9994C7.66923 34.031 0.0436412 26.4423 0.000545718 17.0452C-0.0425497 7.68436 7.54917 0.0479251 16.9447 0.00021656C26.3072 -0.0467224 33.9505 7.54277 33.9998 16.9352C34.0483 26.3153 26.4411 33.9679 17.0363 33.9994Z"
                  fill="black"
                />
                <path
                  d="M17.0363 33.9994C26.4411 33.9679 34.0483 26.3153 33.9998 16.9352C33.9505 7.54277 26.3072 -0.0467224 16.9447 0.00021656C7.54917 0.0479251 -0.0425497 7.68436 0.000545718 17.0452C0.0436412 26.4423 7.66846 34.031 17.0363 33.9994ZM23.4629 21.5945C23.4514 21.8445 23.3321 22.0908 23.1305 22.3039C22.7865 22.6671 22.4479 23.0342 22.1039 23.3966C21.5236 24.0084 21.1458 24.0068 20.5648 23.3889C19.4581 22.2124 18.3492 21.0389 17.2533 19.8523C17.0633 19.6461 16.9686 19.6169 16.7608 19.8431C15.6511 21.0512 14.5222 22.2424 13.3978 23.4366C12.8753 23.9914 12.4697 23.9891 11.9388 23.4312C11.6032 23.0788 11.2715 22.7218 10.9399 22.3647C10.4089 21.7938 10.4081 21.3575 10.9376 20.7927C12.0503 19.6046 13.1593 18.4126 14.2836 17.2361C14.4822 17.0283 14.5037 16.9152 14.2921 16.6943C13.1654 15.5193 12.058 14.3266 10.9452 13.1385C10.4004 12.556 10.4042 12.1259 10.9545 11.5387C11.2785 11.1925 11.6009 10.8447 11.9272 10.5007C12.4821 9.91666 12.8822 9.92358 13.4417 10.5192C14.5468 11.6965 15.6588 12.8677 16.7516 14.0573C16.9671 14.2912 17.071 14.2651 17.271 14.0473C18.3831 12.8415 19.5082 11.6472 20.6363 10.4561C21.1273 9.93743 21.5521 9.94359 22.0469 10.4576C22.3848 10.8085 22.7157 11.1655 23.0474 11.5226C23.6115 12.1289 23.6122 12.5552 23.052 13.1539C21.9477 14.3328 20.8503 15.517 19.7321 16.6828C19.5058 16.9183 19.5382 17.0391 19.7475 17.2584C20.8641 18.4249 21.9623 19.6092 23.0681 20.7865C23.2721 21.002 23.456 21.229 23.4629 21.5945Z"
                  fill="#FE4949"
                />
                <path
                  d="M23.4614 21.5947C23.4545 21.2292 23.2706 21.0022 23.0659 20.7844C21.9608 19.6071 20.8619 18.4228 19.7452 17.2563C19.5359 17.0377 19.5036 16.9169 19.7298 16.6807C20.848 15.5157 21.9454 14.3307 23.0497 13.1518C23.61 12.5539 23.6084 12.1276 23.0451 11.5205C22.7134 11.1635 22.3825 10.8064 22.0447 10.4555C21.5498 9.9415 21.125 9.93611 20.6341 10.454C19.5059 11.6452 18.3808 12.8394 17.2688 14.0452C17.0679 14.263 16.964 14.2891 16.7493 14.0552C15.6565 12.8663 14.5445 11.6952 13.4394 10.5171C12.88 9.92149 12.4798 9.91456 11.9249 10.4986C11.5979 10.8426 11.2762 11.1904 10.9522 11.5367C10.402 12.1238 10.3981 12.5547 10.943 13.1364C12.0558 14.3245 13.1632 15.5172 14.2898 16.6922C14.5014 16.9131 14.4799 17.0254 14.2813 17.234C13.157 18.4113 12.0481 19.6025 10.9353 20.7906C10.4058 21.3561 10.4074 21.7917 10.9376 22.3626C11.2693 22.7197 11.601 23.076 11.9365 23.4291C12.4675 23.987 12.873 23.9893 13.3956 23.4345C14.5207 22.2403 15.6488 21.0491 16.7586 19.841C16.9671 19.614 17.061 19.644 17.2511 19.8502C18.3469 21.0368 19.4559 22.2103 20.5625 23.3868C21.1435 24.0047 21.5214 24.0063 22.1016 23.3945C22.4456 23.0321 22.7842 22.6643 23.1282 22.3018C23.3306 22.091 23.4507 21.8448 23.4614 21.5947Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full mt-5 px-5">
          <div className="search-bar w-full h-[34px]  flex ">
            <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
              <input
                type="text"
                className="w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 "
                placeholder="Search Product..."
              />
            </div>
            <div className="w-[40px] h-full bg-qyellow flex justify-center items-center">
              <span>
                <svg
                  width={23}
                  height={23}
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.83158C0.0484783 8.43809 0.0969566 8.04461 0.169674 7.67571C0.484783 5.92962 1.2362 4.42946 2.39968 3.12604C3.75707 1.60128 5.45381 0.592971 7.44142 0.199486C9.76838 -0.267779 11.9741 0.0765214 14.0345 1.33076C16.3614 2.75714 17.84 4.82294 18.3975 7.50356C18.8823 9.7907 18.5187 11.9795 17.4037 14.0453C17.1856 14.4388 17.1856 14.4388 17.5007 14.7585C19.1247 16.4062 20.7487 18.0539 22.3727 19.7016C22.906 20.2427 23.1242 20.8575 22.9302 21.5953C22.5667 22.9971 20.8457 23.5135 19.7549 22.3822C18.8338 21.4231 17.9127 20.5132 16.9674 19.5541C16.216 18.7917 15.4888 18.0539 14.7374 17.2915C14.6889 17.2423 14.6404 17.1932 14.6162 17.1686C14.0345 17.4637 13.5012 17.808 12.9195 18.0539C10.4228 19.1114 7.90196 19.0868 5.42957 17.9555C3.56316 17.0948 2.15728 15.7422 1.16348 13.9469C0.533261 12.791 0.145435 11.5614 0.0484783 10.2334C0.0484783 10.1596 0.0242392 10.0858 0 10.012C0 9.64314 0 9.22507 0 8.83158ZM3.00566 9.4464C3.00566 12.9632 5.84164 15.816 9.30784 15.816C12.774 15.7914 15.5615 12.9632 15.5858 9.4464C15.5858 5.95422 12.7498 3.07685 9.30784 3.07685C5.8174 3.07685 3.00566 5.92962 3.00566 9.4464Z"
                    fill="#1D1D1D"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 px-5 flex items-center space-x-3">
          <span className="text-base font-semibold  text-qgray">
            Categories
          </span>
          <span className="w-[1px] h-[14px] bg-qgray" />
          <span className="text-base font-semibold text-qblack">Main Menu</span>
        </div>
        <div className="menu-item mt-5 w-full">
          <ul className="categories-list">
            <li className="category-item">
              <a href="/">
                <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-400">Home</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        width={6}
                        height={9}
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.49805"
                          y="0.818359"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(45 1.49805 0.818359)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="5.58984"
                          y="4.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 5.58984 4.90918)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <ul className="submenu-list ml-5">
                <li className="category-item">
                  <a href="/home-two">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">Home Two</span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width={6}
                            height={9}
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.49805"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.49805 0.818359)"
                              fill="#1D1D1D"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                              fill="#1D1D1D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-item">
                  <a href="/home-three">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">Home Three</span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width={6}
                            height={9}
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.49805"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.49805 0.818359)"
                              fill="#1D1D1D"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                              fill="#1D1D1D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-item">
                  <a href="/home-four">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">Home Four</span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width={6}
                            height={9}
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.49805"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.49805 0.818359)"
                              fill="#1D1D1D"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                              fill="#1D1D1D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="category-item">
              <a href="/shops/shop">
                <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-400">Shop</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        width={6}
                        height={9}
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.49805"
                          y="0.818359"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(45 1.49805 0.818359)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="5.58984"
                          y="4.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 5.58984 4.90918)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-400">Pages</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        width={6}
                        height={9}
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.49805"
                          y="0.818359"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(45 1.49805 0.818359)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="5.58984"
                          y="4.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 5.58984 4.90918)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <ul className="submenu-list ml-5">
                <li className="category-item">
                  <a href="/privacy-policy">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">Privacy Policy</span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width={6}
                            height={9}
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.49805"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.49805 0.818359)"
                              fill="#1D1D1D"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                              fill="#1D1D1D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-item">
                  <a href="/faq">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">FAQ</span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width={6}
                            height={9}
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.49805"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.49805 0.818359)"
                              fill="#1D1D1D"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                              fill="#1D1D1D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="category-item">
                  <a href="/terms-condition">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">
                          Terms and Conditions
                        </span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width={6}
                            height={9}
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.49805"
                              y="0.818359"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(45 1.49805 0.818359)"
                              fill="#1D1D1D"
                            />
                            <rect
                              x="5.58984"
                              y="4.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 5.58984 4.90918)"
                              fill="#1D1D1D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="category-item">
              <a href="/about">
                <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-400">About</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        width={6}
                        height={9}
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.49805"
                          y="0.818359"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(45 1.49805 0.818359)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="5.58984"
                          y="4.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 5.58984 4.90918)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="category-item">
              <a href="/Blogs">
                <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-400">Blogs</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        width={6}
                        height={9}
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.49805"
                          y="0.818359"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(45 1.49805 0.818359)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="5.58984"
                          y="4.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 5.58984 4.90918)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="category-item">
              <a href="/contact">
                <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-400">Contact</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        width={6}
                        height={9}
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.49805"
                          y="0.818359"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(45 1.49805 0.818359)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="5.58984"
                          y="4.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 5.58984 4.90918)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Navbar></Navbar>
      <Website></Website>
      <Footer></Footer>
    </GuestLayout>
  );
}
