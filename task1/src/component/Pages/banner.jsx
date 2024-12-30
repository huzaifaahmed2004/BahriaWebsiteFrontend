import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../../style/pages/home/banner.scss';  // Correct path to SCSS
import BahriaBanner from '../Images/BahriaBanner.jpeg';  // Correct path to image

const Banner = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${BahriaBanner})` }}>
      <div className="banner-content">
        <h1>Welcome to Bahria University</h1>
        <p>Shape Your Future with Us</p>
        {/* Use Link to navigate to the login page */}
        <Link to="/login">
          <button className="banner-btn">Join Us Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
