import React from "react";
import CustomerReview from "../components/CustomerReview";

const reviews = [
  {
    text: "Dịch vụ tốt, giá hợp lý. Tôi rất hài lòng!",
    author: "Nguyễn Văn A",
  },
  { text: "Lái xe thân thiện, đi lại an toàn.", author: "Trần Thị B" },
];

const ReviewSection = () => {
  return (
    <div className="py-4">
      <h2 className="fw-bold">Ý KIẾN KHÁCH HÀNG</h2>
      {reviews.map((review, index) => (
        <CustomerReview
          key={index}
          text={review.text}
          author={review.author}
        />
      ))}
    </div>
  );
};

export default ReviewSection;
