import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Home from './routes/Home';
import About from './routes/About';


function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
