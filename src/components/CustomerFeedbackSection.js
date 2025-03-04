import React from "react";
import { FaStar } from "react-icons/fa";
import "../assets/css/CustomerFeedbackSection.css";
import user1 from "../assets/img/user1.jpg";
import user2 from "../assets/img/user2.jpg";

const feedbacks = [
  {
    id: 1,
    name: "Quốc Tỉnh",
    role: "Tự Do",
    avatar: user1,
    message: (
      <>
        Mỗi khi đi xa gặp gỡ khách hàng, ngại vấn đề lái xe cá nhân thì tôi lại
        book dịch vụ của{" "}
        <a
          href="https://taxidienangiang.info.vn"
          className="feedback-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          taxidienangiang.info.vn
        </a>
        . Ngồi sau tay lái của các bác tài ở đây tôi hoàn toàn an tâm và tin
        cậy.
      </>
    ),
  },
  {
    id: 2,
    name: "Lan Anh",
    role: "Kinh Doanh",
    avatar: user2,
    message: (
      <>
        Tôi thường xuyên đi gặp khách hàng ở xa, chạy xe máy thì khá mệt, nên
        tôi chọn{" "}
        <a
          href="https://taxidienangiang.info.vn"
          className="feedback-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          taxidienangiang.info.vn
        </a>
        , giá rẻ thoải mái, lên xe nhắm mắt là đến nơi cực kì khỏe, an toàn và
        rất tin cậy.
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
