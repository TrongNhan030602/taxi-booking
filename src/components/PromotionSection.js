import React from "react";
import CustomButton from "./CustomButton";
import "../assets/css/PromotionSection.css";

const PromotionSection = ({ phoneNumber }) => {
  return (
    <div className="promotion-section">
      <div className="content">
        <h2>TAXI LONG XUYÊN SIÊU RẺ</h2>
        <p>
          Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực dịch vụ Taxi Giá
          rẻ tại Long Xuyên. Với phương châm lấy chất lượng phục vụ làm kim chỉ
          nam để xây dựng và phát triển, chúng tôi luôn tự tin mang đến cho
          khách hàng sự hài lòng lớn nhất, niềm tin cao nhất với một chi phí
          tiết kiệm nhất.
        </p>
        <CustomButton
          text="GỌI TAXI NGAY"
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
