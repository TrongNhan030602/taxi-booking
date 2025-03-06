import React from "react";
import CustomButton from "./CustomButton";
import "../assets/css/PromotionSection.css";

const PromotionSection = ({ phoneNumber }) => {
  return (
    <div className="promotion-section">
      <div className="content">
        <h2>TAXI ĐIỆN AN GIANG - HÀNH TRÌNH XANH, DỊCH VỤ ĐỈNH CAO</h2>
        <p>
          Taxi Điện An Giang cam kết mang đến dịch vụ di chuyển nhanh chóng, an
          toàn và tiện lợi. Với đội ngũ tài xế chuyên nghiệp, xe sạch sẽ, hiện
          đại, chúng tôi luôn sẵn sàng phục vụ bạn mọi lúc, mọi nơi với chi phí
          tiết kiệm nhất. Lựa chọn chúng tôi - lựa chọn sự an tâm trên từng
          chặng đường!
        </p>
        <CustomButton
          text="Gọi Taxi Ngay"
          color="#ff0000"
          textColor="#fff"
          hoverTextColor="#fff"
          outline={false}
          shape="rounded-rectangle"
          onClick={() => (window.location.href = `tel:${phoneNumber}`)}
          className="promotion-button"
        />
      </div>
    </div>
  );
};

export default PromotionSection;
