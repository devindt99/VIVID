import React from 'react';
import './Header.scss'; // Import CSS file for header styles
import logo from '../../assets/icons/logo.png';
const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" />
      <nav className="header__nav">
        <a href="/" className="header__link">Home</a>
        <a href="/about" className="header__link">About</a>
        <a href="/contact" className="header__link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
