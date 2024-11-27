import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
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
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <p>© 2024 Our Restaurant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
