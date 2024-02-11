import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-links">
        <NavLink className="link">About</NavLink>
        <NavLink className="link">Engineering</NavLink>
        <NavLink className="link">Web Development</NavLink>
        <NavLink className="link">Music</NavLink>
        <NavLink className="link">Photo & Filmmaking</NavLink>
        <NavLink className="link">Design</NavLink>
        <NavLink className="link">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
