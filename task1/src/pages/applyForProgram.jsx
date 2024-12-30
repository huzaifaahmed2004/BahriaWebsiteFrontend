import React, { useState } from 'react';
import Sidebar from '../component/layout/sidebar.jsx'; // Sidebar Component
import Header2 from '../component/layout/header2.jsx'; // Header Component
import '../style/pages/applyForProgram.scss'; // SCSS file for styling

const ApplyForProgram = () => {
    const [programName, setProgramName] = useState('');
    const [reason, setReason] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log("Program Name:", programName);
      console.log("Reason:", reason);
    };
  
    return (
      <div className="apply-for-program">
        <Header2 />
        <div className="content">
          <Sidebar />
          <div className="form-container">
            <h2>Apply for Program</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="programName">Program Name</label>
                <input
                  type="text"
                  id="programName"
                  value={programName}
                  onChange={(e) => setProgramName(e.target.value)}
                  placeholder="Enter the program name"
                  required
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="reason">Reason (Optional)</label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter your reason (optional)"
                />
              </div>
  
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ApplyForProgram;