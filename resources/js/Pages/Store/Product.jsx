import StoreLayout from "@/Layouts/StoreLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import moment from "moment";
import ProductImages from "@/Components/Store/ProductImages";
import AddToCartButton from "@/Components/Store/AddToCartButton";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const now = moment();

  const isOfferActive =
    moment(product.offer_start_date).isBefore(now) &&
    moment(product.offer_end_date).isAfter(now);

  const handleAddToCart = () => {
    axios
      .post("/cart/add", {
        product_id: product.id,
        qty: quantity,
      })
      .then((response) => {
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add product to cart. Please try again.");
      });
  };

  return (
    <>
      <StoreLayout>
        <Head
          title={
            product.part_no
              ? `${product.part_no} | ${product.name}`
              : product.name
          }
        />
        <div className="w-full  pt-0 pb-0">
          <div className="single-product-wrapper w-full ">
            <div className="product-view-main-wrapper bg-white pt-[30px] w-full">
              <div className="breadcrumb-wrapper w-full ">
                <div className="container-x mx-auto">
                  <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]">
                    <span>
                      <Link href="/">
                        <span className="mx-1 capitalize">Home</span>
                      </Link>
                      <span className="sperator">/</span>
                    </span>
                    <span>
                      <span className="mx-1 capitalize">{product.name}</span>

                      <span className="sperator">/</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white pb-[60px]">
                <div className="container-x mx-auto">
                  <div className="product-view w-full lg:flex justify-between ">
                    <ProductImages></ProductImages>
                    <div className="flex-1">
                      <div className="product-details w-full mt-10 lg:mt-0">
                        <span
                          data-aos="fade-up"
                          className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block aos-init"
                        >
                          {product.brand.name}
                        </span>
                        <p
                          data-aos="fade-up"
                          className="text-xl font-medium text-qblack mb-4 aos-init"
                        >
                          {product.name}
                        </p>
                        <p
                          data-aos="fade-up"
                          className="text-qgray text-sm text-normal mb-[30px] leading-7 aos-init"
                        >
                          {product.short_description}
                        </p>
                        <div
                          data-aos="fade-up"
                          className="flex space-x-2 items-center mb-2 aos-init"
                        >
                          <div>
                            {isOfferActive ? (
                              <>
                                <span className="text-sm font-500 text-qgray line-through mt-2">
                                  ${product.price}
                                </span>
                                <span className="text-2xl font-500 text-qred">
                                  ${product.offer_price}
                                </span>
                              </>
                            ) : (
                              <span className="text-2xl font-500 text-qblack">
                                ${product.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div data-aos="fade-up" className="mb-[20px] aos-init">
                        <p className="text-[13px] text-qgray leading-7">
                          <b className="text-qblack">Availability : </b>
                          In Stock
                          <b className="text-qblack ml-4">Mfr. Part# : </b>
                          {product.part_no}
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[10px] aos-init"
                      >
                        <div className="w-[180px] h-full px-[26px] flex items-center border border-qgray-border">
                          <div className="flex justify-between items-center w-full">
                            <button
                              type="button"
                              className="text-base text-qgray"
                              onClick={() =>
                                setQuantity(quantity > 1 ? quantity - 1 : 1)
                              }
                            >
                              -
                            </button>
                            <span className="text-qblack">{quantity}</span>
                            <button
                              type="button"
                              className="text-base text-qgray"
                              onClick={() => setQuantity(quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
                          <button type="button">
                            <span>
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z"
                                  stroke="#D5D5D5"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="square"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        data-aos="fade-up"
                        className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px] aos-init"
                      >
                        <div className="flex-1 h-full mt-4">
                          <AddToCartButton
                            productId={product.id}
                            quantity={1}
                            className="border-black text-sm font-semibold w-full h-full"
                            style={{
                              background: "black",
                              color: "white",
                              width: "30%",
                            }}
                          >
                            Add To Cart
                          </AddToCartButton>

                          <button
                            type="button"
                            className="border-black text-sm font-semibold w-full h-full ml-5"
                            style={{
                              background: "black",
                              color: "white",
                              width: "30%",
                            }}
                          >
                            Get A Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoreLayout>
    </>
  );
};

export default Product;
