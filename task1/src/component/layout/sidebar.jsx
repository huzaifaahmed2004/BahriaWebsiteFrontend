import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/layout/sidebar.scss'; // SCSS for styling

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    
    <div className="sidebar">
      <div className="sidebar-logo" >
        <img
          src={require('../Images/BahriaLogo2.png')} // Path to logo image
          alt="Bahria University Logo"
          className="logo"
        />
      </div>
      
      
      
      <div className="sidebar-links">
        <ul>
        <li onClick={() => navigate('/info')}>Personal Imformation</li>
          <li onClick={() => navigate('/applyForProgram')}>Apply for Program</li>
          <li onClick={() => navigate('/academicDoc')}>Academic Documents</li>
          <li onClick={() => navigate('/admitSlip')}>Admit Slip</li>
          <li onClick={() => navigate('/challanform')}>Fee Challan</li>
        </ul>
      </div>
      </div>
      
  );
};

export default Sidebar;
