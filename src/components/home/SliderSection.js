/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../assets/css/home/SliderSection.css";
import CustomButton from "./CustomButton";

const images = [
  require("../../assets/img/banner-01.jpg"),
  require("../../assets/img/banner-02.jpg"),
  require("../../assets/img/banner-03.jpg"),
];

const SliderSection = ({ phoneNumber }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <motion.div
          initial={{ opacity: 0, rotateY: 120, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, rotateY: 0, x: "-50%", y: "-50%" }}
          transition={{
            opacity: { duration: 0.5, delay: 0.3 },
            rotateY: { duration: 1.2, delay: 0.4, ease: "easeOut" },
          }}
          className="slider-text"
        >
          <h3 className="slider-title">
            <strong>TAXI ĐIỆN AN GIANG</strong>
          </h3>
          <div className="divider"></div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="slider-slogan"
          >
            Taxi giá rẻ ... đi an toàn về vui vẻ ... uy tín chất lượng
          </motion.p>
          <p className="slider-paragraph">
            <strong>
              Giá Mở cửa: <span className="slider-price">10.000</span>{" "}
            </strong>
            <br />
            Xe 4 chỗ: <span className="slider-price">13.000</span> /// trên 20km{" "}
            <span className="slider-price">11.000</span> /// hợp đồng trên{" "}
            <span className="slider-price">9.000</span>/100km <br />
            Xe 7 chỗ: <span className="slider-price">15.000</span> /// trên 20km{" "}
            <span className="slider-price">13.000</span> /// hợp đồng trên{" "}
            <span className="slider-price">9.000</span>/100km <br />
            Xe 29 – 45 chỗ: Ngoài ra, chúng tôi còn phục vụ xe hợp đồng tham
            quan du lịch với giá cả hợp lý.
          </p>
          <div className="divider"></div>

          <CustomButton
            text="Gọi ngay để đặt xe"
            color="#fff"
            textColor="#fff"
            hoverTextColor="#666"
            shape="rectangle"
            outline={true}
            onClick={handleCall}
          />
        </motion.div>
      )}
    </div>
  );
};

export default SliderSection;
