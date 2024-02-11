// ScrollLink.jsx

import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Link = ({ to, children }) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    {children}
  </ScrollLink>
);

export default Link;
