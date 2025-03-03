import React, { useState } from "react";
import "../assets/css/CustomButton.css";

const CustomButton = ({
  text,
  color = "blue",
  textColor = "#fff",
  hoverTextColor = "#fff",
  shape = "rectangle",
  outline = false,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Màu nền chính và màu hover
  const baseColor = outline ? "transparent" : color;
  const hoverColor = outline ? color : darkenColor(color, 15);

  // Màu chữ
  const baseTextColor = outline ? color : textColor;
  const hoverText = isHovered ? hoverTextColor : baseTextColor;

  // Xử lý hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      className={`custom-button ${shape} ${outline ? "outline" : ""}`}
      style={{
        backgroundColor: isHovered ? hoverColor : baseColor,
        borderColor: color,
        color: hoverText,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Hàm làm tối màu (để tạo hiệu ứng hover đậm hơn)
const darkenColor = (color, percent) => {
  let num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    r = (num >> 16) - amt,
    g = ((num >> 8) & 0x00ff) - amt,
    b = (num & 0x0000ff) - amt;

  return `#${(
    0x1000000 +
    (r < 0 ? 0 : r) * 0x10000 +
    (g < 0 ? 0 : g) * 0x100 +
    (b < 0 ? 0 : b)
  )
    .toString(16)
    .slice(1)}`;
};

export default CustomButton;
