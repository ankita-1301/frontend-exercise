import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="header">
      <li className="logo">
        <img
          className="hellofresh-logo"
          src="https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg"
          alt="HelloFresh"
        />
      </li>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        <Link to={`/blog`}>Blog</Link>
      </li>
      <li>
        <Link to={`/career`}>Career</Link>
      </li>
      <button className="right">
        <Link to={`/login`}>Login</Link>
      </button>
    </ul>
  );
};

export default NavBar;
