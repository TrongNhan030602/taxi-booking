import React from "react";
import zaloIcon from "../assets/img/zalo.png";
import "../assets/css/home/ZaloButton.css";

const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[0-9()+\- ]{8,15}$/; // Chỉ cho phép số, dấu +, -, khoảng trắng, ngoặc đơn
  return phoneRegex.test(phone);
};

const ZaloButton = ({ phoneNumber }) => {
  if (!isValidPhoneNumber(phoneNumber)) {
    console.error("Số điện thoại không hợp lệ!");
    return null;
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="zalo-button"
    >
      <img
        src={zaloIcon}
        alt="Zalo"
        className="zalo-icon"
      />
    </a>
  );
};

export default ZaloButton;
