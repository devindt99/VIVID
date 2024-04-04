import React from 'react';
import './Footer.scss'; // Import CSS file for footer styles
import ghlink from '../../assets/icons/ghwhite.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column"><a href="https://github.com/devindt99" className="footer__ghlink"><img src={ghlink} height="30px"/></a></div>
      <div className="footer__column">&copy; 2024 Dev.dev</div>

    </footer>
  );
};

export default Footer;
