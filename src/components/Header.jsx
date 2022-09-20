import React from "react";
import Nav from "./Nav";
import DesktopSocial from "./DesktopSocial";
import Logo from "./../assets/logo.png";
import "./../App.css";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <img src={Logo} alt="logo" className="logo" />
        <h1>The Book Store</h1>
        <DesktopSocial />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
