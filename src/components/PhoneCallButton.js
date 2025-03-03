import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/PhoneCallButton.css"; // Import file CSS

const PhoneCallButton = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="phone-call-button"
    >
      <FaPhoneAlt className="phone-icon" />
      <span className="wave-1"></span>
    </a>
  );
};

export default PhoneCallButton;
