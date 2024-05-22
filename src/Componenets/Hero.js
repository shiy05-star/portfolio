import "./HeroStyle.css";


import React from 'react'
import HeroImg from "../assets/bgImg.jpg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-content">
            <img className="hero-img"
             src={HeroImg} alt="HeroImg" />

        </div>
        <div className="hero-text">
            <h1>
                HEY, I'M SHIVANI....
            </h1>
            <p>
                I'm react developer. I dsign and code responsive website that help business reach more customer and  look better online..
            </p>
            <div className="social">
             <a target=" blank" href="https://www.facebook.com" title="login to facebook">
                 <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
             </a>
              <a target=" blank" href="https://twitter.com/i/flow/login" title="login to twitter">

                 <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
              </a>
              <a target=" blank" href="https://www.linkedin.com/login/" title="login to linkedin">
                
                  <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
              </a>
            </div>

        </div>
        
    </div>
  )
}

export default Hero