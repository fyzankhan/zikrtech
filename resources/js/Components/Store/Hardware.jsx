import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";
const HardwareMenuList = () => {
  const [hardwareMenu, setHardwareMenu] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("hardwareMenu");
    const cachedTime = localStorage.getItem("hardwareMenuTimestamp");

    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
    const currentTime = new Date().getTime();

    if (cachedData && cachedTime && currentTime - cachedTime < thirtyMinutes) {
      // Use cached data if it's less than 30 minutes old
      setHardwareMenu(JSON.parse(cachedData));
    } else {
      axios
        .get("/api/hardware-menu")
        .then((response) => {
          setHardwareMenu(response.data);

          localStorage.setItem("hardwareMenu", JSON.stringify(response.data));
          localStorage.setItem("hardwareMenuTimestamp", new Date().getTime());
        })
        .catch((error) => {
          console.error("Error fetching hardware menu:", error);
        });
    }
  }, []);

  return (
    <>
      <li>
        <span className="flex items-center text-sm font-600 cursor-pointer text-qblacktext">
          <span>Hardware</span>
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
            className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center"
            style={{
              minHeight: 295,
              boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
            }}
          >
            <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
              {hardwareMenu.map((category) => (
                <div key={category.id}>
                  <div className="category">
                    <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                      {category.name}
                    </h1>
                  </div>
                  {category.sub_categories.length > 0 && (
                    <div className="category-items">
                      <ul className="flex flex-col space-y-2">
                        {category.sub_categories.map((subCategory) => (
                          <li key={subCategory.id}>
                            <Link href={`/category/${subCategory.slug}`}>
                              <span className="text-qgray text-sm font-400 border-b border-transparent hover:text-qyellow hover:border-qyellow">
                                {subCategory.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li key={`/sub/${category.id}`}>
                          <a href="">
                            <span className="text-qyellow text-sm font-400 border-b border-transparent hover:text-qyellow hover:border-qyellow">
                              view more
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default HardwareMenuList;
