import React from 'react';
import 'D:/Projects/react projects/task1/task1/src/style/pages/about/aboutUs.scss';  // Assuming you have an SCSS for styling
import Header from '../../component/layout/header.jsx';  // Keep the path as you provided (but remember .scss is for styling)
import Footer from '../../component/layout/footer.jsx';  // Keep the path as you provided (but remember .scss is for styling)
const AboutUs = () => {
  return (
    <><Header/>
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>About Bahria University</h1>
        <p>
          Bahria University is one of the premier institutions in Pakistan, offering world-class education 
          and research opportunities in a diverse range of fields. Our university aims to provide an academic 
          environment that fosters critical thinking, creativity, and innovation, ensuring that students are 
          equipped with the skills necessary to succeed in the modern world.
        </p>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to nurture students into skilled professionals who will contribute significantly 
            to society, industry, and research, while upholding the highest standards of education and integrity.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be recognized as a global leader in higher education, renowned for our innovation, research, 
            and commitment to producing leaders who will shape the future of the world.
          </p>
        </div>

        <div className="core-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity and Transparency</li>
            <li>Excellence and Innovation</li>
            <li>Respect and Diversity</li>
            <li>Social Responsibility</li>
          </ul>
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
};

export default AboutUs;
