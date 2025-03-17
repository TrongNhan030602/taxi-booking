import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../assets/css/services/servicesPage.css";
import taxiImage from "../assets/img/services/service.png"; // Hình chiếc xe

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const services = [
  { name: "Taxi 4 chỗ", description: "Dành cho khách lẻ hoặc nhóm nhỏ." },
  {
    name: "Taxi 7 chỗ",
    description: "Rộng rãi hơn, phù hợp gia đình hoặc nhóm bạn.",
  },
  {
    name: "Taxi 29 - 45 chỗ",
    description: "Phục vụ tham quan, du lịch, đi đường dài.",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="services-title"
      >
        Dịch vụ của Taxi điện An Giang
      </motion.h1>
      <p className="services-description">
        Quý khách có thể lựa chọn một trong các dịch vụ sau:
      </p>

      <div className="services-content">
        {/* Cột trái: Danh sách dịch vụ */}
        <div className="services-list">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="tel:0559596767"
              className="service-card-link"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Cột phải: Hình chiếc xe */}
        <motion.div
          className="taxi-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={taxiImage}
            alt="Taxi điện An Giang"
            className="taxi-image"
          />
        </motion.div>
      </div>

      {/* Thông tin tổng đài */}
      <div className="service-highlight">
        <h2>Tổng đài taxi điện An Giang</h2>
        <p className="highlight-phone">
          <FaPhoneAlt className="phone-icon" />
          <a href="tel:0559596767">055 959 6767</a>
        </p>
        <p className="highlight-text">
          Tài xế chuyên nghiệp, thân thiện, vui vẻ và tôn trọng sự riêng tư của
          khách hàng. Xe sạch sẽ, thơm tho và êm ái (đón khách tận chỗ).
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
