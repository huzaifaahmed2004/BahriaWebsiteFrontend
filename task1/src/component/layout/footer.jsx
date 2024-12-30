import React from 'react';
import '../../style/layout/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bahria University</h3>
          <p>Empowering minds, shaping the future. Join us in a journey of excellence.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +92 300 1234567</li>
            <li>Email: info@bahria.edu.pk</li>
            <li>Address: Bahria University, Islamabad, Pakistan</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="">Admissions</a></li>
            <li><a href="">Programs</a></li>
            <li><a href="">Faculty</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/BahriaUniversity" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/BahriaUniversity" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/BahriaUniversity" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/school/bahria-university" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bahria University. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
