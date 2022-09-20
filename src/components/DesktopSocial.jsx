import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function DesktopSocial() {
  return (
    <div className="desktop-social-icons">
      <a href="#" className="desktop-social-icon twitter-icon">
        <FaTwitter />
      </a>
      <a href="#" className="desktop-social-icon facebook-icon">
        <FaFacebookSquare />
      </a>
      <a href="#" className="desktop-social-icon instagram-icon">
        <FaInstagram />
      </a>
    </div>
  );
}

export default DesktopSocial;
