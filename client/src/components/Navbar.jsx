import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-dark text-light w-100 d-flex justify-content-around align-items-center">
      <div className="left">Logo</div>
      <div className="right d-flex gap-5">
        <Link className="btn btn-warning" to="/">
          Home
        </Link>
        <Link className="btn btn-primary" to="/addMovie">
          Add Movie
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
