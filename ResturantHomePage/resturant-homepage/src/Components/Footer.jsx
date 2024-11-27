import React from "react";
import "../Styles/Footer.css";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillTiktok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Footer Navigation Links */}
        <div className="footer-links">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservation">Reservation</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links with Icons */}
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <AiFillTiktok className="social-icon" />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <p>© 2024 Our Restaurant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
