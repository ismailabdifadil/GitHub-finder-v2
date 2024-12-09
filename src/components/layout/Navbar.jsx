import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = ({ title = "GitHub Finder" }) => {
  return (
    <nav className="navbar shadow-sm bg-neutral mb-12  text-neutral-content">
      <div className="container mx-auto">
        <div className="navbar justify-between">
          <div className="space-x-2 ">
            <FaGithub className="text-3xl" />
            <a href="/" className="text-xl font-bold ">
              {title}
            </a>
          </div>
          <div className=" space-x-3">
            <Link className="btn btn-ghost rounded-r-btn btn-sm" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost rounded-r-btn btn-sm" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
