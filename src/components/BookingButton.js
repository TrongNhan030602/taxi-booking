import React from "react";

const BookingButton = ({ phoneNumber }) => {
  return (
    <div className="text-center mt-4">
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-warning btn-lg"
      >
        Đặt xe ngay
      </a>
    </div>
  );
};

export default BookingButton;
