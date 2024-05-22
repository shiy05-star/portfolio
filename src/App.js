
import React from 'react';
//import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';

import { Routes, Route} from 'react-router';

function App() {
  return (
    <>
      <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/about" element={<About />} />
          <Route path= "/contact" element={<Contact />} />
          <Route path= "/service" element={<Service />} />
          
      </Routes>
    
    </>
  );
}

export default App;
