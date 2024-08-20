import React, { useState } from "react";
import DownArrow from "../Icon/DownArrow";
import RightArrow from "../Icon/RightArrow";
import RightSmallArrow from "../Icon/RightSmallArrow";

const NavBrandCategories = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open or close the dropdown
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
        <button
          type="button"
          className="w-full h-full flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <div className="flex space-x-3 items-center">
            <span></span>
            <span className="text-sm font-600 text-qblacktext">All Brands</span>
          </div>
          <div>
            <DownArrow></DownArrow>
          </div>
        </button>
        <div
          className={`category-dropdown w-full absolute left-0 top-[53px] overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "h-auto" : "h-0"
          }`}
        >
          <ul className="categories-list">
            <li className="category-item">
              <a href="/brand/hp">
                <div className="flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                  <div className="flex items-center space-x-6">
                    <span></span>
                    <span className="text-xs font-400">HP</span>
                  </div>
                  <div>
                    <span>
                      <RightSmallArrow></RightSmallArrow>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="category-item">
              <a href="/brand/cisco">
                <div className="flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                  <div className="flex items-center space-x-6">
                    <span></span>
                    <span className="text-xs font-400">CISCO</span>
                  </div>
                  <div>
                    <span>
                      {" "}
                      <RightSmallArrow></RightSmallArrow>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="category-item">
                <div className="black-btn  h-[40px] flex justify-center items-center cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-600">View All</span>
                    <span></span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBrandCategories;
