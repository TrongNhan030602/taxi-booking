import React from "react";
import CustomButton from "./CustomButton";
import "../assets/css/LocationSection.css";

const locations = [
  "Long Xuyên",
  "Châu Thành",
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
    color: "#981B1E",
    textColor: "#981B1E",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Long Xuyên
  {
    color: "#0F0F0F",
    textColor: "#0F0F0F",
    hoverTextColor: "#fff",
    outline: true,
    shape: true,
  }, // Châu Thành
  {
    color: "#981B1E",
    textColor: "#981B1E",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Thốt Nốt
  {
    color: "#ffc107",
    textColor: "#000",
    hoverTextColor: "#fff",
    outline: false,
    shape: true,
  }, // Thoại Sơn
  {
    color: "#17a2b8",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Châu Đốc
  {
    color: "#6f42c1",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: true,
  }, // Chợ Mới
  {
    color: "#e83e8c",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Tri Tôn
  {
    color: "#fd7e14",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: false,
    shape: false,
  }, // Tịnh Biên
  {
    color: "#20c997",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Cần Thơ
  {
    color: "#6610f2",
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
