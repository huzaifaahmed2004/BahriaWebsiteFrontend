import React from 'react'
import Banner from '../component/Pages/banner';
import Header from '../component/layout/header.jsx';  // Keep the path as you provided (but remember .scss is for styling)
import Footer from '../component/layout/footer.jsx';  // Keep the path as you provided (but remember .scss is for styling)
const Home = () => {
  
  return (
   <>
     <Header/>
      <Banner/>
     
      <Footer/>
   </>
   
  )
}

export default Home
