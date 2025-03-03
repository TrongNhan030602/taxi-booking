import React from "react";

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

const LocationSection = ({ phoneNumber }) => {
  return (
    <div className="py-4 bg-white">
      <h2 className="fw-bold">ĐỊA ĐIỂM ĐẶT XE</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
        {locations.map((location, index) => (
          <a
            key={index}
            href={`tel:${phoneNumber}`}
            className="btn btn-outline-primary"
          >
            {location}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationSection;
