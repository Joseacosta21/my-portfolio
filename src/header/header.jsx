import React from "react";
import "./header.css";

const header = () => {
  return (
    <header className="header">
      <div className="header-links">
        <NavLink className="link"> About </NavLink>
        <NavLink className="link"> Engineering</NavLink>
        <NavLink className="link"> Web Development</NavLink>
        <NavLink className="link"> Music</NavLink>
        <NavLink className="link"> Photography & Cinematography</NavLink>
        <NavLink className="link"> A Wheelie Good Fucking Time</NavLink>
        <NavLink className="link"> Contact </NavLink>
      </div>
    </header>
  );
};

export default App;
