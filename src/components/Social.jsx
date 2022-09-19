import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className="social-icons">
      <a href="#" className="social-icon twitter-icon">
        <FaTwitter />
      </a>
      <a href="#" className="social-icon facebook-icon">
        <FaFacebookSquare />
      </a>
      <a href="#" className="social-icon instagram-icon">
        <FaInstagram />
      </a>
    </div>
  );
}

export default Social;
