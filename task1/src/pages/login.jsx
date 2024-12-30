import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/pages/login.scss';  // Ensure correct SCSS import
import Header1 from '../component/layout/header.jsx';  // Keep the path as you provided (but remember .scss is for styling)
import Footer from '../component/layout/footer.jsx';  // Keep the path as you provided (but remember .scss is for styling)
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle your login logic here, e.g., checking email/password
    console.log('Login with', email, password);
    navigate('/info');  // Navigate to the info page after login
  };

  return (
    <>
       <Header1/>
    <div className="login-container">
     
      <div className="login-header">
        {/* <img
          src={require('../component/Images/BahriaLogo.png')} 
          alt="Bahria University Logo"
          className="login-logo"
          onClick={() => navigate('/home')} // Clicking logo redirects to home page
        /> */}
      </div>

      <div className="login-content">
        <h2>Login to Your Account</h2>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        
        <div className="other-options">
          <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
        </div>
        
      </div>
     
      </div>
      <Footer/>
      </>
  );
};

export default LoginPage;
