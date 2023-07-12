import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return <nav>
    <Link to="/">Home</Link>
    <Link to ="/contact">Contact</Link>
    <Link to= "/fetch">Fetch</Link>

  </nav>;
};

export default NavBar;
