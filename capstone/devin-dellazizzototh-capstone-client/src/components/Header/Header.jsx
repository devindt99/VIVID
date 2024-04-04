import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.scss'; // Import CSS file for header styles
import logo from '../../assets/icons/logo.png'; // Ensure the path to your logo is correct

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className="header__link">Experiences</Link> {/* Use Link components for navigation */}
        <Link to="/compare" className="header__link">Compare</Link>
        
      </nav>
    </header>
  );
};

export default Header;
