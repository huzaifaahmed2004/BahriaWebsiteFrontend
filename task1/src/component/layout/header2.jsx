import React from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import '../../style/layout/header2.scss';  // SCSS file for styling

const Header2 = () => {
  const navigate = useNavigate();

  // Function to handle logout (redirect to Home)
  const handleLogout = () => {
    navigate('/home');  // Redirect to Home page
  };

  return (
    <header className="header2">
      <div className="logo">
        <h1>Bahria University</h1>
      </div>
      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header2;
