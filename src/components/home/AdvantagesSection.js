import React from "react";
import "../../assets/css/home/AdvantagesSection.css";
import backgroundImage from "../../assets/img/banner-04.jpg"; // Ảnh nền

const AdvantagesSection = () => {
  return (
    <div
      id="advantages-section"
      className="advantages-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default AdvantagesSection;
