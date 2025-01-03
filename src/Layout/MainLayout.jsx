import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

const MainLayout = () => {
  const location = useLocation();
  const isLoginRegister =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {isLoginRegister || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-246 px)]">
        <Outlet></Outlet>
      </div>
      {isLoginRegister || <Footer></Footer>}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
