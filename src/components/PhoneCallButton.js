import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/PhoneCallButton.css";

const PhoneCallButton = ({ phoneNumber }) => {
  return (
    <div className="phone-call-container">
      {/* Chữ + Mũi tên */}
      <div className="call-text">
        Gọi ngay để đặt xe
        <div className="arrow-icon"></div>
      </div>

      {/* Nút gọi điện + Chữ cong */}
      <div className="phone-wrapper">
        {/* Nút gọi */}
        <a
          href={`tel:${phoneNumber}`}
          className="phone-call-button"
        >
          <FaPhoneAlt className="phone-icon" />
          <span className="wave-1"></span>
        </a>

        {/* Chữ cong nửa trên */}
        <svg
          className="curved-text-half"
          viewBox="0 0 120 60"
        >
          <defs>
            <path
              id="halfCirclePath"
              d="M10,45 A50,50 0 0,1 110,45"
              fill="transparent"
            />
          </defs>
          <text width="120">
            <textPath
              href="#halfCirclePath"
              startOffset="50%"
              textAnchor="middle"
              dy="4"
            >
              Gọi ngay để đặt xe
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PhoneCallButton;
