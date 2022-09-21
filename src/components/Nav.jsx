import React from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";

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
        <NavLink to="/" exact={true} activeclassname="active">
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink to="/books" activeclassname="active">
          <span className="nav-text">Books</span>
        </NavLink>
        <NavLink to="/magazines" activeclassname="active">
          <span className="nav-text">Magazines</span>
        </NavLink>
        <NavLink to="/ebooks" activeclassname="active">
          <span className="nav-text">E-Books</span>
        </NavLink>
        <NavLink to="#" activeclassname="active">
          <span className="nav-text">Account</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
