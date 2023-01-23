import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Ux from './routes/Ux';
import Developer from './routes/Developer';


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ux" element={<Ux />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
  );
}

export default App;
