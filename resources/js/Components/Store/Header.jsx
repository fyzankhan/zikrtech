import { Link } from "@inertiajs/react";

import Logo from "../Media/Logo";

import MenuNav from "./MenuNav";
import NavCartList from "./NavCartList";

const Header = ({ auth }) => {
  return (
    <>
      <header className="  header-section-wrapper relative">
        <div
          className="w-full bg-grey h-10 border-b border-qgray-border quomodo-shop-top-bar"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container-x mx-auto h-full">
            <div className="flex justify-between items-center h-full">
              <div className="topbar-nav">
                <ul className="flex space-x-6">
                  <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      000-000-0000
                    </span>
                  </li>
                  <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      sales@centraldistributor.com
                    </span>
                  </li>
                </ul>
              </div>
              <div className="topbar-dropdowns sm:block hidden">
                <div className="flex space-x-6">
                  {auth.user ? (
                    <div className="flex space-x-1 items-center">
                      <div>
                        <Link
                          href={route("dashboard")}
                          className="text-xs leading-6 text-qblack font-500"
                        >
                          {`Welcome, ${auth.user.name}`}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex space-x-1 items-center">
                        <div>
                          <Link href={route("login")}>
                            <span className="text-xs leading-6 text-qblack font-500">
                              Login
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <div>|</div>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <div>
                          <Link href={route("register")}>
                            <span className="text-xs leading-6 text-qblack font-500">
                              Signup
                            </span>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[86px] bg-white quomodo-shop-middle-bar lg:block hidden">
          <div className="container-x mx-auto h-full">
            <div className="relative h-full">
              <div className="flex justify-between items-center h-full">
                <div>
                  <Link href="/">
                    <Logo></Logo>
                  </Link>
                </div>
                <div className="w-[517px] h-[44px]">
                  <div className="w-full h-full flex items-center  border border-qgray-border bg-white search-com">
                    <div className="flex-1 bg-red-500 h-full">
                      <form action="#" className="h-full">
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Search for Products, Brands and More..."
                        />
                      </form>
                    </div>

                    <button
                      className=" w-[93px] h-full text-sm font-600  search-btn"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex space-x-6 items-center">
                  <NavCartList></NavCartList>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
          <div className="w-full h-full flex justify-between items-center px-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <div>
              <a href="/">
                <img
                  width={152}
                  height={36}
                  src="/assets/images/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="cart relative cursor-pointer">
              <a href="/cart">
                <span>
                  <svg
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
              <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow text-qblack">
                15
              </span>
            </div>
          </div>
        </div>
        <MenuNav></MenuNav>
      </header>
    </>
  );
};

export default Header;
