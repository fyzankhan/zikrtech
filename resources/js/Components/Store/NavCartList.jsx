// import { Link } from "@inertiajs/react";

// const NavCartList = () => {
//   return (
//     <>
//       <div className="cart-wrapper group relative py-4">
//         <div className="cart relative cursor-pointer">
//           <a href="/cart">
//             <span>
//               <svg
//                 width={18}
//                 height={20}
//                 viewBox="0 0 18 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//           </a>
//           <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
//             15
//           </span>
//         </div>
//         <div
//           className="w-[300px] bg-white border-t-[3px] cart-wrappwer  absolute -right-[45px] top-11 z-50 hidden group-hover:block"
//           style={{
//             boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
//           }}
//         >
//           <div className="w-full h-full">
//             <div className="product-items h-[310px] overflow-y-scroll">
//               <ul>
//                 <li className="w-full h-full flex">
//                   <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
//                     <div className="w-[65px] h-full">
//                       <img
//                         src="/assets/images/product-img-1.jpg"
//                         alt=""
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     <div className="flex-1 h-full flex flex-col justify-center ">
//                       <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
//                         iPhone 12 Pro Max 128GB Golen colour
//                       </p>
//                       <p className="price">
//                         <span className="offer-price text-qred font-600 text-[15px] ml-2">
//                           $38
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                   <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
//                     <svg
//                       width={8}
//                       height={8}
//                       viewBox="0 0 8 8"
//                       fill="none"
//                       className="inline fill-current text-[#AAAAAA] hover:text-qred"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z" />
//                     </svg>
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-full px-4 mt-[20px] mb-[12px]">
//               <div className="h-[1px] bg-[#F0F1F3]" />
//             </div>
//             <div className="product-actions px-4 mb-[30px]">
//               <div className="total-equation flex justify-between items-center mb-[28px]">
//                 <span className="text-[15px] font-500 text-qblack">
//                   Subtotal
//                 </span>
//                 <span className="text-[15px] font-500 text-qred ">$365</span>
//               </div>
//               <div className="product-action-btn">
//                 <a href="#">
//                   <div className="gray-btn w-full h-[50px] mb-[10px] ">
//                     <span>View Cart</span>
//                   </div>
//                 </a>
//                 <a href="#">
//                   <div className="w-full h-[50px]">
//                     <div className="yellow-btn">
//                       <span className="text-sm">Checkout Now</span>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <div className="w-full px-4 mt-[20px]">
//               <div className="h-[1px] bg-[#F0F1F3]" />
//             </div>
//             <div className="flex justify-center py-[15px]">
//               <p className="text-[13px] font-500 text-qgray">
//                 Get Return within <span className="text-qblack">30 days</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavCartList;

import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

const NavCartList = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const response = await fetch("/nav-cart-products");
      const data = await response.json();

      const productsArray = Object.values(data.cartContent);

      setCartProducts(productsArray);
      setSubtotal(data.subtotal);
    };

    fetchCartProducts();
  }, []);

  return (
    <>
      <div className="cart-wrapper group relative py-4">
        <div className="cart relative cursor-pointer">
          <a href="/cart">
            <span>
              <svg
                width={18}
                height={20}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
          <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
            {cartProducts.length}
          </span>
        </div>
        <div
          className="w-[300px] bg-white border-t-[3px] cart-wrappwer absolute -right-[45px] top-11 z-50 hidden group-hover:block"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
          }}
        >
          <div className="w-full h-full">
            <div className="product-items h-[310px] overflow-y-scroll">
              <ul>
                {cartProducts.map((product) => (
                  <li key={product.rowId} className="w-full h-full flex">
                    <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                      <div className="w-[65px] h-full">
                        <img
                          src={`/assets/images/${product.options.slug}.jpg`} // Assuming slug is used to reference image files
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center ">
                        <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                          {product.name}
                        </p>
                        <p className="price">
                          <span className="offer-price text-qred font-600 text-[15px] ml-2">
                            ${product.price}
                          </span>
                        </p>
                      </div>
                    </div>
                    <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                      <svg
                        width={8}
                        height={8}
                        viewBox="0 0 8 8"
                        fill="none"
                        className="inline fill-current text-[#AAAAAA] hover:text-qred"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z" />
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full px-4 mt-[20px] mb-[12px]">
              <div className="h-[1px] bg-[#F0F1F3]" />
            </div>
            <div className="product-actions px-4 mb-[30px]">
              <div className="total-equation flex justify-between items-center mb-[28px]">
                <span className="text-[15px] font-500 text-qblack">
                  Subtotal
                </span>
                <span className="text-[15px] font-500 text-qred ">
                  ${subtotal}
                </span>
              </div>
              <div className="product-action-btn">
                <a href="/cart">
                  <div className="gray-btn w-full h-[50px] mb-[10px] ">
                    <span>View Cart</span>
                  </div>
                </a>
                <a href="/checkout">
                  <div className="w-full h-[50px]">
                    <div className="yellow-btn">
                      <span className="text-sm">Checkout Now</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 mt-[20px]">
              <div className="h-[1px] bg-[#F0F1F3]" />
            </div>
            <div className="flex justify-center py-[15px]">
              <p className="text-[13px] font-500 text-qgray">
                Get Return within <span className="text-qblack">30 days</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavCartList;
