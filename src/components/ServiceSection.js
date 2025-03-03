import React from "react";
import { motion } from "framer-motion";
import service1 from "../assets/img/taxi-du-lich.png";
import service2 from "../assets/img/taxi-duong-dai.png";
import service3 from "../assets/img/taxi-hop-dong.png";
import service4 from "../assets/img/taxi-du-lich-longxuyen.png";
import "../assets/css/ServiceSection.css"; // Import file CSS

const services = [
  { name: "TAXI ĐI GẦN", img: service1 },
  { name: "TAXI ĐI XA", img: service2 },
  { name: "TAXI HỢP ĐỒNG", img: service3 },
  { name: "TAXI DU LỊCH", img: service4 },
];

const ServiceSection = ({ phoneNumber }) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="service-section">
      <div>
        <p className="service-phone">0913519096</p>
        <h3 className="service-title ">DỊCH VỤ TAXI CỦA CHÚNG TÔI</h3>
        <div className="service-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
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
