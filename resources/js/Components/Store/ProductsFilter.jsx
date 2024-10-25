const ProductsFilter = () => {
  return (
    <>
      {" "}
      <div className="lg:w-[270px]">
        {/* Filter Bar */}
        Filter bar here
        {/* <div className="filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">
    <div className="filter-subject-item pb-10 border-b border-qgray-border">
      <div className="subject-title mb-[30px]">
        <h1 className="text-black text-base font-500">
          Product categories
        </h1>
      </div>
      <div className="filter-items">
        <ul>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="mobileLaptop"
                    type="checkbox"
                    name="mobileLaptop"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mobileLaptop"
                  className="text-xs font-black font-400 capitalize"
                >
                  Mobile & Laptops
                </label>
              </div>
            </div>
            <div>
              <span className="cursor-pointer">
                <svg
                  width={10}
                  height={10}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y={4}
                    width={10}
                    height={2}
                    fill="#C4C4C4"
                  />
                  <rect
                    x={6}
                    width={10}
                    height={2}
                    transform="rotate(90 6 0)"
                    fill="#C4C4C4"
                  />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
      <div className="subject-title mb-[30px]">
        <h1 className="text-black text-base font-500">
          Price Range
        </h1>
      </div>
      <div className="price-range mb-5">
        <div aria-disabled="false" className="input-range">
          <span className="input-range__label input-range__label--min">
            <span className="input-range__label-container">
              0
            </span>
          </span>
          <div className="input-range__track input-range__track--background">
            <div
              className="input-range__track input-range__track--active"
              style={{ left: "20%", width: "30%" }}
            />
            <span
              className="input-range__slider-container"
              style={{ position: "absolute", left: "20%" }}
            >
              <span className="input-range__label input-range__label--value">
                <span className="input-range__label-container">
                  200
                </span>
              </span>
              <div
                aria-valuemax={500}
                aria-valuemin={0}
                aria-valuenow={200}
                className="input-range__slider"
                draggable="false"
                role="slider"
                tabIndex={0}
              />
            </span>
            <span
              className="input-range__slider-container"
              style={{ position: "absolute", left: "50%" }}
            >
              <span className="input-range__label input-range__label--value">
                <span className="input-range__label-container">
                  500
                </span>
              </span>
              <div
                aria-valuemax={1000}
                aria-valuemin={200}
                aria-valuenow={500}
                className="input-range__slider"
                draggable="false"
                role="slider"
                tabIndex={0}
              />
            </span>
          </div>
          <span className="input-range__label input-range__label--max">
            <span className="input-range__label-container">
              1000
            </span>
          </span>
        </div>
      </div>
      <p className="text-xs text-qblack font-400">
        Price: $200 - $500
      </p>
    </div>
    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
      <div className="subject-title mb-[30px]">
        <h1 className="text-black text-base font-500">
          Brands
        </h1>
      </div>
      <div className="filter-items">
        <ul>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="apple"
                    type="checkbox"
                    name="apple"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="apple"
                  className="text-xs font-black font-400 capitalize"
                >
                  apple
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
      <div className="subject-title mb-[30px]">
        <h1 className="text-black text-base font-500">
          Storage
        </h1>
      </div>
      <div className="filter-items">
        <div className="flex space-x-[5px] flex-wrap">
          <span className=" font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px]  text-qgray ">
            64GB
          </span>
          <span className=" font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px]  text-qgray ">
            128GB
          </span>
          <span className=" font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px]  text-qgray ">
            256GB
          </span>
          <span className=" font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px]  text-qgray ">
            512GB
          </span>
          <span className=" font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px]  text-qgray ">
            1024GB
          </span>
        </div>
      </div>
    </div>
    <div className="filter-subject-item pb-10 mt-10">
      <div className="subject-title mb-[30px]">
        <h1 className="text-black text-base font-500">Sizes</h1>
      </div>
      <div className="filter-items">
        <ul>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="sizeS"
                    type="checkbox"
                    name="sizeS"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sizeS"
                  className="text-xs font-black font-400 capitalize"
                >
                  s
                </label>
              </div>
            </div>
          </li>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="sizeM"
                    type="checkbox"
                    name="sizeM"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sizeM"
                  className="text-xs font-black font-400 capitalize"
                >
                  M
                </label>
              </div>
            </div>
          </li>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="sizeXL"
                    type="checkbox"
                    name="sizeXL"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sizeXL"
                  className="text-xs font-black font-400 capitalize"
                >
                  XL
                </label>
              </div>
            </div>
          </li>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="sizeXXL"
                    type="checkbox"
                    name="sizeXXL"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sizeXXL"
                  className="text-xs font-black font-400 capitalize"
                >
                  XXL
                </label>
              </div>
            </div>
          </li>
          <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
              <div>
                <div>
                  <input
                    id="sizeFit"
                    type="checkbox"
                    name="sizeFit"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sizeFit"
                  className="text-xs font-black font-400 capitalize"
                >
                  Sliem Fit
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <button
      type="button"
      className="w-10 h-10 fixed top-5 right-5 z-50 rounded  lg:hidden flex justify-center items-center border border-qred text-qred"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div> */}
        <div className="w-full hidden lg:block h-[295px]"></div>
      </div>
    </>
  );
};

export default ProductsFilter;
