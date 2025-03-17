import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/taxi-directory/taxiDirectory.css";
import { motion } from "framer-motion";
import PhoneCallButton from "../components/PhoneCallButton";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const phoneNumber = "0559596767";

const taxiList = [
  {
    name: "Taxi điện An Giang",
    phone: "055 959 6767",
    area: "Long Xuyên và nội ô An Giang (Ngoài ra còn có khu vực quận huyện nội tỉnh và các khu vực tỉnh lân cận và dịch vụ tham quan, du lịch ngoài tỉnh)",
    price: "Chỉ từ 9.000đ/km",
  },
  {
    name: "Taxi Mai Linh",
    phone: "0296 3 56 56 56",
    area: "Rộng rãi trên toàn tỉnh An Giang, phục vụ cả khu vực nông thôn.",
    price: "Giá cước tương đối hợp lý, phù hợp với chất lượng dịch vụ.",
  },
  {
    name: "Taxi Sài Gòn",
    phone: "0296 3 87 87 87",
    area: "Phục vụ mọi huyện, thị xã của tỉnh An Giang.",
    price: "Giá cước cạnh tranh, thường xuyên có ưu đãi cho khách hàng quen.",
  },
  {
    name: "Taxi Vinasun",
    phone: "0296 3 83 83 83",
    area: "Có mặt tại hầu hết các đường phố lớn ở An Giang.",
    price: "Đang cập nhật",
  },
  {
    name: "Taxi Hoàng Anh",
    phone: "0296 3 98 98 98",
    area: "Chủ yếu hoạt động trong nội thành Long Xuyên và các vùng lân cận.",
    price: "Mức giá phải chăng, phù hợp với túi tiền của người dân.",
  },
  {
    name: "Taxi Lasta",
    phone: "0296 3 77 77 77",
    area: "Dịch vụ chủ yếu ở các khu vực du lịch nổi tiếng tại An Giang.",
    price: "Linh hoạt theo từng loại xe và nhu cầu khách hàng.",
  },
  {
    name: "Taxi Sao đỏ",
    phone: "0296 367 6767",
    area: "An Giang",
    price: "Đang cập nhật",
  },
];

const TaxiDirectoryPage = () => {
  return (
    <div className="taxi-directory-container">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="taxi-directory-title"
      >
        Danh bạ tổng đài taxi An Giang
      </motion.h1>
      <p className="taxi-directory-description">
        Nếu bạn đang tìm kiếm thông tin về Danh sách tổng đài taxi An Giang, bài
        viết này sẽ cung cấp cho bạn một cái nhìn tổng quan về các dịch vụ taxi
        tại khu vực An Giang.
      </p>
      <ul className="taxi-list">
        {taxiList.map((taxi, index) => (
          <li
            key={index}
            className={`taxi-item ${index === 0 ? "featured-taxi" : ""}`}
          >
            <h3>{taxi.name}</h3>
            <p>
              <FaPhoneAlt className="phone-icon" />
              <a
                href={`tel:${taxi.phone}`}
                className="taxi-phone"
              >
                {taxi.phone}
              </a>
            </p>
            <p>Phạm vi: {taxi.area}</p>
            <p>Giá: {taxi.price}</p>
          </li>
        ))}
      </ul>
      <div className="taxi-note">
        <h2>Lưu ý khi sử dụng dịch vụ taxi</h2>
        <p>Hãy gọi đúng số tổng đài và xác nhận giá cước trước khi lên xe.</p>
      </div>
      <div className="taxi-conclusion">
        <h2>Kết luận</h2>
        <p>
          Với Danh sách tổng đài taxi An Giang mà chúng tôi đã cung cấp, hy vọng
          bạn sẽ tìm được dịch vụ taxi phù hợp với nhu cầu của mình. Việc gọi
          taxi giờ đây trở nên dễ dàng hơn bao giờ hết với sự phát triển của
          công nghệ và mạng lưới dịch vụ tại An Giang. Bạn chỉ cần lưu lại số
          điện thoại của các hãng taxi trên và gọi khi cần thiết. Chúc bạn có
          những chuyến đi an toàn và thoải mái!
        </p>
      </div>
      <PhoneCallButton phoneNumber={phoneNumber} />
    </div>
  );
};

export default TaxiDirectoryPage;
