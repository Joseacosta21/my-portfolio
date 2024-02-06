import React from "react";
import Header from "../header/header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
