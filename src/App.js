import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/HomePage/Home';
import About from './pages/About';
import Sandbox from "./pages/SandboxPages/Sandbox";

import Layout from "./components/Layouts/Layout";

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
