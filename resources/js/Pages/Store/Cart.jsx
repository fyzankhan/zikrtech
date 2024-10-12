import CartList from "@/Components/Store/CartList";
import StoreLayout from "@/Layouts/StoreLayout";

const Cart = ({ cartItems }) => {
  return (
    <>
      <StoreLayout>
        <div className="w-full  pt-0 pb-0">
          <div className="cart-page-wrapper w-full bg-white pb-[60px]">
            <div className="w-full">
              <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10">
                <div className="container-x mx-auto">
                  <div className="mb-5">
                    <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]">
                      <span>
                        <a href="/">
                          <span className="mx-1 capitalize">home</span>
                        </a>
                        <span className="sperator">/</span>
                      </span>
                      <span>
                        <a href="/cart">
                          <span className="mx-1 capitalize">cart</span>
                        </a>
                        <span className="sperator">/</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-3xl font-semibold text-qblack">
                      Your Cart
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[23px]">
              <div className="container-x mx-auto">
                <CartList cartItems={cartItems}></CartList>
                <div className="w-full sm:flex justify-between">
                  <div className="discount-code sm:w-[270px] w-full mb-5 sm:mb-0 h-[50px] flex">
                    <div className="flex-1 h-full">
                      <div className="input-com w-full h-full">
                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                          <input
                            placeholder="Discount Code"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none "
                            type="text"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-[90px] h-[50px] black-btn"
                    >
                      <span className="text-sm font-semibold">Apply</span>
                    </button>
                  </div>
                  <div className="flex space-x-2.5 items-center">
                    <a href="#">
                      <div className="w-[220px] h-[50px] bg-[#F6F6F6] flex justify-center items-center">
                        <span className="text-sm font-semibold">
                          Continue Shopping
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="w-[140px] h-[50px] bg-[#F6F6F6] flex justify-center items-center">
                        <span className="text-sm font-semibold">
                          Update Cart
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-full mt-[30px] flex sm:justify-end">
                  <div className="sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]">
                    <div className="sub-total mb-6">
                      <div className=" flex justify-between mb-6">
                        <p className="text-[15px] font-medium text-qblack">
                          Subtotal
                        </p>
                        <p className="text-[15px] font-medium text-qred">
                          $365
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]" />
                    </div>
                    <div className="shipping mb-6">
                      <span className="text-[15px] font-medium text-qblack mb-[18px] block">
                        Shipping
                      </span>
                      <ul className="flex flex-col space-y-1">
                        <li>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2.5 items-center">
                              <div className="input-radio">
                                <input
                                  type="radio"
                                  name="price"
                                  className="accent-pink-500"
                                />
                              </div>
                              <span className="text-[13px] text-normal text-qgraytwo">
                                Free Shipping
                              </span>
                            </div>
                            <span className="text-[13px] text-normal text-qgraytwo">
                              +$00.00
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2.5 items-center">
                              <div className="input-radio">
                                <input
                                  type="radio"
                                  name="price"
                                  className="accent-pink-500"
                                />
                              </div>
                              <span className="text-[13px] text-normal text-qgraytwo">
                                Flat Rate
                              </span>
                            </div>
                            <span className="text-[13px] text-normal text-qgraytwo">
                              +$00.00
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2.5 items-center">
                              <div className="input-radio">
                                <input
                                  type="radio"
                                  name="price"
                                  className="accent-pink-500"
                                />
                              </div>
                              <span className="text-[13px] text-normal text-qgraytwo">
                                Local Delivery
                              </span>
                            </div>
                            <span className="text-[13px] text-normal text-qgraytwo">
                              +$00.00
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="shipping-calculation w-full mb-3">
                      <div className="title mb-[17px]">
                        <h1 className="text-[15px] font-medium">
                          Calculate Shipping
                        </h1>
                      </div>
                      <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                        <span className="text-[13px] text-qgraytwo">
                          Select Country
                        </span>
                        <span>
                          <svg
                            width={11}
                            height={7}
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                              fill="#222222"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-full h-[50px]">
                        <div className="input-com w-full h-full">
                          <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                            <input
                              placeholder="Postcode / ZIP"
                              className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-full"
                              type="text"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="w-full mb-10">
                      <div className="w-full h-[50px] bg-[#F6F6F6] flex justify-center items-center">
                        <span className="text-sm font-semibold">
                          Update Cart
                        </span>
                      </div>
                    </button>
                    <div className="total mb-6">
                      <div className=" flex justify-between">
                        <p className="text-[18px] font-medium text-qblack">
                          Total
                        </p>
                        <p className="text-[18px] font-medium text-qred">
                          $365
                        </p>
                      </div>
                    </div>
                    <a href="/checkout">
                      <div className="w-full h-[50px] black-btn flex justify-center items-center">
                        <span className="text-sm font-semibold">
                          Proceed to Checkout
                        </span>
                      </div>
                    </a>
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

export default Cart;
