import React from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";

// Had an issue here rendering the active navlink
// for some reason, the home and account navlinks were always in an active state
// tried to use exact={true} and some other methods but didn't work
function Nav() {
  return (
    <nav>
      <input type="checkbox" className="checkbox" />
      <div className="hamburger-container">
        <span className="line line-one"></span>
        <span className="line line-two"></span>
        <span className="line line-three"></span>
      </div>
      <div className="nav-links">
        <NavLink to="/">
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink to="/books">
          <span className="nav-text">Books</span>
        </NavLink>
        <NavLink to="/magazines">
          <span className="nav-text">Magazines</span>
        </NavLink>
        <NavLink to="/ebooks">
          <span className="nav-text">E-Books</span>
        </NavLink>
        <NavLink to="#">
          <span className="nav-text">Account</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
