import React from "react";
import zaloIcon from "../assets/img/zalo.png";
import "../assets/css/ZaloButton.css";
const ZaloButton = ({ phoneNumber }) => {
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
