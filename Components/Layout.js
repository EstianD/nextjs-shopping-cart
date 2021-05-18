import React from "react";
import Header from "./Nav/Header";
import Footer from "./Nav/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
