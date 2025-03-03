import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../assets/css/AdvantagesSection.css";

import backgroundImage from "../assets/img/advantages-bg.jpg"; // Ảnh nền
import advantageImage from "../assets/img/advantage.png"; // Ảnh ưu điểm
import carImage from "../assets/img/taxi-long-xuyen-726-1.png"; // Ảnh xe
import CustomButton from "./CustomButton";

const AdvantagesSection = ({ phoneNumber }) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("advantages-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="advantages-section"
      className="advantages-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="advantages-content">
        {/* Cột bên trái: Ảnh ưu điểm + Button */}
        <div className="advantage-block">
          <img
            src={advantageImage}
            alt="Ưu điểm"
            className="advantage-image"
          />
          <CustomButton
            text="ĐẶT XE NGAY"
            color="#BA1A1A"
            textColor="#fff"
            hoverTextColor="#fff"
            shape="rectangle"
            outline={false}
            onClick={handleCall}
            className="booking-button"
          />
        </div>

        {/* Cột bên phải: Ảnh xe có hiệu ứng chạy vào */}
        <motion.img
          src={carImage}
          alt="Chiếc xe"
          className="car-image"
          initial={{ x: 200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default AdvantagesSection;
