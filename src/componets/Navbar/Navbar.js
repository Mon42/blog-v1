import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/bg">Blog</Link>
      <Link to="/challengesmain">Challenges</Link>
      <Link to="/flexbox">Flexbox</Link>
      <Link to="/css">CSS Grid</Link>
    </nav>
  );
};

export default Navbar;
