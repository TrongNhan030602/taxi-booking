import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import headerImage from "../assets/img/header.png";
import "../assets/css/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { path: "/", label: "Tổng quan" },
    { path: "/about", label: "Giới thiệu" },
    { path: "/taxi-directory", label: "Danh bạ taxi An Giang" },
    { path: "/services", label: "Dịch vụ taxi" },
    { path: "/pricing", label: "Bảng giá" },
    { path: "/privacy-policy", label: "Chính sách quyền riêng tư" },
  ];

  return (
    <header className="header">
      {/* Logo */}
      <Link
        to="/"
        className="header__logo"
      >
        <img
          src={headerImage}
          alt="Taxi Logo"
          className="header__logo-img"
        />
      </Link>

      {/* Toggle menu */}
      <div
        className="menu-toggle"
        ref={toggleRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </div>

      {/* Navbar */}
      <nav
        className={`navbar ${isOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <ul className="navbar__list">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className="navbar__item"
            >
              <Link
                to={item.path}
                className={`navbar__link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
