import React from "react";
import Logo from "../Media/Logo";
import RightArrow from "../Icon/RightArrow";
import { Link } from "@inertiajs/react";

const Navbar = () => {
  return (
    <>
      <header className="main-header header-style-one ">
        <div className="header-top bg-qyellow">
          <div className="auto-container">
            <div className="inner-container">
              <div className="top-left"></div>
              <div className="top-right">
                <ul className="contact-list-one">
                  <li>
                    <i className="flaticon-location" /> 2037 MAIN ST VOORHEES,
                    NJ 08043
                    <strong>Address</strong>
                  </li>
                  <li>
                    <i className="flaticon-alarm-clock-1" />
                    Monday - Friday 9am - 6pm
                    <strong>Timing</strong>
                  </li>
                  <li>
                    <i className="flaticon-email-1" />
                    <a href="mailto:sales@zikrtech.com">sales@zikrtech.com</a>
                    <strong>Mail to us</strong>
                  </li>
                  <li>
                    <i className="flaticon-email-1" />
                    <a href="tel:+973-200-7799">+973-200-7799</a>
                    <strong>Call us</strong>
                  </li>
                </ul>
                <button className="nav-toggler">
                  <i className="flaticon flaticon-menu-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Top */}
        {/* Header Lower */}
        <div className="header-lower">
          <div className="container mx-auto">
            <div
              className="flex justify-between items-center"
              style={{ background: "#fff" }}
            >
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logo.svg"
                      width="120"
                      alt=""
                      title=""
                      className="w-30"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer">
                <nav className="main-menu flex">
                  <div className="hidden md:flex">
                    <ul className="flex space-x-4">
                      <li>
                        <Link
                          href="/"
                          className="text-gray-700 hover:text-gray-900 mr-10 font-semibold"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/leadership"
                          className="text-gray-700 hover:text-gray-900  mr-10 font-semibold"
                        >
                          Leadership
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/partners"
                          className="text-gray-700 hover:text-gray-900  mr-10 font-semibold"
                        >
                          Our Partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="text-gray-700 hover:text-gray-900  mr-10 font-semibold"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="text-gray-700 hover:text-gray-900  mr-10 font-semibold"
                        >
                          About Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="flex items-center">
                  <div className="btn-box mr-12">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-centertheme-btn btn-style-one"
                    >
                      GET STARTED
                      <span className="ml-3 mt-2">
                        <RightArrow></RightArrow>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
