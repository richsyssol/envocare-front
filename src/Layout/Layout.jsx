import WhatsAppPopup from "@/components/PopUp/WhatsAppPopup";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Footer from "@/pages/Home/Footer";
import Navbar from "@/pages/Home/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="relative ">
        <Outlet />
        <div className="fixed z-50 bottom-8 right-0">
          <WhatsAppPopup />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
