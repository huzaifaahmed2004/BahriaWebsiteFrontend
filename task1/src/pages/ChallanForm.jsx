import React from 'react';

import Sidebar from '../component/layout/sidebar.jsx'; // Sidebar for navigation
import Header2 from '../component/layout/header2.jsx'; // Header with logo and logout
import '../style/pages/challanForm.scss'; // Adjust the path to match your folder structure

const ChallanForm = () => {

  // Set the static details for the form
  const programDetails = {
    programName: 'BSE', // Example program name
    programFee: '20,000 PKR', // Example fee
    lastDate: '2024-12-31', // Example last date
  };

  // Function to handle the "Generate and Print" button
  const handleGenerateChallan = () => {
    // Logic to generate or print the challan (this can be a print functionality or navigating to another page)
    console.log('Generating challan...');
    window.print(); // This will open the print dialog
  };

  return (
      <div className="challan-form-container">
          <Header2 />
          <Sidebar />
      <h2>Program Challan Form</h2>
      
      <div className="challan-info">
        <div className="challan-item">
          <span className="label">Program Name:</span>
          <span className="value">{programDetails.programName}</span>
        </div>
        
        <div className="challan-item">
          <span className="label">Program Fee:</span>
          <span className="value">{programDetails.programFee}</span>
        </div>
        
        <div className="challan-item">
          <span className="label">Last Date:</span>
          <span className="value">{programDetails.lastDate}</span>
        </div>
      </div>

      <button className="generate-btn" onClick={handleGenerateChallan}>Generate and Print Challan</button>
    </div>
  );
};

export default ChallanForm;
