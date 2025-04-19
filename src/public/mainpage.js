import React from "react";

import "../components/style/main.css";
import Ritik from '../images/ritik.jpg'
export default function Main() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="about-container">
      <div className="about-content">
        <h1>Hey, I’m Ritik Kumar</h1>
        <p>I design and develop modern websites and applications.</p>
        <p style={{fontSize:16}}>
          With expertise in both front-end and back-end technologies, I craft
          seamless, high-performance, and user-friendly digital experiences
          tailored to your needs.
        </p>
        <button className="about-btn">Learn More</button>
      </div>
      <div className="about-image">
        <img src={Ritik} alt="Ritik Kumar" />
      </div>
    </div>
    </>
  );
}
