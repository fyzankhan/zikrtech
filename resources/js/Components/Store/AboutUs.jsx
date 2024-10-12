const AboutUs = () => {
  return (
    <>
      <div className="w-full lg:h-[460px] mb-[60px]">
        <div className="container-x mx-auto h-full">
          <div className="lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full">
            <div
              data-aos="fade-right"
              className="campaign-countdown lg:w-1/2 h-full w-full mb-5 lg:mb-0 aos-init"
            >
              <div className="space-y-8">
                {/* Sec Title */}
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-black-600 uppercase tracking-wider">
                    High-Quality Service
                  </div>
                  <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                    WHY CHOOSE ZIKR Tech?
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to offering our clients the finest
                    available technological solutions. We ensure technology's
                    affordability through competitive pricing and an extensive
                    range of products in the USA.
                  </p>
                </div>
                {/* Options List */}
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-black-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Group Specialized in ICT for 30 Years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-black-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Access Huge Inventory Available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-black-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Members cover 50+ Countries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-black-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Trusted by Worldwide Buyers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-black-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>No Minimum Order Requirement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-black-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Flexible Payment (Prequalification Required)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="download-app flex-1 lg:h-full h-[430px] xl:p-12 p-5 aos-init"
              style={{
                background:
                  'url("/assets/images/why-choose-us.webp") 0% 0% / cover no-repeat',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
