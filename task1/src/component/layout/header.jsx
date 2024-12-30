import React from 'react';
import '../../style/layout/header.scss';  // Assuming this is the correct path for styles

const Header = () => {
  return (
    <div className="header-main">
      <div className="logo-div">
        <img 
          src={require('../../component/Images/BahriaLogo.png')} 
          alt="Logo" 
          className="logo-img"
        />
        <span className="university-name">Bahria University</span>
      </div>
      <div className="btns-div">
        <button className="header-btn">
          <a href="/home">Home</a>
        </button>
        <button className="header-btn">
          <a href="/aboutUs">About</a>
        </button>
        <button className="header-btn">
          <a href="/login">Apply Now</a> {/* Updated button text and route */}
        </button>
      </div>
    </div>
  );
};

export default Header;
