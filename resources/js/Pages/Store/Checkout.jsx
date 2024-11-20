import CheckoutAddress from "@/Components/Store/CheckoutAddress";
import StoreLayout from "@/Layouts/StoreLayout";
import { useRef } from "react";

const Checkout = ({ auth }) => {
  const checkoutAddressRef = useRef(null);

  const handleFormSubmit = (formData) => {
    console.log("Billing Information Submitted: ", formData);
  };

  const handleCompleteOrderClick = () => {
    if (checkoutAddressRef.current) {
      checkoutAddressRef.current.submitForm();
    }
  };
  return (
    <>
      <StoreLayout auth={auth}>
        <div className="w-full  pt-0 pb-0">
          <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
            <div className="w-full mb-5">
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
                        <a href="/checkout">
                          <span className="mx-1 capitalize">checkout</span>
                        </a>
                        <span className="sperator">/</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-3xl font-semibold text-qblack">
                      Checkout
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-main-content w-full">
              <div className="container-x mx-auto">
                <div className="w-full lg:flex lg:space-x-[30px]">
                  <CheckoutAddress
                    ref={checkoutAddressRef}
                    onSubmit={handleFormSubmit}
                  />

                  <div className="flex-1">
                    <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
                      Order Summary
                    </h1>
                    <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                      <div className="sub-total mb-6">
                        <div className=" flex justify-between mb-5">
                          <p className="text-[13px] font-medium text-qblack uppercase">
                            PROduct
                          </p>
                          <p className="text-[13px] font-medium text-qblack uppercase">
                            total
                          </p>
                        </div>
                        <div className="w-full h-[1px] bg-[#EDEDED]" />
                      </div>
                      <div className="product-list w-full mb-[30px]">
                        <ul className="flex flex-col space-y-5">
                          <li>
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-[15px] text-qblack mb-2.5">
                                  Apple Watch
                                  <sup className="text-[13px] text-qgray ml-2 mt-2">
                                    x1
                                  </sup>
                                </h4>
                                <p className="text-[13px] text-qgray">
                                  64GB, Black, 44mm, Chain Belt
                                </p>
                              </div>
                              <div>
                                <span className="text-[15px] text-qblack font-medium">
                                  $38
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-[15px] text-qblack mb-2.5">
                                  Apple Watch
                                  <sup className="text-[13px] text-qgray ml-2 mt-2">
                                    x1
                                  </sup>
                                </h4>
                                <p className="text-[13px] text-qgray">
                                  64GB, Black, 44mm, Chain Belt
                                </p>
                              </div>
                              <div>
                                <span className="text-[15px] text-qblack font-medium">
                                  $38
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-[15px] text-qblack mb-2.5">
                                  Apple Watch
                                  <sup className="text-[13px] text-qgray ml-2 mt-2">
                                    x1
                                  </sup>
                                </h4>
                                <p className="text-[13px] text-qgray">
                                  64GB, Black, 44mm, Chain Belt
                                </p>
                              </div>
                              <div>
                                <span className="text-[15px] text-qblack font-medium">
                                  $38
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]" />
                      <div className="mt-[30px]">
                        <div className=" flex justify-between mb-5">
                          <p className="text-[13px] font-medium text-qblack uppercase">
                            SUBTOTAL
                          </p>
                          <p className="text-[15px] font-medium text-qblack uppercase">
                            $365
                          </p>
                        </div>
                      </div>
                      <div className="w-full mt-[30px]">
                        <div className="sub-total mb-6">
                          <div className=" flex justify-between mb-5">
                            <div>
                              <span className="text-xs text-qgraytwo mb-3 block">
                                SHIPPING
                              </span>
                              <p className="text-base font-medium text-qblack">
                                Free Shipping
                              </p>
                            </div>
                            <p className="text-[15px] font-medium text-qblack">
                              +$0
                            </p>
                          </div>
                          <div className="w-full h-[1px] bg-[#EDEDED]" />
                        </div>
                      </div>
                      <div className="mt-[30px]">
                        <div className=" flex justify-between mb-5">
                          <p className="text-2xl font-medium text-qblack">
                            Total
                          </p>
                          <p className="text-2xl font-medium text-qred">$365</p>
                        </div>
                      </div>
                      <div className="shipping mt-[30px]">
                        <ul className="flex flex-col space-y-1">
                          <li className=" mb-5">
                            <div className="flex space-x-2.5 items-center mb-4">
                              <div className="input-radio">
                                <input
                                  type="radio"
                                  name="price"
                                  className="accent-pink-500"
                                  id="transfer"
                                />
                              </div>
                              <label
                                htmlFor="transfer"
                                className="text-[18px] text-normal text-qblack"
                              >
                                Direct Bank Transfer
                              </label>
                            </div>
                            <p className="text-qgraytwo text-[15px] ml-6">
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                            </p>
                          </li>
                          <li>
                            <div className="flex space-x-2.5 items-center mb-5">
                              <div className="input-radio">
                                <input
                                  type="radio"
                                  name="price"
                                  className="accent-pink-500"
                                  id="delivery"
                                />
                              </div>
                              <label
                                htmlFor="delivery"
                                className="text-[18px] text-normal text-qblack"
                              >
                                Cash on Delivery
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="flex space-x-2.5 items-center mb-5">
                              <div className="input-radio">
                                <input
                                  type="radio"
                                  name="price"
                                  className="accent-pink-500"
                                  id="bank"
                                />
                              </div>
                              <label
                                htmlFor="bank"
                                className="text-[18px] text-normal text-qblack"
                              >
                                Credit/Debit Cards or Paypal
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <button onClick={handleCompleteOrderClick}>
                        <div className="w-full h-[50px] black-btn flex justify-center items-center">
                          <span className="text-sm font-semibold">
                            Place Order Now
                          </span>
                        </div>
                      </button>
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

export default Checkout;
