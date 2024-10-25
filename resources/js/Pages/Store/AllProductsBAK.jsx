import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreLayout from "@/Layouts/StoreLayout";
import { Head } from "@inertiajs/react";
import AOS from "aos";
import moment from "moment";
import "aos/dist/aos.css";
import Product from "@/Components/Store/Product";
import ProductsFilter from "@/Components/Store/ProductsFilter";
const AllProducts = ({
  initialProducts = [],
  canLoadMore: initialCanLoadMore,
  nextPage: initialNextPage,
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [canLoadMore, setCanLoadMore] = useState(initialCanLoadMore);
  const [page, setPage] = useState(initialNextPage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight - 900 &&
        !loading &&
        canLoadMore
      ) {
        setLoading(true);
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, canLoadMore]);

  const loadMoreProducts = async () => {
    try {
      const response = await axios.get(route("products.loadMore", { page }));

      setProducts((prevProducts) => [
        ...prevProducts,
        ...response.data?.products,
      ]);
      setCanLoadMore(response.data.canLoadMore);
      setPage(response.data.nextPage);
      setLoading(false);
    } catch (error) {
      console.error("Error loading more products:", error);
      setLoading(false);
    }
  };
  const now = moment();

  return (
    <>
      <StoreLayout>
        <Head title="All Products" />
        <div className="w-full  pt-[30px] pb-[60px]">
          <div className="products-page-wrapper w-full">
            <div className="container-x mx-auto">
              <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]">
                <span>
                  <a href="/">
                    <span className="mx-1 capitalize">home</span>
                  </a>
                  <span className="sperator">/</span>
                </span>
              </div>
              <div className="w-full lg:flex lg:space-x-[30px]">
                <ProductsFilter></ProductsFilter>
                <div className="flex-1">
                  <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                    <div>
                      <p className="font-400 text-[13px]">
                        <span className="text-qgray"> Showing</span> 1–16 of 66
                        results
                      </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <span className="font-400 text-[13px]">Sort by:</span>
                      <div className="flex space-x-3 items-center border-b border-b-qgray">
                        <span className="font-400 text-[13px] text-qgray">
                          Default
                        </span>
                        <span>
                          <svg
                            width={10}
                            height={6}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
                    >
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
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                    {products.length > 0 ? (
                      products.map((product, index) => {
                        let isOfferActive =
                          moment(product.offer_start_date).isBefore(now) &&
                          moment(product.offer_end_date).isAfter(now);

                        return (
                          <div
                            key={index}
                            data-aos="fade-up"
                            className="aos-init"
                          >
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
                  {loading && <div className="text-center">Loading...</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoreLayout>
    </>
  );
};

export default AllProducts;
