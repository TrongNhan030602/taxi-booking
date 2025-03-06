import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/PhoneCallButton.css"; // Import file CSS

const PhoneCallButton = ({ phoneNumber }) => {
  return (
    <div className="phone-call-container">
      {/* Chữ + Mũi tên */}
      <div className="call-text">
        Gọi ngay để đặt xe
        <div className="arrow-icon"></div>
      </div>

      {/* Nút gọi điện */}
      <a
        href={`tel:${phoneNumber}`}
        className="phone-call-button"
      >
        <FaPhoneAlt className="phone-icon" />
        <span className="wave-1"></span>
      </a>
    </div>
  );
};

export default PhoneCallButton;
