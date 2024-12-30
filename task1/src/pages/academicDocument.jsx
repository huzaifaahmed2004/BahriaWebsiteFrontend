import React, { useState } from 'react';
import Sidebar from '../component/layout/sidebar.jsx'; // Sidebar for navigation
import Header2 from '../component/layout/header2.jsx'; // Header with logo and logout
import '../style/pages/academicDocument.scss'; // SCSS for styling

const AcademicDocument = () => {
  const [sscMarksheet, setSscMarksheet] = useState(null);
  const [fscMarksheet, setFscMarksheet] = useState(null);
  const [cnicForm, setCnicForm] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the backend)
    console.log('SSC Marksheet:', sscMarksheet);
    console.log('FSC Marksheet:', fscMarksheet);
    console.log('CNIC Form:', cnicForm);
  };

  return (
    <div className="academic-document-page">
      <Header2 />
      <div className="content">
        <Sidebar />
        <div className="form-container">
          <h2>Academic Documents</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="sscMarksheet">SSC Marksheet</label>
              <input
                type="file"
                id="sscMarksheet"
                accept=".pdf,.jpg,.png"
                onChange={(e) => handleFileChange(e, setSscMarksheet)}
              />
              {sscMarksheet && <p>{sscMarksheet.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="fscMarksheet">FSC Marksheet</label>
              <input
                type="file"
                id="fscMarksheet"
                accept=".pdf,.jpg,.png"
                onChange={(e) => handleFileChange(e, setFscMarksheet)}
              />
              {fscMarksheet && <p>{fscMarksheet.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="cnicForm">CNIC Form</label>
              <input
                type="file"
                id="cnicForm"
                accept=".pdf,.jpg,.png"
                onChange={(e) => handleFileChange(e, setCnicForm)}
              />
              {cnicForm && <p>{cnicForm.name}</p>}
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcademicDocument;
