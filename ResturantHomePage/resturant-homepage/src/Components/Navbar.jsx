import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Fusion Flavor</h1>
        </div>
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
      </nav>
    </div>
  );
};

export default Navbar;
