import Footer from "@/Components/Store/Footer";
import Header from "@/Components/Store/Header";
import MobileNav from "@/Components/Store/MobileNav";
import { CartProvider } from "@/Contexts/CartContext";
import { Link } from "@inertiajs/react";

export default function StoreLayout({ auth, children }) {
  return (
    <>
      <CartProvider>
        {/* <div className="drawer-wrapper w-full  h-full relative  ">
        <MobileNav></MobileNav>
      </div> */}
        <div className="w-full overflow-x-hidden">
          <Header auth={auth}></Header>
          {children}
          <Footer></Footer>
        </div>
      </CartProvider>
    </>
  );
}
