import React from "react";
import { FaHandPointer } from "react-icons/fa";
import CustomButton from "./CustomButton";
import "../../assets/css/home/LocationSection.css";

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
  "Đ.Điểm Khác",
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
    color: "#FF6B6B",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: true,
    shape: false,
  }, // Châu Thành
  {
    color: "#4CAF50",
    textColor: "#fff",
    hoverTextColor: "#ddd",
    outline: true,
    shape: true,
  }, // Phú Hòa
  {
    color: "#FF9800",
    textColor: "#fff",
    hoverTextColor: "#eee",
    outline: false,
    shape: true,
  }, // Thốt Nốt
  {
    color: "#3F51B5",
    textColor: "#fff",
    hoverTextColor: "#fff",
    outline: false,
    shape: true,
  }, // Thoại Sơn
  {
    color: "#795548",
    textColor: "#fff",
    hoverTextColor: "#ddd",
    outline: true,
    shape: true,
  }, // Châu Đốc
  {
    color: "#E91E63",
    textColor: "#fff",
    hoverTextColor: "#eee",
    outline: true,
    shape: false,
  }, // Chợ Mới
  {
    color: "#009688",
    textColor: "#fff",
    hoverTextColor: "#ddd",
    outline: false,
    shape: false,
  }, // Tri Tôn
  {
    color: "#9C27B0",
    textColor: "#fff",
    hoverTextColor: "#eee",
    outline: false,
    shape: false,
  }, // Tịnh Biên
  {
    color: "#FFC107",
    textColor: "#333",
    hoverTextColor: "#000",
    outline: true,
    shape: false,
  }, // Cần Thơ
  {
    color: "#607D8B",
    textColor: "#fff",
    hoverTextColor: "#ddd",
    outline: false,
    shape: true,
  }, // Hà Tiên
  {
    color: "#8E0000",
    textColor: "#fff",
    hoverTextColor: "#ddd",
    outline: true,
    shape: true,
  }, // Địa điểm khác
];

const LocationSection = ({ phoneNumber }) => {
  return (
    <div className="location-section">
      <div className="title-wrapper">
        <div className="line"></div>
        <h2>ĐỊA ĐIỂM ĐẶT XE</h2>
        <div className="line"></div>
      </div>
      <p className="click-hint">
        NHẤP VÀO ĐỊA ĐIỂM ĐỂ GỌI XE NGAY
        <FaHandPointer className="click-icon mx-1" />
      </p>
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
