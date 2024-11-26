import React, { useState } from "react";
import "../Styles/AboutUs.css"; // Make sure the CSS file is imported

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="about-us">
      <h2>About Us</h2> {/* Centered Title */}
      <div className="about-us-container">
        <img
          src="/Images/aboutus.jpg"
          alt="About us image"
          className="about-us-image"
        />
        <div className="about-content">
          <h3>Explore the Difference</h3>
          <p className={isExpanded ? "expanded" : ""}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda,nostrum earum? Cumque odit debitis sit non sed.
            Consectetur aliquid, iusto corporis beatae suscipit ut maxime
            laudantium voluptates accusamus expedita voluptas! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Repellat modi cumque eum
            eaque delectus est saepe repudiandae fuga illo in, doloremque
            consectetur, facere tempora deserunt amet dolore neque assumenda ad.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            neque quos cumque enim ullam qui sapiente harum a alias optio,
            aliquid id, reiciendis dolor? Ea illum ducimus esse officiis maxime.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, non
            sed autem fugiat rerum quam consequuntur illo quibusdam blanditiis
            magnam sapiente ipsum! Repudiandae distinctio ut natus, beatae quae
            consequuntur soluta.
          </p>
          <button onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
