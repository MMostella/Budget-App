import React from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo-image" />
      {/* <div className="logo">Logo</div> */}
      <Navigation />
    </div>
  );
};

export default Header;