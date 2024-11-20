import { Link } from "@inertiajs/react";

const NavCartButtons = ({ subtotal }) => {
  return (
    <>
      <div className="w-full px-4 mt-[20px] mb-[12px]">
        <div className="h-[1px] bg-[#F0F1F3]" />
      </div>
      <div className="product-actions px-4 mb-[30px]">
        <div className="total-equation flex justify-between items-center mb-[28px]">
          <span className="text-[15px] font-500 text-qblack">Amount</span>
          <span className="text-[15px] font-500 text-qred ">${subtotal}</span>
        </div>
        <div className="product-action-btn">
          <Link href="/cart">
            <div className="gray-btn w-full h-[50px] mb-[10px] ">
              <span>View Cart</span>
            </div>
          </Link>
          <Link href="/checkout">
            <div className="w-full h-[50px]">
              <div className="yellow-btn">
                <span className="text-sm">Checkout Now</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="w-full px-4 mt-[20px]">
              <div className="h-[1px] bg-[#F0F1F3]" />
            </div> */}
      {/* <div className="flex justify-center py-[15px]">
              <p className="text-[13px] font-500 text-qgray">
                Get Return within <span className="text-qblack">30 days</span>
              </p>
            </div> */}
    </>
  );
};

export default NavCartButtons;
