import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Store/Footer";
import Header from "@/Components/Store/Header";
import MobileNav from "@/Components/Store/MobileNav";
import { Link } from "@inertiajs/react";

export default function StoreLayout({ children }) {
  return (
    <>
      {/* <div className="drawer-wrapper w-full  h-full relative  ">
        <MobileNav></MobileNav>
      </div> */}
      <div className="w-full overflow-x-hidden">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}
