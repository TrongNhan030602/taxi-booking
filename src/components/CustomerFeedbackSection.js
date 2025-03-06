import React from "react";
import { FaStar } from "react-icons/fa";
import "../assets/css/CustomerFeedbackSection.css";
import user1 from "../assets/img/avatar1.jpg";
import user2 from "../assets/img/avatar2.jpg";

const feedbacks = [
  {
    id: 1,
    name: "Trung Hiếu",
    role: "Nhân viên văn phòng",
    avatar: user1,
    message: (
      <>
        Tôi thường xuyên phải di chuyển để gặp khách hàng, việc tự lái xe khá
        mệt mỏi. Từ khi biết đến{" "}
        <a
          href="https://taxidienangiang.info.vn"
          className="feedback-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          taxidienangiang.info.vn
        </a>
        , tôi không còn lo nghĩ về việc di chuyển nữa. Tài xế nhiệt tình, xe
        chạy êm, đúng giờ, rất hài lòng!
      </>
    ),
  },
  {
    id: 2,
    name: "Minh Nhật",
    role: "Chủ cửa hàng",
    avatar: user2,
    message: (
      <>
        Mỗi lần đi công tác xa, tôi luôn chọn{" "}
        <a
          href="https://taxidienangiang.info.vn"
          className="feedback-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          taxidienangiang.info.vn
        </a>
        . Dịch vụ nhanh chóng, tài xế lái xe an toàn, giá cả hợp lý. Chỉ cần lên
        xe, tôi có thể nghỉ ngơi mà không phải lo lắng gì!
      </>
    ),
  },
];

const CustomerFeedbackSection = () => {
  return (
    <div className="customer-feedback-section">
      <div className="title-wrapper">
        <div className="line"></div>
        <h2 className="section-title">Ý KIẾN KHÁCH HÀNG</h2>
        <div className="line"></div>
      </div>
      <div className="feedback-container">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="feedback-card"
          >
            <img
              src={feedback.avatar}
              alt={feedback.name}
              className="avatar"
            />
            <div className="feedback-content">
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="star-icon"
                  />
                ))}
              </div>
              <p className="message">"{feedback.message}"</p>
              <p className="name">
                {feedback.name} / <span>{feedback.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedbackSection;
