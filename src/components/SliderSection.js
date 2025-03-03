import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/SliderSection.css";

import sliderImage from "../assets/img/slider-bg.jpg"; // Hình ảnh slider
import CustomButton from "./CustomButton"; // Import CustomButton

const SliderSection = () => {
  const phoneNumber = "0913519096";

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

          <div className="slider-text">
            <h3 className="slider-title">
              <strong>TAXILONGXUYENSIEURE.COM</strong>
            </h3>
            <div className="divider"></div>
            <p className="slider-paragraph">
              <strong>Giá Mở cửa: 0 Đồng</strong>
              <br />
              Xe 4 chỗ: 12.600 /// trên 30km 10.000 /// hợp đồng trên
              9.000/100km
              <br />
              Xe 7 chỗ: 15.600 /// trên 30km 13.000 /// hợp đồng trên
              12.000/100km
              <br />
              Xe 29 – 45 chỗ: Ngoài ra, chúng tôi còn phục vụ xe hợp đồng tham
              quan du lịch với giá cả hợp lý.
            </p>
            <div className="divider"></div>

            <CustomButton
              text="Gọi ngay để đặt xe"
              color="#fff"
              textColor="#fff" //
              hoverTextColor="#666"
              shape="rectangle"
              outline={true}
              onClick={handleCall}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
