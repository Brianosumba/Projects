import React from "react";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="hero" className="hero">
      <h1>Welcome to Our Resturant</h1>
      <p>Delicious food, exceptional service</p>
      <button onClick={scrollToMenu}>Explore Our Menu</button>
    </div>
  );
};

export default Hero;
