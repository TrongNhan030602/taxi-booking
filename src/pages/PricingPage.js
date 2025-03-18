import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../assets/css/pricing/pricingPage.css";

const pricingData = [
  { label: "Giá mở cửa", price: "10.000đ" },
  { label: "XE 4 chỗ (dưới 20km)", price: "13.000đ/km" },
  { label: "XE 4 chỗ (trên 20km)", price: "11.000đ/km" },
  { label: "XE 4 chỗ (hợp đồng trên 100km)", price: "9.000đ/km" },
  { label: "XE 7 chỗ (dưới 20km)", price: "15.000đ/km" },
  { label: "XE 7 chỗ (trên 20km)", price: "13.000đ/km" },
  { label: "XE 7 chỗ (hợp đồng trên 100km)", price: "9.000đ/km" },
  { label: "Xe 29 - 45 chỗ, du lịch, tham quan", price: "Gọi 055 959 6767" },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const getPhoneNumber = (price) => {
  if (price.startsWith("Gọi")) {
    return price.replace("Gọi ", "").trim();
  }
  return null;
};

const PricingPage = () => {
  return (
    <div className="pricing-container">
      {/* Tiêu đề */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="pricing-title"
      >
        🚖 Bảng giá dịch vụ taxi
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pricing-description"
      >
        Giá cước minh bạch, phục vụ tận tâm – Di chuyển an toàn, tiết kiệm và
        tiện lợi.
      </motion.p>

      {/* Bảng giá */}
      <div className="pricing-grid">
        {pricingData.map((item, index) => {
          const phoneNumber = getPhoneNumber(item.price);

          return (
            <motion.div
              key={index}
              className="pricing-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ cursor: phoneNumber ? "pointer" : "default" }}
            >
              {phoneNumber ? (
                <a
                  href={`tel:${phoneNumber}`}
                  className="pricing-link"
                >
                  <span className="pricing-label">{item.label}</span>
                  <span className="pricing-value">{item.price}</span>
                </a>
              ) : (
                <>
                  <span className="pricing-label">{item.label}</span>
                  <span className="pricing-value">{item.price}</span>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Slogan */}
      <div className="pricing-highlight">
        <TypeAnimation
          sequence={[
            "⚡ Taxi điện An Giang – Tiết kiệm, tiện lợi & thân thiện!",
            2500,
            "🚖 Taxi điện An Giang – An toàn, nhanh chóng, phục vụ tận tâm!",
            2500,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="pricing-slogan"
        />
      </div>

      {/* Call-to-action */}
      <motion.a
        href="tel:0559596767"
        className="pricing-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Gọi ngay ☎ 055 959 6767
      </motion.a>
    </div>
  );
};

export default PricingPage;
