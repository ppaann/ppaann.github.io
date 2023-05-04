import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Home from './pages/Home';
import About from './pages/About';
import Sandbox from "./pages/Sandbox";

import Layout from "./Components/Layout";

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
