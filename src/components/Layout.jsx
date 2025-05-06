import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-4 px-64">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
