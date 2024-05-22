import "./LoginSign.css";

import React from 'react'
import {  FaLock, FaMailBulk, FaUser } from 'react-icons/fa'

const LoginSign = () => {
  return (
    <div className='login'>
        
        
        <div className='inputs'>
        <div className='text'>
          <h1>Sign Up</h1>
        </div>
        <div className='input'>
            <FaUser size={18} style={{color:'black' }}/>
          <input type='text' />

        </div>
        <div className='input'>
          <FaMailBulk size={18} style={{color:'black', }}/>
          <input type='email' />

        </div>
        <div className='input'>
            <FaLock size={18} style={{color:'black' }}/>
            <input type='password' />

        </div>
        <div className="forget-password">
            <h3>Lost Password<span> click here</span></h3>
          </div>
        <div className="submit">
             <button>SUBMIT</button>
        </div>

          

      </div>
          
            
     


    </div>
  )
}

export default LoginSign