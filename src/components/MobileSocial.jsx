import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function MobileSocial() {
  return (
    <div className="mobile-social-icons">
      <a href="#" className="mobile-social-icon twitter-icon">
        <FaTwitter />
      </a>
      <a href="#" className="mobile-social-icon facebook-icon">
        <FaFacebookSquare />
      </a>
      <a href="#" className="mobile-social-icon instagram-icon">
        <FaInstagram />
      </a>
    </div>
  );
}

export default MobileSocial;
