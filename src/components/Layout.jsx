import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="flex  flex-col  bg-sky-950  dark:bg-black/90 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
