import React from 'react';
import Sidebar from '../component/layout/sidebar.jsx'; // Sidebar for navigation
import Header2 from '../component/layout/header2.jsx'; // Header with logo and logout
import '../style/pages/admitSlip.scss'; // SCSS for styling

const AdmitSlip = () => {
  const handleGenerateAdmitSlip = () => {
    // Logic to generate the admit slip (you can add your dynamic data here)
    alert('Admit Slip Generated!');
  };

  const handlePrintAdmitSlip = () => {
    // Function to print the admit slip
    const content = document.getElementById('admit-slip');
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(content.innerHTML);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="admit-slip-page">
      <Header2 />
      <div className="content">
        <Sidebar />
        <div className="form-container">
          <h2>Admit Slip</h2>
          <div className="admit-slip-content" id="admit-slip">
            <div className="admit-slip-info">
              <p><strong>Name:</strong> Huzaifa Ahmed</p>
              <p><strong>Program:</strong>BSE</p>
              <p><strong>Registration Number:</strong> 81945</p>
              <p><strong>Exam Date:</strong> 2024-12-20</p>
            </div>
          </div>
          <button className="generate-btn" onClick={handleGenerateAdmitSlip}>
            Generate Admit Slip
          </button>
          <button className="print-btn" onClick={handlePrintAdmitSlip}>
            Print Admit Slip
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmitSlip;
