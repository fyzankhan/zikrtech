import React, { useState } from "react";
import DownArrow from "../Icon/DownArrow";

const NavBrandCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <span className="text-sm font-600 text-qblacktext">
              All Products
            </span>
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
              <a href="categories">
                <div className="flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                  <div className="flex items-center space-x-6">
                    <span></span>
                    <span className="text-xs font-400">By Categories</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="category-item">
              <a href="/brands">
                <div className="flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                  <div className="flex items-center space-x-6">
                    <span></span>
                    <span className="text-xs font-400">By Brands</span>
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
