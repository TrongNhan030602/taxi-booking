import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import "../assets/css/SliderSection.css";
import sliderImage from "../assets/img/slider-bg.jpg";
import CustomButton from "./CustomButton";

const SliderSection = ({ phoneNumber }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400); // Hiển thị loading trong 0.4 giây
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        <div className="slider-item">
          <img
            src={sliderImage}
            alt="Taxi Service"
            className="slider-image"
          />

          {isLoading ? (
            <div className="loading-spinner"></div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                rotateY: 120,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                x: "-50%",
                y: "-50%",
              }}
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
              <p className="slider-paragraph">
                <strong>Giá Mở cửa: 10.000</strong>
                <br />
                Xe 4 chỗ: 13.000 /// trên 20km 11.000 /// hợp đồng trên
                9.000/100km
                <br />
                Xe 7 chỗ: 15.000 /// trên 20km 13.000 /// hợp đồng trên
                9.000/100km
                <br />
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
      </Slider>
    </div>
  );
};

export default SliderSection;
