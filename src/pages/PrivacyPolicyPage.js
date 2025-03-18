import React from "react";
import { motion } from "framer-motion";
import "../assets/css/privacy/privacyPolicyPage.css";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="privacy-title"
      >
        Chính sách quyền riêng tư
      </motion.h1>

      <p className="privacy-intro">
        Taxi điện An Giang (“chúng tôi” hoặc “của chúng tôi”) coi trọng quyền
        riêng tư của bạn. Chúng tôi muốn bạn hiểu rõ thông tin chúng tôi thu
        thập, và cách chúng tôi sử dụng và chia sẻ nó. Đó là lý do tại sao chúng
        tôi khuyến khích đọc Chính sách Bảo mật của chúng tôi.
      </p>
      <p className="privacy-intro">
        Bằng cách sử dụng hoặc truy cập các trang web mà Chính sách Bảo mật này
        được đăng (“Trang web”) bằng bất kỳ cách nào, bao gồm bất kỳ tính năng
        hoặc dịch vụ nào như dịch vụ bảo hành hoặc hỗ trợ kỹ thuật truy cập
        thông qua các trang web (cùng với Trang web, các “Dịch vụ”), bạn chấp
        nhận và đồng ý với các thực tiễn và chính sách được đề cập trong Chính
        sách Bảo mật này. Chính sách Bảo mật này bao gồm trong đó các Điều khoản
        Sử dụng; cả hai tuyên bố này nên được đọc cùng nhau.
      </p>
      <p className="privacy-intro">
        Chính sách Bảo mật này có thể thay đổi từ thời gian này sang thời gian
        khác. Sự tiếp xúc tiếp tục của bạn với Dịch vụ của chúng tôi sau các sửa
        đổi đó cho thấy bạn chấp nhận và đồng ý với chúng, vì vậy vui lòng kiểm
        tra Chính sách Bảo mật định kỳ để cập nhật.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="privacy-content"
      >
        <div className="privacy-session">
          <h2 className="privacy-heading mt-2 ">
            DỮ LIỆU CÁ NHÂN CHÚNG TÔI THU THẬP
          </h2>
          <p className="privacy-description">
            Chúng tôi thu thập dữ liệu cá nhân để cung cấp Trang web của chúng
            tôi. Dữ liệu cá nhân mà chúng tôi thu thập có thể được bạn cung cấp
            tự do, nhận từ các bên khác, hoặc, trong trường hợp dữ liệu sử dụng,
            được thu thập tự động khi sử dụng Trang web của chúng tôi.
          </p>
        </div>

        <div className="privacy-session">
          <h2 className="privacy-heading">
            LÀM THẾ NÀO CHÚNG TÔI SỬ DỤNG DỮ LIỆU CÁ NHÂN CỦA BẠN VÀ CƠ SỞ PHÁP
            LÝ
          </h2>
          <p className="privacy-description">
            Chúng tôi sử dụng thông tin cá nhân của bạn để vận hành, cung cấp,
            phát triển và cải thiện các dịch vụ mà chúng tôi cung cấp. Các mục
            đích này bao gồm:
          </p>
          <ul className="privacy-list">
            <li>
              Mua và giao hàng các sản phẩm và dịch vụ. Chúng tôi sử dụng thông
              tin cá nhân của bạn để tiếp nhận và xử lý đơn đặt hàng, giao sản
              phẩm và dịch vụ, xử lý thanh toán và liên lạc với bạn về đơn đặt
              hàng và sản phẩm và dịch vụ.
            </li>
            <li>
              Cung cấp, khắc phục sự cố và cải thiện Dịch vụ của chúng tôi và
              cho phép các đối tác của chúng tôi cải thiện Sản phẩm. Chúng tôi
              sử dụng thông tin cá nhân của bạn để cung cấp tính năng, phân tích
              hiệu suất, sửa lỗi và cải thiện tính khả dụng và hiệu quả của Dịch
              vụ của chúng tôi và để cho phép các đối tác cải thiện Sản phẩm.
            </li>
            <li>
              Gợi ý và cá nhân hóa. Chúng tôi và các đối tác của chúng tôi sử
              dụng thông tin cá nhân của bạn để gợi ý các tính năng, sản phẩm và
              dịch vụ có thể phù hợp với bạn, xác định sở thích của bạn và cá
              nhân hóa trải nghiệm của bạn với Sản phẩm và Dịch vụ của chúng
              tôi.
            </li>
            <li>
              Lý do pháp lý. Trong một số trường hợp, chúng tôi thu thập và sử
              dụng thông tin cá nhân của bạn để tuân thủ các luật pháp áp dụng
              hoặc để thực thi các quyền pháp lý của chúng tôi. Ví dụ, chúng tôi
              thu thập từ người dùng Chương trình Đối tác thông tin về số điện
              tử xác nhận số thuế và thông tin tài khoản ngân hàng cho mục đích
              thuế.
            </li>
            <li>
              Liên lạc với bạn. Chúng tôi và các đối tác của chúng tôi có thể sử
              dụng thông tin cá nhân của bạn để liên lạc với bạn liên quan đến
              Sản phẩm và Dịch vụ của chúng tôi qua các kênh khác nhau (ví dụ,
              qua điện thoại, email, trò chuyện trực tuyến).
            </li>
            <li>
              Marketing và quảng cáo. Chúng tôi sử dụng thông tin cá nhân của
              bạn để hiển thị quảng cáo dựa trên sở thích cho các tính năng, sản
              phẩm và dịch vụ có thể phù hợp với bạn. Chúng tôi không sử dụng
              thông tin nhận diện trực tiếp của bạn để hiển thị quảng cáo dựa
              trên sở thích.
            </li>
            <li>
              Bảo mật, ngăn chặn gian lận và rủi ro tín dụng. Chúng tôi sử dụng
              thông tin cá nhân để ngăn chặn và phát hiện gian lận và lạm dụng
              và cho mục đích bảo mật, bao gồm bảo mật của khách hàng, đối tác
              và người khác.
            </li>
          </ul>

          <div className="privacy-note">
            <h2>Lưu ý </h2>
            <p>
              Lợi ích hợp pháp của chúng tôi bao gồm duy trì và quản lý Dịch vụ,
              cung cấp Dịch vụ cho bạn, đảm bảo tài khoản của bạn được bảo vệ
              đầy đủ cũng như tuân thủ mọi nghĩa vụ pháp lý hoặc quy định theo
              luật hiện hành.
            </p>
            <p>
              Chúng tôi sẽ xử lý dữ liệu cá nhân của bạn nhằm mục đích cung cấp
              Sản phẩm và Dịch vụ tuân thủ luật pháp hiện hành, đôi khi có thể
              được sửa đổi.
            </p>
          </div>
        </div>
        <div className="privacy-session">
          <h2 className="privacy-heading">
            CÁCH CHÚNG TÔI CHIA SẺ DỮ LIỆU CÁ NHÂN CỦA BẠN
          </h2>
          <p className="privacy-description">
            Chúng tôi có thể chia sẻ thông tin cá nhân của bạn bên trong và bên
            ngoài với các nhà cung cấp, cố vấn hoặc đối tác cho các mục đích
            kinh doanh hợp lý của chúng tôi, và chỉ dựa trên cơ sở cần thiết.
            Khi chia sẻ thông tin cá nhân, chúng tôi thực hiện các kiểm tra và
            kiểm soát thích hợp để xác nhận rằng thông tin có thể được chia sẻ
            tuân thủ các luật pháp áp dụng. Dưới đây là thông tin chi tiết hơn
            về ai chúng tôi có thể chia sẻ thông tin của bạn và trong những tình
            huống nào:
          </p>
          <h5 className="privacy-subheading">
            <strong>(1) Với Các Đối Tác Được Ủy Quyền Của Chúng Tôi:</strong>{" "}
            <span className="privacy-subheading-info">
              Chúng tôi có thể chia sẻ thông tin của bạn với các đối tác được ủy
              quyền của chúng tôi, bao gồm các công ty liên kết. Chúng tôi chia
              sẻ thông tin với các đối tác được ủy quyền của chúng tôi để:
            </span>
          </h5>
          <p className="privacy-description">
            Chúng tôi có thể chia sẻ thông tin của bạn với các đối tác được ủy
            quyền của chúng tôi, bao gồm các công ty liên kết. Chúng tôi chia sẻ
            thông tin với các đối tác được ủy quyền của chúng tôi để:
          </p>
          <ul className="privacy-list">
            <li>
              Quảng bá an toàn, bảo mật và tính chính xác và tuân thủ các luật
              pháp áp dụng.
            </li>
            <li>
              Cá nhân hóa các ưu đãi, quảng cáo và nội dung tài trợ hoặc thương
              mại khác.
            </li>
            <li>Phát triển và cung cấp các tính năng và tích hợp.</li>
            <li>Cung cấp dịch vụ khách hàng và hỗ trợ kỹ thuật.</li>
            <li>
              Hiểu cách khách hàng sử dụng và tương tác với Sản phẩm và Dịch vụ
              của chúng tôi.
            </li>
          </ul>

          <h5 className="privacy-subheading">
            <strong>(2) Nhà Cung Cấp Dịch Vụ:</strong>{" "}
            <span className="privacy-subheading-info">
              Để hỗ trợ trong các hoạt động kinh doanh của chúng tôi và cung cấp
              Dịch vụ của chúng tôi tốt hơn (ví dụ, cho các dịch vụ bảo trì phần
              mềm, công nghệ quảng cáo, dịch vụ email, dịch vụ giao hàng, dịch
              vụ quản lý cơ sở dữ liệu, phân tích web và các dịch vụ khác),
              chúng tôi có thể chia sẻ thông tin của bạn với các nhà cung cấp
              dịch vụ.
            </span>
          </h5>
          <h5 className="privacy-subheading">
            <strong>(3) Các Đơn Vị Khác Với Sự Đồng Ý Của Bạn</strong>{" "}
            <span className="privacy-subheading-info">
              Bạn có thể chọn tích hợp một số dịch vụ của bên thứ ba với Dịch vụ
              của chúng tôi. Bằng cách làm như vậy, bạn ủy quyền cho chúng tôi
              truyền thông tin cá nhân của bạn cho bên thứ ba khi bạn chọn tích
              hợp dịch vụ của họ với Dịch vụ của chúng tôi. Thông tin được thu
              thập bởi các dịch vụ của bên thứ ba đó phải tuân thủ các điều
              khoản và chính sách của riêng họ, tất cả những điều mà bạn nên xem
              xét và xem xét một cách cẩn thận.
            </span>
          </h5>
          <h5 className="privacy-subheading">
            <strong>(4) Tiếp Thị và Quảng Cáo:</strong>{" "}
            <span className="privacy-subheading-info">
              Chúng tôi có thể cung cấp thông tin người dùng cho các nhà cung
              cấp dịch vụ tiếp thị của bên thứ ba của chúng tôi cho các thực
              hành tiếp thị và / hoặc quảng cáo của chúng tôi. Chúng tôi cũng có
              thể tiết lộ thông tin không trực tiếp xác định bạn cho các nhà
              cung cấp dịch vụ quảng cáo và phân tích để phục vụ quảng cáo cá
              nhân hóa cho Dịch vụ và để hiểu rõ hơn về việc sử dụng Dịch vụ của
              bạn.
            </span>
          </h5>
          <h5 className="privacy-subheading">
            <strong>(5) Thay Đổi Kiểm Soát:</strong>{" "}
            <span className="privacy-subheading-info">
              Chúng tôi có thể bắt buộc phải chia sẻ thông tin của bạn như một
              phần của một sáp nhập, một việc mua lại, một việc bán tài sản, một
              việc mua tài sản, một việc tài trợ, một việc phá sản hoặc các thay
              đổi kiểm soát khác.
            </span>
          </h5>
          <h5 className="privacy-subheading">
            <strong>(6) Phản Hồi Yêu Cầu Pháp Lý: </strong>{" "}
            <span className="privacy-subheading-info">
              Chúng tôi có thể chia sẻ thông tin nơi chúng tôi tin rằng sự tiết
              lộ như vậy là cần thiết để (a) tuân thủ một luật pháp hoặc quy
              trình pháp lý áp dụng hoặc (b) đáp ứng các khiếu nại hoặc yêu cầu
              pháp lý thực sự hoặc tiềm ẩn, như lệnh tìm kiếm, quyết định của
              tòa án, lệnh sản xuất hoặc trát tài liệu, hoặc trát đơn kiện.
              Những yêu cầu này đến từ các bên thứ ba như bên chống kịch đoàn,
              cảnh sát, và các cơ quan chính phủ khác. Hoặc (c) nơi khác cần
              thiết để bảo vệ quyền lợi, quyền lợi và / hoặc tài sản của chúng
              tôi (bao gồm, nhưng không giới hạn, để thực hiện các thỏa thuận
              của chúng tôi), hoặc quyền lợi, quyền lợi và / hoặc tài sản của
              đại lý, nhà thầu độc lập, khách hàng và người khác.
            </span>
          </h5>
        </div>
        <div className="privacy-session">
          <h2 className="privacy-heading">QUYỀN RIÊNG TƯ CỦA TRẺ EM</h2>
          <p className="privacy-description">
            Các trang web của chúng tôi không được dành cho trẻ em theo định
            nghĩa được quy định bởi yêu cầu pháp lý địa phương, và chúng tôi
            không có ý định thu thập dữ liệu cá nhân từ trẻ em một cách có ý
            thức. Nếu bạn tin rằng chúng tôi có bất kỳ dữ liệu nào thuộc loại
            này, vui lòng thông báo cho chúng tôi ngay lập tức bằng cách sử dụng
            thông tin liên hệ được cung cấp trong phần "Liên hệ chúng tôi" và
            chúng tôi sẽ xóa nó càng sớm càng tốt.
          </p>
        </div>
        <div className="privacy-session">
          <h2 className="privacy-heading">
            CẬP NHẬT CHÍNH SÁCH BẢO MẬT CỦA CHÚNG TÔI
          </h2>
          <p className="privacy-description">
            Chính Sách Bảo Mật này có thể thay đổi theo thời gian, và chúng tôi
            có thể thông báo cho bạn bằng cách cập nhật ngày có hiệu lực của
            Chính Sách Bảo Mật ở trên. Nếu có những thay đổi quan trọng, chúng
            tôi sẽ đưa ra thông báo nổi bật trên trang web này hoặc thông báo
            qua các phương tiện khác. Chúng tôi khuyến khích tất cả người dùng
            định kỳ tham khảo Chính Sách Bảo Mật này để họ có thể hiểu rõ về các
            thực hành hiện tại của chúng tôi. Nếu bạn không đồng ý với các điều
            khoản của Chính Sách Bảo Mật được cập nhật, bạn phải ngừng sử dụng
            Dịch vụ. Việc tiếp tục sử dụng Dịch vụ sau bất kỳ thay đổi nào trong
            Chính Sách Bảo Mật đều có nghĩa là bạn đồng ý với Chính Sách Bảo Mật
            đã được cập nhật.
          </p>
        </div>
      </motion.div>
      <div className="contact-info">
        <h3>Thông tin liên hệ cập nhật về chính sách quyền riêng tư</h3>
        <p>
          <strong>Taxi điện An Giang</strong>
        </p>
        <p>
          Hotline: <a href="tel:0559596767">055 959 6767</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
