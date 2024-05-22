import { Form, Link,} from "react-router-dom";
import "./FooterStyle.css";
import React, {useState} from 'react'


const Footer = () => {

      return (
    <div className="footer">
       <div className="content">
          <h3> COMPANY NAME</h3>
             <div className="details">
                 <ul className= "sub-details" >SERVICES
                     <li>
                       <div className="footer-items">
                        <a href="/" className="footer-items" data-aa-title="tracking home" target="blank">Home</a>

                       </div>
                     </li>
                     <li>
                       <div className="footer-items">
                        <a href="/about" className="footer-items" data-aa-title="tracking about" target="blank">About</a>

                       </div>
                     </li>
                     <li>
                       <div className="footer-items">
                        <a href="/contact" className="footer-items" data-aa-title="tracking contact" target="blank">Contact</a>

                       </div>
                     </li>
                     <li>
                       <div className="footer-items">
                        <a href="/service" className="footer-items" data-aa-title="tracking service" target="blank">Service</a>

                       </div>
                     </li>
                    
                  </ul>
     
             </div>
             <div className="details">
                  <ul className="sub-details">SERVICES
                    <li>App-Design</li>
                    <li>Web-Design</li>
                    <li>logo-Design</li>
                    <li>Banner-Design</li>
                  </ul>
             </div>
             <div className="details">
                  <ul className="sub-details">COURSES
                    <li>HTML-CSS</li>
                    <li>Javascript</li>
                    <li>Phtotography</li>
                    <li>Photoshop</li>
                  </ul>
             </div>
             <div className="input-box">
                <h3>SUBSCRIBE</h3>
                <label className="form">EMAIL</label>
                <input type="text"></input>
                <div className="btn">
                  <button className="btn-btn">SUBMIT</button>
                  
                </div>
                

              </div>
              
        </div>
    </div>
  )
}


export default Footer