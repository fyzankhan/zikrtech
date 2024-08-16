import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
  return (
    <>
      {/* <nav className="py-5  relative z-50 w-full  bg-gray-50 transition-all duration-500 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex  flex-col lg:flex-row">
            <div className=" flex justify-between  lg:flex-row">
              <Link href="/">
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
      <div className="drawer-wrapper w-full  h-full relative  ">{children}</div>
    </>
  );
}
