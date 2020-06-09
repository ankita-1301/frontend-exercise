import React from "react";
// import "../styles/app.less";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <section>
      <header className="nav-header">
        <span className="nav-section">
          <ul className="navigation">
            <a>
              <img
                className="fela-_18vovew"
                src="https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg"
                alt="HelloFresh"
                data-test-id="desktop-hellofresh-logo"
              />
            </a>
            <li>
              <NavLink to="/">
                <a href="/">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <a href="/">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <a href="/">Blog</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <a href="/">Contact</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <a href="/">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <a href="/login">
                  <button>Login</button>
                </a>
              </NavLink>
            </li>
          </ul>
        </span>
      </header>
    </section>
  );
};

export default NavBar;
