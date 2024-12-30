import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/pages/register.scss'; // Import SCSS for styling
import Header1 from '../component/layout/header.jsx';  // Keep the path as you provided (but remember .scss is for styling)
import Footer from '../component/layout/footer.jsx';  // Keep the path as you provided (but remember .scss is for styling)


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentType, setStudentType] = useState('national'); // Default to 'national'
  const navigate = useNavigate();

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registered with', name, email, studentType);
    // Navigate to the home page or a different page after successful registration
    navigate('/home');
  };

  return (
    <><Header1/>
    <div className="register-container">
      <div className="register-content">
        <h2>Create an Account</h2>

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentType">Student Type</label>
            <select
              id="studentType"
              value={studentType}
              onChange={(e) => setStudentType(e.target.value)}
              required
            >
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
          </div>

          <button type="submit" className="submit-btn" onClick={() => navigate('/info')}>Submit</button>
        </form>

        <div className="already-account">
          <span>Already have an account? </span>
          <button className="login-btn" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
      </div><Footer/>
      </>
  );
};

export default RegisterPage;
