import React from "react";
const sanitizePhoneNumber = (phone) => {
  return phone.replace(/[^0-9+]/g, ""); // Chỉ giữ lại số và dấu "+"
};
const ServiceButton = ({ service, phoneNumber }) => {
  const safePhoneNumber = sanitizePhoneNumber(phoneNumber);

  return (
    <div className="col-md-6 mb-3">
      <a
        href={`tel:${safePhoneNumber}`}
        className="btn btn-outline-primary w-100 py-3 fw-bold"
      >
        {service}
      </a>
    </div>
  );
};

export default ServiceButton;
