import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use 'Routes' instead of 'Switch'

import Home from './pages/home.jsx';  // Path to your Home page component
import AboutUs from './component/Pages/aboutUs.jsx';  // Path to your AboutUs page component
import Login from './pages/login.jsx';  // Path to your Login page component
import Register from './pages/register.jsx';
import Navbar from './component/layout/sidebar.jsx';
import Info from './pages/Info.jsx';
import ApplyForProgram from '../src/pages/applyForProgram.jsx';
import AcademicDocument from './pages/academicDocument.jsx';
import AdmitSlip from './pages/AdmitSlip.jsx';
import ChallanForm from './pages/ChallanForm.jsx';

const App = () => {

  return (
   <Router>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/info" element={<Info />} />
        <Route path="/admitSlip" element={<AdmitSlip />} />
        <Route path="/academicDoc" element={<AcademicDocument />} />
        <Route path="/applyForProgram" element={<ApplyForProgram />} />
        
        <Route path="/challanForm" element={<ChallanForm />} />
        <Route path="/login" element={<Login />} /> {/* Ensure this is present */}
        
        
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
