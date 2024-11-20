import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsFilter = ({ slug, pageType }) => {
  const [filters, setFilters] = useState({
    categories: {},
    brands: {},
    priceRange: [200, 500],
  });

  // Fetch options based on the pageType
  const fetchOptions = async () => {
    try {
      if (pageType === "category") {
        // Fetch brands associated with the category
        const brandResponse = await axios.get(`/category/brands/${slug}`);
        const initialBrands = brandResponse.data.brands.reduce((acc, brand) => {
          acc[brand.slug] = false;
          return acc;
        }, {});
        setFilters((prevFilters) => ({
          ...prevFilters,
          brands: initialBrands,
        }));
      } else if (pageType === "brand") {
        // Fetch categories associated with the brand
        const categoryResponse = await axios.get(`/brand/categories/${slug}`);
        const initialCategories = categoryResponse.data.categories.reduce(
          (acc, category) => {
            acc[category.slug] = false;
            return acc;
          },
          {}
        );
        setFilters((prevFilters) => ({
          ...prevFilters,
          categories: initialCategories,
        }));
      }
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, [pageType, slug]);

  const sendAjaxRequest = async () => {
    try {
      const response = await axios.post("/api/products/filter", {
        slug,
        filters,
      });
      console.log("Filter response:", response.data);
    } catch (error) {
      console.error("Error sending filter request:", error);
    }
  };

  const handleFilterChange = (filterType, name, checked) => {
    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000;
    const lastRequestKey = `lastRequestTime_${slug}`;
    const lastRequestTime = localStorage.getItem(lastRequestKey);

    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: {
        ...prevFilters[filterType],
        [name]: checked,
      },
    }));

    if (!lastRequestTime || currentTime - lastRequestTime > oneHour) {
      sendAjaxRequest();
      localStorage.setItem(lastRequestKey, currentTime);
    }
  };

  const handlePriceRangeChange = (index, value) => {
    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000;
    const lastRequestKey = `lastRequestTime_${slug}`;
    const lastRequestTime = localStorage.getItem(lastRequestKey);

    setFilters((prevFilters) => {
      const newPriceRange = [...prevFilters.priceRange];
      newPriceRange[index] = value;
      return { ...prevFilters, priceRange: newPriceRange };
    });

    if (!lastRequestTime || currentTime - lastRequestTime > oneHour) {
      sendAjaxRequest();
      localStorage.setItem(lastRequestKey, currentTime);
    }
  };

  return (
    <div className="lg:w-[270px]">
      <div className="filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px] hidden lg:block">
        {/* Conditionally Render Based on pageType */}
        {pageType === "category" && (
          <div className="filter-subject-item pb-10 border-b border-qgray-border">
            <div className="subject-title mb-[30px]">
              <h1 className="text-black text-base font-500">Brands</h1>
            </div>
            <div className="filter-items">
              <ul>
                {Object.keys(filters.brands).map((brandSlug) => (
                  <li
                    key={brandSlug}
                    className="item flex justify-between items-center mb-5"
                  >
                    <div className="flex space-x-[14px] items-center">
                      <input
                        id={brandSlug}
                        type="checkbox"
                        name={brandSlug}
                        checked={filters.brands[brandSlug]}
                        onChange={(e) =>
                          handleFilterChange(
                            "brands",
                            brandSlug,
                            e.target.checked
                          )
                        }
                      />
                      <label
                        htmlFor={brandSlug}
                        className="text-xs font-black font-400 capitalize"
                      >
                        {brandSlug.replace("-", " ")}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {pageType === "brand" && (
          <div className="filter-subject-item pb-10 border-b border-qgray-border">
            <div className="subject-title mb-[30px]">
              <h1 className="text-black text-base font-500">Categories</h1>
            </div>
            <div className="filter-items">
              <ul>
                {Object.keys(filters.categories).map((categorySlug) => (
                  <li
                    key={categorySlug}
                    className="item flex justify-between items-center mb-5"
                  >
                    <div className="flex space-x-[14px] items-center">
                      <input
                        id={categorySlug}
                        type="checkbox"
                        name={categorySlug}
                        checked={filters.categories[categorySlug]}
                        onChange={(e) =>
                          handleFilterChange(
                            "categories",
                            categorySlug,
                            e.target.checked
                          )
                        }
                      />
                      <label
                        htmlFor={categorySlug}
                        className="text-xs font-black font-400 capitalize"
                      >
                        {categorySlug.replace("-", " ")}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Price Range Filter */}
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">Price Range</h1>
          </div>
          <div className="price-range mb-5">
            <div aria-disabled="false" className="input-range">
              <span className="input-range__label input-range__label--min">
                0
              </span>
              <div className="input-range__track input-range__track--background">
                <div
                  className="input-range__track input-range__track--active"
                  style={{
                    left: `${(filters.priceRange[0] / 1000) * 100}%`,
                    width: `${
                      ((filters.priceRange[1] - filters.priceRange[0]) / 1000) *
                      100
                    }%`,
                  }}
                />
                <span
                  className="input-range__slider-container"
                  style={{
                    position: "absolute",
                    left: `${(filters.priceRange[0] / 1000) * 100}%`,
                  }}
                >
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[0]}
                    onChange={(e) =>
                      handlePriceRangeChange(0, parseInt(e.target.value))
                    }
                    className="input-range__slider"
                  />
                </span>
                <span
                  className="input-range__slider-container"
                  style={{
                    position: "absolute",
                    left: `${(filters.priceRange[1] / 1000) * 100}%`,
                  }}
                >
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      handlePriceRangeChange(1, parseInt(e.target.value))
                    }
                    className="input-range__slider"
                  />
                </span>
              </div>
              <span className="input-range__label input-range__label--max">
                1000
              </span>
            </div>
          </div>
          <p className="text-xs text-qblack font-400">
            Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </p>
        </div>
      </div>
      <div className="w-full hidden lg:block h-[295px]"></div>
    </div>
  );
};

export default ProductsFilter;
