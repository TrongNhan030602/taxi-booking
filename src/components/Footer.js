import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      Copyright {currentYear} ©
      <a
        href="https://taxidienangiang.info.vn"
        className="footer-brand mx-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        taxidienangiang.info.vn
      </a>
    </footer>
  );
};

export default Footer;
