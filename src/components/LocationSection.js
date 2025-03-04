import React from "react";
import CustomButton from "./CustomButton";
import "../assets/css/LocationSection.css";

const locations = [
  "Long Xuyên",
  "Châu Thành",
  "Phú Hòa",
  "Thốt Nốt",
  "Thoại Sơn",
  "Châu Đốc",
  "Chợ Mới",
  "Tri Tôn",
  "Tịnh Biên",
  "Cần Thơ",
  "Hà Tiên",
];

const buttonStyles = [
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: false,
    shape: false,
  }, // Long Xuyên
  {
    color: "#6789BA",
    textColor: "#0F0F0F",
    hoverTextColor: "#fff",
    outline: true,
    shape: true,
  }, // Châu Thành
  {
    color: "#6789BA",
    textColor: "#6789BA",
    hoverTextColor: "#fff",
    outline: true,
    shape: true,
  }, // Phú Hòa
  {
    color: "#6789BA",
    textColor: "#6789BA",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Thốt Nốt
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: false,
    shape: true,
  }, // Thoại Sơn
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Châu Đốc
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: true,
  }, // Chợ Mới
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Tri Tôn
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: false,
    shape: false,
  }, // Tịnh Biên
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Cần Thơ
  {
    color: "#6789BA",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: false,
    shape: true,
  }, // Hà Tiên
];

const LocationSection = ({ phoneNumber }) => {
  return (
    <div className="location-section">
      <div className="title-wrapper">
        <div className="line"></div>
        <h2>ĐỊA ĐIỂM ĐẶT XE</h2>
        <div className="line"></div>
      </div>
      <div className="location-buttons">
        {locations.map((location, index) => {
          const { color, textColor, hoverTextColor, outline, shape } =
            buttonStyles[index % buttonStyles.length];

          return (
            <CustomButton
              key={index}
              text={location}
              color={color}
              textColor={textColor}
              hoverTextColor={hoverTextColor}
              outline={outline}
              shape={shape ? "rounded-rectangle" : "rectangle"}
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LocationSection;
