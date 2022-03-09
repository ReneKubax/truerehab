import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import img1 from "../../images/servicios.jpeg"


 function Services() {
  return (
      <div>
      <img src={img1} alt="" style={{width: '100%'}}></img>
    <Footer />
      </div>
  )
}

export default Services;