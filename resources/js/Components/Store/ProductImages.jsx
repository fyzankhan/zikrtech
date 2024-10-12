const ProductImages = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px] aos-init aos-animate"
      >
        <div className="w-full">
          <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
            <img
              src="/assets/images/product-details-1.png"
              alt=""
              className="object-contain"
            />
            {/* <div className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">
              <span>-50%</span>
            </div> */}
          </div>
          <div className="flex gap-2 flex-wrap">
            {/* <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
              <img
                src="/assets/images/product-details-1.png"
                alt=""
                className="w-full h-full object-contain  "
              />
            </div> */}
            {/* <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
              <img
                src="/assets/images/product-details-2.png"
                alt=""
                className="w-full h-full object-contain opacity-50 "
              />
            </div> */}
            {/* <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
              <img
                src="/assets/images/product-details-3.png"
                alt=""
                className="w-full h-full object-contain opacity-50 "
              />
            </div> */}
            {/* <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
              <img
                src="/assets/images/product-details-4.png"
                alt=""
                className="w-full h-full object-contain opacity-50 "
              />
            </div> */}
            {/* <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
              <img
                src="/assets/images/product-details-5.png"
                alt=""
                className="w-full h-full object-contain opacity-50 "
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
