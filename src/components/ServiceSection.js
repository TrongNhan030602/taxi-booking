import React from "react";
import { motion } from "framer-motion";
import service1 from "../assets/img/icon taxi-01.png";
import service2 from "../assets/img/icon taxi-02.png";
import service3 from "../assets/img/icon taxi-03.png";
import service4 from "../assets/img/icon taxi-04.png";
import "../assets/css/ServiceSection.css";

const services = [
  { name: "TAXI ĐI GẦN", img: service1 },
  { name: "TAXI ĐI XA", img: service2 },
  { name: "TAXI HỢP ĐỒNG", img: service3 },
  { name: "TAXI DU LỊCH", img: service4 },
];

// Hàm kiểm tra và làm sạch số điện thoại
const sanitizePhoneNumber = (phone) => {
  return phone.replace(/[^0-9+]/g, "");
};

const ServiceSection = ({ phoneNumber }) => {
  const handleCall = () => {
    const safePhoneNumber = sanitizePhoneNumber(phoneNumber);
    if (safePhoneNumber) {
      window.location.href = `tel:${safePhoneNumber}`;
    }
  };

  return (
    <div className="service-section">
      <div>
        <p className="service-phone">0559.59.67.67</p>
        <h3 className="service-title ">DỊCH VỤ TAXI CỦA CHÚNG TÔI</h3>
        <div className="service-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <img
                  src={service.img}
                  alt={service.name}
                  className="service-img"
                  onClick={handleCall}
                />
                <p className="service-name">{service.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
