import React from "react";
import headerImage from "../assets/img/header.png";

const Header = () => {
  return (
    <header className="header">
      <a
        href="/"
        className="header__link"
      >
        <img
          src={headerImage}
          alt="Taxi Logo"
          className="header__logo"
        />
      </a>
    </header>
  );
};

export default Header;
