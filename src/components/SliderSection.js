/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import "../assets/css/SliderSection.css";
import sliderImage from "../assets/img/banner-03.jpg";
import CustomButton from "./CustomButton";

const SliderSection = ({ phoneNumber }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400); // Hiển thị loading trong 0.4 giây
  }, []);

  const sliderSettings = {
    dots: false,
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
                Xe 4 chỗ: <span className="slider-price">13.000</span> /// trên
                20km <span className="slider-price">11.000</span> /// hợp đồng
                trên <span className="slider-price">9.000</span>/100km
                <br />
                Xe 7 chỗ: <span className="slider-price">15.000</span> /// trên
                20km <span className="slider-price">13.000</span> /// hợp đồng
                trên <span className="slider-price">9.000</span>/100km
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
