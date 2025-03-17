import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/PhoneCallButton.css";

const PhoneCallButton = ({ phoneNumber }) => {
  // Chỉ cho phép số và dấu "+"
  const sanitizedPhoneNumber = /^[\d+]+$/.test(phoneNumber)
    ? phoneNumber
    : null;

  return (
    <div className="phone-call-container">
      {/* Chữ + Mũi tên */}
      <div className="call-text">
        Gọi ngay để đặt xe
        <div className="arrow-icon"></div>
      </div>

      {/* Nút gọi điện + Chữ cong */}
      <div className="phone-wrapper">
        {/* Kiểm tra số điện thoại hợp lệ trước khi render nút gọi */}
        {sanitizedPhoneNumber ? (
          <a
            href={`tel:${sanitizedPhoneNumber}`}
            className="phone-call-button"
          >
            <FaPhoneAlt className="phone-icon" />
            <span className="wave-1"></span>
          </a>
        ) : (
          <p className="invalid-number">Số điện thoại không hợp lệ</p>
        )}

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
