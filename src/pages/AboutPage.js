import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCar, FaRegClock } from "react-icons/fa";
import introImage from "../assets/img/about/gioi-thieu-taxi-dien.png";
import taxiImage from "../assets/img/about/taxi-an-giang.png";
import timeImage from "../assets/img/about/thoi-gian-hoat-dong.png";
import "../assets/css/about/About.css";
import PhoneCallButton from "../components/PhoneCallButton";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AboutPage = () => {
  const phoneNumber = "0559596767";
  return (
    <div className="about-container">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="about-title"
      >
        Taxi Điện An Giang
      </motion.h1>

      <p className="about-description">
        Trong bối cảnh xã hội hiện đại, việc di chuyển trở nên dễ dàng và thuận
        tiện hơn bao giờ hết nhờ vào sự phát triển của các dịch vụ taxi. Tại An
        Giang, một trong những dịch vụ taxi nổi bật là taxi điện, với nhiều ưu
        điểm vượt trội như tiết kiệm năng lượng, bảo vệ môi trường và mang lại
        trải nghiệm di chuyển an toàn cho khách hàng.
      </p>

      {/* Giới thiệu taxi điện */}
      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <img
          src={introImage}
          alt="Giới thiệu taxi điện"
          className="about-image"
        />
        <div className="about-text">
          <h2 className="about-heading">
            <FaLeaf /> Giới thiệu Taxi điện An Giang
          </h2>
          <p className="about-description">
            Taxi điện An Giang cung cấp đa dạng dịch vụ taxi với loại taxi 4
            chỗ, 7 chỗ tại An Giang. Quý khách lựa chọn di chuyển trong nội ô
            thành phố Long Xuyên, hoặc các khu vực tại An Giang và lân cận nên
            chọn Taxi điện An Giang là lựa chọn hợp lí.
          </p>
        </div>
      </motion.section>

      {/* Lợi ích taxi điện */}
      <motion.section
        className="about-section benefits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="about-text">
          <h2 className="about-heading">
            <FaCar /> Dịch vụ taxi điện An Giang mang trong mình sứ mệnh:
          </h2>
          <ul>
            <li>
              ♻️ Dịch vụ thân thiện với môi trường, hạn chế ô nhiễm môi trường
            </li>
            <li>
              💰 Chi phí vận hành thấp, giúp tiết kiệm chi phí cho khách hàng
            </li>
            <li>
              🚗 Thúc đẩy sự phát triển của dịch vụ xe điện – Xu hướng lĩnh vực
              ô tô hiện nay
            </li>
            <li>👨‍👩‍👧‍👦 Thích hợp cho cả việc di chuyển cá nhân và gia đình</li>
          </ul>
        </div>
        <img
          src={taxiImage}
          alt="Lợi ích taxi điện"
          className="about-image"
        />
      </motion.section>
      {/* Sự phát triển của taxi điện An Giang*/}
      <div className="text-section">
        <h2 className="about-heading">Sự phát triển của taxi điện An Giang</h2>
        <p className="about-description">
          Trong những năm gần đây, taxi điện đã dần trở thành xu hướng mới trong
          ngành giao thông. Nhiều công ty taxi ở An Giang đã đầu tư mạnh mẽ vào
          hệ thống xe điện, nhằm đáp ứng nhu cầu ngày càng cao của người dân.
        </p>
      </div>
      {/* Taxi điện An giang*/}
      <div className="text-section">
        <h2 className="about-heading">Taxi điện An giang</h2>
        <p className="about-description">
          Taxi điện An Giang cung cấp cho khách hàng sự thoải mái và tiện nghi
          trong mỗi chuyến đi. Mỗi chiếc xe đều được trang bị đầy đủ các tính
          năng hiện đại nhằm đáp ứng nhu cầu của hành khách.
        </p>
      </div>
      {/* Công nghệ hiện đại trên taxi điện*/}
      <div className="text-section">
        <h2 className="about-heading">Công nghệ hiện đại trên taxi điện</h2>
        <p className="about-description">
          Một trong những điểm nổi bật của taxi điện An Giang chính là việc áp
          dụng công nghệ hiện đại trong quản lý và điều hành.
        </p>
      </div>
      {/* Chất lượng phục vụ*/}
      <div className="text-section">
        <h2 className="about-heading">Chất lượng phục vụ</h2>
        <p className="about-description">
          Chất lượng phục vụ là yếu tố quyết định đến sự thành công của bất kỳ
          dịch vụ nào. Taxi điện An Giang luôn chú trọng đào tạo đội ngũ tài xế
          chuyên nghiệp và thân thiện. Các tài xế được hướng dẫn cách giao tiếp
          tốt với khách hàng, nắm rõ kỹ năng lái xe an toàn và am hiểu về địa
          bàn.
        </p>
        <p className="about-description">
          Sự tận tâm và chu đáo của tài xế sẽ góp phần tạo nên những trải nghiệm
          tích cực cho khách hàng. Ngoài ra, dịch vụ chăm sóc khách hàng cũng
          được nâng cao, với đường dây nóng (055 959 6767) luôn sẵn sàng hỗ trợ
          khi cần thiết.
        </p>
      </div>

      {/* Taxi An Giang */}
      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="about-text">
          <h2 className="about-heading">Taxi An Giang</h2>
          <p className="about-description">
            Không chỉ là dịch vụ taxi chuyển trong nội ô An Giang, mà Quý khách
            hoàn toàn có thể đặt trước xe để di chuyển liên tỉnh hoặc đặt xe
            phục vụ cho các hoạt động tham quan, vui chơi, giải trí ở nhiều nơi
            ngoài tỉnh.
          </p>
        </div>
        <img
          src={timeImage}
          alt="Thời gian hoạt động"
          className="about-image"
        />
      </motion.section>

      {/* Đa dạng loại hình dịch vụ*/}
      <div className="text-section">
        <h2 className="about-heading">Đa dạng loại hình dịch vụ</h2>
        <p className="about-description">
          Taxi An Giang không chỉ cung cấp dịch vụ taxi truyền thống mà còn có
          các loại hình dịch vụ khác như taxi sân bay, taxi đưa đón theo yêu
          cầu, du lịch… Mỗi loại hình dịch vụ đều có những ưu điểm riêng, phù
          hợp với nhu cầu của từng khách hàng.
        </p>
      </div>

      {/* Ưu điểm của taxi An Giang*/}
      <div className="text-section">
        <h2 className="about-heading">Ưu điểm của taxi An Giang</h2>
        <p className="about-description">
          Một trong những ưu điểm lớn của taxi An Giang là sự linh hoạt trong
          việc đặt xe. Khách hàng có thể gọi xe qua điện thoại, xe sẽ đón rước
          khách tận chỗ chỉ trong vòng 5 phút (tuỳ vào khu vực khách đặt xe).
          Điều này giúp tiết kiệm thời gian cho khách hàng và tạo sự thuận lợi
          tối đa.
        </p>
        <p className="about-description">
          Ngoài ra, taxi An Giang còn có đội ngũ tài xế dày dạn kinh nghiệm,
          hiểu rõ các tuyến đường và luôn đảm bảo an toàn cho hành khách. Điều
          này giúp họ tự tin hơn khi chọn taxi là phương tiện di chuyển.
        </p>
      </div>

      {/* Quy trình hoạt động của taxi An Giang*/}
      <div className="text-section">
        <h2 className="about-heading">Quy trình hoạt động của taxi An Giang</h2>
        <p className="about-description">
          Quy trình hoạt động của taxi An Giang được xây dựng một cách khoa học
          và bài bản. Khách hàng chỉ cần gọi điện trực tiếp qua hotline hoặc
          zalo, sẽ có nhân viên gọi lại để xác nhận cuộc hẹn và tài xế sẽ tiến
          hành đến đón.
        </p>
        <p className="about-description">
          Sau khi tài xế đến điểm đón, hành khách chỉ cần lên xe và bắt đầu hành
          trình. Giá cước sẽ được tính toán dựa trên quãng đường và thời gian di
          chuyển. Cuối cùng, khách hàng sẽ thanh toán và có thể để lại phản hồi
          về chất lượng dịch vụ.
        </p>
      </div>

      {/* Tổng đài Taxi điện An Giang */}
      <div className="text-section">
        <h2 className="about-heading">Tổng đài Taxi điện An Giang</h2>
        <p className="about-description">
          Quý khách có nhu cầu di chuyển quanh nội ô An Giang, vui lòng gọi Tổng
          đài taxi An Giang số:
          <a
            href="tel:0559596767"
            className="phone-link"
          >
            {" "}
            055 959 6767{" "}
          </a>
          hoặc nhắn qua Zalo để book taxi nhanh.
        </p>
      </div>

      {/* Thời gian hoạt động */}
      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <img
          src={timeImage}
          alt="Thời gian hoạt động"
          className="about-image"
        />
        <div className="about-text">
          <h2 className="about-heading">
            <FaRegClock /> Thời gian hoạt động Taxi điện An Giang
          </h2>
          <p className="about-description">
            Dịch vụ Taxi điện An Giang hoạt động <strong>24/7</strong>, kịp thời
            phục vụ nhu cầu đi lại, di chuyển của Quý khách hàng.
          </p>
          <p className="about-description">
            Bên cạnh đó, Quý khách mong muốn di chuyển ngoài tỉnh hoặc đi tham
            quan, du lịch cũng có thể đặt lịch trước để được phục vụ chu đáo.
          </p>
        </div>
      </motion.section>

      {/* Giá cước Taxi điện An Giang */}
      <div className="text-section">
        <h2 className="about-heading">Giá cước Taxi điện An Giang</h2>
        <ul className="fare-list">
          <li>
            🚖 <strong>Giá mở cửa:</strong> 10.000đ
          </li>
          <li>
            🚗 XE 4 chỗ: <strong>13.000đ/km</strong> (dưới 20km)
          </li>
          <li>
            🚗 XE 4 chỗ: <strong>11.000đ/km</strong> (trên 20km)
          </li>
          <li>
            🚗 XE 4 chỗ: <strong>9.000đ/km</strong> (hợp đồng trên 100km)
          </li>
          <li>
            🚙 XE 7 chỗ: <strong>15.000đ/km</strong> (dưới 20km)
          </li>
          <li>
            🚙 XE 7 chỗ: <strong>13.000đ/km</strong> (trên 20km)
          </li>
          <li>
            🚙 XE 7 chỗ: <strong>9.000đ/km</strong> (hợp đồng trên 100km)
          </li>
          <li>
            🚌 Xe 29 – 45 chỗ, tham quan, du lịch: <br />
            ☎️ Gọi tổng đài{" "}
            <a
              href="tel:0559596767"
              className="phone-link"
            >
              055 959 6767
            </a>{" "}
            để nhận báo giá.
          </li>
        </ul>
      </div>
      <PhoneCallButton phoneNumber={phoneNumber} />
    </div>
  );
};

export default AboutPage;
