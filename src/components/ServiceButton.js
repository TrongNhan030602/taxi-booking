import React from "react";

const ServiceButton = ({ service, phoneNumber }) => (
  <div className="col-md-6 mb-3">
    <a
      href={`tel:${phoneNumber}`}
      className="btn btn-outline-primary w-100 py-3 fw-bold"
    >
      {service}
    </a>
  </div>
);

export default ServiceButton;
