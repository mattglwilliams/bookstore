import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/" activeclassname="active">
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
      <NavLink to="/account" activeclassname="active">
        <span className="nav-text">Account</span>
      </NavLink>
    </nav>
  );
}

export default Nav;
