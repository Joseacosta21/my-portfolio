import React from "react";
import Header from "../header/header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children}
        <p>Verga Aguad</p>
      </main>
    </div>
  );
};

export default Layout;
