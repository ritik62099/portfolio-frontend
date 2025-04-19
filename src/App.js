import React from 'react'
import { BrowserRouter as Router,  Routes } from "react-router-dom";
import Navbar from './components/navbar'

import Footer from './public/footer'

const App = () => {
  return (
    <>
      
     
    
    
     <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */} 
      </Routes>
     <Footer/>
    </Router>
     </>
  )
}

export default App
