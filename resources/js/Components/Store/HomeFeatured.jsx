import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Product from "./Product";

const HomeFeatured = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("/home/featured")
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the products:", error);
          setLoading(false);
        });
    };

    const timer = setTimeout(fetchProducts, 2000);

    return () => clearTimeout(timer);
  }, []);
  const now = moment();

  return (
    <div className="section-style-one new-products mb-[60px]">
      <div className="section-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="section-title flex justify-between items-center mb-5">
            <div>
              <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none">
                Featured
              </h1>
            </div>
            <div>
              <a href="/all-products">
                <div className="flex space-x-2 items-center">
                  <p className="text-base font-600 text-qblack">View More</p>
                  <span className="animate-right-dir">
                    <svg
                      width={17}
                      height={14}
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG content */}
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="section-content">
            <div className="products-section w-full">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                {loading ? (
                  <p>Loading products...</p>
                ) : products.length > 0 ? (
                  products.map((product, index) => {
                    let isOfferActive =
                      moment(product.offer_start_date).isBefore(now) &&
                      moment(product.offer_end_date).isAfter(now);

                    return (
                      <div key={index} data-aos="fade-up" className="aos-init">
                        <Product
                          product={product}
                          isOfferActive={isOfferActive}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>No products found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
