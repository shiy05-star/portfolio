
import React from 'react'
import "./Hero1Style.css";
import video from "../assets/video.mp4"


const Hero1 = () => {
  return (

    <>
       <video src={video} autoPlay muted loop class="video" />
    <div className="hero-overlay">
        <h3>
            welcome!.....<br/>
           <span>TO MY WEBSITE....</span>
        </h3>
        <p>
          <h4>About React-Developer</h4>
             Table of Contents
              <li> HTML + CSS</li>
              <li> JSX</li>
              <li> JavaScript Fundamentals + ES6 S</li>
              <li>GIT node</li>
              <li> npm</li>
        </p>
        <p>
        <span>What is React JS? </span><br />
        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
       It is maintained by Facebook (now Meta) and a community of individual developers and companies. 
       React.js is used to develop Single-Page Applications (SPAs).
        Single-Page Applications are where all the web processing happens at the Client’s end in basic Client-Server model architecture, 
        so we can consider it as Client-Side Rendering

        </p>
              
          


    </div>
    </>
  )
}

export default Hero1